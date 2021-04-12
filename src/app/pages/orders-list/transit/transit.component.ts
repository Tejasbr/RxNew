import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { enumValues } from '../../../../environments/configuration';


@Component({
  selector: 'ngx-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.scss']
})
export class TransitComponent implements OnInit {

  currentUser:any;
  OrdersByStatus: any;
  status:any;
  ordersTab: any = Object.values(enumValues.ordersTab);
 
  // data ={
  //   "UserId":this.currentUser.data.userId,
  //   "Status": this.status
  // } 
  // "UserId": 10,
  //  "Status": "InTransist"

  constructor(private ordersServices: OrdersService,
              private router:Router,
              public authenticationService: AuthenticationService) { 
            
                this.currentUser = this.authenticationService.currentUserValue;
              }

 
  ngOnInit(): void {
    // console.log(this.OrdersByStatus);
    this.ordersTab.forEach(element => {
      if(element.statusName === "InTransist"){
        this.status = element.statusName;
        console.log(this.status);
      }
  });

  // this.getData();
  }

  // orderTimeline(){
  //     this.ordersServices.getOrderTransit.subscribe((res:any)=>
  //       {
  //         this.OrdersByStatus = res;
  //           console.log(this.OrdersByStatus);
  //       }
  //     )
  // }
getDesk()
{
  this.router.navigate(['pages/dashboard']);
}

// getData(){
//   this.ordersServices.DisplayCurOrder(this.data).subscribe((res:any)=>
//   {
//       console.log(res);
//   });
// }

}
