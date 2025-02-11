import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-httpclient',
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './httpclient.component.html',
  styleUrl: './httpclient.component.css'
})
export class HttpclientComponent {

  userList:any []= [];
  constructor(private http: HttpClient) {
    
  }

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any) => {
      console.log(data);
      this.userList=data;
    });
  }

  user = {
    name: '',
    email: '',
  };
  response: any;

  submitForm(): void {
    const url = 'https://jsonplaceholder.typicode.com/posts'; 
    this.http.post(url, this.user).subscribe(
      (res) => {
        console.log('Response:', res);
        this.response = res;
      },
      (err) => {
        console.error('Error:', err);
      }
  );
  }
  
}
