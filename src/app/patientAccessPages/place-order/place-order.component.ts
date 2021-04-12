import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){

      $("#addBasket").click(function(){
        $("#viewConfirmorder").toggle("slow");
      });
    });

  }

}
