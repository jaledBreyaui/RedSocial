import { Component, OnInit } from '@angular/core';
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
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  formularioRegistro!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.formularioRegistro = this.fb.group(
      {
        correo: ['', [Validators.required, Validators.email]],
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        repitePassword: ['', Validators.required],
      },
      { validators: confirmarClaveValidator() },
    );
  }

  async registrarUsuario() {
    // if (!this.validarFormulario()) {
    //   return;
    // }
    // const { correo, password, nombre, apellido, edad } = this.formularioRegistro.getRawValue();
    // const { error } = await this.sb.registrar(correo, password);
    // if (error) {
    //   this.messageService.add({
    //     severity: 'error',
    //     summary: 'Error al registrar',
    //     detail: error.message,
    //   });
    // } else {
    //   const datosGuardados = await this.sb.guardarDatosUsuario(
    //     correo,
    //     nombre,
    //     Number(edad),
    //     apellido,
    //   );
    //   if (datosGuardados) {
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Registro exitoso',
    //       detail: 'Ya estas registrado',
    //     });
    //     setTimeout(() => {
    //       this.router.navigate(['/home']);
    //     }, 1500);
    //   } else {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error al guardar datos',
    //       detail: 'No se pudieron guardar los datos del usuario',
    //     });
    //   }
    // }
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
