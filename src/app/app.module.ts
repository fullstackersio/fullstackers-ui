import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { PresentationsService } from './services/presentations.service';
import { AboutComponent } from './about/about.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component'

@NgModule({
  declarations: [
    AppComponent,
    PresentationsComponent,
    PresentationComponent,
    AboutComponent,
    UpcomingEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [
    PresentationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
