import { Component, OnInit } from '@angular/core';
import { PATIENT_MENU_ITEMS } from './patient-page-menu';


@Component({
  selector: 'ngx-patientpage',
  template: `
  <router-outlet></router-outlet>
  
  `,
  // styleUrls: ['./patientpage.component.scss']
})


export class PatientpageComponent implements OnInit {

//   <ngx-one-column-layout>
//   <nb-menu [items]="menu2"></nb-menu>
//   <router-outlet></router-outlet>
// </ngx-one-column-layout>
  menu2 = PATIENT_MENU_ITEMS;
  constructor() { }

  ngOnInit(): void {

  }

}

