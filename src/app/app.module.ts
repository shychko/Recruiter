import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BackendApiService } from './services/backend-api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AddrecruiterComponent } from './matrix/addrecruiter/addrecruiter.component';
import { ViewComponentComponent } from './matrix/view-component/view-component.component';
import { InactiveComponent } from './matrix/inactive/inactive.component';
import { PagenotfoundComponent } from './matrix/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-view',
    pathMatch: 'full'
  },
  {
    path: 'my-view',
    component: ViewComponentComponent,
  },
  {
    path: 'old-view',
    component: InactiveComponent,
  },
  {
    path: 'add-view',
    component: AddrecruiterComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddrecruiterComponent,
    ViewComponentComponent,
    InactiveComponent,
    PagenotfoundComponent

  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  exports: [
    RouterModule
],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
