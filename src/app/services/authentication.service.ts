import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { ResponseModel } from 'app/interfaces/response.model';
import { User } from '../../app/interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: any;

  generalAPI: string = environment.generalAPI;

  constructor(
    private http: HttpClient,
    public router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    console.log(this.currentUserSubject.asObservable());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  headerCall() {
    // let originPath = '172.16.0.132:9196'
    const headers = new HttpHeaders({
      // 'Origin': originPath,
      'Content-Type': 'application/json',
    });
    console.log(headers);
    return headers
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(data) {
    return this.http.post<any>(this.generalAPI + 'User/SignIn', JSON.stringify(data), { headers: this.headerCall() })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    // localStorage.removeItem('currentUser');
    this.clearAllLocalVariables();
    this.currentUserSubject.next(null);
    console.log('Logout Clicked');
    this.router.navigate(['auth/login']);
  }

  clearAllLocalVariables() {
  
    // localStorage.removeItem('currentUser');
    
    this.currentUser = '';
    localStorage.clear();

  }
}
