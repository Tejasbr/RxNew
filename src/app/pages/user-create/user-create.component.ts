import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  ruleDefinitionForm: any;
  submitData1: any;
  submitData2: any;
  password:any;
  avtarForm:any;
  design:any;
  backToPos:boolean=false;
  url:"../../../assets/images/profile1.png";


  @ViewChild('item', { static: true }) accordion;
  @ViewChild('item2', { static: true }) accordion2;
  @ViewChild('item3', { static: true }) accordion3;
  @ViewChild('item4', { static: true }) accordion4;
  userPictureOnly: boolean = false;
  user: any;
  currentUser: any;
  storedTheme: any= localStorage.getItem('theme-color');


  constructor( public FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.accordion);
    console.log(this.accordion.collapsed);

    this.accordion.collapsed = !this.accordion.collapsed;
    this.accordion2.collapsed = !this.accordion2.collapsed;
    this.accordion3.collapsed = !this.accordion3.collapsed;
    this.accordion4.collapsed = !this.accordion4.collapsed;
    this.ruleDefinitionForm = this.FormBuilder.group({
      inputFirstName: ['', Validators.compose([Validators.required])],
      inputLastName: ['', Validators.compose([Validators.required])],
      inputDate: ['', Validators.compose([Validators.required])],
      inputAddress: ['', Validators.compose([Validators.required])],
      inputEmail: ['', Validators.compose([Validators.required])],
      inputMobile: ['', Validators.compose( [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      inputRegNo: ['', Validators.compose([Validators.required])]
    });
    this.avtarform();
    this.layout();
    this.passwordform();
    // this.user = this.currentUser.data;
  }

  get f(){
    return this.ruleDefinitionForm.controls;
  }
  get f1(){
    
    return this.password.controls;
    
  }
  get f2(){
    
    return this.avtarForm.controls;
  }
  get f3(){
    
    return this.design.controls;
  }
   
  avtarform(){
    this.avtarForm = this.FormBuilder.group({
      attachPhoto: ['', Validators.compose([Validators.required])]
    });
  }

  layout(){
    this.design = this.FormBuilder.group({
      layout: ['', Validators.compose([Validators.required])],
      sidebar: ['', Validators.compose([Validators.required])]
    });
  }
  passwordform(){
    this.password = this.FormBuilder.group({
      inputPassword: ['', Validators.compose([Validators.required])],
      inputNewPassword: ['', Validators.compose([Validators.required])],
      inputConfPassword: ['', Validators.compose([Validators.required])]
    });
  }
  storeData(data1){
     
      this.submitData1 = data1.value;
      console.log(this.submitData1);
  }
  avtarData(data2){
    this.submitData2 = data2.value;
    console.log(this.submitData2);
  }
  
 

  toggle() {
    // console.log(ev);
    this.accordion.toggle();
    
  }
  toggle2() {
    this.accordion2.toggle();
  }
  toggle3() {
    this.accordion3.toggle();
  }
  toggle4() {
    this.accordion4.toggle();
  }
  setTheme(theme: any){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }

  clear(ruleDefinitionForm){
    ruleDefinitionForm.reset();
  }
  
  clear2(password){
    password.reset();
  }
  clear3(design){
    design.reset();
  }
  onselectFile(e){
    if(e.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url = event.target.result;
      }
    }
  }
}
