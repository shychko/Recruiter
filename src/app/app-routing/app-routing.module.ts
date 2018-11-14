import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AddrecruiterComponent } from '../matrix/addrecruiter/addrecruiter.component';
import {ViewComponentComponent} from '../matrix/view-component/view-component.component';
import {InactiveComponent} from '../matrix/inactive/inactive.component';
import {PagenotfoundComponent} from '../matrix/pagenotfound/pagenotfound.component';

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
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        this.router.navigate(['404']); // or redirect to default route
    };
  }
 }
