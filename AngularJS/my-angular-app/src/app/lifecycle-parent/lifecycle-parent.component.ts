import { Component } from '@angular/core';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle-parent',
  imports: [LifecycleComponent,FormsModule],
  templateUrl: './lifecycle-parent.component.html',
  styleUrl: './lifecycle-parent.component.css'
})
export class LifecycleParentComponent {
   parentInput: string = '';
}
