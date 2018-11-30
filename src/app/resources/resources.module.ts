import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { ResourceComponent } from './components/resource/resource.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResourcesComponent, ResourceComponent]
})
export class ResourcesModule { }
