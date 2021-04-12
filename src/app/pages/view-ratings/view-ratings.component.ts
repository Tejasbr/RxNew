import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { OrdersService } from '../../services/orders.service';
import { enumValues } from '../../../environments/configuration';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.scss']
})
export class ViewRatingsComponent implements OnInit {

  minDate:any;
 
  OrdersByStatus: any;
  viewOrders: any = Object.values(enumValues.viewOrders);
  datePickerForm:any;


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
      id: {
        title: 'Sr. No.',
        type: 'number',
      },
      nhsNo: {
        title: 'Patient NHS No.',
        type: 'number',
      },
      patientName: {
        title: 'Patient Name',
        type: 'string',
      },
      location: {
        title: 'Location',
        type: 'string',
      },
      orderNo: {
        title: 'Order No.',
        type: 'number',
      },
      netAmount: {
        title: 'Order Amount',
        type: 'number',
      },
      orderDate: {
        title: 'Order Date',
        type: 'date',
      }
      
    },
  };
  

  constructor(protected dateService: NbDateService<Date>,
              private ordersService: OrdersService,
              public FormBuilder: FormBuilder,
              public router: Router
              ) {
    
  }
  ngOnInit(): void {
    // this.getOrder();
    this.dateForm();
  }

  // getOrder(){
  //   this.ordersService.getOrders.subscribe((res : any)=>
  //     {
  //       this.OrdersByStatus = res.data.list;
  //       console.log(this.OrdersByStatus);
  //     });
  // }

  dateForm(){
    this.datePickerForm = this.FormBuilder.group({
      formpicker: ['', Validators.compose([Validators.required])],
      topicker: ['', Validators.compose([Validators.required])],
    });
  }
  getStartDate(ev) {
    this.minDate = this.dateService.addDay(ev, 1); // minDate is selected start date, which use to set the to date 1 day after start date.
  }


  close(){
    this.router.navigate(['pages/dashboard']);
  }
}
