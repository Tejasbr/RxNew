import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  NbActionsModule,
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbAccordionModule,
  NbToggleModule
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OverviewComponent } from './overview/overview.component';
import { MedicineMasterComponent } from './medicine-master/medicine-master.component';
import { PharmacyEmployeeComponent } from './pharmacy-employee/pharmacy-employee.component';
import { CourierDriverComponent } from './courier-driver/courier-driver.component';
import { PatientMasterComponent } from './patient-master/patient-master.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProfileComponent } from './profile/profile.component';
// import { RewardsDefinitionComponent } from './rewards-definition/rewards-definition.component';
// import { PointsDashboardComponent } from './points-dashboard/points-dashboard.component';
// import { RuleDefinitionComponent } from './rule-definition/rule-definition.component';
// import { MembershipComponent } from './membership/membership.component';
// import { NbDateFnsDateModule } from '@nebular/date-fns';
// import { NbMomentDateModule } from '@nebular/moment';
import { NgxSpinnerModule } from "ngx-spinner";
import { OrderDetailComponent } from './orders-list/order-detail/order-detail.component';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChartModule } from 'angular2-chartjs';
import { RejectedComponent } from './orders-list/rejected/rejected.component';
import { AcceptedComponent } from './orders-list/accepted/accepted.component';
import { TransitComponent } from './orders-list/transit/transit.component';
import { DelieveredComponent } from './orders-list/delievered/delievered.component';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { PatientpageRoutingModule } from '../patientAccessPages/patientpage-routing.module';
import { PatientpageModule } from '../patientAccessPages/patientpage.module';
import { DashboardPatientComponent } from '../patientAccessPages/dashboard-patient/dashboard-patient.component';
import { PlaceOrderComponent } from '../patientAccessPages/place-order/place-order.component';
import { MyOrdersComponent } from '../patientAccessPages/my-orders/my-orders.component';
import { DetailedPageComponent } from '../patientAccessPages/detailed-page/detailed-page.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardCourierComponent } from '../courierAccessPages/dashboard-courier/dashboard-courier.component';
import { OrderProcessingComponent } from '../courierAccessPages/order-processing/order-processing.component';
import { OrderDeliveryComponent } from '../courierAccessPages/order-delivery/order-delivery.component';
import { CourierViewRatingsComponent } from '../courierAccessPages/courier-view-ratings/courier-view-ratings.component';
import { RateYourOrderComponent } from '../patientAccessPages/rate-your-order/rate-your-order.component';


const IMPORTS = [
  ThemeModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  NbTabsetModule,
  NbBadgeModule,
  NbRouteTabsetModule,
  NbIconModule,
  NbSpinnerModule,
  NbEvaIconsModule,

  Ng2SmartTableModule,
  FormsModule,
  ReactiveFormsModule,
  // NbDateFnsDateModule,
  // NbMomentDateModule,

  PagesRoutingModule,
  NbMenuModule,
  MiscellaneousModule,
  NgxSpinnerModule,
  ChartModule,
  NbAccordionModule,
  NbToggleModule,
  ChartsModule,
  DataTablesModule,
  PatientpageModule,
  NgxDropzoneModule,
  NgbModule,

];
const DECLARATIONS = [
  PagesComponent,
  DashboardComponent,
  RejectedComponent,
  DelieveredComponent,
  OrderDetailComponent,
  AcceptedComponent,
  TransitComponent,
  PagesComponent,
  DashboardComponent,
  OrdersListComponent,
  OverviewComponent,
  MedicineMasterComponent,
  PharmacyEmployeeComponent,
  CourierDriverComponent,
  PatientMasterComponent,
  ViewRatingsComponent,
  UserCreateComponent,
  ProfileComponent,


  // ------------------------------------  For Patient Access Role  ------------------------------------------------------//
  DashboardPatientComponent,
  PlaceOrderComponent,
  MyOrdersComponent,
  DetailedPageComponent,
  RateYourOrderComponent,

  //--------------------------------------  For Courier Access Role ------------------------------------------------------//
  DashboardCourierComponent,
  OrderProcessingComponent,
  OrderDeliveryComponent,
  CourierViewRatingsComponent


  // RewardsDefinitionComponent,
  // PointsDashboardComponent,
  // RuleDefinitionComponent,
  // MembershipComponent,
];
const SCHEMAS = [CUSTOM_ELEMENTS_SCHEMA];

@NgModule({
  imports: [
    ...IMPORTS
  ],
  declarations: [
    ...DECLARATIONS,

  ],
  schemas: [
    ...SCHEMAS
  ]
})
export class PagesModule {
}
