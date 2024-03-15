import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyAlarmComponent } from './daily-alarm/daily-alarm.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { VerificationComponent } from './verification/verification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DailyAlarmComponent, HomeComponent, RouterModule, CreateAccountComponent, VerificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alarmas-web';
}
