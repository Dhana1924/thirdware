import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email!:string;
  password!:string;

  public loginForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient, private router:Router,
    private toast:NgToastService) { }

    
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
     email:[''],
     password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
     const user = res.find((a:any)=>{
        return a.email ===  this.loginForm.value.email && a.password === this.loginForm.value.password
        
      });
      if(user){
        this.toast.success({detail:"successMessage",summary:"Login successfully",duration:5000});
        this.loginForm.reset();
        this.router.navigate(['dash']);
      }
    },err=>{
      this.toast.error({detail:"ErrorMessage",summary:"something Went Wrong !!",duration:15000})
    })
  }


 




}
