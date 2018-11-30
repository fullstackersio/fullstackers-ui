import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PresentationsComponent } from './presentations.component';
import { PresentationComponent } from './components/presentation/presentation.component';

import {
  MatCardModule,
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: PresentationsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [
    PresentationComponent,
    PresentationsComponent
  ]
})
export class PresentationsModule { }
