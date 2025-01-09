import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MinitaskComponent } from "../minitask/minitask.component";



@Component({
  selector: 'app-home',
  imports: [RouterLink, MinitaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  a: MinitaskComponent = new MinitaskComponent;
  b: MinitaskComponent = new MinitaskComponent;
  // private router = inject(Router);
  constructor(
    // private router: Router
  ) {
    console.log('AppComponent constructor called');
  }
  ngOnInit(){
    console.log('AppComponent ngOnInit called');
    // this.changeTitle('My Angular App-Changed');
  }
  changeTitle(t:string )
  {
    this.title=t;
  }
  title = 'my-angular-app';

  // navigate()
  // {
  //   this.router.navigate(['/about']);
  // }
}
      