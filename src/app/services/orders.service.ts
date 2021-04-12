import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Orders } from 'app/interfaces/orders';
// import { environment } from 'environments/environment';
import { Orders } from '../../app/interfaces/orders';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { GeneralService } from './general.service';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  generalAPI: string = environment.generalAPI;
  currentUser: any;
  ordersAPIResponse: any;
  orderStatus: any;

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;


  private ordersSubject: BehaviorSubject<Orders>;
  public currentOrderData: Observable<Orders>;
  private countsSubject: BehaviorSubject<Orders>;
  // ordersCountsAPIResponse: Observable<Orders>;
  // eventCallback$: Observable<Orders>;
  // private ordersSubject: BehaviorSubject<Orders[]> = new BehaviorSubject(
  //   []
  // );



  constructor(
    private http: HttpClient,
    public router: Router,
    public authenticationService: AuthenticationService,
    public generalService: GeneralService,
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    let status = {
      Status: ''
    }
    console.log('current user data in order service', this.currentUser);
    this.getOrdersByStatus(status);

    this.ordersSubject = new BehaviorSubject<Orders>(JSON.parse(localStorage.getItem('fetchedOrders')));
    this.currentOrderData = this.ordersSubject.asObservable();
  }

  ngOnInit(): void {
    if (!this.orderStatus) {
      this.orderStatus = '';
    }
  }

  headerCall() {
    let authToken = this.currentUser.data.tokenNo;
    if (authToken !== null) {
      const headers = new HttpHeaders({
        'TOKENNO': authToken,
        'UserId': this.currentUser.data.userId.toString(),
        'LoginId': this.currentUser.data.loginId,
        'Content-Type': 'application/json',
      });
      return headers
    } else {
      return;
    }
  }

  /* ******************************Orders List Functions****************************** */

  getOrdersByStatus(ev) {
    // console.log('Data for api to send', data);
    console.log('selected status', ev);
    // if()
    this.orderStatus = ev.Status;
    console.log(this.ordersAPIResponse);
    let data = {
      UserId: this.currentUser.data.userId,
      Status: this.orderStatus,
      PageIndex: this.ordersAPIResponse ? this.ordersAPIResponse.pageIndex : 0,
      PageSize: 10, //must have to pass value, it should be > not zero(0).
      RecordCount: this.ordersAPIResponse ? this.ordersAPIResponse.recordCount : 0,
      RecordLimit: this.ordersAPIResponse ? this.ordersAPIResponse.recordLimit : 0,
      // OrderDate: this.dateFromUser
    }

    // console.log(data);
    return new Promise((resolve, reject) => {
      this.ordersByStatus(data).subscribe(res => {
        // console.log(res);

        if (res) {
          if (res.status != 200) {
            reject(res);
          } else {
            this.ordersAPIResponse = res.data;
            console.log('Inside if condition', this.ordersAPIResponse);
            localStorage.setItem('fetchedOrders', JSON.stringify(this.ordersAPIResponse));

            // this.assignDataToVariable();
            resolve(res);
            this.ordersSubject.next(res);
          }
        }
        // else {
        //   console.log(res);
        //   console.log('no content');
        //   // logic for res not found
        // }
        console.log('outside if condition');
        this.ordersSubject.next(res);
      });
    });

  }

  // assignDataToVariable() {
  //   let responseOrderData = this.ordersAPIResponse;
  //   // console.log(responseOrderData);
  //   return responseOrderData;
  // }

  // public get currentUserValue(): Orders {
  //   return this.ordersSubject.value;
  // }

  public get getOrders(): Orders {
    // console.log(this.ordersSubject);
    // this.ordersSubject.asObservable();
    // console.log('getValue will get the next value:', this.ordersSubject.getValue());
    console.log(this.ordersSubject.value);
    return this.ordersSubject.value;
    // return this.ordersSubject.next(this.currentValue);
  }

  /* ****************************** Orders status counts Functions ****************************** */

  // getOrdersByStatusCount() {

  //   return new Promise((resolve, reject) => {
  //     this.ordersCountByStatus().subscribe(res => {
  //       // console.log(res);

  //       if (res) {
  //         if (res.status != 200) {
  //           reject(res);
  //         } else {
  //           // this.ordersAPIResponse = res;
  //           resolve(res);
  //           this.countsSubject.next(res);
  //         }
  //       } else {
  //         // logic for res not found
  //       }

  //     });
  //   });

  // }

  // public get getOrdersCount(): Observable<Orders[]> {
  //   console.log(this.countsSubject);
  //   return this.countsSubject.asObservable();
  // }


  //--------------------------------------------------- API calls ----------------------------------------------------------------------//

  ordersByStatus(data) {
    // const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.generalAPI + 'DashboardPhamacist/GetPharmacistOrders', JSON.stringify(data), { headers: this.headerCall() })
      .pipe(map(response => {
        this.ordersSubject.next(response);
        return response;
      }));
  }

  ordersCountByStatus() {
    // const headers = { 'Content-Type': 'application/json' };
    return this.http.get<any>(this.generalAPI + 'DashboardPhamacist/GetOrderCountsByStatus/' + this.currentUser.data.userId, { headers: this.headerCall() })
      .pipe(map(response => {
        // this.countsSubject.next(response);
        return response;
      }));
  }


  //----------------------------------   For View whole Order Details based on Order Number  -------------------------------------------//

  GetByOrderNo(orderNo) {
    // const headers = { 'Content-Type': 'application/json' };
    return this.http.get<any>(this.generalAPI + 'Order/GetByOrderNo/' + orderNo, { headers: this.headerCall() })
      .pipe(map(response => {
        // this.ordersSubject.next(response);
        return response;
      }));
  }



  //----------------------------------------------- Display Current Orders -------------------------------------------------------------//

  DisplayCurOrder(curData) {
    return this.http.post<any>(this.generalAPI + 'Order/GetOrdersList', JSON.stringify(curData), { headers: this.headerCall() })
      .pipe(map(response => {
        // this.ordersSubject.next(response);
        return response;
      }));
  }



  

  //------------------------------------------- Medicine Master -----------------------------------------------------------------//

  //----------------->>> [ On "Submit Button" ]
  medicineMaster(data) {
    return this.http.post<any>(this.generalAPI + 'Medicine/Add', JSON.stringify(data), { headers: this.headerCall() })
      .pipe(map(res => {
    
        return res;
      }));
  }

  //----------------->>> [ For Drop-Down List ]
  DisplayMedicineMaster(){
    return this.http.get<any>(this.generalAPI + 'Medicine/GetMedicineTypes' ,{ headers: this.headerCall() })
    .pipe(map(mediType => {
      
      return mediType;
    }));
  }

  //------------------>>> [ For Add Extra Medicine In the DropDown List ]
  AddMedicineType(data){
    return this.http.post<any>(this.generalAPI + 'Medicine/AddMedicineTypes', JSON.stringify(data) ,{ headers: this.headerCall() })
    .pipe(map(addMediType => {
      
      return addMediType;
    }));
  }

  // ---------------->>> [ For Get All Medicine Data Inserted By User ]
  GetAllMediData(data){
    return this.http.post<any>(this.generalAPI + 'Medicine/GetPaginated' ,JSON.stringify(data),{ headers: this.headerCall() })
    .pipe(map(allMediData => {
      
      return allMediData;
    }));
  }
 

// -------------------->>> [ For Auto Generated Id ]
  AutoGenetId(){
    return this.http.get<any>(this.generalAPI + 'Medicine/IncrementAutoGenerateNo' ,{ headers: this.headerCall() })
    .pipe(map(autoID => {
      
      return autoID;
    }));
  }
  
  

  // ------------------->>> [For Edit Data]
  EditData(data){
    return this.http.put<any>(this.generalAPI + 'Medicine/Edit', JSON.stringify(data) ,{ headers: this.headerCall() })
    .pipe(map(editData => {
      
      return editData;
    }));
  }



//---------------------------------------------- Pharmacist Master ------------------------------------------------------------//


//----------------->>> [ On "Submit Button" ]
pharmacistMaster(data) {
  return this.http.post<any>(this.generalAPI + 'PharmacyEmployee/Add', JSON.stringify(data), { headers: this.headerCall() })
    .pipe(map(res => {
  
      return res;
    }));
}

//----------------->>> [ For Drop-Down List ]
DisplayPharmacyMaster(){
  return this.http.get<any>(this.generalAPI + 'PharmacyEmployee/GetUserType' ,{ headers: this.headerCall() })
  .pipe(map(userType => {
    
    return userType;
  }));
}

// ---------------->>> [ For Get All Pharma Master Data Inserted By User ]
GetAllPharmaData(data){
  return this.http.post<any>(this.generalAPI + 'PharmacyEmployee/GetPaginated' ,JSON.stringify(data),{ headers: this.headerCall() })
  .pipe(map(allPharmaData => {
    
    return allPharmaData;
  }));
}

// ------------------------------------------- Patient Master --------------------------------------------------------------//


patientMaster(data) {
  return this.http.post<any>(this.generalAPI + 'Patient/Add', JSON.stringify(data), { headers: this.headerCall() })
    .pipe(map(res => {
  
      return res;
    }));
}

DisplayPatientMasterDropDown(){
  return this.http.get<any>(this.generalAPI + 'Patient/GetExemptTypeList' ,{ headers: this.headerCall() })
  .pipe(map(exemptionType => {
    
    return exemptionType;
  }));
}

GetAllPatientData(){
  return this.http.get<any>(this.generalAPI + 'Patient/GetAll' ,{ headers: this.headerCall() })
  .pipe(map(patientData => {
    
    return patientData;
  }));
}

// ------------------------------------------- Courier Master --------------------------------------------------------------//

courierMaster(data) {
  return this.http.post<any>(this.generalAPI + 'CourierAgent/Add', JSON.stringify(data), { headers: this.headerCall() })
    .pipe(map(res => {
  
      return res;
    }));
}

// ---------------->>> [ For Get All Courier Master Data Inserted By User ]
GetAllCourierData(data){
  return this.http.post<any>(this.generalAPI + 'CourierAgent/GetPaginated' ,JSON.stringify(data),{ headers: this.headerCall() })
  .pipe(map(allCourierData => {
    
    return allCourierData;
  }));
}



  // const locations = new Observable((observer) => {
  //   let watchId: number;

  //   // Simple geolocation API check provides values to publish
  //   if ('geolocation' in navigator) {
  //     watchId = navigator.geolocation.watchPosition((position: Position) => {
  //       observer.next(position);
  //     }, (error: PositionError) => {
  //       observer.error(error);
  //     });
  //   } else {
  //     observer.error('Geolocation not available');
  //   }

  //   // When the consumer unsubscribes, clean up data ready for next subscription.
  //   return {
  //     unsubscribe() {
  //       navigator.geolocation.clearWatch(watchId);
  //     }
  //   };
  // });
}
