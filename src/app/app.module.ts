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

@NgModule({
  declarations: [
    AppComponent,
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
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
