import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { GeneralService } from 'app/services/general.service';
import { enumValues } from 'environments/configuration';

@Component({
  selector: 'ngx-discount-coupon',
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.scss']
})
export class DiscountCouponComponent implements OnInit {

  discountCouponForm: any;

  discFromDate = new FormControl(new Date());
  discToDate = new FormControl(new Date());
  minDateForDisc: any;

  applicableType: any = Object.values(enumValues.applicableType);

  // validation_messages = {
  //   'membershipType': [
  //     { type: 'required', message: 'Membership Type is required.' }
  //   ],
  //   'rewardType': [
  //     { type: 'required', message: 'Reward Type is required.' }
  //   ]
  // };

  constructor(
    protected ref: NbDialogRef<DiscountCouponComponent>,
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
    public GeneralService: GeneralService,
  ) { }

  ngOnInit(): void {

    this.discountCouponForm = this.FormBuilder.group({
      discountCouponName: ['', Validators.compose([Validators.required])],
      discount: ['', Validators.compose([Validators.required])],
      discountType: ['', Validators.compose([Validators.required])],
      discFromDate: ['', Validators.compose([Validators.required])],
      discToDate: ['', Validators.compose([Validators.required])],
    });

  }

  submit(name) {
    this.ref.close(name);
  }

  submitDiscountData(value) {
    console.log(value);
    if (value) {

      let status = 'success';
      let title = 'title is here, for success message';
      let content = 'content is here';
      console.log(status, title, content);
      this.GeneralService.toastMessage(status, title, content);
      this.clearDiscountCoupon();
      this.cancel();
    } else {

      let status = 'danger';
      let title = 'title is here, for Error message';
      let content = 'content is here';
      this.GeneralService.toastMessage(status, title, content);

    }
  }

  // Selection Clear function
  clearDiscountCoupon() {
    this.discountCouponForm.reset();
  }

  getStartDateForDiscount(ev) {
    // console.log(ev);
    this.minDateForDisc = this.dateService.addDay(ev, 1); // minDate is selected start date, which use to set the to date 1 day after start date.
  }

  cancel() {
    this.ref.close();
  }
}
