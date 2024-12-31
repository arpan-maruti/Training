import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
