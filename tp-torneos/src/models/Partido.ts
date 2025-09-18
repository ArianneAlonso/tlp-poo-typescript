import { IIdentificable } from '../interfaces/IIdentificable.js';
import { Equipo } from './Equipo.js';
import { Deporte } from './Deporte.js';
import { Resultado } from './Resultado.js';

export class Partido implements IIdentificable {
  readonly id: string;
  local: Equipo;
  visitante: Equipo;
  deporte: Deporte;
  private resultado?: Resultado;

  constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte) {
    if (local.id === visitante.id) {
      throw new Error('Un equipo no puede jugar contra sí mismo');
    }
    
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  jugar(): boolean {
    if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
      console.log('No se puede jugar el partido: uno o ambos equipos no son válidos para este deporte.');
      return false;
    }

    const golesLocal = Math.floor(Math.random() * 4);
    const golesVisitante = Math.floor(Math.random() * 4);
    this.resultado = new Resultado(golesLocal, golesVisitante);
    
    console.log(`partido jugado ${this.toString()}`);
    return true;
  }

  getResultado(): Resultado | undefined {
    return this.resultado;
  }

  toString(): string {
    const resultadoStr = this.resultado ? ` - Resultado: ${this.resultado.toString()}` : ' - No jugado';
    return `${this.local.nombre} vs ${this.visitante.nombre} (${this.deporte.nombre})${resultadoStr}`;
  }
}