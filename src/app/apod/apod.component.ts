import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import { IconDefinition, faCalendar, faHardDrive } from '@fortawesome/free-regular-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  faCalendar: IconDefinition = faCalendar;
  faHardDrive: IconDefinition = faHardDrive;
  faEarthEurope: IconDefinition = faEarthEurope;

  constructor(private auth: AuthService,) { }

  ngOnInit(): void {
    console.log(moment());
  }
  
  register(){
    this.auth.logout();
  }
}
