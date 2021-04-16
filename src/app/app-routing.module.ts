import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes:Routes=[
  {path:'', component: AppComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'bmi', component: RegisterComponent},
  {path:'check-calories', component: DashboardComponent},
  {path:'diet-types', component: RegisterComponent},
  {path:'find-recipes', component: DashboardComponent},
  {path:'nearby-restaurants', component: DashboardComponent},
  {path:'nutrition-by-name', component: RegisterComponent},
  {path:'find-recipes', component: DashboardComponent},  
  {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
