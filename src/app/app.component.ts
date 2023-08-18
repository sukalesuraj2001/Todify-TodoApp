import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  constructor(){
    // setTimeout(() => {
    //   this.title = 'Change Title';
    // }, 2000);
    
  }

  cdate= Date.now()
}
