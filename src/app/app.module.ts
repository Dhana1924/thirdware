import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { TeammissionComponent } from './teammission/teammission.component';
import { TeamobjectivesComponent } from './teamobjectives/teamobjectives.component';
import { DocsComponent } from './docs/docs.component';
import { TaskfilterPipe } from './taskfilter.pipe';
import { BlockersComponent } from './blockers/blockers.component';
import { TasklistHomeComponent } from './Task/tasklist-home/tasklist-home.component';
import { TaskInprogressComponent } from './Task/task-inprogress/task-inprogress.component';
import { TaskToDoComponent } from './Task/task-to-do/task-to-do.component';
import { UpdateToDoTaskComponent } from './Update/update-to-do-task/update-to-do-task.component';
import { UpdateTaskComponent } from './Update/update-task/update-task.component';


import { CoolStorageModule } from '@angular-cool/storage';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { NgToastModule } from 'ng-angular-popup';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WhatsnewComponent,
    TeammissionComponent,
    TeamobjectivesComponent,
    DocsComponent, TaskfilterPipe,
    BlockersComponent,
    TasklistHomeComponent,
    TaskInprogressComponent,
    TaskToDoComponent,
    UpdateToDoTaskComponent,
    UpdateTaskComponent,
    RegistrationComponent,
    OnboardingComponent,
     ForgetpasswordComponent, 
     LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CoolStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
