import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-service-component',
  imports: [NgFor],
  templateUrl: './service-component.component.html',
  styleUrl: './service-component.component.css'
})
export class ServiceComponentComponent {
  users:any;
  //Example of Dependency Injection
  constructor(public userdata: UserserviceService) {
    console.log('UserData:', userdata.users);
    this.users = userdata.users();
  }
}   
