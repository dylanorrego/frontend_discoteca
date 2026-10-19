// Formatos compartidos para mantener consistencia en COP y en fechas.
import { CONFIG } from '../config/config.js';
export const moneda = (valor) => new Intl.NumberFormat(CONFIG.locale, { style: 'currency', currency: CONFIG.moneda, maximumFractionDigits: 0 }).format(Number(valor) || 0);
export const fechaVisible = (valor) => { if (!valor) return '—'; const fecha = new Date(`${String(valor).slice(0, 10)}T12:00:00`); return Number.isNaN(fecha.valueOf()) ? String(valor) : new Intl.DateTimeFormat(CONFIG.locale, { day: '2-digit', month: 'short', year: 'numeric' }).format(fecha); };
export const texto = (valor) => valor === null || valor === undefined || valor === '' ? '—' : typeof valor === 'boolean' ? (valor ? 'Sí' : 'No') : String(valor);
