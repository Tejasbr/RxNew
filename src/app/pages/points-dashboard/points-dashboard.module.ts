import { NgModule } from '@angular/core';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
} from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { PointsDashboardComponent } from './points-dashboard.component';
// import { PointsDashboardBarAnimationComponent } from './points-dashboard-bar-animation.component';
// import { PointsDashboardBarComponent } from './points-dashboard-bar.component';

@NgModule({
    imports: [
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
        NgxEchartsModule,
        NgxChartsModule,
        ChartModule,
    ],
    declarations: [
        PointsDashboardComponent,
        // PointsDashboardBarAnimationComponent,
        // PointsDashboardBarComponent
    ],
})
export class PointsDashboardModule { }