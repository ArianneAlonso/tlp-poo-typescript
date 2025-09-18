export class Resultado {
  golesLocal: number;
  golesVisitante: number;

  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  toString(): string {
    return `${this.golesLocal} - ${this.golesVisitante}`;
  }

  getGanador(): 'local' | 'visitante' | 'empate' {
    if (this.golesLocal > this.golesVisitante) return 'local';
    if (this.golesVisitante > this.golesLocal) return 'visitante';
    return 'empate';
  }
}