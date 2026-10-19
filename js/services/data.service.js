// Adaptadores con la misma firma para que las vistas ignoren la fuente.
import { semillas } from '../data/seed.js';
import { clienteHttp } from './http.js';

export class ResourceService {
  async list() { throw new Error('Implementa list()'); }
  async get() { throw new Error('Implementa get()'); }
  async create() { throw new Error('Implementa create()'); }
  async update() { throw new Error('Implementa update()'); }
  async remove() { throw new Error('Implementa remove()'); }
}

export class MemoryService extends ResourceService {
  #filas; #siguiente;
  constructor(filas) { super(); this.#filas = filas.map((fila) => JSON.parse(JSON.stringify(fila))); this.#siguiente = Math.max(0, ...this.#filas.map((fila) => Number(fila.id) || 0)) + 1; }
  async list() { return JSON.parse(JSON.stringify(this.#filas)); }
  async get(id) { const fila = this.#filas.find((item) => String(item.id) === String(id)); if (!fila) throw new Error('No se encontró el registro.'); return JSON.parse(JSON.stringify(fila)); }
  async create(datos) { const fila = { ...datos, id: this.#siguiente++ }; this.#filas.unshift(fila); return JSON.parse(JSON.stringify(fila)); }
  async update(id, datos) { const indice = this.#filas.findIndex((item) => String(item.id) === String(id)); if (indice < 0) throw new Error('No se encontró el registro.'); this.#filas[indice] = { ...this.#filas[indice], ...datos, id: this.#filas[indice].id }; return JSON.parse(JSON.stringify(this.#filas[indice])); }
  async remove(id) { const indice = this.#filas.findIndex((item) => String(item.id) === String(id)); if (indice < 0) throw new Error('No se encontró el registro.'); return JSON.parse(JSON.stringify(this.#filas.splice(indice, 1)[0])); }
}

export class ApiResourceService extends ResourceService {
  #ruta; #normalizar;
  constructor(ruta, normalizar = (x) => x) { super(); this.#ruta = ruta; this.#normalizar = normalizar; }
  async list() { const resultado = await clienteHttp.solicitar(this.#ruta); const filas = Array.isArray(resultado) ? resultado : resultado?.eventos || resultado?.fichas || resultado?.datos || []; return filas.map(this.#normalizar); }
  async get(id) { return this.#normalizar(await clienteHttp.solicitar(`${this.#ruta}/${id}`)); }
  async create(datos) { return this.#normalizar(await clienteHttp.solicitar(this.#ruta, { metodo: 'POST', datos })); }
  async update(id, datos) { return this.#normalizar(await clienteHttp.solicitar(`${this.#ruta}/${id}`, { metodo: 'PUT', datos })); }
  async remove(id) { return this.#normalizar(await clienteHttp.solicitar(`${this.#ruta}/${id}`, { metodo: 'DELETE' })); }
}

class FichaApiService extends ResourceService {
  #rutaDe(idEvento) { return `/eventos/${encodeURIComponent(idEvento)}/ficha`; }
  async list(idEvento) { try { return [await this.get(idEvento)]; } catch (error) { if (error.estado === 409 || error.estado === 404) return []; throw error; } }
  async get(idEvento) { const ficha = await clienteHttp.solicitar(this.#rutaDe(idEvento)); return { ...ficha, id: ficha.id ?? ficha.idFichaTecnica ?? ficha.id_ficha_tecnica, idEvento: ficha.idEvento ?? ficha.id_evento, tematica: ficha.tematica, franjaHoraria: ficha.franjaHoraria ?? ficha.franja_horaria, cantidadInvitados: ficha.cantidadInvitados ?? ficha.cantidad_invitados, observaciones: ficha.observaciones, servicios: ficha.servicios ?? [] }; }
  async create(idEvento, datos) { return this.getAfterWrite(idEvento, 'POST', datos); }
  async update(idEvento, datos) { return this.getAfterWrite(idEvento, 'PUT', datos); }
  async remove(idEvento) { return clienteHttp.solicitar(this.#rutaDe(idEvento), { metodo: 'DELETE' }); }
  async getAfterWrite(idEvento, metodo, datos) { await clienteHttp.solicitar(this.#rutaDe(idEvento), { metodo, datos }); return this.get(idEvento); }
}

export const crearServicios = (modo) => {
  const servicios = {};
  for (const [clave, filas] of Object.entries(semillas)) servicios[clave] = new MemoryService(filas);
  if (modo === 'api') {
    servicios.eventos = new ApiResourceService('/eventos', (evento) => ({ id: evento.id ?? evento.idEvento, nombre: evento.nombre, tematica: evento.tematica, tipoEvento: evento.tipoEvento ?? evento.tipo_evento, fecha: evento.fecha, horaInicio: evento.horaInicio ?? evento.hora_inicio, horaFin: evento.horaFin ?? evento.hora_fin, estado: evento.estado }));
    servicios.fichas = new FichaApiService();
  }
  return servicios;
};
