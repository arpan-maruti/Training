import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  model: any={};
  cover!: string;
  cover_file!: File;
  showError = false;
  onFileSelected(event: any) {
    console.log(event);
    const file= event.target.files[0];
    if(file)
    {
      console.log(file);
      this.cover_file=file;
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl;
      console.log('image: ', this.cover);
    };
    reader.readAsDataURL(file);
    }
    this.showError = false;
  }
  
  onSubmit(form:NgForm) {
    if(form.invalid || !this.cover) {
      console.log("Invalid form");
      form.control.markAllAsTouched();
      if(!this.cover){
        this.showError =true;
      }
      return;
    }
    console.log(form.value);
  }

  

  
}
