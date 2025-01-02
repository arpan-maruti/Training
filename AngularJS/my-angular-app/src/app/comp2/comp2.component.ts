import { Component, OnDestroy, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  receivedData:string ="";

  constructor(public siblingService: SiblingService) {
  }
  ngOnInit(): void {
    this.receivedData = this.siblingService.getData();
  }
  
  
}
