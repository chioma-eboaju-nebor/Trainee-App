import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraineeComponent } from './trainee/trainee.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterModule } from '@angular/router';
import { routes } from './trainee/route';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewTraineeComponent } from './new-trainee/new-trainee.component';
import { DeleteTraineeComponent } from './delete-trainee/delete-trainee.component';
import { UpdateTraineeComponent } from './update-trainee/update-trainee.component';
import { ViewTraineeComponent } from './view-trainee/view-trainee.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TraineeComponent,
    FormComponent,
    ReactiveFormComponent,
    HomeComponent,
    PagenotfoundComponent,
    NewTraineeComponent,
    DeleteTraineeComponent,
    UpdateTraineeComponent,
    ViewTraineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
