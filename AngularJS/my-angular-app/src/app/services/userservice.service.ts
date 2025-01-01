import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  users() {
    return [
      {id: 1, name: 'arpan1', email: 'arpan1@gmail.com'},
      {id: 2, name: 'arpan2', email: 'arpan2@gmail.com'},
      {id: 3, name: 'arpan3', email: 'arpan3@gmail.com'},
    ];
  }
}
