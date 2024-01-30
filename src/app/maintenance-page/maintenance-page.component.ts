import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-maintenance-page',
  templateUrl: './maintenance-page.component.html',
  styles: [
  ]
})
export class MaintenancePageComponent implements OnInit {

  isDevMode: boolean;
  constructor() {
    this.isDevMode = isDevMode();
    console.log(isDevMode)
   }

  ngOnInit(): void {

    if (!this.isDevMode) {
      console.log('Running in production mode');
    } else {

      console.log('Running in development mode');
  
    }
  }
  }


