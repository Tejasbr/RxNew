import { Component, OnInit, Input } from '@angular/core';
// import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'ngx-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss']
})
export class AcceptedComponent implements OnInit {

  OrdersByStatus: any;
  @Input() item: any;


  constructor(
    public ordersService: OrdersService,
    // private wowService: NgwWowService,
    private router: Router           
    ) {

     }
   
     
  ngOnInit(): void {
   
    // this.wowService.init();
  }
  

  chage(){
    this.router.navigate(['pages/dashboard']);
  }

}
