import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { Component3Component } from './components/component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component3Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    Module2Module,
    Component3Component
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
