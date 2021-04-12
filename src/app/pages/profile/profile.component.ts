import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Chart, ChartDataSets } from 'chart.js'
import { Label, Color } from 'ng2-charts';


@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
orderData:any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
   
    // this.getData();
  }
// getData(){
//   this.service.ordersByStatus().subscribe((res:any)=>{
//         this.orderData = res;
//         console.log(this.orderData);
//   });
// }




}
