(() => {
  /**
   * 2C = Two of Clubs (Tréboles)     -> "2C" = Dos de Tréboles
   * 2D = Two of Diamonds (Diamantes) -> "2D" = Dos de Diamantes
   * 2H = Two of Hearts (Corazones)   -> "2H" = Dos de Corazones
   * 2S = Two of Spades (Espadas)     -> "2S" = Dos de Espadas
   */

  const btnPedir  = document.querySelector('#btnPedir');
  const btnStop   = document.querySelector('#btnStop');
  const btnNuevo  = document.querySelector('#btnNuevo');
  const punteo    = document.querySelectorAll('small'); // [Jugador, Computadora]

  const divCartasJugador     = document.querySelector('#mano-jugador');
  const divCartasComputadora = document.querySelector('#mano-banca');

  const tipos      = ['C', 'D', 'H', 'S'];
  const especiales = ['A', 'J', 'Q', 'K'];

  let deck = [];
  let puntosJugadores = []; // índice 0 = jugador, último índice = computadora

  // --- Utilidades ---
  const crearDeck = () => {
    const nuevoDeck = [];
    for (let i = 2; i <= 10; i++) {
      for (const t of tipos) nuevoDeck.push(i + t);
    }
    for (const t of tipos) {
      for (const e of especiales) nuevoDeck.push(e + t);
    }
    return _.shuffle(nuevoDeck);
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : Number(valor);
  };

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw 'No hay cartas en el deck';
    }
    return deck.pop();
  };

  // Acumula puntos para el turno indicado y actualiza UI
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    punteo[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearImgCarta = (carta) => {
    const img = document.createElement('img');
    img.classList.add(
      'w-[110px]',
      'sm:w-[130px]',
      'md:w-[150px]',
      'flex-shrink-0',
      'rounded-lg',
      'shadow-md'
    );
    img.src = `./assets/cartas/${carta}.png`;
    return img;
  };

  // --- Flujo de juego ---
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    // Crea arreglo [0,0,...] del tamaño de jugadores (jugador + computadora)
    puntosJugadores = Array(numJugadores).fill(0);

    // Reset UI
    punteo.forEach((el) => (el.innerText = 0));
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnStop.disabled = false;
  };

  const turnoComputadora = (puntosMinimos) => {
    const idxComputadora = puntosJugadores.length - 1;

    do {
      const carta = pedirCarta();

      const puntosCompu = acumularPuntos(carta, idxComputadora);
      divCartasComputadora.append(crearImgCarta(carta));

      if (puntosMinimos > 21) break;

    } while (
      puntosJugadores[idxComputadora] < puntosMinimos &&
      puntosMinimos <= 21
    );

    setTimeout(() => {
      const pc = puntosJugadores[idxComputadora];

      if (pc === puntosMinimos) {
        alert('Empate');
      } else if (puntosMinimos > 21) {
        alert('Computadora gana');
      } else if (pc > 21) {
        alert('¡Ganaste!');
      } else {
        alert('Computadora gana');
      }
    }, 10);
  };

  // --- Eventos ---
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    divCartasJugador.append(crearImgCarta(carta));

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnStop.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      btnStop.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnStop.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnStop.disabled = true;
    turnoComputadora(puntosJugadores[0]); // usa el puntaje actual del jugador
  });

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
  });

  // iniciar al cargar
  inicializarJuego();
})();
