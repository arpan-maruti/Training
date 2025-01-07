import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Comp1Component } from "../comp1/comp1.component";
import { Comp2Component } from "../comp2/comp2.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, Comp1Component, Comp2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
      