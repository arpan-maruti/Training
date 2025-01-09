import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule], 
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  
  userLogin(item:any)
  {
    console.log(item);
  }

}
