import { ChangeDetectionStrategy, Component, Inject, Injectable, OnInit, Optional, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NbDateService, NbSpinnerService, NbTabComponent, NbTabsetComponent, } from '@nebular/theme';
// import { AuthenticationService } from 'app/services/authentication.service';
// import { OrdersService } from 'app/services/orders.service';
// import { enumValues } from 'environments/configuration';
import * as moment from 'moment';
import { format } from 'date-fns'
import { EventEmitter } from 'events';
// import $ from "jquery";
import { map } from 'rxjs/operators';
import { __values } from 'tslib';
import { enumValues } from '../../../environments/configuration';
import { AuthenticationService } from '../../services/authentication.service';
import { OrdersService } from '../../services/orders.service';
import { userRights } from '../../../environments/commonUserRights';
// import 'bootstrap';
// import { NgbCalendar, NgbDateStruct, NgbDatepicker, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  ordersTab: any = Object.values(enumValues.ordersTab);
  ordersBtn: any = Object.values(enumValues.ordersBtn);
  allOrdersList: any = [];
  dateFromUser: any;
  loading = false;
  wholeResponseofOrder: any;
  orderCountsResponse: any;
  menuAccess: any = Object.values(userRights.menuAccess);
  onEvent: any = Object.values(userRights.onEvent);
  activeTab = "allOrders";

  acceptedOrders: any = [];
  pendingOrders: any = [];
  rejectedOrders: any = [];
  inTransistOrders: any = [];
  deliveredOrders: any = [];
  allOrders: any = [];

  dashboard: any = [];



  @ViewChild("tabset") tabsetEl: NbTabsetComponent;
  @ViewChild("addTab") addTabEl: NbTabComponent;

  

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router,
    public ordersService: OrdersService,
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
    public spinnerService: NbSpinnerService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
   
   this.userPermissionOnViewOrders();


    this.initDateConvert();
    this.orderCounts();
    let recievedOrderList: any = this.ordersService.getOrders;
    console.log(recievedOrderList);
    if (recievedOrderList != null) {
      this.allOrdersList = recievedOrderList.list;
    }
    

    if (!this.currentUser || this.currentUser == null) {
      this.router.navigate(['auth/login']);
    } else {
      return;
    }

  
  }

  initDateConvert() {
    let initDate = this.dateService.today();
    this.dateFromUser = moment(initDate).format('YYYY-MM-DD');
  }

  selectTab(ev) {
    // this.allOrdersList = [];

    this.loading = true;
    this.activeTab = ev; // ev is the selected tab status.
    this.getOrderList(ev);
  }

  getOrderList(ev) {

    // this.loading = true;
    if (ev === 'allOrders') {
      ev = '';
    }
    // console.log(ev);
    // console.log(this.wholeResponseofOrder);
    let data = {
      // PharmacistUserId: this.currentUser.data.userId,
      Status: ev,
      // PageIndex: this.wholeResponseofOrder ? this.wholeResponseofOrder.pageIndex : 0,
      // PageSize: 10, //must have to pass value, it should be > not zero(0).
      // RecordCount: this.wholeResponseofOrder ? this.wholeResponseofOrder.recordCount : 0,
      // RecordLimit: this.wholeResponseofOrder ? this.wholeResponseofOrder.recordLimit : 0,
      // OrderDate: this.dateFromUser
    }

    this.ordersService.getOrdersByStatus(data).then((responseData: any) => {
      console.log(responseData);
      if (responseData === null) {
        console.log('no content');
      }
      this.wholeResponseofOrder = responseData.data; // for Whole response to calculate the records.
      this.allOrdersList = responseData.data.list; // all orders list.

      // this.selectTab('');
      // console.log(this.allOrdersList);
      this.allOrdersList.forEach(e => {
        // console.log(e);
        // Condition for appending Pound(£) symbole.
        if (!e.netAmount) {
          e.netAmount = 'Exempted';
        }
        // else {
        //   e.netAmount = '£' + ' ' + e.netAmount; // for adding £ sign to amount values using loop.
        // }

        //For the orders in perticular status.
        // if (e.status === "Accepted") {
        //   // console.log('Accepted orders', e);
        //   this.acceptedOrders.push(e);
        // } else if (e.status === "Pending") {
        //   // console.log('Pending orders', e);
        //   this.pendingOrders.push(e);
        // } else if (e.status === "Rejected") {
        //   // console.log('Rejected orders', e);
        //   this.rejectedOrders.push(e);
        // } else if (e.status === "InTransist") {
        //   // console.log('intransist orders', e);
        //   this.inTransistOrders.push(e);
        // } else if (e.status === "Delivered") {
        //   // console.log('Delivered orders', e);
        //   this.deliveredOrders.push(e);
        // }
      });

      // console.log(this.acceptedOrders);
      // console.log(this.pendingOrders);
      // console.log(this.rejectedOrders);
      // console.log(this.inTransistOrders);
      // console.log(this.deliveredOrders);
      console.log(this.allOrdersList);
      // });
    });

    // this.allOrdersList.setPaging(data.PageIndex, data.PageSize, true);
    // });


    // if (pageCode != "" || pageCode != null) {
    //   // To Transfer the data with route without adding to URL.
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     OrderLabel: 'pageCode',
    //   }
    // };
    // console.log(navigationExtras);
    // this.router.navigate(['pages/orders-list'], navigationExtras);
    // }
  }

  moveToOrderList(statusCode) {
    console.log(statusCode);
    const navigationExtras: NavigationExtras = {
      state: {
        Status: statusCode,
      }
    };
    console.log(navigationExtras);
    // if (statusCode === "Pending") {
    this.router.navigate(['pages/orders-list'], navigationExtras);
    // }
    // else if (statusCode === "Rejected") {
    //   this.router.navigate(['pages/rejected'], navigationExtras);
    // }
    // else if (statusCode === "Accepted") {
    //   this.router.navigate(['pages/accepted'], navigationExtras);
    // }
    // else if (statusCode === "Delivered") {
    //   this.router.navigate(['pages/delivered'], navigationExtras);
    // }
    // else if (statusCode === "InTransist") {
    //   this.router.navigate(['pages/transit'], navigationExtras);
    // }
  }

  // getOrderList(pageCode) {
  //   this.ordersService.getOrdersByStatus(pageCode);
  //   if (pageCode === '' || pageCode === null || !pageCode) {
  //     const orderSubscription = this.ordersService.getOrders.subscribe({
  //       next(order) {
  //         console.log('Current Order: ', order);

  //         order.forEach(orderData => {
  //           console.log(orderData);
  //         });

  //         this.tableData = order;
  //         console.log(this.tableData);
  //       },
  //       error(msg) {
  //         console.log('Error Getting Location: ', msg);
  //       }
  //     });

  //     // Stop listening for location after 10 seconds
  //     setTimeout(() => {
  //       orderSubscription.unsubscribe();
  //     }, 10000);
  //   } else {
  //     // To Transfer the data with route without adding to URL.
  //     const navigationExtras: NavigationExtras = {
  //       state: {
  //         OrderLabel: 'pageCode',
  //       }
  //     };
  //     console.log(navigationExtras);
  //     this.router.navigate(['pages/orders-list'], navigationExtras);
  //   }
  // }

  orderCounts() {

    this.ordersService.ordersCountByStatus().subscribe(res => {
      console.log(res);
      this.orderCountsResponse = res.data;

      this.ordersTab.forEach(e => {

        this.ordersBtn.forEach(b => {

          res.data.filter(function (c) {
            if (c.status === "Pending") {
              if (e.name === "Pending Orders" && b.name === "Pending Orders") {
                e.count = c.count;
                b.count = c.count;
              }
            } else if (c.status === "Accepted") {
              if (e.name === "Accepted Orders" && b.name === "Accepted Orders") {
                e.count = c.count;
                b.count = c.count;
              }
            } else if (c.status === "Rejected") {
              if (e.name === "Rejected Orders" && b.name === "Rejected Orders") {
                e.count = c.count;
                b.count = c.count;
              }
            } else if (c.status === "InTransist") {
              if (e.name === "In Transit Orders" && b.name === "In Transit Orders") {
                e.count = c.count;
                b.count = c.count;
              }
            } else if (c.status === "Delivered") {
              if (e.name === "Delivered Orders" && b.name === "Delivered Orders") {
                e.count = c.count;
                b.count = c.count;
              }
            } else if (c.status === "All") {
              if (e.name === "Total Orders") {
                e.count = c.count;
              }
            }

          });

        });

      });

    });
    // console.log(this.ordersTab);
  }


  userPermissionOnViewOrders(){
    this.currentUser.data.userRoles.forEach(e1 => {
      this.menuAccess.forEach(e2 => {
        this.onEvent.forEach(e3 => {
          (e1.moduleDisplayName === e2.pharmaViewOrderDetails && e1.modulePermission === e2.viewPermission) ? e3.viewOrdersButton = false : 0;
        });
        
      });

    });
  }
  ngOnDestroy(): void {

  }
}
