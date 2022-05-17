import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TcgChartsModule} from 'tcg-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TcgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
