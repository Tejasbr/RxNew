import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbCardModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { CacheInterceptor } from './helpers/cache.interceptor';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// import { NgxPaginationModule } from 'ngx-pagination';
// import { NbDateFnsDateModule } from '@nebular/date-fns';
// import { NbMomentDateModule } from '@nebular/moment';

const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  // TablesRoutingModule,
  Ng2SmartTableModule,
  NbSidebarModule.forRoot(),
  NbMenuModule.forRoot(),
  NbDatepickerModule.forRoot(),
  NbDialogModule.forRoot(),
  NbWindowModule.forRoot(),
  NbToastrModule.forRoot(),
  NbChatModule.forRoot({
    messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
  }),
  CoreModule.forRoot(),
  ThemeModule.forRoot(),
  // NgxEchartsModule,
  NgxChartsModule,
  ChartModule,
  NbCardModule,
  NbEvaIconsModule,
  // NgxPaginationModule
  // NbDateFnsDateModule,
  // forRoot({ format: 'YYYY-MM-DD' })
  // NbMomentDateModule,

];

const DECLARATION = [
  AppComponent
];

const PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor, CacheInterceptor,
    multi: true
  }
];

const BOOTSTRAP = [
  AppComponent
];

@NgModule({
  declarations: [
    ...DECLARATION,
    
   
  ],
  imports: [
    ...IMPORTS,
    NgbModule
    // NbAuthModule.forRoot({

    /* un- comment his code to initialize with AUTH controller and auth API calling. */
    // strategies: [
    //   NbPasswordAuthStrategy.setup({
    //     name: 'email',

    //     token: {
    //       class: NbAuthJWTToken,

    //       key: 'token', // this parameter tells where to look for the token
    //     },

    //     baseEndpoint: 'Base End-point',
    //     login: {
    //       endpoint: '/login',
    //       redirect: {
    //         success: '/dashboard/',
    //         failure: null, // stay on the same page
    //       },
    //     },
    //     register: {
    //       endpoint: '/auth/sign-up',
    //     },
    //     logout: {
    //       endpoint: '/auth/sign-out',
    //     },
    //     requestPass: {
    //       endpoint: '/auth/request-pass',
    //     },
    //     resetPass: {
    //       endpoint: '/auth/reset-pass',
    //     },
    //   }),
    // ],
    // forms: {},
    // }),

    // NbAuthModule.forRoot({
    //   strategies: [
    //     NbDummyAuthStrategy.setup({
    //       name: 'oauth',
    //       // redirect: {
    //       //   success: '/welcome/', // welcome page path
    //       //   failure: null, // stay on the same page
    //       // },
    //     }),
    //   ],
    //   forms: {},
    // }),

  ],
  providers: [...PROVIDERS],
  bootstrap: [...BOOTSTRAP],
})
export class AppModule {
}