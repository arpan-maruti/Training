
import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,  SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  imports: [FormsModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  

  @Input() childInput: string = '';
  
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

}
