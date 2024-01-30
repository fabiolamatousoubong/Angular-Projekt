import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GemuseModule } from './gemuse/gemuse.module';
import { HearderComponent } from './hearder/hearder.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { MaintenanceService } from './maintenance-page.service';

export function initApp(maintenanceService: MaintenanceService) {
  return () => maintenanceService.redirectToMaintenancePage();
}
@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,

    PageNotFoundComponent,
     LoginComponent,
     MaintenancePageComponent
         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GemuseModule,
    AppRoutingModule
  ],
  providers: [   
    MaintenanceService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [MaintenanceService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
