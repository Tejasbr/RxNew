import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
// import { SmartTableData } from 'app/@core/data/smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
// import { enumValues } from 'environments/configuration';
import { enumValues } from '../../../environments/configuration';
import { LocalDataSource } from 'ng2-smart-table';
import { OrdersService } from '../../services/orders.service';
import { AuthenticationService } from '../../services/authentication.service';

import * as moment from 'moment';

@Component({
  selector: 'ngx-patient-master',
  templateUrl: './patient-master.component.html',
  styleUrls: ['./patient-master.component.scss']
})
export class PatientMasterComponent implements OnInit {


  patientMaster: any;
  exemptionType:any;
  currentUser:any;
  dateFromUser:any;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
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
      srNo: {
        title: 'Sr. No.',
        type: 'number',
      },
      membershipName: {
        title: 'Membership Name',
        type: 'string',
      },
      ruleName: {
        title: 'Rule Name',
        type: 'string',
      },
      ruleStatus: {
        title: 'Rule Status',
        type: 'string',
      },
      ruleStartDate: {
        title: 'Rule Start Date',
        type: 'date',
      },
      ruleEndDate: {
        title: 'Rule End Date',
        type: 'date',
      },
      pointsAccumulationStart: {
        title: 'Points Accumulation Start',
        type: 'string',
      },
      pointsAccumulationPerTransaction: {
        pointsAccumulationPerTransactionAmount: {
          title: 'Amount(£)',
          type: 'number',
        },
        pointsAccumulationPerTransactionPoints: {
          title: 'Points',
          type: 'number',
        }
      },
      pointsRedemption: {
        pointsRedemptionPoints: {
          title: 'Points',
          type: 'number',
        },
        pointsRedemptionAmount: {
          title: 'Amount(£)',
          type: 'number',
        }
      },
    },
  };
  minDate: any;
  source: LocalDataSource = new LocalDataSource();

  membershipOptions: any = Object.values(enumValues.membershipOptions);
  pointsAccumulationStarts: any = Object.values(enumValues.pointsAccumulationStarts);

  constructor(
    public service: SmartTableData,
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
    public ordersService: OrdersService,
    public authenticationService:AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    const data = this.service.getData();
    this.source.load(data);
    console.log(this.source);
  }

  ngOnInit(): void {
    
    // this.getAllPatientData();

    this.patientMaster = this.FormBuilder.group({
      nhsNo: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      county: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      postCode: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phoneNo: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      allergies: ['', Validators.compose([Validators.required])],
      type: [[], Validators.compose([Validators.required])],
      smsNotification: ['', Validators.compose([Validators.required])],
      emailNotification: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
     
    });

    this.getExemptionDropDown();
    this.currentDate();
  }
  get f() { return this.patientMaster.controls; }
  // Selection Clear function
  clearSelection() {
    this.patientMaster.reset();
  }

  getStartDate(ev) {
    console.log(ev);
    this.minDate = this.dateService.addDay(ev, 1); // minDate is selected start date, which use to set the to date 1 day after start date.
  }

  currentDate() {
    let initDate = this.dateService.today();
    // this.dateFromUser = moment(initDate).format('YYYY-MM-DD');
    this.dateFromUser = moment(initDate).format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
    
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  getExemptionDropDown() {
    this.ordersService.DisplayPatientMasterDropDown().subscribe((res: any) => {
     

      this.exemptionType = res.data;
      console.log("Exemption Type is:--->", this.exemptionType);
      // this.medicineTypes.forEach(el => {
      //   console.log(el);

      // });
    });

  }

  submitPatientData(patientMaster) {

    if (patientMaster.status === true && patientMaster.smsNotification === true && patientMaster.emailNotification === true) {
      patientMaster.status = 1;
      patientMaster.smsNotification = 1;
      patientMaster.emailNotification = 1;
    } else {
      patientMaster.status = 0;
      patientMaster.smsNotification = 0;
      patientMaster.emailNotification = 0;
    }
    
    patientMaster.dob = moment(patientMaster.dob).format('YYYY-MM-DDTHH:mm:ss.SSSSZ');

    let data = {
      Id: this.currentUser.data.userId,
      NHSNo: patientMaster.nhsNo,
      PharmacistUserId: this.currentUser.data.userId,
      FirstName: patientMaster.firstName,
      LastName: patientMaster.lastName,
      Address: patientMaster.address,
      City: patientMaster.city,
      Country: patientMaster.country,
      PostCode: patientMaster.postCode,
      Email: patientMaster.email,
      ContactNo: patientMaster.phoneNo,
      DateOfBirth: patientMaster.dob,
      Gender: patientMaster.gender,
      Allergies: patientMaster.allergies,
      ExemptionType: patientMaster.type,
      SMSNotification: patientMaster.smsNotification,
      EmailNotification: patientMaster.emailNotification,
      IsActive: patientMaster.status,
      AddedBy: this.currentUser.data.userId,
      AddedOn: this.dateFromUser,
      UserId: this.currentUser.data.userId
      
    }
    console.log(data);
    this.ordersService.patientMaster(data).subscribe(
      res => {
        console.log(res);
        if (!res.data) {

          let title = 'data has not been submitted.. Try Again!!!';
          console.log(title);
          return;
        } else {

          let title = 'data has been submitted Successfully!!!';
          console.log(title);

        }
      });
      // this.clearSelection();
  }

  // getAllPatientData()
  // {
  //   this.ordersService.GetAllPatientData().subscribe((res:any)=>{
  //       console.log("Patient data is:--->",res);
  //   });
  // }
}
