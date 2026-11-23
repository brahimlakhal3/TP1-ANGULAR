import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

export interface RegistrationData {
  fullName: string;
  email: string;
  age: number | null;
  country: string;
}

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  readonly countries = ['France', 'Belgique', 'Suisse', 'Canada'];

  registration: RegistrationData = {
    fullName: '',
    email: '',
    age: null,
    country: '',
  };

  submittedData: RegistrationData | null = null;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.submittedData = { ...this.registration };
    console.log('[Template-Driven] Données saisies :', this.submittedData);
  }
}
