import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { 
  MatButtonModule, 
  MatMenuModule, 
  MatSidenavModule, 
  MatFormFieldModule, 
  MatCardModule, 
  MatExpansionModule, 
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PresentationsComponent } from './presentations/presentations.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationsComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
