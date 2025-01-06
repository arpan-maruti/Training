import { CommonModule, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirectiveDirective } from '../custom-directive.directive';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgFor,NgSwitch, CommonModule, CustomDirectiveDirective,NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  //Structural Directives - *ngIf
  isVisible: boolean = true;
  //Structural Directives - *ngFor
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  //Structural Directives - *ngSwitch
  selectedColor: string = 'red';


  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  changeColor(color: string) {
    this.selectedColor = color;
  }
}
