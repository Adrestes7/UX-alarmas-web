import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-daily-alarm',
  standalone: true,
  imports: [FormsModule, MatRadioModule, RouterModule],
  templateUrl: './daily-alarm.component.html',
  styleUrl: './daily-alarm.component.css'
})
export class DailyAlarmComponent {

}
