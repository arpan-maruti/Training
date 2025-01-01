import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../user';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: User;
  UserInterface: UserInterface;
  // private router = inject(Router);
  constructor(
    // private router: Router
    
    
  ) {
    
    console.log('AppComponent constructor called');
    //Class
    this.user = new User(1, 'Arpan Rupareliya', 'arpan@example.com');
    //Interface
    this.UserInterface = {
      id: 1,
      name: 'Arpan Rupareliya',
      email: 'arpan@example.com',
      age: 20  // Optional property
    };
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
