import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService, NbDialogRef, NbDialogService } from '@nebular/theme';
import { GeneralService } from 'app/services/general.service';
import { enumValues } from 'environments/configuration';

@Component({
  selector: 'ngx-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.scss']
})
export class CashbackComponent implements OnInit {

  cashbackForm: any;

  cashFromDate = new FormControl(new Date());
  cashToDate = new FormControl(new Date());
  minDateForCash: any;

  applicableType: any = Object.values(enumValues.applicableType);

  constructor(
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
    public GeneralService: GeneralService,
    protected ref: NbDialogRef<CashbackComponent>,
  ) { }

  ngOnInit(): void {

    this.cashbackForm = this.FormBuilder.group({
      cashbackCriteria: ['', Validators.compose([Validators.required])],
      cashback: ['', Validators.compose([Validators.required])],
      cashbackType: ['', Validators.compose([Validators.required])],
      cashFromDate: ['', Validators.compose([Validators.required])],
      cashToDate: ['', Validators.compose([Validators.required])],
    });
  }

  submitCashbackData(value) {
    console.log(value);
    if (value) {
      let status = 'success';
      let title = 'title is here, for success message';
      let content = 'content is here';
      console.log(status, title, content);
      this.GeneralService.toastMessage(status, title, content);
      this.clearCashback();
      this.cancel();
    } else {
      let status = 'danger';
      let title = 'title is here, for Error message';
      let content = 'content is here';
      this.GeneralService.toastMessage(status, title, content);

    }
  }

  getStartDateForCashback(ev) {
    // console.log(ev);
    this.minDateForCash = this.dateService.addDay(ev, 1);
  }

  clearCashback() {
    this.cashbackForm.reset();
  }

  cancel() {
    this.ref.close();
  }

}
