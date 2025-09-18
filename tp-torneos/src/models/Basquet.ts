import { Deporte } from './Deporte.js';
import { Equipo } from './Equipo.js';

export class Basquet extends Deporte {
  constructor() {
    super('Básquet', 5);
  }

  validar(equipo: Equipo): boolean {
    const esValido = equipo.cantidad <= this.maxPorEquipo && equipo.cantidad > 0;
    if (!esValido) {
      console.log(`Error: El equipo ${equipo.nombre} no es válido para básquet. Tiene ${equipo.cantidad} jugadores (máximo ${this.maxPorEquipo}).`);
    }
    return esValido;
  }
}