import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TagModule } from 'primeng/tag';
import { forkJoin } from 'rxjs';
import { CommentsByPostStat, PostsByUserStat } from '../../models/stats';
import { User } from '../../models/user';
import { StatsService } from '../../services/stats';
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
    ChartModule,
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
  readonly cargandoStats = signal(false);
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
  readonly statsDesde = signal(this.obtenerFechaInicial());
  readonly statsHasta = signal(this.obtenerFechaActual());
  readonly postsByUserData = signal<object | undefined>(undefined);
  readonly commentsByDayData = signal<object | undefined>(undefined);
  readonly commentsByPostData = signal<object | undefined>(undefined);
  readonly commentsByPostStats = signal<CommentsByPostStat[]>([]);
  readonly chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#d6d3e0',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#aaa8b8' },
        grid: { color: 'rgba(139, 124, 246, 0.08)' },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#aaa8b8',
          precision: 0,
        },
        grid: { color: 'rgba(139, 124, 246, 0.08)' },
      },
    },
  };
  readonly doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#d6d3e0',
          boxWidth: 12,
          boxHeight: 12,
        },
      },
    },
  };
  readonly commentsByPostOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: { parsed: { x: number } }) =>
            `${context.parsed.x} comentarios`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#aaa8b8',
          precision: 0,
        },
        grid: { color: 'rgba(139, 124, 246, 0.08)' },
      },
      y: {
        ticks: {
          color: '#d6d3e0',
          autoSkip: false,
        },
        grid: { display: false },
      },
    },
  };

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
    private readonly statsService: StatsService,
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarEstadisticas();
  }

  seleccionarTab(tab: 'usuarios' | 'estadisticas'): void {
    this.tabActiva.set(tab);

    if (tab === 'estadisticas') {
      this.cargarEstadisticas();
    }
  }

  actualizarFechaDesde(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.statsDesde.set(input.value);
  }

  actualizarFechaHasta(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.statsHasta.set(input.value);
  }

  cargarEstadisticas(): void {
    const from = this.statsDesde();
    const to = this.statsHasta();

    if (!from || !to) {
      this.error.set('Selecciona un rango de fechas valido.');
      return;
    }

    this.cargandoStats.set(true);
    this.error.set('');
    this.postsByUserData.set(undefined);
    this.commentsByDayData.set(undefined);
    this.commentsByPostData.set(undefined);
    this.commentsByPostStats.set([]);

    forkJoin({
      postsByUser: this.statsService.obtenerPublicacionesPorUsuario(from, to),
      commentsByDay: this.statsService.obtenerComentariosPorDia(from, to),
      commentsByPost: this.statsService.obtenerComentariosPorPost(from, to),
    }).subscribe({
      next: ({ postsByUser, commentsByDay, commentsByPost }) => {
        this.postsByUserData.set({
          labels: postsByUser.map((item) => this.obtenerNombreUsuarioStat(item)),
          datasets: [
            {
              label: 'Publicaciones',
              data: postsByUser.map((item) => item.count),
              backgroundColor: '#6558e8',
              borderRadius: 8,
            },
          ],
        });
        this.commentsByDayData.set({
          labels: commentsByDay.map((item) => item.date),
          datasets: [
            {
              label: 'Comentarios',
              data: commentsByDay.map((item) => item.count),
              borderColor: '#a398ff',
              backgroundColor: 'rgba(139, 124, 246, 0.18)',
              tension: 0.35,
              fill: true,
              pointBackgroundColor: '#f5f3ff',
              pointBorderColor: '#6558e8',
            },
          ],
        });
        this.commentsByPostStats.set(commentsByPost);
        this.commentsByPostData.set({
          labels: commentsByPost.map((item) => item.postTitle),
          datasets: [
            {
              label: 'Comentarios',
              data: commentsByPost.map((item) => item.count),
              backgroundColor: '#8b7cf6',
              borderRadius: 8,
            },
          ],
        });
        this.cargandoStats.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.error.set(
          this.obtenerMensajeError(error, 'No pudimos cargar las estadisticas.'),
        );
        this.commentsByPostStats.set([]);
        this.cargandoStats.set(false);
      },
    });
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

  private obtenerNombreUsuarioStat(item: PostsByUserStat): string {
    if (item.userName && item.userName !== 'Usuario desconocido') {
      return item.userName;
    }

    return item.email || 'Usuario sin datos';
  }

  private obtenerFechaActual(): string {
    return new Date().toISOString().slice(0, 10);
  }

  private obtenerFechaInicial(): string {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date.toISOString().slice(0, 10);
  }
}
