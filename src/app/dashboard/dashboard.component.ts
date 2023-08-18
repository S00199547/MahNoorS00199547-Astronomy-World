import { Component } from '@angular/core';
import {NasaApodService} from "../services/nasa-apod.service";
import {catchError, tap, map, of, mergeMap, take, toArray} from "rxjs";
import {faCalendar, faHardDrive, IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {faEarthEurope} from '@fortawesome/free-solid-svg-icons';
import * as firebase from "firebase/app"
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  faCalendar: IconDefinition = faCalendar;
  faHardDrive: IconDefinition = faHardDrive;
  faEarthEurope: IconDefinition = faEarthEurope;

  constructor( private auth: AuthService,
    private apodService: NasaApodService
  ) { }
  
  ngOnInit() {
    //
    // this.imagesVideosService.getResults('nebula').pipe(
    //   tap((data) => console.log(data)),
    //   catchError((error) => {
    //     console.log(error);
    //     return of(null);
    //   })
    // ).subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    // })

    // this.imagesVideosService.getResults2('apollo 11').pipe(
    //   tap((data) => console.log(data)),
    //   catchError((error) => {
    //     console.log(error);
    //     return of(null);
    //   })
    // ).subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    // })

}
register(){
  this.auth.logout();
}

}
