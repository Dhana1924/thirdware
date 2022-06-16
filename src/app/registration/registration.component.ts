import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  loginObj:any;
  meterPopup:any ={};
  passwordValid:any = {};
  public signupForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private toast:NgToastService
    ,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])   
    })
    this.closePopup();
  }
  openPopup($event: any){
    this.meterPopup ={
      'display':'block',
      'position':'absolute',
      'left.px':window.scrollY + document.querySelector('#txtPass')!.getBoundingClientRect().left,
      'top.px':window.scrollY + document.querySelector('#txtPass')!.getBoundingClientRect().top + 100
    };
  }
  closePopup(){
    this.meterPopup ={'display':'none'};
  }
  passwordValidation(passwordText:any){
    console.log("passwordText",passwordText.length);
    const hasUpperCase = /[A-Z]+/.test(passwordText)
    const hasLowerCase = /[a-z]+/.test(passwordText)
    const hasNumberic = /[0-9]+/.test(passwordText);
    const hasSpecialCharacter=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/.test(passwordText);
    
    this.passwordValid.minLength = passwordText.length >=5 ? true :false;
    this.passwordValid.hasUpperCase = hasUpperCase;
    this.passwordValid.hasLowerCase = hasLowerCase;
    this.passwordValid.hasNumberic = hasNumberic;
    this.passwordValid.hasSpecialCharacter = hasSpecialCharacter;
  }
 

  signup(){
    this.http.post<any>("http://localhost:3000/signupUsers  ",this.signupForm.value)
    .subscribe(res=>{
      this.toast.success({detail:"successMessage",summary:"Register successfully",duration:5000})
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      this.toast.error({detail:"ErrorMessage",summary:"Login failed,try again later !!",duration:15000})
    })

  }

  signupUser()
  {
    console.warn(this.signupForm.value)
  }
  get password()
  {
    return this.signupForm.get('password')
  }

  get email()
  {
    return this.signupForm.get('email')
  }

  visible:boolean = true;
  changetype:boolean = true;
  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


  
 
   
}

