import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
// import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { enumValues } from '../../../../environments/configuration';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $;

@Component({
  selector: 'ngx-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.scss']
})
export class RejectedComponent implements OnInit {

  isHide: boolean = false;
  RejectedByPharma: any = [];
  RejectedByCour: any = [];

  ordersTab: any = Object.values(enumValues.ordersTab);
  courierList: any = Object.values(enumValues.userType2);
  // countryForm: FormGroup;
  Orders: any;

  dataTable: any;
  // @Input() item: any;


  constructor(
    public ordersService: OrdersService,
    // private wowService: NgwWowService,
    private router: Router,
    private fb: FormBuilder
  ) {
    let status = {
      Status: 'Rejected'
    }
    this.getRejectedData(status);
  }


  ngOnInit(): void {
    
    // this.wowService.init();
    // this.changeData();

    // console.log("Rejected By Pharma:--> ", this.RejectedByPharma);
  }

  getRejectedData(status) {
    
    this.ordersService.getOrdersByStatus(status).then((res: any) => {
      this.Orders = res.data.list;
      res.data.list.forEach(e => {
        if (e.rejectedByUserType === "Pharmacist") {
          console.log("Rejected By Pharma ", e);
          this.RejectedByPharma.push(e);
        } 
        else{
          console.log("Rejected By Courier ", e);
          this.RejectedByCour.push(e);
        }
      });
      console.log(this.RejectedByPharma);
    });
  }

  chage() {
    this.router.navigate(['pages/dashboard']);
  }

  // changeData(){
  //   this.RejectedByPharma = this.item;
  //   console.log(this.RejectedByPharma);
  // }



  showData() {
    this.isHide = !this.isHide;
  }


}
