import { Injectable,  EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SiblingService {
  dataEmitter = new EventEmitter<string>();
  
  setData(data: string): void {
    this.dataEmitter.emit(data);
  }
 
}
