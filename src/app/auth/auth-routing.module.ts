import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NbAuthComponent } from '@nebular/auth';

const routes: Routes = [{
    path: '',
    component: NbAuthComponent,
    children: [
        {
            path: 'login',
            component: LoginComponent,
        },

        // loadChildren: './auth/auth.module#NgxAuthModule'
        // {
        //     path: 'rule-definition',
        //     component: RuleDefinitionComponent,
        // },
        // {
        //     path: 'points-dashboard',
        //     component: PointsDashboardComponent,
        // },
        // {
        //     path: 'rewards-definition',
        //     component: RewardsDefinitionComponent,
        // },
        // {
        //     path: 'auth',
        //     loadChildren: () => import('./auth/auth.module')
        //         .then(m => m.AuthModule),
        // },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NgxAuthRoutingModule {
    
}


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// export const routes: Routes = [
//     // .. here goes our components routes
// ];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule],
// })
// export class NgxAuthRoutingModule {
// }