import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    private route = inject(ActivatedRoute);
    ngOnInit(){
      const id=this.route.snapshot.paramMap.get('id');
      console.log(id);

      this.route.params.subscribe({
        next: (params) => {
          console.log(params['id']);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
}
