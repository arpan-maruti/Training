import { Component } from '@angular/core';
// import { MypipePipe } from '../mypipe.pipe';
import {CommonModule} from '@angular/common';
import { MypipePipe } from '../mypipe.pipe';
import { MultipleargsPipe } from '../multipleargs.pipe';
@Component({
  selector: 'app-pipes',
  imports: [CommonModule, MypipePipe, MultipleargsPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  today = new Date();
  
}
