import {LoginPage} from './pages/login-page/login-page';
import {Routes} from '@angular/router';
import {MainPage} from './pages/main-page/main-page';
import {AuthGuard} from './auth-guard';

export const routes: Routes = [
  { path: 'main', component: MainPage, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPage },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
