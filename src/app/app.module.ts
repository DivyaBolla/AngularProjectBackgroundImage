import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
