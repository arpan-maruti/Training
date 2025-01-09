import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input() receivedData: string = '';  // Receiving data from the parent
    @Output() messageEvent = new EventEmitter<string>();  // Output event to send data to parent

    sendToParent() {
      this.messageEvent.emit('Hello from Child!');  // Emitting an event to the parent
    }
    ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges: Component inputs changed.',changes);
  }
}
