import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminLibModule } from 'admin-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
