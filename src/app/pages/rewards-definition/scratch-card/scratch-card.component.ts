import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService, NbDialogRef, NbDialogService } from '@nebular/theme';
import { GeneralService } from 'app/services/general.service';
import { enumValues } from 'environments/configuration';

@Component({
  selector: 'ngx-scratch-card',
  templateUrl: './scratch-card.component.html',
  styleUrls: ['./scratch-card.component.scss']
})
export class ScratchCardComponent implements OnInit {

  submitted: boolean = false;

  scratchCardForm: any;

  minDateForScratch: any;
  scratchFromDate = new FormControl(new Date());
  scratchToDate = new FormControl(new Date());

  applicableType: any = Object.values(enumValues.applicableType);

  constructor(
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
    public GeneralService: GeneralService,
    protected ref: NbDialogRef<ScratchCardComponent>,
  ) { }

  ngOnInit(): void {

    this.scratchCardForm = this.FormBuilder.group({
      scratchCardType: ['', Validators.compose([Validators.required])],
      minTransactAmt: ['', Validators.compose([Validators.required])],
      maxTransactAmt: ['', Validators.compose([Validators.required])],
      scratchFromDate: ['', Validators.compose([Validators.required])],
      scratchToDate: ['', Validators.compose([Validators.required])],
    });

  }

  submitScratchCardData(value) {
    console.log(value);
    if (value) {
      // if (value.maxTransactAmt === '') {
      //   this.errorMessageForMaxTransactAmt = 'Maximum Transaction not be empty'
      // } else {

      // }
      if (value.maxTransactAmt && value.minTransactAmt) {
        console.log(value.maxTransactAmt > value.minTransactAmt);
        if (value.maxTransactAmt > value.minTransactAmt === false) {
          console.log('Please enter grater amount than minimu transaction');
          let status = 'danger';
          let title = 'title is here, for success message';
          let content = 'content is here';
          console.log(status, title, content);
          this.GeneralService.toastMessage(status, title, content);
        } else {
          let status = 'success';
          let title = 'title is here, for success message';
          let content = 'content is here';
          console.log(status, title, content);
          this.GeneralService.toastMessage(status, title, content);
          this.clearScratchCard();
          this.cancel();
        }
      }
    } else {

      let status = 'danger';
      let title = 'title is here, for Error message';
      let content = 'content is here';
      this.GeneralService.toastMessage(status, title, content);

    }
  }

  getStartDateForScratchCard(ev) {
    // console.log(ev);
    this.minDateForScratch = this.dateService.addDay(ev, 1);
  }

  clearScratchCard() {
    this.scratchCardForm.reset();
  }

  cancel() {
    this.ref.close();
  }

}
