/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { AuthenticationService } from './services/authentication.service';
import { userRights } from '../environments/commonUserRights';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  currentUser: any;
  userRoles: any = Object.values(userRights.userRoles);

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {

    this.currentUser = this.authenticationService.currentUserValue;
    // console.log('user exist', this.currentUser);
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    // this.userTypes.forEach(e1 => {

      // console.log(e1);
      if (!this.currentUser || this.currentUser == null)
      {
        this.router.navigate(['auth/login']);
      } 
    //   else if (this.currentUser.data['userType'] === e1.patient) 
    //   {
    //     this.router.navigate(['patientPages']);
    //     console.log("userType Patient Successfully LogedIn!!!");
    //   } 
      
    //   else if (this.currentUser.data['userType'] === e1.pharmacist) 
    //   {
    //     this.router.navigate(['pages']);
    //   }
      
    // });

  }
}
