import {Component, OnDestroy, OnInit} from '@angular/core';
import {EonetService} from '../services/eonet.service';
import * as moment from 'moment';
import {Category} from '../shared/models/category';
import {map, pluck, Subscription} from 'rxjs';
import { Source } from '../shared/models/source';
import {FormBuilder, FormGroup} from "@angular/forms";
import * as L from 'leaflet';
import {Event} from '../shared/models/event';
import { IconDefinition, faCalendar, faHardDrive } from '@fortawesome/free-regular-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/auth.service';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit{
  [x: string]: any;
  faCalendar: IconDefinition = faCalendar;
  faHardDrive: IconDefinition = faHardDrive;
  faEarthEurope: IconDefinition = faEarthEurope;
  constructor(private eonetService: EonetService,private auth: AuthService, private http: HttpClient) {}
  private map: any;
  private events: any[] = []; // You should initialize this array with your event data

   ngOnInit() {
    this.initializeMap();
    this.loadEvents();
  }

  private initializeMap() {
    this.map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
  private loadEvents() {
    const apiUrl = 'https://eonet.gsfc.nasa.gov/api/v3/events';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.events = data.events;
      this.addEventMarkers();
    });
  }
  

  private addEventMarkers() {
    const defaultMarkerIcon = L.icon({
      iconUrl: 'assets/image/marker-icon.png', // Path to the default marker icon
      iconSize: [25, 41] // Adjust the size as needed
    });

    this.events.forEach(event => {
      const [longitude, latitude] = event.geometry[0].coordinates;
      
      const marker = L.marker([latitude, longitude], { icon: defaultMarkerIcon })
        .addTo(this.map)
        .bindPopup(event.title);
    });
  }
 
  register(){
    this.auth.logout();
  }

/*private map: any;
private events: Event[] = [];
  ngOnInit(): void {
    this.loadMap();
    this.loadEvents();
  }

  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  private loadEvents(): void {
    this.eonetService.getEvents().subscribe(data => {
      this.events = data.events;
      this.addEventMarkers();
    });
  }

  private addEventMarkers(): void {
    this.events.forEach((event: Event) => {
      const { geometry, title } = event;
      const [longitude, latitude] = geometry[0].coordinates;
      const marker = L.marker([latitude, longitude]).addTo(this.map);
      marker.bindPopup(title);
    });
  }*/
  
  
  


 /* ngOnInit(): void {
    this.fetchCategories();
    this.fetchSources();
  }

  fetchCategories() {
    this.eonetService.fetchCategories().pipe(
      map((data: any) => data.categories.map((categoryData: any): Category => ({
        id: categoryData.id,
        title: categoryData.title,
      }))),
    ).subscribe((data: Category[]) => {
      this.categories = data;
    })
  }

  fetchSources() {
    this.eonetService.fetchSources().pipe(
      map((data: any) => data.sources.map((sourceData: any): Source => ({
        id: sourceData.id,
        title: sourceData.title,
      }))),
    ).subscribe((data: Source[]) => {
      this.sources = data;
    })
  }

  getEvents() {
    this.serverError = null;
    this.events = null;
    this.eventsSubscription = this.eonetService.fetchEvents(
      this.eventsFiltersForm.value.category,
      this.eventsFiltersForm.value.source,
      this.eventsFiltersForm.value.status,
      this.eventsFiltersForm.value.limit,
      this.eventsFiltersForm.value.range.start,
      this.eventsFiltersForm.value.range.end,
      Object.values(this.eventsFiltersForm.value.coordinates),
    ).pipe(
      map((data) => JSON.parse(data))
    ).subscribe({
      next: (data: any) => {
        console.log(data);
        this.events = data;
      },
      error: (error: any) => {
        this.serverError = error;
      }
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }*/

}
