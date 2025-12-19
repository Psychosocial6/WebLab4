import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'isLoggedIn';

  setLoggedIn() {
    localStorage.setItem(this.AUTH_KEY, 'true');
  }

  logout() {
    localStorage.removeItem(this.AUTH_KEY);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }
}
