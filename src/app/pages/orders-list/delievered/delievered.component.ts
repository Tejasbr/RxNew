import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../../services/orders.service';
import { enumValues } from '../../../../environments/configuration';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'ngx-delievered',
  templateUrl: './delievered.component.html',
  styleUrls: ['./delievered.component.scss']
})
export class DelieveredComponent implements OnInit {

  DeliveredOrder: any = Object.values(enumValues.DeliveredOrder);
  MedicineTabelDelivered: any = Object.values(enumValues.MedicineTabelDelivered);
  isHide:boolean = false;
  DeData:any;
  OrdersByStatus: any;
  selectedNo:any;


  @Input() item: any;

  constructor( 
               public router: Router,
               public ordersService: OrdersService) { }

  ngOnInit(): void {
    
  }

  
  displayData(event){
    this.selectedNo = event.target.value;
    if(this.selectedNo){
        this.ordersService.GetByOrderNo(this.selectedNo).subscribe((res:any) =>{
          this.OrdersByStatus = res.data;
        });
    }
    // console.log(this.item);
      this.isHide = !this.isHide;
      // console.log(event.target.value);
  }
  GoToDesk(){
    this.router.navigate(['pages/dashboard'])
}




}
