import { IIdentificable } from '../interfaces/IIdentificable.js';

export class Jugador implements IIdentificable {
  readonly id: string;
  nombre: string;
  edad: number;
  posicion?: string;

  constructor(id: string, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }

  toString(): string {
    const posicionStr = this.posicion ? ` (${this.posicion})` : '';
    return `${this.nombre} - ${this.edad} años${posicionStr}`;
  }
}