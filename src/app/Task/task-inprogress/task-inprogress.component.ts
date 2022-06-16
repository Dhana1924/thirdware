import { CoolLocalStorage } from '@angular-cool/storage';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/task-service.service';
import { task } from 'src/app/TS/task';

@Component({
  selector: 'app-task-inprogress',
  templateUrl: './task-inprogress.component.html',
  styleUrls: ['./task-inprogress.component.css']
})
export class TaskInprogressComponent implements OnInit {

  formValue!: FormGroup;
  public list : any = [];
  Task : task = new task();
  public filterCategory !: any ;
   constructor(private local : CoolLocalStorage,private route : Router, private formbuilder : FormBuilder,private api : TaskServiceService) { }
 
   ngOnInit(): void {
 
     this.formValue = this.formbuilder.group({
       taskname : [''],
       taskassignee : [''],
       taskstartdate: [''],
       taskenddate : [''],
       taskstatus: [''],
       taskprioritystatus  : [''],
       taskprojectname :['']
   });
 
   this.getTask();
  
 }
 
   postTask(){
     this.Task.taskname = this.formValue.value.taskname;
     this.Task.taskassignee= this.formValue.value.taskassignee;
     this.Task.taskstartdate = this.formValue.value.taskstartdate ;
     this.Task.taskenddate = this.formValue.value.taskenddate;
     this.Task.taskstatus = this.formValue.value.taskstatus;
     this.Task.taskprioritystatus = this.formValue.value.taskprioritystatus;
     this.Task.taskprojectname = this.formValue.value.taskprojectname;
     this.api.postTask(this.Task)
     .subscribe(res=>{
       console.log(res);
       alert("Task Data Added Successfully")
       this.formValue.reset();
       this.getTask();
     },
     err=>{
       alert("Task Data is not added");
     })
   }
 
   updateTask (id: number){
     this.route.navigate(['UpdateTask',id])
   }
 
   getTask(){
     this.api.getTaskData().subscribe(res=>{
       this.list =res;
     })
   }
   
   deleteTask(id : number){
     this.api.deleteTaskData(id)
     .subscribe(res =>{
       console.log(res)
       this.getTask();
     })
   }
 
   filter(taskassignee:string){
     this.filterCategory = this.list
     .filter((a: any) => {
     if(a.taskassignee == taskassignee || taskassignee==''){
     return a;
     }
     })  
   }
 
   filterFees(taskstatus:string){
     this.filterCategory = this.list
     .filter((a: any) => {
     if(a.taskstatus == taskstatus || taskstatus==''){
     return a;
     }
     })  
   }
 
   filterSpecilisation(taskprioritystatus:string){
     this.filterCategory = this.list
     .filter((a: any) => {
     if(a.taskprioritystatus == taskprioritystatus || taskprioritystatus==''){
     return a;
     }
     })  
   }
 }
 
