import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule, MatRadioModule, RouterModule],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  errorMessage: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onRegister(form: NgForm) {

    if (form.invalid) {
      this.errorMessage = 'Por favor, verifica que todos los campos estén llenos.';
      return;
    }
    this.router.navigate(['/verification']);
  }

}
