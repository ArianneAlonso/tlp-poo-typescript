import { IIdentificable } from '../interfaces/IIdentificable.js';
import { ICompetidor } from '../interfaces/ICompetidor.js';
import { Jugador } from './Jugador.js';

export class Equipo implements IIdentificable, ICompetidor {
  readonly id: string;
  nombre: string;
  private jugadores: Jugador[] = [];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  agregarJugador(jugador: Jugador): boolean {
    if (this.jugadores.some(j => j.id === jugador.id)) {
      console.log(`Error: El jugador con ID ${jugador.id} ya está en el equipo.`);
      return false;
    }
    this.jugadores.push(jugador);
    return true;
  }

  listarIntegrantes(): string[] {
    return this.jugadores.map(jugador => jugador.nombre);
  }

  get cantidad(): number {
    return this.jugadores.length;
  }

  getJugadores(): Jugador[] {
    return [...this.jugadores];
  }

  toString(): string {
    return `Equipo ${this.nombre} (${this.cantidad} jugadores)`;
  }
}