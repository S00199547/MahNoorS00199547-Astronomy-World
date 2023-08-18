import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApodComponent} from "./apod/apod.component";
import {EarthComponent} from "./earth/earth.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'apod', component: ApodComponent },
  { path: 'earth', component: EarthComponent },
  {path: 'apod', component: ApodComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
