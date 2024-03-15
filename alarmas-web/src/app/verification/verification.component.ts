import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [FormsModule, MatRadioModule, RouterModule],
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
