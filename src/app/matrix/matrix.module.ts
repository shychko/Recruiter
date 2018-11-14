import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import { InactiveComponent } from './inactive/inactive.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddrecruiterComponent } from './addrecruiter/addrecruiter.component';

@NgModule({
  declarations: [ViewComponentComponent, InactiveComponent, PagenotfoundComponent, AddrecruiterComponent],
  imports: [
    CommonModule
  ]
})
export class MatrixModule { }
