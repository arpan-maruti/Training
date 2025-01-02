import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SiblingService {
  public data: string = ''; // Simple variable to store data
  getData(): string {
    console.log('Data received from sibling component:', this.data);
    return this.data;
  }
  setData(data: string): void {
    
    this.data = data;
    console.log('Data sent to sibling component:', this.data);
    this.getData();
  }

 
}
