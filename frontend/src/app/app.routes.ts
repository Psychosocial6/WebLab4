import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LoginPage } from './login-page/login-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'main', component: MainPage }
];
