import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../../../app/services/general.service';
import { OrdersService } from '../../../../app/services/orders.service';
import { enumValues } from '../../../../environments/configuration';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ngx-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  detailData: any;
  newDetailData: any;
  medicineData: any = Object.values(enumValues.medicineData);
  hide:any;

  constructor(
    private router: Router,
    public ordersService: OrdersService,
    public GeneralService: GeneralService,
    private fb: FormBuilder
  ) {
    
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      orderDetailData: any,
    };
    console.log(state);
    if (state === undefined) {
      this.router.navigate(['/dashboard']);
    } else {
      let getOrderDataToVariable = state.orderDetailData;
      this.detailData = getOrderDataToVariable[0];
      console.log(this.detailData);
    }


    

  }

  ngOnInit(): void {

    this.appendRow();
    // this.detailData.filter(el => {
    //   console.log(el);
    // });
    // this.detailData.forEach(el => {
    //   console.log(el);
    //   el.forEach(ol => {
    //     console.log(ol);
    //   });
    // });
    // this.newDetailData = { title1: "", title2: "", title3: "" };
    // this.detailData.push(this.newDetailData);
    
    this.newDetailData = this.detailData.orderLines;
    this.newDetailData.forEach(e => {
      if(e.bagDetails === ""){
        this.hide = !this.hide;
      }
      console.log("Bag Detail is :---> ", e.bagDetails); 
    });
    
  }

  insertNewRow() {
    // this.sellingPoints.push(this.fb.group({ point: '' }));
    // return this.fb.group({
    //   name: null,
    //   description: null,
    //   qty: null
    // });
  }
  removeRow() {

  }

  // tableData: any = Object.values(mediDetails.tableData);
  // patientData: any;

  goToDeshboard() {
    this.router.navigate(['pages/dashboard']);
  }

  appendRow(){
    var row=1;
    $(document).on("click", "#add-row", function () {
    var new_row = '<tr id="row' + row + '"><td colspan="6" style="border-top: 1px solid #000032; border-right: 1px solid #000032; border-bottom: 1px solid #000032;"><input name="from_value' + row + '" type="text" class="form-control" style="width: auto; float: right; border-bottom: 1px solid #000032;" /></td><td style="border-top: 1px solid #000032; border-right: 1px solid #000032; border-bottom: 1px solid #000032;"><input name="to_value' + row + '" type="text" class="form-control" /></td><td class="text-center" style="border-top: 1px solid #000032; border-right: 1px solid #000032; border-bottom: 1px solid #000032;"><button class="delete-row btn btn-danger no-border">X</button></td></tr>';
  /*     alert(new_row); */
    $('#test-body').append(new_row);
    row++;
    return false;
    });
    // Remove criterion
    $(document).on("click", ".delete-row", function () {
    //  alert("deleting row#"+row);
      if(row>1) {
        $(this).closest('tr').remove();
        row--;
      }
    return false;
    });
  }
}
