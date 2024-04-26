import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public username: string;
  public password: string;

  constructor() { this.username = '', this.password = ''}

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
