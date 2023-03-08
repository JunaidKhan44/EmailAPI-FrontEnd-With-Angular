import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmailComponent } from './components/email/email.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{
path:"sendemail",
component:EmailComponent,
pathMatch:"full"
},
{
  path:"dashboard",
  component:DashboardComponent,
  pathMatch:"full"
  },
{
  path:'',
  component:HomeComponent,
  pathMatch:"full"
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
