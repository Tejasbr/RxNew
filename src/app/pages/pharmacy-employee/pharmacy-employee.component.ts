import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
// import { SmartTableData } from 'app/@core/data/smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
// import { enumValues } from 'environments/configuration';
import { enumValues } from '../../../environments/configuration';
import { LocalDataSource } from 'ng2-smart-table';
import { OrdersService } from '../../services/orders.service';
// import moment from 'moment';
import * as moment from 'moment';
import { AuthenticationService } from '../../services/authentication.service';
import { userRights } from '../../../environments/commonUserRights';

@Component({
  selector: 'ngx-pharmacy-employee',
  templateUrl: './pharmacy-employee.component.html',
  styleUrls: ['./pharmacy-employee.component.scss']
})
export class PharmacyEmployeeComponent implements OnInit {

  ruleDefinitionForm: any;
  userTypes: any;
  pharmaMaster: any;
  dateFromUser: any;
  currentUser: any;
  pharmacyData: any;
  pharmacyMaster: any ;
  onEvent: any = Object.values(userRights.onEvent);
  menuAccess: any = Object.values(userRights.menuAccess);
  isHide: boolean = false;
  // pharmacyMaster: any = Object.values(enumValues.pharmacyMaster);
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      empId: {
        title: 'Employee Id',
        type: 'number',
      },
      fName: {
        title: 'First Name',
        type: 'string',
      },
      lName: {
        title: 'Last Name',
        type: 'string',
      },
      emailId: {
        title: 'Email ID',
        type: 'email',
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
    public ordersService: OrdersService,
    public authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    const data = this.service.getData();
    this.source.load(data);
    console.log(this.source);
  }

  ngOnInit(): void {

    this.userPermissionOnEvents();
    this.pharmaMaster = this.FormBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      passwordConf: ['', Validators.compose([Validators.required])],
      type: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]

    });

    this.GetAllPharmaData();
    this.getMediTypeDropDown();
    this.currentDate();
  }
  get f() { return this.pharmaMaster.controls; }
  // Selection Clear function
  clearSelection() {
    this.pharmaMaster.reset();
  }

  currentDate() {
    let initDate = this.dateService.today();
    // this.dateFromUser = moment(initDate).format('YYYY-MM-DD');
    this.dateFromUser = moment(initDate).format('YYYY-MM-DDTHH:mm:ss.SSSSZ');

  }
  getStartDate(ev) {
    console.log(ev);
    this.minDate = this.dateService.addDay(ev, 1); // minDate is selected start date, which use to set the to date 1 day after start date.
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }



  //---------------------------------------------- For DropDown List ------------------------------------------------------------- //

  getMediTypeDropDown() {
    this.ordersService.DisplayPharmacyMaster().subscribe((res: any) => {
      console.log(res);

      this.userTypes = res.data;
      console.log("Medicine DropDown Data is:--->", this.userTypes);
      // this.medicineTypes.forEach(el => {
      //   console.log(el);

      // });
    });
    console.log("mediData checked Is:--->", this.userTypes);
  }

  submitPharmaData(pharmaMaster) {

    if (pharmaMaster.status === true) {
      pharmaMaster.status = 1;
    } else {
      pharmaMaster.status = 0;
    }
    console.log(pharmaMaster);

    let data = {
      Id: 0,
      UserId: 0,
      PharmacistUserId: this.currentUser.data.userId,
      EmployeeId: pharmaMaster.id,
      FirstName: pharmaMaster.firstName,
      LastName: pharmaMaster.lastName,
      Email: pharmaMaster.email,
      Password: pharmaMaster.password,
      UserType: pharmaMaster.type,
      IsActive: pharmaMaster.status,
      AddedBy: this.currentUser.data.userId,
      AddedOn: this.dateFromUser,
    }
    console.log(data);
    this.ordersService.pharmacistMaster(data).subscribe(
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


  // ------------------------------------------------ For Edit Data On Icon --------------------------------------------------------------------------- //

  // editValue(event) {

    
  //   this.isHide = !this.isHide;

  //   this.pharmaMaster = this.FormBuilder.group({

  //     id: event.medicineId,
  //     mediname: event.medicineName,
  //     strength: event.strength,
  //     size: event.packSize,
  //     price: event.price,
  //     type: event.type,
  //     manufacturer: event.manufacturer,
  //     status: event.isActive
  //   });
  // }

  // edit() {
  //   console.log(this.medicineMaster.controls['id'].value);
    
  //   let medicineData = this.medicineMaster.controls;
  //   for (var val of this.medicineMasterLocal) {
  //     this.selectedID = val['id'];
  //     this.mediID = val['medicineId'];
  //     console.log(this.selectedID);
  //   }
  //   let values = {
  //     Id: this.selectedID,
  //     MedicineId: medicineData['id'].value,

  //     PharmacistUserId: this.currentUser.data.userId,
  //     MedicineName: medicineData['mediname'].value,

  //     Strength: medicineData['strength'].value,

  //     PackSize: medicineData['size'].value,

  //     Price: medicineData['price'].value,

  //     Type: medicineData['type'].value,

  //     Manufacturer: medicineData['manufacturer'].value,

  //     IsActive: medicineData['status'].value,

  //     AddedBy: this.currentUser.data.userId,
  //     AddedOn: this.dateFromUser,
  //     UpdatedBy: this.currentUser.data.userId,
  //     UpdatedOn: this.dateFromUser
  //   }

  //   this.ordersService.EditData(values).subscribe((res: any) => {


  //     console.log("Edited Data is:--->", res);
  //   });
  // }

  GetAllPharmaData(){
    let data = {

      PageIndex: 0,
      PageSize: 10,
      RecordCount: 17,
      RecordLimit: 10,
      CommonSearch: "",
      OrderBy: this.currentUser.data.userId
    }
    this.ordersService.GetAllPharmaData(data).subscribe((res: any) => {
      console.log("all Pharma data is:---->", res);
      this.pharmacyMaster = res.data.list;

    });
  }


  userPermissionOnEvents() {
    this.currentUser.data.userRoles.forEach(e1 => {
      this.menuAccess.forEach(e2 => {
        this.onEvent.forEach(e3 => {
          (e1.moduleDisplayName === e2.pharmaMasterUpload && e1.modulePermission === e2.viewPermissionUpload) ? e3.uploadButton = false :
            (e1.moduleDisplayName === e2.pharmaMasterDownload && e1.modulePermission === e2.viewPermissionDownload) ? e3.downloadButton = false :
              (e1.moduleDisplayName === e2.pharmaMasterEdit && e1.modulePermission === e2.viewPermission) ? e3.editButton = false :
                (e1.moduleDisplayName === e2.pharmaMasterEdit && e1.modulePermission === e2.viewPermissionEdit) ? e3.updateButton = false : 0;
        });

      });

    });
  }


}
