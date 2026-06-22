# NetSocial - notas de continuidad

## 1. Resumen

NetSocial es una red social con:

- Frontend Angular 21.
- Backend NestJS 11.
- MongoDB con Mongoose.
- JWT para autenticación.
- Cloudinary para avatares e imágenes.
- PrimeNG y PrimeIcons.
- Tema visual oscuro violeta.

Puertos de desarrollo:

- Frontend: `http://localhost:4200`
- Backend: `http://localhost:3000`

## 2. Cómo iniciar

Backend:

```powershell
cd server
npm install
npm run start:dev
```

Frontend:

```powershell
cd front
npm install
npm run start
```

Variables necesarias en `server/.env`:

```env
MONGO_URL=...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

No subir `.env` al repositorio.

## 3. Funcionalidades terminadas

### Autenticación

- Registro con nombre, apellido, correo, contraseña y avatar opcional.
- Login con JWT.
- Token guardado actualmente en `localStorage` como `accessToken`.
- Logout elimina el token.
- `AuthGuard` valida `Authorization: Bearer TOKEN`.

Pendiente recomendado: migrar el token a cookie `HttpOnly`.

### Roles

Roles disponibles:

```ts
user
admin
```

- Usuarios nuevos reciben `user`.
- El rol se incluye en el JWT durante el login.
- `RolesGuard` valida endpoints administrativos.
- `GET /users` es sólo para administradores.
- Un admin puede eliminar publicaciones de cualquier usuario.
- Un usuario común sólo elimina publicaciones propias.
- `/admin` está protegido también con `adminGuard` en Angular.

Para hacer admin a un usuario:

1. Cambiar `role` a `admin` en MongoDB.
2. Cerrar sesión.
3. Iniciar sesión nuevamente para generar otro JWT.

### Timeline

- Menú lateral fijo estilo Twitter.
- En escritorio muestra iconos y etiquetas.
- En pantallas pequeñas muestra sólo iconos.
- Timeline centrado y responsive.
- Posts cargados desde el backend.
- Estado de carga, error y lista vacía.
- Nuevo post aparece primero sin recargar.

### Publicaciones

Cada publicación muestra:

- Avatar.
- Nombre y username.
- Fecha relativa.
- Contenido.
- Imagen opcional.
- Cantidad de comentarios.
- Likes.
- Papelera si pertenece al usuario o el usuario es admin.

Acciones:

- Crear publicación con texto e imagen.
- Imágenes almacenadas en Cloudinary.
- Like toggle.
- Comentar.
- Navegar al detalle.
- Eliminar publicación.

Al eliminar un post también se eliminan:

- Sus comentarios.
- Su documento en MongoDB.
- Su imagen de Cloudinary.

### Comentarios

- Modal para responder una publicación.
- Muestra `Estás respondiendo a @usuario`.
- Usa el avatar del usuario autenticado.
- Máximo de 200 caracteres.
- Comentarios obtenidos desde:

```http
GET /posts/:postId/comments
```

- `CommentsService` mantiene una caché por post.
- Un comentario nuevo se añade a la lista sin recargar.

### PostDetail

Ruta:

```text
/posts/:id
```

Muestra:

- Navbar sin cambios.
- Publicación seleccionada.
- Likes y comentarios activos.
- Lista de comentarios debajo.
- Botón para volver al timeline.

### Perfil

Ruta:

```text
/perfil
```

Muestra:

- Avatar.
- Nombre.
- Apellido.
- Username.
- Correo electrónico.
- Las últimas 3 publicaciones propias.
- Comentarios de esas publicaciones.

No expone:

- Contraseña.
- `avatarPublicId`.
- `imagePublicId`.

### Panel administrativo

Ruta:

```text
/admin
```

- Sólo aparece en el navbar para admins.
- Tiene guard de Angular.
- Por ahora es una pantalla vacía preparada para funciones futuras.

## 4. Rutas del frontend

| Ruta | Componente |
|---|---|
| `/inicio` | Login |
| `/registro` | Registro |
| `/timeline` | Timeline |
| `/posts/:id` | Detalle del post |
| `/perfil` | Perfil |
| `/admin` | Panel admin |

## 5. Endpoints principales

### Auth

```http
POST /auth/register
POST /auth/login
```

### Usuarios

```http
GET /users/me
GET /users
```

`GET /users` requiere rol `admin`.

### Posts

```http
POST   /posts/create
GET    /posts
GET    /posts/:id
PATCH  /posts/:id/like
DELETE /posts/:id
```

### Comentarios

```http
POST /posts/:postId/comments
GET  /posts/:postId/comments
```

## 6. Estructura importante

Frontend:

```text
front/src/app/
├── components/
│   ├── login/
│   ├── register/
│   ├── navbar/
│   ├── timeline/
│   ├── posts/
│   ├── crearpost/
│   ├── crearcomentario/
│   ├── comment/
│   ├── post-detail/
│   ├── profile/
│   └── admin-panel/
├── guards/
│   └── admin.guard.ts
├── models/
│   ├── post.ts
│   └── comment.ts
└── services/
    ├── auth.ts
    ├── users.ts
    ├── posts.ts
    └── comments.ts
```

Backend:

```text
server/src/
├── auth/
│   ├── auth.guard.ts
│   ├── roles.guard.ts
│   ├── roles.decorator.ts
│   └── interfaces/jwt-payload.interface.ts
├── cloudinary/
│   ├── cloudinary.module.ts
│   └── cloudinary.service.ts
├── users/
├── posts/
└── comments/
```

## 7. Decisiones técnicas

### Signals

Angular Signals se usan para:

- Posts.
- Likes.
- Comentarios.
- Loading.
- Errores.
- Usuario actual.

### Observables

Los servicios mantienen `Observable` porque `HttpClient` los devuelve de forma nativa.

### Likes

La fuente real es:

```ts
post.likes: string[]
```

El frontend compara el ID actual con ese arreglo.

### Cloudinary

Multer usa `memoryStorage()`.

Flujo:

```text
Angular FormData
→ NestJS/Multer buffer
→ Cloudinary
→ URL + publicId en MongoDB
```

Los assets se organizan en:

```text
netsocial/avatars
netsocial/posts
```

## 8. Pendientes recomendados

Prioridad alta:

- Migrar JWT desde `localStorage` a cookie `HttpOnly`.
- Agregar interceptor HTTP para evitar repetir headers JWT.
- Agregar guard de autenticación para timeline, perfil y detalle.
- Implementar refresh token o expiración controlada.
- Manejar errores con mensajes visibles en likes y eliminación.

Funcionalidades:

- Completar panel administrativo.
- Gestión de usuarios.
- Eliminar comentarios.
- Likes en comentarios.
- Editar perfil.
- Cambiar avatar.
- Notificaciones reales.
- Paginación o scroll infinito del timeline.
- Búsqueda.

Consigna académica pendiente:

- Implementar PWA.
- Crear 3 pipes propios.
- Crear 3 directivas propias.

## 9. Advertencias actuales

- PrimeIcons supera el presupuesto de advertencia CSS, pero no bloquea el build.
- Los archivos antiguos de `server/uploads` pueden seguir existiendo; las cargas nuevas usan Cloudinary.
- Si cambia un rol en MongoDB, hay que iniciar sesión nuevamente.
- Reiniciar NestJS después de cambiar backend o `.env`.
- Reiniciar Angular cuando cambia configuración global de PrimeNG.

## 10. Verificación

Comandos usados:

```powershell
cd server
npm run build

cd ../front
npm run build
```

Ambos builds finalizaron correctamente al crear este documento.
