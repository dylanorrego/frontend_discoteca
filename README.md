# NOX · Frontend de gestión para discoteca

Frontend responsive para la Evidencia 3 del proyecto Discoteca. Se construyó con HTML5, CSS3 y JavaScript ES2020 con módulos nativos; no usa frameworks, librerías, npm ni bundlers. Está en español y orientado a las 11 historias de usuario del SRS.

## Estado de alcance v3

- Todas las áreas de HU-01 a HU-11 tienen interfaces navegables, formularios con validación inmediata y seis registros de ejemplo por listado.
- Login, registro y recuperación/restablecimiento se presentan como maquetas; no envían ni guardan credenciales reales.
- Los datos dummy viven en `js/data/seed.js`; las acciones de esas pantallas se mantienen en memoria y vuelven al estado semilla al recargar.
- Eventos y fichas técnicas pueden alternarse entre memoria y API; la ficha es hija del evento. Las rutas conectadas requieren un JWT válido porque el backend protege esos endpoints.
- El resto de pantallas no se conecta a API; cumple el alcance limitado de v3.
- Los comentarios y textos de la interfaz se mantienen en español.

## Inicio local

1. Arranca el backend siguiendo su README y prepara sus datos de prueba.
2. Sirve esta carpeta por HTTP (módulos ES no funcionan con `file://`). Por ejemplo, con Python: `python -m http.server 5500`.
3. Abre `http://localhost:5500` en un navegador moderno.
4. Para alternar Eventos/Fichas entre datos locales y API, pulsa **Demo/API** e introduce un token JWT válido. La fuente actual aparece en la cabecera. La dirección de API se cambia en `js/config/config.js`.
5. En la demo no se almacenan datos personales reales ni se realiza autenticación.

> En el backend, agrega el origen local y el dominio de despliegue a `ORIGENES_PERMITIDOS` antes de probar integraciones. La API de ejemplo se sirve en `http://localhost:3000/api`.

## Tecnologías y decisiones

- Atomic Design: átomos (botones, campos, insignias), moléculas (campo validado y tarjetas), organismos (navegación, listados, formularios y diálogo), plantilla del panel y páginas por historia.
- JavaScript organizado en `config/`, `data/`, `services/`, `views/`, `components/` y `utils/`.
- Los servicios de memoria y API comparten `list`, `get`, `create`, `update` y `remove`; las vistas no conocen el origen de los datos.
- POO con campos privados `#`, herencia en servicios y errores HTTP, agregación de catálogos y composición evento→ficha/compra→detalles en contratos y formularios.
- Datos externos se insertan con `textContent`, no con HTML dinámico.
- Formularios con errores de campo en línea, `aria-invalid`, `aria-live` y manejo de errores HTTP 400/422/409.
- `<dialog>` nativo, navegación por teclado, foco visible, menú móvil, tablas a tarjetas, respeto a `prefers-reduced-motion` y layout de 320 a 1920 px.
- Aviso de privacidad de demostración: no se capturan datos verdaderos; la autenticación real y la autorización quedan fuera de alcance.

## Estructura

```text
index.html
css/main.css
js/
  config/   configuración del modo y URL API
  data/     datos dummy (6+ por listado)
  services/ adaptadores de memoria/API y cliente HTTP
  views/    aplicación y renderizado de páginas
  components/ átomos y moléculas de formulario/DOM
  utils/    formatos de moneda y fecha
assets/
docs/
  PLAN.md
  INTERFACES.md
  bocetos/
  capturas/
```

## Pruebas manuales recomendadas

- Navega por las 11 HU, los dos flujos maqueta de acceso y los CRUD dummy.
- Busca y filtra; crea, edita y elimina una fila, incluido el canje de puntos y su máximo del 50 %.
- Eventos: crear/listar/ver ficha técnica/asociar servicios/editar/eliminar. Prueba conflictos 409 de ficha duplicada y detalles 400/422 con API.
- Repite a 360 px y 1366 px, con teclado y lector de pantalla; confirma que no exista desplazamiento horizontal.
- API conectada: verifica `GET/POST/PUT/DELETE /api/eventos` y `GET/POST/PUT/DELETE /api/eventos/:id/ficha` con token vigente.

## Entrega y publicación

`docs/capturas/README.md` contiene la matriz de capturas exigida para 360 y 1366 px. El proyecto es estático y apto para GitHub Pages, Netlify o Vercel. Antes de publicar con integración API, cambia `apiBaseUrl` a HTTPS y configura CORS; la API y el JWT no deben exponerse con secretos de desarrollo. Para el artefacto final, crea el tag `v1.0-evidencia3`, publica el sitio y adjunta el ZIP del repositorio.
