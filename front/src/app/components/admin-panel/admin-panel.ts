import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TagModule } from 'primeng/tag';
import { User } from '../../models/user';
import { UsersService } from '../../services/users';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    Navbar,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    TagModule,
  ],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css',
})
export class AdminPanel implements OnInit {
  private readonly fb = inject(FormBuilder);

  readonly usuarios = signal<User[]>([]);
  readonly cargando = signal(true);
  readonly creando = signal(false);
  readonly actualizandoUsuarioId = signal('');
  readonly error = signal('');
  readonly mensaje = signal('');
  readonly tabActiva = signal<'usuarios' | 'estadisticas'>('usuarios');
  readonly avatarPreview = signal<string | undefined>(undefined);
  private avatar?: File;
  readonly totalUsuarios = computed(() => this.usuarios().length);
  readonly totalAdmins = computed(
    () => this.usuarios().filter((user) => user.role === 'admin').length,
  );
  readonly totalSuspendidos = computed(
    () => this.usuarios().filter((user) => user.isSuspended).length,
  );

  readonly formulario = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/),
      ],
    ],
    role: ['user' as 'user' | 'admin', Validators.required],
  });

  constructor(
    private readonly usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  seleccionarTab(tab: 'usuarios' | 'estadisticas'): void {
    this.tabActiva.set(tab);
  }

  crearUsuario(): void {
    if (this.formulario.invalid || this.creando()) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.creando.set(true);
    this.error.set('');
    this.mensaje.set('');

    const formValue = this.formulario.getRawValue();
    const payload = new FormData();
    payload.append('name', formValue.name.trim());
    payload.append('lastName', formValue.lastName.trim());
    payload.append('email', formValue.email.trim().toLowerCase());
    payload.append('password', formValue.password);
    payload.append('role', formValue.role);

    if (this.avatar) {
      payload.append('avatar', this.avatar);
    }

    this.usersService.crearUsuario(payload).subscribe({
      next: (user) => {
        this.usuarios.update((usuarios) => [user, ...usuarios]);
        this.formulario.reset({
          name: '',
          lastName: '',
          email: '',
          password: '',
          role: 'user',
        });
        this.avatar = undefined;
        this.avatarPreview.set(undefined);
        this.mensaje.set('Usuario creado correctamente.');
        this.creando.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.error.set(this.obtenerMensajeError(error, 'No se pudo crear el usuario.'));
        this.creando.set(false);
      },
    });
  }

  seleccionarAvatar(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.avatar = input.files?.[0];

    if (!this.avatar) {
      this.avatarPreview.set(undefined);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.avatarPreview.set(reader.result as string);
    };
    reader.readAsDataURL(this.avatar);
  }

  quitarAvatar(input: HTMLInputElement): void {
    this.avatar = undefined;
    this.avatarPreview.set(undefined);
    input.value = '';
  }

  alternarSuspension(user: User): void {
    if (this.actualizandoUsuarioId()) {
      return;
    }

    this.actualizandoUsuarioId.set(user._id);
    this.error.set('');
    this.mensaje.set('');

    this.usersService
      .actualizarSuspension(user._id, !user.isSuspended)
      .subscribe({
        next: (updatedUser) => {
          this.usuarios.update((usuarios) =>
            usuarios.map((item) =>
              item._id === updatedUser._id ? updatedUser : item,
            ),
          );
          this.mensaje.set(
            updatedUser.isSuspended
              ? 'Usuario suspendido.'
              : 'Usuario reactivado.',
          );
          this.actualizandoUsuarioId.set('');
        },
        error: (error: HttpErrorResponse) => {
          this.error.set(
            this.obtenerMensajeError(error, 'No se pudo actualizar el usuario.'),
          );
          this.actualizandoUsuarioId.set('');
        },
      });
  }

  private cargarUsuarios(): void {
    this.cargando.set(true);
    this.error.set('');

    this.usersService.obtenerTodos().subscribe({
      next: (usuarios) => {
        this.usuarios.set(usuarios);
        this.cargando.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.error.set(
          this.obtenerMensajeError(error, 'No pudimos cargar los usuarios.'),
        );
        this.cargando.set(false);
      },
    });
  }

  private obtenerMensajeError(error: HttpErrorResponse, fallback: string): string {
    return typeof error.error?.message === 'string'
      ? error.error.message
      : fallback;
  }
}
