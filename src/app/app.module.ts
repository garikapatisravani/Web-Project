import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { DietTypesComponent } from './components/diet-types/diet-types.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { CheckCaloriesComponent } from './components/check-calories/check-calories.component';
import { FindRecipesComponent } from './components/find-recipes/find-recipes.component';
import { NutritionByNameComponent } from './components/nutrition-by-name/nutrition-by-name.component';
import { NearbyRestaurantsComponent } from './components/nearby-restaurants/nearby-restaurants.component';
import {MatSelectModule} from '@angular/material/select';
import { GeneralService } from './general.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { ResultsDialogComponent } from './components/results-dialog/results-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DietTypesComponent,
    BmiComponent,
    CheckCaloriesComponent,
    FindRecipesComponent,
    NutritionByNameComponent,
    NearbyRestaurantsComponent,
    ResultsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSelectModule,
    HttpClientModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule               
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
