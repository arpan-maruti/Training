import { NgIf } from '@angular/common';
import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,  SimpleChanges } from '@angular/core';
import { DestroyComponent } from '../destroy/destroy.component';

@Component({
  selector: 'app-lifecycle',
  imports: [NgIf, DestroyComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  @Input() message: string = 'Initial Message';
  showH1 = true;
  destroyComponent: DestroyComponent | undefined ;
  element:any;
  constructor() {
    console.log('Constructor: Component instance created.');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Component inputs changed.',changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection triggered.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Content initialized.');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Content checked for changes.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialized.');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: View checked for changes.');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component is about to be destroyed.');
  }

  updateMessage(): void {
    this.message = 'Updated Message';
    console.log('Message updated.');
  }
}
