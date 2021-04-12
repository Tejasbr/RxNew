
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { RewardsDefinitionComponent } from './rewards-definition.component';
import { DiscountCouponComponent } from './discount-coupon/discount-coupon.component';
import { CashbackComponent } from './cashback/cashback.component';
import { ScratchCardComponent } from './scratch-card/scratch-card.component';

const IMPORTS = [
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
];
const DECLARATIONS = [
    RewardsDefinitionComponent,
    DiscountCouponComponent,
    CashbackComponent,
    ScratchCardComponent

];

@NgModule({
    imports: [
        ...IMPORTS
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class RewardsDefinitionModule { }