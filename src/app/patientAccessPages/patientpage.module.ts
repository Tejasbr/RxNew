import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientpageRoutingModule } from './patientpage-routing.module';
import { PatientpageComponent } from './patientpage.component';

import { PlaceOrderComponent } from './place-order/place-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NbMenuModule } from '@nebular/theme';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { RateYourOrderComponent } from './rate-your-order/rate-your-order.component';


const SCHEMAS = [CUSTOM_ELEMENTS_SCHEMA];
@NgModule({
  declarations: [
    PatientpageComponent,
    
  ],
  imports: [
    CommonModule,
    PatientpageRoutingModule,
    NbMenuModule
  ],
  schemas: [
    ...SCHEMAS
  ]
})
export class PatientpageModule { }
