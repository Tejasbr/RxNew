import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import { GeneralService } from 'app/services/general.service';
// import { OrdersService } from 'app/services/orders.service';
import { map } from 'rxjs/operators';
import { OrdersService } from '../../services/orders.service';
import { GeneralService } from '../../services/general.service';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

@Component({
  selector: 'ngx-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  OrdersByStatus: any;
  selectedOrderNumber: any;
  statusByOrder:any;


  constructor(
    public activatedRoute: ActivatedRoute,
    public ordersService: OrdersService,
    public router: Router,
    public GeneralService: GeneralService,
    // private wowService: NgwWowService
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      Status: any,
    };
    this.statusByOrder = state.Status;
    console.log(state);
    if (state === undefined) {
      this.router.navigate(['/dashboard']);
    } else {
      this.getOrdersBasedOnStatus(state);
    }

  }

  ngOnInit(): void { }

  getOrdersBasedOnStatus(state) {
    console.log(state);
    this.ordersService.getOrdersByStatus(state).then((responseData: any) => {
      // console.log(responseData);
      this.OrdersByStatus = responseData.data.list;
    });
  }

  onOrderSelect(event) {
    console.log(event.target.value);
    this.selectedOrderNumber = event.target.value;
  }

  MoveToOrderDetail() {
    if (this.selectedOrderNumber) {
      this.ordersService.GetByOrderNo(this.selectedOrderNumber).subscribe((res: any) => {
        console.log(res);

        if (!res) {
          let status = 'Info';
          let title = 'No Data';
          let content = 'No Data Found'; // using static messge due to no response from API. instead of dynamic ressponse message => res.message
          this.GeneralService.toastMessage(status, title, content);
        } else {
          const navigationExtras: NavigationExtras = {
            state: {
              orderDetailData: res.data,
            }
          };
          console.log(navigationExtras);
          this.router.navigate(['pages/orders-list/order-detail'], navigationExtras);
        }
      });
    }
  }

  goToDeshboard() {
    this.router.navigate(['pages/dashboard']);
  }
}
