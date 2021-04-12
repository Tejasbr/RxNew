import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FileUplDowlService {


  generalAPI: string = environment.generalAPI;
  currentUser: any;


  constructor(private http: HttpClient,
    public authenticationService: AuthenticationService) {
      this.currentUser = this.authenticationService.currentUserValue;
     }

  headerCall() {
    let authToken = this.currentUser.data.tokenNo;
    if (authToken !== null) {
      const headers = new HttpHeaders({
        'TOKENNO': authToken,
        'UserId': this.currentUser.data.userId.toString(),
        'LoginId': this.currentUser.data.loginId,
        'Content-Type': 'application/json',
      });
      return headers
    } else {
      return;
    }
  }

  // ------------------->>> [ On "Download Medicine List" Button ]
  DownloadMediList(data){
    return this.http.post<any>(this.generalAPI + 'Medicine/ExportMedicines', JSON.stringify(data) ,{ headers: this.headerCall() })
    .pipe(map(downloadList => {
      
      return downloadList;
    }));
  }

  // ------------------->>> [ On "Upload Medicine List" Button ]
  importFile(data){
    return this.http.post<any>(this.generalAPI + 'Medicine/ImportMedicines/' + this.currentUser.data.userId, JSON.stringify(data), { headers: this.headerCall() } )
    .pipe(map(uploadList => {
      
      return uploadList;
    }));
  }
}
