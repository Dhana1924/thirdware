import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockersComponent } from './blockers/blockers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocsComponent } from './docs/docs.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RegistrationComponent } from './registration/registration.component';
import { TaskInprogressComponent } from './Task/task-inprogress/task-inprogress.component';
import { TaskToDoComponent } from './Task/task-to-do/task-to-do.component';
import { TasklistHomeComponent } from './Task/tasklist-home/tasklist-home.component';
import { TeammissionComponent } from './teammission/teammission.component';
import { TeamobjectivesComponent } from './teamobjectives/teamobjectives.component';
import { UpdateTaskComponent } from './Update/update-task/update-task.component';
import { UpdateToDoTaskComponent } from './Update/update-to-do-task/update-to-do-task.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { TeamhomeComponent } from './teamhome/teamhome.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'dash', component: DashboardComponent ,
  children: [

   { path: 'docs', component: DocsComponent},
   
    {path:'whats',component: WhatsnewComponent},
    {path:'teammission',component: TeammissionComponent},
    {path:'teamobj',component: TeamobjectivesComponent},
   

 ]
 },
 

  { path : "TaskList", component : TasklistHomeComponent, children : [
    { path : "Inprogress", component : TaskInprogressComponent },
    { path : "ToDo", component : TaskToDoComponent } 
  ]},
   {path:"addmem",component:AddmemberComponent},
  { path : "Blockers", component : BlockersComponent},

  { path : "UpdateTask/:id", component : UpdateTaskComponent},
  { path : "UpdatetodoTask/:id", component : UpdateToDoTaskComponent},
  {path:'registration',component:RegistrationComponent},
   {path:'onBoarding',component:OnboardingComponent},
   {path:'forget' , component:ForgetpasswordComponent},

];
    
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
