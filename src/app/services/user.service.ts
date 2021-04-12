import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { ResponseModel } from 'app/interfaces/response.model';
// import { User } from 'app/interfaces/user';
import { AuthenticationService } from './authentication.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  generalAPI: string = environment.generalAPI;

  constructor(
    public http: HttpClient,
    public AuthenticationService: AuthenticationService
  ) { }

  // // user login and get information
  // loginUser(data): Observable<ResponseModel> {
  //   return this.http.post(this.generalAPI + '/User/SignIn', JSON.stringify(data))
  //     .pipe(map((response: any) => response));
  // }

  getAll() {
    return this.http.get<User[]>(this.generalAPI + 'users');
  }

  register(user: User) {
    return this.http.post(this.generalAPI + 'users/register', user);
  }

  delete(id: number) {
    return this.http.delete(this.generalAPI + 'users/${id}');
  }
  ordersByStatus() {
    return this.http.get<any>(this.generalAPI + 'DashboardPhamacist/GetPharmacistOrders');
  }
}
