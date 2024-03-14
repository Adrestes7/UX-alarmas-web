import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyAlarmComponent } from './daily-alarm/daily-alarm.component';

export const routes: Routes = [
    {path:'', redirectTo:"/alarm", pathMatch:'full'},
    {path:"home", component: HomeComponent},
    {path:"alarm", component: DailyAlarmComponent}
];
