import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'presentations',
    loadChildren: './presentations/presentations.module#PresentationsModule'
  },
  {
    path: 'presenter-tips',
    loadChildren: './presenter-tips/presenter-tips.module#PresenterTipsModule'
  },
  {
    path: 'meetings',
    loadChildren: './meetings/meetings.module#MeetingsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
