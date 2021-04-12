import { Component, OnInit } from '@angular/core';
import { NbDateService, NbThemeService } from '@nebular/theme';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  data: {};
  options: any;
  Orders:any;
  PendingOrder:any=[];
  RejectedOrder: any = [];
  themeSubscription: any;
  minDate:any;
  OrdersByStatus: any;
  DataByStatus:any;

  constructor( 
    public dateService: NbDateService<Date>,
    private theme: NbThemeService,
    public ordersService: OrdersService
    ) { 
      let status = {
        Status: 'Rejected'
      }
      this.getRejectedData(status);
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'dataset - big points',
          // data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          data: this.PendingOrder,

          borderColor: colors.primary,
          backgroundColor: colors.primary,
          fill: false,
          borderDash: [5, 5],
          pointRadius: 8,
          pointHoverRadius: 10,
        }, {
          label: 'dataset - individual point sizes',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          // data: this.OrdersByStatus,
          borderColor: colors.dangerLight,
          backgroundColor: colors.dangerLight,
          fill: false,
          borderDash: [5, 5],
          pointRadius: 8,
          pointHoverRadius: 10,
        }, {
          label: 'dataset - large pointHoverRadius',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          // data: this.OrdersByStatus,
          borderColor: colors.info,
          backgroundColor: colors.info,
          fill: false,
          pointRadius: 8,
          pointHoverRadius: 10,
        }, {
          label: 'dataset - large pointHitRadius',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          // data: this.OrdersByStatus,
          borderColor: colors.success,
          backgroundColor: colors.success,
          fill: false,
          pointRadius: 8,
          pointHoverRadius: 10,
        }],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  getStartDate(ev) {
    this.minDate = this.dateService.addDay(ev, 1); // minDate is selected start date, which use to set the to date 1 day after start date.
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 100);
  }

  ngOnInit(): void {
    // console.log(this.OrdersByStatus);
    // this.getOrder();
    // this.DataByStatus= this.ordersService.getOrders;
    // console.log("OverView Data is:-->",this.DataByStatus);
  }
  // getOrder(){
  //   this.ordersService.getOrders.subscribe((res : any)=>
  //     {
  //       console.log(res);
  //       this.OrdersByStatus = res;
  //       console.log(this.OrdersByStatus);
  //     });
  // }
  getRejectedData(status) {
    
    this.ordersService.getOrdersByStatus(status).then((res: any) => {
      this.Orders = res.data.list;
      for(var i = 0; i <  res.data.list.length; i++) {
        this.PendingOrder.push( res.data.list[i]['netAmount']);
      }
      console.log("NetAmount Data is ", this.PendingOrder);
      // res.data.list.forEach(e => {
      //   if (e.status === "Accepted") {
      //     console.log("Rejected By Pharma ", e);
      //     this.PendingOrder.push(e);
      //   } 
      //   else if (e.status === "Rejected"){
      //     console.log("Rejected By Courier ", e);
      //     this.RejectedOrder.push(e);
      //   }
      // });
     
    });
  }

}
