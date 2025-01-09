import {Component} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    title: string = 'Angular Interpolation';
    title1: string = '';
    imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
}
