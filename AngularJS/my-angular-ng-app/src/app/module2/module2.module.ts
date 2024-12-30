import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { Module1Module } from '../module1/module1.module';



@NgModule({
  declarations: [
    Component2Component
  ],
  imports: [
    CommonModule,Module1Module
  ],
  exports: [
    Component2Component
  ]
})
export class Module2Module { }
