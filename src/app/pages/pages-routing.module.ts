import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { MembershipComponent } from './membership/membership.component';
import { RuleDefinitionComponent } from './rule-definition/rule-definition.component';
import { PointsDashboardComponent } from './points-dashboard/points-dashboard.component';
import { RewardsDefinitionComponent } from './rewards-definition/rewards-definition.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OverviewComponent } from './overview/overview.component';
import { MedicineMasterComponent } from './medicine-master/medicine-master.component';
import { PharmacyEmployeeComponent } from './pharmacy-employee/pharmacy-employee.component';
import { CourierDriverComponent } from './courier-driver/courier-driver.component';
import { PatientMasterComponent } from './patient-master/patient-master.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderDetailComponent } from './orders-list/order-detail/order-detail.component';
import { PatientpageComponent } from '../patientAccessPages/patientpage.component';
import { DashboardPatientComponent } from '../patientAccessPages/dashboard-patient/dashboard-patient.component';
import { PlaceOrderComponent } from '../patientAccessPages/place-order/place-order.component';
import { MyOrdersComponent } from '../patientAccessPages/my-orders/my-orders.component';
import { DetailedPageComponent } from '../patientAccessPages/detailed-page/detailed-page.component';
import { RateYourOrderComponent } from '../patientAccessPages/rate-your-order/rate-your-order.component';
import { DashboardCourierComponent } from '../courierAccessPages/dashboard-courier/dashboard-courier.component';
import { OrderProcessingComponent } from '../courierAccessPages/order-processing/order-processing.component';
import { OrderDeliveryComponent } from '../courierAccessPages/order-delivery/order-delivery.component';
import { CourierViewRatingsComponent } from '../courierAccessPages/courier-view-ratings/courier-view-ratings.component';
// import { DashboardResolveService } from './dashboard/dashboard-resolve.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      
    },
    
    {
      path: 'orders-list',
      component: OrdersListComponent,
     
    },
    {
      path: 'orders-list/order-detail',
      component: OrderDetailComponent
    },
    {
      path: 'overview',
      component: OverviewComponent,
    },
    {
      path: 'medicine-master',
      component: MedicineMasterComponent,
    },
    {
      path: 'pharmacy-employee',
      component: PharmacyEmployeeComponent,
    },
    {
      path: 'courier-driver',
      component: CourierDriverComponent,
    },
    {
      path: 'patient-master',
      component: PatientMasterComponent,
    },
    {
      path: 'view-ratings',
      component: ViewRatingsComponent,
    },
    {
      path: 'user-create',
      component: UserCreateComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    
    
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },

    //------------------------------------------------------------- For Patient Access Role ---------------------------------------------------------//
    {
      path: 'dashboardPatient',
      component: DashboardPatientComponent,
    },
    {
      path: 'place-order',
      component: PlaceOrderComponent,
    },
    {
      path: 'my-order',
      component: MyOrdersComponent
    },
    {
      path: 'patient-rate-orders',
      component: RateYourOrderComponent
    },
    {
      path: 'dashboardPatient/patientDetailPage',
      component: DetailedPageComponent
    },

    //---------------------------------------------------------------- For Courier Access Role -----------------------------------------------------------------------//
    {
      path: 'dashboardCourier',
      component: DashboardCourierComponent,
    },
    {
      path: 'courier-order-processing',
      component: OrderProcessingComponent,
    },
    {
      path: 'courier-order-delivery',
      component: OrderDeliveryComponent
    },
    {
      path: 'patient-rate-orders',
      component: CourierViewRatingsComponent
    },
    // {
    //   path: 'dashboardPatient/patientDetailPage',
    //   component: DetailedPageComponent
    // },


    // {
    //   path: '',
    //   redirectTo: 'dashboardPatient',
    //   pathMatch: 'full',
    // },
    
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],

},
// {
// path: 'patient',
// loadChildren: () => import('../patientAccessPages/patientpage.module')
// .then(m => m.PatientpageModule),
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
