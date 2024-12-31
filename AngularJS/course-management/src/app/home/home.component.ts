import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CoursesComponent } from "../courses/courses.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
