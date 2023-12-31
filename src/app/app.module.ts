import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApodComponent } from './apod/apod.component';
import { EarthComponent } from './earth/earth.component';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatTabsModule} from "@angular/material/tabs";
import { PictureOfTheDayComponent } from './picture-of-the-day/picture-of-the-day.component';
import { PictureRangeComponent } from './picture-range/picture-range.component';
import { PictureRandomComponent } from './picture-random/picture-random.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import{ AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment.example';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: ['DD/MM/YYYY'],
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    EarthComponent,
    PictureOfTheDayComponent,
    PictureRangeComponent,
    PictureRandomComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
