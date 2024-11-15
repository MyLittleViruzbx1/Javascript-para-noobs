import { crearDeck } from "./usecases/crear-deck";

("use stric");

const btnPedir = document.querySelector("#btnPedir"),
  btnPause = document.querySelector("#btnPause"),
  btnNew = document.querySelector("#btnNew");

var puntosHTML = document.querySelectorAll("small"),
  divCartasJugadores = document.querySelectorAll(".divCartas");

let deck = [];
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

// let puntosJugador = 0, puntosComputadora = 0;

let puntosJugadores = [];

deck = crearDeck(tipos, especiales);

const inicializarJuego = (numJugadores = 2) => {
  btnPause.disabled = false;
  btnPedir.disabled = false;

  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach((elemr) => {
    elemr.innerHTML = "";
  });
  divCartasJugadores.forEach((elemr) => {
    elemr.innerHTML = "";
  });
};

//Esta funcion me permite tomar una nueva carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en la baraja de cartas";
  }
  return deck.pop();
};

// pedirCarta();

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

// Turno: 0 = primer jugador y el último será la computadora
const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};

const crearCarta = (carta, turno) => {
  divCartasJugadores = document.querySelectorAll(".divCartas");
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  imgCarta.alt = "carta";
  divCartasJugadores[turno].append(imgCarta);
};

const determinarGandor = () => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Empate Nadie gana");
    } else if (puntosMinimos > 21) {
      alert("Computadora Gano!!!");
    } else if (puntosComputadora > 21) {
      alert("Ganastes Felicidades");
    } else {
      alert("Computadora Gana :( ");
    }
  }, 100);
};

//Turno de la PC gamer

const turnoComputadora = (puntosMinimos) => {
  let puntosComputadora = 0;

  do {
    const carta = pedirCarta();
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
    crearCarta(carta, puntosJugadores.length - 1);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGandor();
};

// const valor = valorCarta( pedirCarta() );

//Evento

btnNew.addEventListener("click", () => {
  console.clear();
  inicializarJuego();
});

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  const puntosJugador = acumularPuntos(carta, 0);

  crearCarta(carta, 0);

  if (puntosJugador > 21) {
    console.log("Lo siento mucho, perdistes!!!");
    btnPedir.disabled = true;
    btnPause.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.log("Ganastes Genial!!!");
    btnPedir.disabled = true;
    btnPause.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

btnPause.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnPause.disabled = true;

  turnoComputadora(puntosJugadores[0]);
});

// CSIS
