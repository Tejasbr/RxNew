import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { NbActionsModule, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
// import { ThemeModule } from 'app/@theme/theme.module';

import { ThemeModule } from '../../app/@theme/theme.module';
import { NgxAuthRoutingModule } from './auth-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const IMPORTS = [
  // ThemeModule,
  // CommonModule,
  // NbMenuModule,
  // AuthRoutingModule,
  ThemeModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  Ng2SmartTableModule,
  FormsModule,
  ReactiveFormsModule,

  CommonModule,
  FormsModule,
  RouterModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NgxAuthRoutingModule,

  NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
      }),
    ],
    forms: {},
  }),
  // NbInputModule,
  // NbCardModule,
  // NbButtonModule,
  // NbActionsModule,
  // NbUserModule,
  // NbCheckboxModule,
  // NbRadioModule,
  // NbDatepickerModule,
  // NbSelectModule,
  // NbIconModule,
  // Ng2SmartTableModule,
  // FormsModule,
  // ReactiveFormsModule,
];
const DECLARATIONS = [
  LoginComponent,
  RegisterComponent,
  ResetPasswordComponent,
  RequestPasswordComponent

];

@NgModule({
  imports: [
    ...IMPORTS
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ]
})
export class AuthModule { }


// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// import { NgxAuthRoutingModule } from './auth-routing.module';
// import { NbAuthModule } from '@nebular/auth';
// import {
//   NbAlertModule,
//   NbButtonModule,
//   NbCheckboxModule,
//   NbInputModule
// } from '@nebular/theme';


// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule,
//     NbAlertModule,
//     NbInputModule,
//     NbButtonModule,
//     NbCheckboxModule,
//     NgxAuthRoutingModule,

//     NbAuthModule,
//   ],
//   declarations: [
//     // ... here goes our new components
//   ],
// })
// export class NgxAuthModule {
// }