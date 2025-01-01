import { Component, inject, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route = inject(ActivatedRoute);
    ngOnInit(){
      const id=this.route.snapshot.paramMap.get('id');
      console.log(id);

      this.route.params.subscribe({
        next: (params) => {
          console.log(params['id']); //Output :1
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
}
