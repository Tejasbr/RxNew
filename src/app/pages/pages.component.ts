import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { AuthenticationService } from '../services/authentication.service';
import { userRights } from '../../environments/commonUserRights';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
 
  <ngx-one-column-layout>
  <nb-menu [items]="menu"></nb-menu>
  <router-outlet></router-outlet>
</ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {


  currentUser: any;
  menu = MENU_ITEMS;
  menuAccess: any = Object.values(userRights.menuAccess);
  userRoles: any = Object.values(userRights.userRoles);
  menuNames: any = Object.values(userRights.menuNames);

  constructor(
    public authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }


  ngOnInit(): void {

    console.log("menuAccess Value:--->", this.menuAccess['viewPermission']);

    this.dynamicMenu();
    console.log("Current User Value:--->", this.currentUser);

    this.menuEventCheck();
    console.log("menu item is:---->", this.menu);

  }

  menuEventCheck() {
    this.menu.forEach(e => {
      if (e.link === "overview")

        console.log("All Menu Item is:---->", e);

    });
  }


  dynamicMenu() {
    this.userRoles.forEach(e1 => {

      this.currentUser.data.userRoles.forEach(e => {
        this.menuAccess.forEach(e2 => {
          this.menuNames.forEach(e3 => {

            if (this.currentUser.data['role'] === e1.pharmacist) {
              (e.moduleDisplayName === e2.pharmaDisplayDashboard && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaDashboardTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.pharmaDisplayOverview && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaOverviewTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.pharmaDisplayMedicine && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaMedicineTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.pharmaDisplayCourier && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaCourierTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.pharmaDisplayPharmacy && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaPharmacyTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.pharmaDisplayPatient && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaPatientTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.modulePharmaRating && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaRatingsTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.pharmaEditProfile && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaEditProfileTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.pharmaDisplayProfile && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaProfileTitle) {
                  e.hidden = false;
                }
              }) : 0;
            } else if (this.currentUser.data['role'] === e1.patient) {
              (e.moduleDisplayName === e2.patientDisplayDashboard && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {

                if (e.title === e3.patientDashboardTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.patientDisplayPlaceOrder && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaPlaceOrdTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.patientDisplayMyOrder && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaMyOrdTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.patientDisplayRateOrders && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.pharmaRateOrdTitle) {
                  e.hidden = false;
                }
              }) : 0;
            } else if (this.currentUser.data['role'] === e1.courier) {
              (e.moduleDisplayName === e2.courierDisplayDashboard && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {

                if (e.title === e3.courierDashboardTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.courierDisplayOrdProcessing && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.courierOrdProcessTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.courierDisplayOrdDelive && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.courierOrdDeliveTitle) {
                  e.hidden = false;
                }
              }) : (e.moduleDisplayName === e2.courierDisplayRatings && e.modulePermission === e2.viewPermission) ? this.menu.forEach(e => {
                if (e.title === e3.courierRatingsTitle) {
                  e.hidden = false;
                }
              }) : 0;
            }
          });
        });
      });
    });
  }
}
