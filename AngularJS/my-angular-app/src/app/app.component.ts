import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CustomDirectiveDirective } from './custom-directive.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,CustomDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
}