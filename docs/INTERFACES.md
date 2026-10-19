# Trazabilidad de historias e interfaces

Las rutas son hashes de navegación SPA. “Dummy” indica `js/data/seed.js` con cambios en memoria. “API” es únicamente Eventos y Fichas; el servidor exige JWT. Cada listado contiene seis registros salvo fichas (cinco asociadas y un evento sin ficha), todos deliberadamente ficticios.

| HU | Interfaz | Ruta | Fuente / operación |
|---|---|---|---|
| HU-01 | Roles y permisos | `#roles` | Dummy: listado y CRUD en memoria |
| HU-02 | Login, registro y recuperación | `#acceso`, `#registro`, `#recuperar` | Maquetas navegables; sin autenticación ni persistencia real |
| HU-03 | Compras, proveedores e inventario | `#compras`, `#proveedores`, `#inventario` | Dummy: CRUD en memoria, alertas de stock mínimo |
| HU-04 | Control de ingreso QR | `#ingresos` | Dummy: validación demostrativa, puerta e historial |
| HU-05 | Comunidad VIP | `#clientes` | Dummy: alta VIP y prioridad visible |
| HU-06 | Empleados y agenda | `#empleados`, `#agenda` | Dummy: CRUD en memoria |
| HU-07 | Reservas | `#reservas` | Dummy: lista, alta, edición y eliminación; el conflicto API queda fuera de las pantallas conectadas seleccionadas |
| HU-08 | Eventos y ficha técnica | `#eventos`, `#fichas`, `#ficha/:id` | **API** `GET/POST/PUT/DELETE /api/eventos`; hija `GET/POST/PUT/DELETE /api/eventos/:id/ficha`. JWT requerido. Demo alternativa en memoria. |
| HU-09 | Ventas | `#ventas` | Dummy: registro y edición en memoria |
| HU-10 | Fidelización y puntos | `#puntos` | Dummy: consulta y canje, límite demostrativo del 50 % |
| HU-11 | Reportes de desempeño | `#reportes` | Dummy: rankings realistas de muestra |
| Transversal | Notificaciones | `#notificaciones` | Dummy, sin proveedor externo de correo/SMS |

## Operaciones conectadas desde la interfaz

| Recurso | Listado/lectura | Crear | Editar | Eliminar |
|---|---|---|---|---|
| Evento | `GET /api/eventos`, acción de detalle/listado | `POST /api/eventos` | `PUT /api/eventos/:id` | `DELETE /api/eventos/:id` |
| Ficha técnica (hija) | `GET /api/eventos/:id/ficha` | `POST /api/eventos/:id/ficha` | `PUT /api/eventos/:id/ficha` | `DELETE /api/eventos/:id/ficha` |

El 409 al crear una ficha existente, las respuestas 400/422 con `detalles[]`, estados de carga, error y lista vacía se muestran sin recurrir a HTML dinámico. El backend usa el contrato `{ok, mensaje, datos, meta}`.
