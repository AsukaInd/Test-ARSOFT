//app.component.ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularTest';
  
  name = new FormControl('');
  Lname = new FormControl('');
  email = new FormControl('');
  Username = new FormControl('');
  Password = new FormControl('');
  
}