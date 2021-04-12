import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService, NbDialogRef, NbDialogService } from '@nebular/theme';
import { SmartTableData } from 'app/@core/data/smart-table';
import { GeneralService } from 'app/services/general.service';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { enumValues } from 'environments/configuration';
import { CashbackComponent } from './cashback/cashback.component';
import { DiscountCouponComponent } from './discount-coupon/discount-coupon.component';
import { ScratchCardComponent } from './scratch-card/scratch-card.component';

@Component({
  selector: 'ngx-rewards-definition',
  templateUrl: './rewards-definition.component.html',
  styleUrls: ['./rewards-definition.component.scss']
})
export class RewardsDefinitionComponent implements OnInit {

  submitted: boolean = false;

  selectionForm: any;

  validation_messages = {
    'membershipType': [
      { type: 'required', message: 'Membership Type is required.' }
    ],
    'rewardType': [
      { type: 'required', message: 'Reward Type is required.' }
    ]
  };

  // names: string[] = [];

  selectOptions: any = Object.values(enumValues.selectOptions);
  membershipOptions: any = Object.values(enumValues.membershipOptions);

  constructor(
    public service: SmartTableData,
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
    public GeneralService: GeneralService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
    this.selectionForm = this.FormBuilder.group({
      membershipType: ['', Validators.compose([Validators.required])],
      rewardType: [[], Validators.compose([Validators.required])],
    });

  }

  /* popup open functions */
  openDialog(component) {
    this.dialogService.open(component);
    // .onClose.subscribe(name => name && this.names.push(name)); // if response required on this page
  }

  /* Submit selection function */
  submitSelectionData(value) {
    console.log(value);
    if (value) {
      value.rewardType.forEach(rt => {
        console.log(rt);
        if (rt.name === 'Reward Type') {
          this.openDialog(DiscountCouponComponent);
        }
        if (rt.name === 'Cashback') {
          this.openDialog(CashbackComponent);
        }
        if (rt.name === 'Unclock scratch card') {
          this.openDialog(ScratchCardComponent);
        }
      });

    } else {

      let status = 'danger';
      let title = 'title is here, for Error message';
      let content = 'content is here';
      this.GeneralService.toastMessage(status, title, content);

    }
  }

  // Selection Clear function
  clearSelection() {
    this.selectionForm.controls.rewardType.setValue([]); // due to multiple value selection need to do this for clear data from selected.
    this.selectionForm.reset();
  }

}