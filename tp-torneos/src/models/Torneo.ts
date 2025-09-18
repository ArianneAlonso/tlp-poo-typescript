import { IIdentificable } from '../interfaces/IIdentificable.js';
import { Partido } from './Partido.js';
import { Equipo } from './Equipo.js';
import { Deporte } from './Deporte.js';

export class Torneo implements IIdentificable {
  readonly id: string;
  nombre: string;
  private partidos: Partido[] = [];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

 programarPartido(local: Equipo, visitante: Equipo, deporte: Deporte): boolean {
  try {
    const partidoId = `partido_${this.partidos.length + 1}`;
    const partido = new Partido(partidoId, local, visitante, deporte);
    this.partidos.push(partido);
    console.log(`Partido programado: ${partido.toString()}`);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error al programar partido: ${error.message}`);
    } else {
      console.log(`Error al programar partido: ${String(error)}`);
    }
    return false;
  }
}


  listarPartidos(): string[] {
    return this.partidos.map(partido => partido.toString());
  }

  buscarPartido(id: string): Partido | undefined {
    return this.partidos.find(partido => partido.id === id);
  }

  getPartidos(): Partido[] {
    return [...this.partidos];
  }

  toString(): string {
    return `Torneo: ${this.nombre} (${this.partidos.length} partidos)`;
  }
}