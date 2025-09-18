import { Jugador } from './models/Jugador.js';
import { Equipo } from './models/Equipo.js';
import { Futbol } from './models/Futbol.js';
import { Basquet } from './models/Basquet.js';
import { Torneo } from './models/Torneo.js';
import { Deporte } from './models/Deporte.js';

// Jugadores de fútbol
const messi = new Jugador('j1', 'Lionel Messi', 36, 'Delantero');
const ramos = new Jugador('j2', 'Sergio Ramos', 37, 'Defensor');

// Jugadores de básquet
const lebron = new Jugador('j3', 'LeBron James', 39, 'Alero');
const curry = new Jugador('j4', 'Stephen Curry', 35, 'Base');

// Equipos
const equipoFutbol = new Equipo('eq1', 'Real Madrid');
equipoFutbol.agregarJugador(messi);
equipoFutbol.agregarJugador(ramos);

const equipoBasquet = new Equipo('eq2', 'Lakers');
equipoBasquet.agregarJugador(lebron);
equipoBasquet.agregarJugador(curry);

console.log(`- ${equipoFutbol.toString()}`);
console.log(`- ${equipoBasquet.toString()}`);

//validacion de los equipos para futbol y basquet
const futbol = new Futbol();
const basquet = new Basquet();
console.log(`Equipo fútbol válido para fútbol: ${futbol.validar(equipoFutbol)}`);
console.log(`Equipo básquet válido para básquet: ${basquet.validar(equipoBasquet)}`);


const deportes: Deporte[] = [futbol, basquet];
const equipos = [equipoFutbol, equipoBasquet];

deportes.forEach(deporte => {
  console.log(`\n${deporte.nombre}:`);
  equipos.forEach(equipo => {
    const esValido = deporte.validar(equipo);
    console.log(`  ${equipo.nombre}: ${esValido ? 'Válido' : 'No válido'}`);
  });
});

//creando el torneo
const torneo = new Torneo('t1', 'Torneo de Prueba');

const equipoFutbol2 = new Equipo('eq3', 'Barcelona');
equipoFutbol2.agregarJugador(new Jugador('j5', 'Pedri', 21));

const equipoBasquet2 = new Equipo('eq4', 'Warriors');
equipoBasquet2.agregarJugador(new Jugador('j6', 'Klay Thompson', 34));

torneo.programarPartido(equipoFutbol, equipoFutbol2, futbol);
torneo.programarPartido(equipoBasquet, equipoBasquet2, basquet);

//partido
torneo.getPartidos().forEach(partido => {
  partido.jugar();
});

//resultados
torneo.listarPartidos().forEach(resultado => {
  console.log(`- ${resultado}`);
});
