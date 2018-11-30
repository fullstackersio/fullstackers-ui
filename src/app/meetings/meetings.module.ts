import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeetingsComponent } from './meetings.component';

const routes: Routes = [
  {
    path: '',
    component: MeetingsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MeetingsComponent
  ]
})
export class MeetingsModule { }
