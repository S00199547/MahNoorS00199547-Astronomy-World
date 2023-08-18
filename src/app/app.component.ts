import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title //   next: (data) => console.log(data),
    (title: any) {
      throw new Error('Method not implemented.');
  }
 
  
}
