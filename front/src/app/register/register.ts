import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { confirmarClaveValidator } from '../validators/clave.validator';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  formularioRegistro!: FormGroup;
  avatar?: File;
  avatarPreview?: string;
  enviando = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService: Auth,
  ) {}

  ngOnInit(): void {
    this.formularioRegistro = this.fb.group(
      {
        correo: ['', [Validators.required, Validators.email]],
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/),
          ],
        ],
        repitePassword: ['', Validators.required],
      },
      { validators: confirmarClaveValidator() },
    );
  }

  seleccionarAvatar(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.avatar = input.files?.[0];

    if (!this.avatar) {
      this.avatarPreview = undefined;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.avatarPreview = reader.result as string;
    };
    reader.readAsDataURL(this.avatar);
  }

  registrarUsuario(): void {
    if (!this.validarFormulario()) {
      return;
    }

    const { correo, password, nombre, apellido } = this.formularioRegistro.getRawValue();
    const formData = new FormData();

    formData.append('email', correo);
    formData.append('password', password);
    formData.append('name', nombre);
    formData.append('lastName', apellido);

    if (this.avatar) {
      formData.append('avatar', this.avatar);
    }

    this.enviando = true;

    this.authService.register(formData).subscribe({
      next: () => {
        this.enviando = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Registro exitoso',
          detail: 'Tu cuenta fue creada',
        });

        setTimeout(() => {
          void this.router.navigate(['/inicio']);
        }, 1000);
      },
      error: (error: HttpErrorResponse) => {
        this.enviando = false;
        const detail =
          typeof error.error?.message === 'string'
            ? error.error.message
            : 'No se pudo crear la cuenta';

        this.messageService.add({
          severity: 'error',
          summary: 'Error al registrar',
          detail,
        });
      },
    });
  }

  validarFormulario(): boolean {
    let isValid = true;
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      isValid = false;
    }
    return isValid;
  }
}
