import { Component, ChangeDetectorRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, NgIf],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  message = '';
  formData = {
    login: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router, private cdr: ChangeDetectorRef, private authService: AuthService) {
  }

  onLogin() {
    this.message = '';
    this.http.post<any>("http://localhost:8080/backend/app/auth/login", this.formData)
      .subscribe({
        next: (response) => {
          console.log(response.message)
          this.authService.setLoggedIn();
          this.router.navigate(['/main'])
        },

        error: (error) => {
          console.log("Error")
          this.message = error.error.message;
          this.cdr.detectChanges();
        }
      })
  }

  onRegister() {
    this.http.post<any>("http://localhost:8080/backend/app/auth/register", this.formData)
      .subscribe({
        next: (response) => {
          this.message = response.message;
          this.cdr.detectChanges();
        },

        error: (error) => {
          console.log("Error")
          this.message = error.error.message;
          this.cdr.detectChanges();
        }
      })
  }
}
