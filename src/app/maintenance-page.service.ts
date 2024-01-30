import { Injectable, isDevMode } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class MaintenanceService{
    constructor(private router: Router) { }

  redirectToMaintenancePage(): void {
    if (isDevMode()) {
      this.router.navigate(['/maintenance']);
    }else{
        
    }
  }
}