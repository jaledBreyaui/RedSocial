import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, InputTextModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);

  readonly formularioLogin = this.fb.nonNullable.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  enviando = false;
  mostrarPassword = false;
  errorLogin = '';

  iniciarSesion(): void {
    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const { correo, password } = this.formularioLogin.getRawValue();
    this.enviando = true;
    this.errorLogin = '';

    this.authService.login(correo, password).subscribe({
      next: () => {
        void this.router.navigate(['/timeline']);
      },
      error: (error: HttpErrorResponse) => {
        this.enviando = false;
        this.errorLogin =
          typeof error.error?.message === 'string'
            ? error.error.message
            : 'No pudimos iniciar sesión. Revisá tus datos e intentá de nuevo.';

        this.messageService.add({
          severity: 'error',
          summary: 'No pudimos ingresar',
          detail: this.errorLogin,
        });
      },
    });
  }
}
