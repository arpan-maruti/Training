import { Component } from '@angular/core';
import { SiblingService } from '../sibling.service';
import { Comp2Component } from "../comp2/comp2.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [FormsModule, Comp2Component],
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  inputData: string = '';

  constructor(private siblingService: SiblingService) {}

  sendData(): void {
    setTimeout(() => {
    this.siblingService.setData(this.inputData);
    console.log('Data sent to sibling component:', this.inputData)},5000);
  }
}
