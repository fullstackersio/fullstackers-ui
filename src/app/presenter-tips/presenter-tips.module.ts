import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PresenterTipsComponent } from './presenter-tips.component';

const routes: Routes = [
  {
    path: '',
    component: PresenterTipsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresenterTipsComponent]
})
export class PresenterTipsModule { }
