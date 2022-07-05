import { CoolLocalStorage } from '@angular-cool/storage';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/task-service.service';
import { todotask } from 'src/app/TS/todotask';


@Component({
  selector: 'app-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.css']
})
export class TaskToDoComponent implements OnInit {

  formValue!: FormGroup;
  public todo : any = [];
  ToDoTask : todotask = new todotask();
  public filterCategory !: any ;
   constructor(private local : CoolLocalStorage,private route : Router, private formbuilder : FormBuilder,private api : TaskServiceService) { }
 
   ngOnInit(): void {
 
     this.formValue = this.formbuilder.group({
       todotaskname : [''],
       todotaskassignee : [''],
       todotaskstartdate: [''],
       todotaskpriority  : [''],
   });
 
   this.getToDoTask();
  
 }
 
   postTask(){
     this.ToDoTask.todotaskname = this.formValue.value.todotaskname;
     this.ToDoTask.todotaskassignee= this.formValue.value.todotaskassignee;
     this.ToDoTask.todotaskstartdate = this.formValue.value.todotaskstartdate ;
     this.ToDoTask.todotaskpriority = this.formValue.value.todotaskpriority;
     this.api.postToDoTask(this.ToDoTask)
     .subscribe(res=>{
       console.log(res);
       alert("Task Data Added Successfully")
       this.formValue.reset();
       this.getToDoTask();
     },
     err=>{
       alert("Task Data is not added");
     })
   }
 
   updateToDoTask (id: number){
     this.route.navigate(['UpdatetodoTask',id])
   }
 
   getToDoTask(){
     this.api.getToDoTaskData().subscribe(res=>{
       this.todo =res;
     })
   }
   
   deleteToDoTask(id : number){
     this.api.deleteToDoTaskData(id)
     .subscribe(res =>{
       console.log(res)
       this.getToDoTask();
     })
   }
 
   filter(taskassignee:string){
     this.filterCategory = this.todo
     .filter((a: any) => {
     if(a.taskassignee == taskassignee || taskassignee==''){
     return a;
     }
     })  
   }
 
   filterFees(taskstatus:string){
     this.filterCategory = this.todo
     .filter((a: any) => {
     if(a.taskstatus == taskstatus || taskstatus==''){
     return a;
     }
     })  
   }
 
   filterSpecilisation(taskprioritystatus:string){
     this.filterCategory = this.todo
     .filter((a: any) => {
     if(a.taskprioritystatus == taskprioritystatus || taskprioritystatus==''){
     return a;
     }
     })  
   }
 }
