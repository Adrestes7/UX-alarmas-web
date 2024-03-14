import { Component, OnInit } from '@angular/core';
import { Alarm } from './alarm';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  alarms: Array<Alarm> = []
  alarm1 = new Alarm(
    "gym",
    "08:00 am",
    "dom 11",
    "diaria"
  )
  alarm2 = new Alarm(
    "Cumpleaños Carlos",
    "10:00 am",
    "lun 12",
    "contextual"
  )
  alarm3 = new Alarm(
    "Despertar",
    "07:00 am",
    "dom 11",
    "diaria"
  )
  alarm4 = new Alarm(
    "yoga",
    "08:00 am",
    "mie 14",
    "diaria"
  )
  ngOnInit(): void {
    this.alarms.push(this.alarm1,this.alarm2, this.alarm3, this.alarm4)
  }
}
