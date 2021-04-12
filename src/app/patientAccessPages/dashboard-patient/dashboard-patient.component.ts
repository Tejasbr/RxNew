import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard-patient',
  templateUrl: './dashboard-patient.component.html',
  styleUrls: ['./dashboard-patient.component.scss']
})
export class DashboardPatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detailPage(){
      this.router.navigate(['pages/dashboardPatient/patientDetailPage']);
  }
}
