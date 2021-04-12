import { Component, OnInit } from '@angular/core';
import '@angular/compiler';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from 'app/@core/data/smart-table';
import { CompleterService } from '@akveo/ng2-completer';
import { NbDateService } from '@nebular/theme';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  submitted: boolean = false;

  minDate: any;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus" ></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Sr. No.',
        type: 'number',
      },
      firstName: {
        title: 'Membership Name',
        type: 'string',
      },
      lastName: {
        title: 'Membership Start Date',
        type: 'string',
      },
      username: {
        title: 'Membership End Date',
        type: 'string',
      },
      email: {
        title: 'Points Earned For Sign-Up',
        type: 'string',
      },
      age: {
        title: 'Membership Charges',
        type: 'number',
      },
      abc: {
        title: 'Membership Status',
        type: 'number',
      },
      def: {
        title: 'Minimum Points Balance',
        type: 'number',
      },
      geh: {
        title: 'Maximum Points Balance',
        type: 'number',
      },
      ijk: {
        title: 'Actions',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  membershipForm: any;

  constructor(
    public service: SmartTableData,
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
    // public completerService: CompleterService
  ) {
    const data = this.service.getData();
    this.source.load(data);
    // console.log(this.source);
  }

  ngOnInit(): void {

    this.membershipForm = this.FormBuilder.group({
      memberName: ['', Validators.compose([Validators.required])],
      formpicker: ['', Validators.compose([Validators.required])],
      topicker: ['', Validators.compose([Validators.required])],
      signUpEarnedPoints: ['', Validators.compose([Validators.required])],
      membershipCharge: ['', Validators.compose([Validators.required])],
      minPointBal: ['', Validators.compose([Validators.required])],
      maxPointBal: ['', Validators.compose([Validators.required])],
      membershipActive: ['', Validators.compose([Validators.required])],
    });

  }

  submitMemberData() {

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  getStartDate(ev) {
    this.minDate = this.dateService.addDay(ev, 1); // minDate is selected start date, which use to set the to date 1 day after start date.
  }

  // Selection Clear function
  clearSelection() {
    this.membershipForm.reset();
  }
}
