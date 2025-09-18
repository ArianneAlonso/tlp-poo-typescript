import { Deporte } from './Deporte.js';
import { Equipo } from './Equipo.js';

export class Futbol extends Deporte {
  constructor() {
    super('Fútbol', 11);
  }

  validar(equipo: Equipo): boolean {
    const esValido = equipo.cantidad <= this.maxPorEquipo && equipo.cantidad > 0;
    if (!esValido) {
      console.log(`Error: El equipo ${equipo.nombre} no es válido para fútbol. Tiene ${equipo.cantidad} jugadores (máximo ${this.maxPorEquipo}).`);
    }
    return esValido;
  }
}