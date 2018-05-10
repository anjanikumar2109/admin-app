import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminLibComponent } from 'admin-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLibComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
