// Semillas coherentes con la operación nocturna; todas las listas superan cinco registros.
const fecha = (dia) => `2026-10-${String(dia).padStart(2, '0')}`;
export const semillas = {
  eventos: [
    {id:1,nombre:'Neón en la pista',tematica:'Neón',tipoEvento:'tematico',fecha:fecha(24),horaInicio:'21:00',horaFin:'04:00',estado:'programado'},
    {id:2,nombre:'Noche de clásicos',tematica:'80s & 90s',tipoEvento:'tematico',fecha:fecha(25),horaInicio:'20:30',horaFin:'03:30',estado:'programado'},
    {id:3,nombre:'Ritmo tropical',tematica:'Tropical',tipoEvento:'tematico',fecha:fecha(30),horaInicio:'21:00',horaFin:'04:00',estado:'programado'},
    {id:4,nombre:'Luna llena',tematica:'House',tipoEvento:'tematico',fecha:'2026-11-01',horaInicio:'22:00',horaFin:'05:00',estado:'programado'},
    {id:5,nombre:'Cumpleaños Camila',tematica:'Fiesta privada · dorado',tipoEvento:'fiesta_privada',fecha:'2026-11-07',horaInicio:'20:00',horaFin:'02:00',estado:'en_curso'},
    {id:6,nombre:'Halloween NOX',tematica:'Disfraces',tipoEvento:'tematico',fecha:'2026-10-31',horaInicio:'21:00',horaFin:'05:00',estado:'programado'}
  ],
  fichas: [
    {id:1,idEvento:1,tematica:'Neón futurista',franjaHoraria:'21:00–04:00',cantidadInvitados:320,observaciones:'Pulseras fluorescentes y visuales UV.',servicios:[{idServicio:1,cantidadRequerida:1},{idServicio:2,cantidadRequerida:4},{idServicio:3,cantidadRequerida:2}]},
    {id:2,idEvento:2,tematica:'Regreso a los 90',franjaHoraria:'20:30–03:30',cantidadInvitados:240,observaciones:'Set de clásicos y zona de fotos.',servicios:[{idServicio:1,cantidadRequerida:1},{idServicio:4,cantidadRequerida:2}]},
    {id:3,idEvento:3,tematica:'Caribe nocturno',franjaHoraria:'21:00–04:00',cantidadInvitados:280,observaciones:'Decoración tropical en pista.',servicios:[{idServicio:1,cantidadRequerida:1},{idServicio:3,cantidadRequerida:3}]},
    {id:4,idEvento:4,tematica:'Deep house',franjaHoraria:'22:00–05:00',cantidadInvitados:200,observaciones:'Iluminación tenue.',servicios:[{idServicio:2,cantidadRequerida:2}]},
    {id:5,idEvento:6,tematica:'Halloween elegante',franjaHoraria:'21:00–05:00',cantidadInvitados:400,observaciones:'Concurso de disfraces a medianoche.',servicios:[{idServicio:1,cantidadRequerida:1},{idServicio:2,cantidadRequerida:4},{idServicio:4,cantidadRequerida:2}]}
  ],
  servicios: [
    {id:1,nombre:'DJ residente',categoria:'Música',precio:650000,estado:'Activo'},
    {id:2,nombre:'Mesero de barra',categoria:'Bar',precio:120000,estado:'Activo'},
    {id:3,nombre:'Acceso y recepción',categoria:'Operación',precio:140000,estado:'Activo'},
    {id:4,nombre:'Iluminación y visuales',categoria:'Producción',precio:380000,estado:'Activo'},
    {id:5,nombre:'Seguridad privada',categoria:'Operación',precio:210000,estado:'Activo'},
    {id:6,nombre:'Decoración temática',categoria:'Producción',precio:290000,estado:'Activo'}
  ],
  clientes: [
    {id:1,nombre:'Valentina Restrepo',correo:'valentina.r@email.com',telefono:'300 555 0101',categoria:'Oro',vip:true,estado:'Activo'},
    {id:2,nombre:'Mateo Giraldo',correo:'mateo.g@email.com',telefono:'301 555 0148',categoria:'Plata',vip:false,estado:'Activo'},
    {id:3,nombre:'Camila Ospina',correo:'camila.o@email.com',telefono:'302 555 0122',categoria:'Oro',vip:true,estado:'Activo'},
    {id:4,nombre:'Samuel Vélez',correo:'samuel.v@email.com',telefono:'304 555 0183',categoria:'General',vip:false,estado:'Activo'},
    {id:5,nombre:'Isabella Duque',correo:'isabella.d@email.com',telefono:'305 555 0166',categoria:'Oro',vip:true,estado:'Activo'},
    {id:6,nombre:'Nicolás Mejía',correo:'nicolas.m@email.com',telefono:'310 555 0192',categoria:'Plata',vip:false,estado:'Activo'}
  ],
  reservas: [
    {id:1,cliente:'Valentina Restrepo',espacio:'VIP · Terraza 01',fecha:fecha(24),personas:8,total:480000,estado:'Confirmada'},
    {id:2,cliente:'Mateo Giraldo',espacio:'Mesa · Pista 04',fecha:fecha(24),personas:5,total:220000,estado:'Pendiente'},
    {id:3,cliente:'Camila Ospina',espacio:'VIP · Terraza 02',fecha:fecha(25),personas:10,total:620000,estado:'Confirmada'},
    {id:4,cliente:'Samuel Vélez',espacio:'Mesa · Pista 02',fecha:fecha(25),personas:4,total:180000,estado:'Pendiente'},
    {id:5,cliente:'Isabella Duque',espacio:'VIP · Terraza 03',fecha:fecha(30),personas:12,total:790000,estado:'Confirmada'},
    {id:6,cliente:'Nicolás Mejía',espacio:'Mesa · Pista 06',fecha:'2026-11-01',personas:6,total:250000,estado:'Pendiente'}
  ],
  inventario: [
    {id:1,producto:'Aguardiente Antioqueño 750 ml',categoria:'Licores',stock:18,minimo:24,precio:69000,proveedor:'Licores del Valle',estado:'Reponer'},
    {id:2,producto:'Ron Medellín 8 años',categoria:'Licores',stock:42,minimo:18,precio:89000,proveedor:'Distribuciones R&R',estado:'Disponible'},
    {id:3,producto:'Vodka Smirnoff 700 ml',categoria:'Licores',stock:35,minimo:15,precio:76000,proveedor:'Licores del Valle',estado:'Disponible'},
    {id:4,producto:'Agua con gas 300 ml',categoria:'Bebidas',stock:12,minimo:30,precio:3500,proveedor:'Bebidas Andinas',estado:'Reponer'},
    {id:5,producto:'Cerveza artesanal IPA',categoria:'Cervezas',stock:68,minimo:24,precio:12500,proveedor:'Cervecería Libre',estado:'Disponible'},
    {id:6,producto:'Energizante 250 ml',categoria:'Bebidas',stock:56,minimo:20,precio:9000,proveedor:'Bebidas Andinas',estado:'Disponible'}
  ],
  proveedores: [
    {id:1,nombre:'Licores del Valle',contacto:'Laura Cárdenas',telefono:'604 448 1212',correo:'pedidos@licoresvalle.co',estado:'Activo'},
    {id:2,nombre:'Distribuciones R&R',contacto:'Andrés Ruiz',telefono:'604 332 0088',correo:'ventas@ryr.co',estado:'Activo'},
    {id:3,nombre:'Bebidas Andinas',contacto:'Diana Gil',telefono:'604 400 7788',correo:'comercial@andinas.co',estado:'Activo'},
    {id:4,nombre:'Cervecería Libre',contacto:'Juan Pablo Mora',telefono:'604 322 1456',correo:'hola@cervecerialibre.co',estado:'Activo'},
    {id:5,nombre:'Hielo Polar',contacto:'María Vélez',telefono:'604 288 9771',correo:'pedidos@hielopolar.co',estado:'Activo'},
    {id:6,nombre:'Logística Nocturna',contacto:'Felipe Cano',telefono:'604 345 9001',correo:'operacion@ln.co',estado:'Inactivo'}
  ],
  empleados: [
    {id:1,nombre:'Santiago Arango',cargo:'DJ residente',turno:'21:00 – 04:00',evento:'Neón en la pista',estado:'Asignado'},
    {id:2,nombre:'Daniela Pardo',cargo:'Jefa de barra',turno:'20:00 – 04:00',evento:'Noche de clásicos',estado:'Asignado'},
    {id:3,nombre:'Felipe Castaño',cargo:'Control de acceso',turno:'20:30 – 03:30',evento:'Ritmo tropical',estado:'Asignado'},
    {id:4,nombre:'Mariana Toro',cargo:'Mesera',turno:'21:00 – 04:00',evento:'Neón en la pista',estado:'Asignado'},
    {id:5,nombre:'Andrés Londoño',cargo:'Seguridad',turno:'20:00 – 05:00',evento:'Halloween NOX',estado:'Pendiente'},
    {id:6,nombre:'Laura Palacio',cargo:'Producción',turno:'18:00 – 01:00',evento:'Cumpleaños Camila',estado:'Asignado'}
  ],
  compras: [
    {id:1,proveedor:'Licores del Valle',fecha:fecha(18),items:4,total:1845000,estado:'Recibida'},
    {id:2,proveedor:'Bebidas Andinas',fecha:fecha(17),items:3,total:630000,estado:'Pendiente'},
    {id:3,proveedor:'Cervecería Libre',fecha:fecha(15),items:2,total:925000,estado:'Recibida'},
    {id:4,proveedor:'Hielo Polar',fecha:fecha(13),items:1,total:180000,estado:'Recibida'},
    {id:5,proveedor:'Distribuciones R&R',fecha:fecha(10),items:5,total:2670000,estado:'Pendiente'},
    {id:6,proveedor:'Bebidas Andinas',fecha:fecha(8),items:2,total:440000,estado:'Anulada'}
  ],
  ventas: [
    {id:1,cliente:'Valentina Restrepo',fecha:fecha(18),productos:'2 × Gin tonic · 1 × Agua',total:158000,estado:'Pagada'},
    {id:2,cliente:'Mateo Giraldo',fecha:fecha(18),productos:'4 × Cerveza IPA',total:50000,estado:'Pagada'},
    {id:3,cliente:'Camila Ospina',fecha:fecha(17),productos:'1 × Ron Medellín · 3 × Tónica',total:128000,estado:'Pagada'},
    {id:4,cliente:'Samuel Vélez',fecha:fecha(17),productos:'2 × Aguardiente',total:138000,estado:'Pendiente'},
    {id:5,cliente:'Isabella Duque',fecha:fecha(16),productos:'1 × Vodka · 2 × Energizante',total:94000,estado:'Pagada'},
    {id:6,cliente:'Nicolás Mejía',fecha:fecha(15),productos:'6 × Cerveza IPA',total:75000,estado:'Pagada'}
  ],
  puntos: [
    {id:1,cliente:'Valentina Restrepo',puntos:1840,nivel:'Oro',ultimoMovimiento:'2026-10-18'},
    {id:2,cliente:'Camila Ospina',puntos:1520,nivel:'Oro',ultimoMovimiento:'2026-10-17'},
    {id:3,cliente:'Isabella Duque',puntos:990,nivel:'Oro',ultimoMovimiento:'2026-10-16'},
    {id:4,cliente:'Mateo Giraldo',puntos:620,nivel:'Plata',ultimoMovimiento:'2026-10-18'},
    {id:5,cliente:'Nicolás Mejía',puntos:410,nivel:'Plata',ultimoMovimiento:'2026-10-15'},
    {id:6,cliente:'Samuel Vélez',puntos:180,nivel:'General',ultimoMovimiento:'2026-10-12'}
  ],
  ingresos: [
    {id:1,cliente:'Valentina Restrepo',hora:'22:14',puerta:'Principal',tipo:'QR válido',prioridad:'VIP'},
    {id:2,cliente:'Mateo Giraldo',hora:'22:19',puerta:'Principal',tipo:'QR válido',prioridad:'General'},
    {id:3,cliente:'Camila Ospina',hora:'22:25',puerta:'VIP',tipo:'QR válido',prioridad:'VIP'},
    {id:4,cliente:'Samuel Vélez',hora:'22:31',puerta:'Principal',tipo:'QR válido',prioridad:'General'},
    {id:5,cliente:'Isabella Duque',hora:'22:35',puerta:'VIP',tipo:'QR válido',prioridad:'VIP'},
    {id:6,cliente:'Nicolás Mejía',hora:'22:42',puerta:'Principal',tipo:'QR válido',prioridad:'General'}
  ],
  roles: [
    {id:1,nombre:'Administrador',descripcion:'Acceso completo a la operación',permisos:'Gestión total',estado:'Activo'},
    {id:2,nombre:'Operador de puerta',descripcion:'Control de ingreso y aforo',permisos:'Ingresos · Clientes',estado:'Activo'},
    {id:3,nombre:'Operador de bar',descripcion:'Ventas y pedidos',permisos:'Ventas · Inventario',estado:'Activo'},
    {id:4,nombre:'Gestión de eventos',descripcion:'Agenda y producción',permisos:'Eventos · Servicios',estado:'Activo'},
    {id:5,nombre:'Cliente',descripcion:'Reservas y fidelización',permisos:'Reservas · Puntos',estado:'Activo'},
    {id:6,nombre:'Auditor',descripcion:'Consulta de operación',permisos:'Reportes · Bitácora',estado:'Inactivo'}
  ],
  agenda: [
    {id:1,empleado:'Santiago Arango',servicio:'DJ residente',evento:'Neón en la pista',fecha:fecha(24),hora:'21:00',estado:'Confirmado'},
    {id:2,empleado:'Daniela Pardo',servicio:'Mesero de barra',evento:'Noche de clásicos',fecha:fecha(25),hora:'20:00',estado:'Confirmado'},
    {id:3,empleado:'Felipe Castaño',servicio:'Acceso y recepción',evento:'Ritmo tropical',fecha:fecha(30),hora:'20:30',estado:'Confirmado'},
    {id:4,empleado:'Mariana Toro',servicio:'Mesero de barra',evento:'Neón en la pista',fecha:fecha(24),hora:'21:00',estado:'Confirmado'},
    {id:5,empleado:'Andrés Londoño',servicio:'Seguridad privada',evento:'Halloween NOX',fecha:'2026-10-31',hora:'20:00',estado:'Pendiente'},
    {id:6,empleado:'Laura Palacio',servicio:'Iluminación y visuales',evento:'Cumpleaños Camila',fecha:'2026-11-07',hora:'18:00',estado:'Confirmado'}
  ],
  notificaciones: [
    {id:1,asunto:'Neón en la pista',destinatario:'Clientes VIP',fecha:fecha(19),canal:'En la app',estado:'Programada'},
    {id:2,asunto:'Recordatorio de reserva',destinatario:'Valentina Restrepo',fecha:fecha(18),canal:'Correo simulado',estado:'Enviada'},
    {id:3,asunto:'Puntos acreditados',destinatario:'Mateo Giraldo',fecha:fecha(18),canal:'En la app',estado:'Enviada'},
    {id:4,asunto:'Cumpleaños Camila',destinatario:'Camila Ospina',fecha:fecha(17),canal:'Correo simulado',estado:'Enviada'},
    {id:5,asunto:'Noche de clásicos',destinatario:'Todos los clientes',fecha:fecha(16),canal:'En la app',estado:'Programada'},
    {id:6,asunto:'Alerta de stock mínimo',destinatario:'Administración',fecha:fecha(18),canal:'Panel',estado:'Pendiente'}
  ]
};
