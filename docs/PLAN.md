# Plan de ejecución · Sprint Evidencia 3

## Análisis previo

El README del proyecto docente establece la separación frontend/backend, módulos vanilla, Atomic Design, tokens CSS, BEM, POO con campos privados, validación acumulativa, `<dialog>`, accesibilidad y servicio HTTP centralizado. La API de Discoteca usa Node.js/Express/MySQL, responde `{ ok, mensaje, datos, meta }`, exige JWT en eventos/fichas y maneja conflictos de negocio con HTTP 409. La base entregada declara las relaciones `evento → ficha_tecnica` 1:1 y `ficha_tecnica ↔ servicios` N:M. Las 11 HU y los RNF del SRS definen las interfaces y los estados.

## Orden por dependencias

1. **Contrato y modelo de datos** — mapear HU, entidades, relaciones, rutas conectadas, estados, campos obligatorios y fuentes.
2. **Fundación visual y accesible** — tokens NOX, estilos adaptables, navegación, átomos, moléculas, organismos y plantilla de administración.
3. **Capa de datos intercambiable** — semillas realistas, servicios en memoria y API con firmas equivalentes, cliente HTTP, errores 400/422/409.
4. **Gestión de eventos y ficha técnica (API)** — listados, crear, consultar, editar y eliminar; JWT y mensajes de validación/conflicto.
5. **Operación dummy** — roles, inventario/compras/proveedores, ingreso/VIP, personal/agenda/reservas, clientes/ventas/puntos, reportes/notificaciones.
6. **Acceso de demostración** — login, registro, recuperación y restablecimiento navegables, sin autenticación real ni envío de secretos.
7. **Calidad de interfaz** — validación en línea, teclado, privacidad, respuesta móvil/escritorio y estados vacíos/errores.
8. **Evidencia y entrega** — matriz HU-ruta-fuente, bocetos, capturas 360/1366, README, repositorio/commit, etiqueta y despliegue público. El tag local está creado; el repositorio remoto, capturas autorizadas y Pages requieren acceso a la cuenta.

## Plan de pruebas de aceptación

| Prueba | Criterio |
|---|---|
| Cobertura | Las 11 HU navegan desde menú; login/recuperación también son maquetas navegables. |
| Datos | Cada listado muestra 6 registros coherentes; acciones CRUD se reflejan en memoria durante la sesión. |
| Integración | Eventos y fichas cubren lista/lectura/alta/edición/baja contra los endpoints anidados previstos. |
| Formularios | Requeridos y formatos se validan junto al control antes de guardar; errores API por campo se conservan. |
| Conflictos | La API muestra el conflicto 409 de ficha duplicada y reserva/validación se comporta según el alcance. |
| Accesibilidad | Semántica, etiquetas, nombre accesible, estado anunciado, foco visible, teclado y diálogo nativo. |
| Responsive | Revisión a 360 px y 1366 px; tarjetas en móvil, sin desbordamiento horizontal. |
| Privacidad | No introducir PII real; login y registro demo no llaman autenticación ni persisten credenciales. |

## Restricciones y riesgos

- Los servicios de Eventos/Ficha requieren token válido; no se implementa autenticación JWT en el frontend para respetar v3. El operador puede introducir token temporal para validar la integración.
- El despliegue con API necesita HTTPS, CORS y URL de backend pública. GitHub Pages por sí solo no aloja la API.
- El material recibido no trae wireframes; los conceptos visuales se documentan en `docs/bocetos/`.
- El SRS menciona Ley 1581, aforo y turno nocturno: la demo usa únicamente nombres ficticios, aviso de privacidad y alerta referencial de inventario/aforo; no afirma cumplimiento legal ni control de seguridad real.
