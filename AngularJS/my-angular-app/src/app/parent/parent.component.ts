import { Component, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentData: string = 'Hello from Parent!';  // Data to pass to child
  messageFromChild: string = '';  // To store message received from the child

  receiveMessage(message: string) {
    this.messageFromChild = message;  // Handling the message from the child
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Component inputs changed.',changes["parentData"].previousValue);
  }
}
