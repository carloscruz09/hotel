import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { AppclientsComponent } from './components-bussiness/appclients/appclients.component';
import { AppdashboardComponent } from './components-bussiness/appdashboard/appdashboard.component';
import {RouterModule, Routes, Router} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:AppdashboardComponent},
  {path:'client', component:AppclientsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    AppclientsComponent,
    AppdashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
