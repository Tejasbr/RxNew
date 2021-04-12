import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { NbMenuService } from '@nebular/theme';
// import { UserService } from 'app/@core/mock/users.service';
// import { AuthenticationService } from 'app/services/authentication.service';
// import { GeneralService } from 'app/services/general.service';
// import { OrdersService } from 'app/services/orders.service';
// import { enumValues } from 'environments/configuration';
import { first } from 'rxjs/operators';
import { enumValues } from '../../../environments/configuration';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { GeneralService } from '../../services/general.service';
import { userRights } from '../../../environments/commonUserRights';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  // export class LoginComponent implements OnInit {
  // userTypes: any = Object.values(enumValues.userType);
  userRoles: any = Object.values(userRights.userRoles);


  submitted: boolean = false;
  loginForm: any;
  returnUrl: string;
  

  constructor(
    public FormBuilder: FormBuilder,
    public service: NbAuthService,
    public ChangeDetectorRef: ChangeDetectorRef,
    public Router: Router,
    public UserService: UserService,
    public AuthenticationService: AuthenticationService,
    public GeneralService: GeneralService,
    private menuService: NbMenuService
  ) {
    super(service, {}, ChangeDetectorRef, Router);
    
  }

  ngOnInit(): void {
    // console.log(this.userTypes);

    this.loginForm = this.FormBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      // userType: ['', Validators.compose([Validators.required])]
    });
  }

  get f() { return this.loginForm.controls; }

  submitBtnBoolean() {
    this.submitted = !this.submitted;
  }

  signIn(loginData: any): void {
    // this.errors = [];
    // this.messages = [];
    // this.submitted = !this.submitted;
    this.submitBtnBoolean();

    this.GeneralService.clear();

    if (this.f.invalid) {
      return;
    }
    let collectedData = {
      // UserType: loginData.userType.name,
      LoginId: loginData.email,
      Password: loginData.password,
    }
    this.AuthenticationService.login(collectedData).pipe(first()).subscribe(
      res => {

        let userData = res.data;
        // console.log(res);
        console.log(userData);
        if (userData == "" || !userData) {
          let status = 'danger';
          let title = 'Login not succeeded ';
          let content = res.message;
          this.GeneralService.toastMessage(status, title, content);
          return;
        } else {
          let status = 'success';
          let title = 'Login Successful';
          let content = res.message;
          this.GeneralService.toastMessage(status, title, content);

          this.userRoles.forEach(e1 => {
                  console.log(e1);
                  if (userData['role'] === e1.patient) {
                    this.router.navigate(['dashboardPatient']);
                    console.log("userType Patient Successfully LogedIn!!!");
                  } else if (userData['role'] === e1.pharmacist) {
                    this.router.navigate(['dashboard']);
                    // this.router.navigate(['pages']);
                  } else if (userData['role'] === e1.courier) {
                    this.router.navigate(['dashboardCourier']);
                  }
                });
           
        }
      },
      error => {
        this.GeneralService.error(error);
        let status = 'danger';
        let title = 'Login not Successful';
        let content = 'Something went wrong';
        this.GeneralService.toastMessage(status, title, content);
        return;
      });
    this.submitBtnBoolean();
    this.loginFormClear();
    // }
    // this.AuthenticationService.login(data).subscribe((res: any) => {
    //   this.submitted = false;
    //   console.log(res);
    // });
    // this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
    //   console.log('Inside IF', this.user);
    //   this.submitted = false;

    //   if (result.isSuccess()) {
    //     this.messages = result.getMessages();
    //     console.log(this.messages);
    //   } else {
    //     this.errors = result.getErrors();
    //     console.log(this.errors);
    //   }

    //   const redirect = result.getRedirect();
    //   if (redirect) {
    //     setTimeout(() => {
    //       return this.router.navigateByUrl(redirect);
    //     }, this.redirectDelay);
    //   }
    //   this.cd.detectChanges();
    // });
  }

  loginFormClear() {
    this.loginForm.reset();
  }



}
