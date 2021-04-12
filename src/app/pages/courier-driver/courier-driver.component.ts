import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
// import { SmartTableData } from 'app/@core/data/smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
// import { enumValues } from 'environments/configuration';
import { enumValues } from '../../../environments/configuration';
import { LocalDataSource } from 'ng2-smart-table';
import * as moment from 'moment';
import { OrdersService } from '../../services/orders.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'ngx-courier-driver',
  templateUrl: './courier-driver.component.html',
  styleUrls: ['./courier-driver.component.scss']
})
export class CourierDriverComponent implements OnInit {

  
  currentUser: any;
  courierMaster:any;
  dateFromUser:any;
  // courierDriverMaster: any = Object.values(enumValues.courierDriverMaster);
  courierDriverMaster: any 
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      driverId: {
        title: 'Driver ID',
        type: 'number',
      },
      fName: {
        title: 'First Name',
        type: 'string',
      },
      emailId: {
        title: 'Email ID',
        type: 'email',
      },
      phoneNo: {
        title: 'Phone No',
        type: 'number',
      },
      vehicleRegNo: {
        title: 'Vehicle Reg No',
        type: 'number',
      },
      status: {
        title: 'Status',
        type: 'string',
      }
      
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
    public ordersService:OrdersService,
    public authenticationService:AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    const data = this.service.getData();
    this.source.load(data);
    console.log(this.source);
  }

  ngOnInit(): void {

    this.GetAllCourierData();
    this.courierMaster = this.FormBuilder.group({
      fullName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      passwordRe: ['', Validators.compose([Validators.required])],
      phoneNo: ['', Validators.compose([Validators.required])],
      LicenseNo: ['', Validators.compose([Validators.required])],
      vehRegNo: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
    });

    this.currentDate();
  }

  // Selection Clear function
  clearSelection() {
    this.courierMaster.reset();
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
  submitCourierData(courierMaster) {

    if (courierMaster.status === true) {
      courierMaster.status = 1;
    } else {
      courierMaster.status = 0;
    }
    console.log(courierMaster);

    let data = {
      Id: 0,
      Name: courierMaster.fullName,
      UserId: 0,
      PharmacistUserId: this.currentUser.data.userId,
      Email: courierMaster.email,
      ContactNo: courierMaster.phoneNo,
      DrivingLicenseNo: courierMaster.LicenseNo,
      VehicleRegistrationNo: courierMaster.vehRegNo,
      Password: courierMaster.password,
      IsActive: courierMaster.status,
      AddedBy: this.currentUser.data.userId,
      AddedOn: this.dateFromUser,
    }
    console.log(data);
    this.ordersService.courierMaster(data).subscribe(
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
      this.clearSelection();
  }

  GetAllCourierData(){
    let data = {

      PageIndex: 0,
      PageSize: 10,
      RecordCount: 17,
      RecordLimit: 10,
      CommonSearch: "",
      OrderBy: this.currentUser.data.userId
    }
    this.ordersService.GetAllCourierData(data).subscribe((res: any) => {
      console.log("all Courier data is:---->", res);
      this.courierDriverMaster = res.data.list;

    });
  }
}
