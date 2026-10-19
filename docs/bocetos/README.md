# Bocetos de interfaz NOX

No se recibieron wireframes aprobados. Estos bocetos traducen la pauta SRS (panel administrativo con navegación lateral) a una identidad nocturna propia: fondo grafito, acento lima, jerarquía tipográfica compacta y señalización por texto además de color.

## Escritorio (1366 px)

```text
┌───────────────┬──────────────────────────────────────────────────────────┐
│ NOX           │ NOX / Eventos                API · usuario                │
│ NIGHT MGMT    ├──────────────────────────────────────────────────────────┤
│ PANEL         │ EVENTOS · EVE                        [+ Nuevo evento]     │
│   Resumen     │ Eventos próximos │ Fichas │ Servicios │ Aforo             │
│ OPERACIÓN     │ ┌──────────────────────────────────────────────────────┐ │
│   Eventos     │ │ Buscar…                    Estado      Limpiar         │ │
│   Fichas      │ │ EVENTO · TEMÁTICA · FECHA · HORARIO · ESTADO · ACCIÓN │ │
│   Reservas    │ │ Neón   · 24 oct · 21–04 · Programado · Ver / editar   │ │
│   Ingreso     │ └──────────────────────────────────────────────────────┘ │
│ GESTIÓN       │                                                          │
│   Inventario  │                                                          │
└───────────────┴──────────────────────────────────────────────────────────┘
```

## Móvil (360 px)

```text
┌────────────────────────────┐
│ ☰  NOX / Eventos     Demo  │
│ EVENTOS                    │
│ Programa las noches…       │
│ [+ Nuevo evento]           │
│ ┌────────────────────────┐ │
│ │ Neón en la pista   •   │ │
│ │ Temática: Neón         │ │
│ │ Fecha: 24 oct          │ │
│ │ [Ficha] [Editar]       │ │
│ └────────────────────────┘ │
└────────────────────────────┘
```

Los registros son tarjetas en móvil, el menú se convierte en panel desplegable y los formularios usan `<dialog>`. La producción debe capturar las vistas reales en `docs/capturas/` siguiendo su checklist.
