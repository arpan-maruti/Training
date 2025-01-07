import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,CommonModule], // Import ReactiveFormsModule for reactive forms
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  // Define the FormGroup for the login form
  userLogin(item:any)
  {
    console.log(item);
  }

}
