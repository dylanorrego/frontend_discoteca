// Cliente HTTP central: traduce el contrato del backend a errores manejables.
import { CONFIG } from '../config/config.js';
export class ErrorApi extends Error {
  #estado; #codigo; #detalles;
  constructor(mensaje, estado = 0, codigo = 'SIN_CONEXION', detalles = []) { super(mensaje); this.name = 'ErrorApi'; this.#estado = estado; this.#codigo = codigo; this.#detalles = Array.isArray(detalles) ? detalles : []; }
  get estado() { return this.#estado; }
  get codigo() { return this.#codigo; }
  get detalles() { return [...this.#detalles]; }
}
export class ClienteHttp {
  #base; #token;
  constructor(base = CONFIG.apiBaseUrl) { this.#base = base.replace(/\/$/, ''); this.#token = ''; }
  establecerToken(token) { this.#token = token || ''; }
  async solicitar(ruta, { metodo = 'GET', datos = null } = {}) {
    const controlador = new AbortController();
    const limite = setTimeout(() => controlador.abort(), 9000);
    try {
      const headers = { Accept: 'application/json' };
      if (datos !== null) headers['Content-Type'] = 'application/json';
      if (this.#token) headers.Authorization = `Bearer ${this.#token}`;
      const respuesta = await fetch(`${this.#base}${ruta}`, { method: metodo, headers, body: datos === null ? undefined : JSON.stringify(datos), signal: controlador.signal });
      const cuerpo = respuesta.status === 204 ? null : await respuesta.json().catch(() => null);
      if (!respuesta.ok) {
        const error = cuerpo?.error || {};
        const detalles = error.detalles || [];
        throw new ErrorApi(error.mensaje || `Error HTTP ${respuesta.status}`, respuesta.status, error.codigo || 'ERROR_HTTP', detalles);
      }
      return cuerpo?.datos ?? cuerpo;
    } catch (error) {
      if (error instanceof ErrorApi) throw error;
      throw new ErrorApi(error.name === 'AbortError' ? 'La API tardó demasiado en responder.' : 'No se pudo conectar con la API. Comprueba la dirección, el servidor y CORS.', 0);
    } finally { clearTimeout(limite); }
  }
}
export const clienteHttp = new ClienteHttp();
