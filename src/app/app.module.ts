import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
