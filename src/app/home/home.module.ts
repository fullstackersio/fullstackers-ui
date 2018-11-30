import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { PresentationPreviewComponent } from './components/presentation-preview/presentation-preview.component';
import { UpcomingMeetingComponent } from './components/upcoming-meeting/upcoming-meeting.component';
import { MatCardModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [
    HomeComponent,
    MainContentComponent,
    PresentationPreviewComponent,
    UpcomingMeetingComponent
  ]
})
export class HomeModule { }
