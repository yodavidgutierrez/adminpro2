import { NgModule } from '@angular/core';
//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
//Modules
import { SharedModule } from '../shared/shared.module';
//Routes
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUTES
  ],
})
export class PagesModule { }
