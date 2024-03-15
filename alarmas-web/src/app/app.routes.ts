import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyAlarmComponent } from './daily-alarm/daily-alarm.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { VerificationComponent } from './verification/verification.component';

export const routes: Routes = [
  { path: '', redirectTo: '/create-account', pathMatch: 'full' },
  { path: 'verification', component: VerificationComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'alarm', component: DailyAlarmComponent }
];
