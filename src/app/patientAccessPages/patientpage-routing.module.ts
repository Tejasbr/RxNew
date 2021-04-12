import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientpageComponent } from './patientpage.component';

import { PlaceOrderComponent } from './place-order/place-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [{
  path: '',
  component: PatientpageComponent,
  // children: [
  //   {
  //     path: 'dashboardPatient',
  //     component: DashboardComponent,
  //   },
  //   {
  //     path: 'place-order',
  //     component: PlaceOrderComponent,
  //   },
  //   {
  //     path: 'my-order',
  //     component: MyOrdersComponent
  //   },
  //   {
  //     path: '',
  //     redirectTo: 'dashboardPatient',
  //     pathMatch: 'full',
  //   },
  // ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientpageRoutingModule { }
