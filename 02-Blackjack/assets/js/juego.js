(() =>{
    /**
 * 2C = Two of Clubs (Tréboles)     -> "2C" = Dos de Tréboles
 * 2D = Two of Diamonds (Diamantes) -> "2D" = Dos de Diamantes
 * 2H = Two of Hearts (Corazones)   -> "2H" = Dos de Corazones
 * 2S = Two of Spades (Espadas)     -> "2S" = Dos de Espadas
 */

    let btnPedir = document.querySelector('#btnPedir'),
        btnStop = document.querySelector('#btnStop'),
        btnNuevo = document.querySelector('#btnNuevo'),
        punteo = document.querySelectorAll('small');

    let divCartasJugador = document.querySelector('#mano-jugador'),
        divCartasComputadora = document.querySelector('#mano-banca');

    let puntosJugador      = 0,
        puntosComputadoras = 0;


    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];


    const inicializarJuego = () =>{
       deck = crearDeck();
    }


    const crearDeck = () => {

        for(let i = 2; i <= 10; i++){
            for ( let tipo of tipos) {
            deck.push(i + tipo);
            }
        }

        for(let tipo of tipos){
            for(let esp of especiales)
            deck.push(esp + tipo)
        }
        // console.log(deck)   ordenado
        
        return  _.shuffle(deck);
    }

    inicializarJuego();

    const pedirCarta = () =>{

        if(deck.length === 0){
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    // pedirCarta();

    const valorCarta = (carta) => {
        
        const valor = carta.substring(0, carta.length - 1);

        // let puntos = 0;

        // if(isNaN(valor)){
        //    puntos = (valor === 'A') ? 11 : 10;
        // }else{
        //     console.log('Es un numero');
        //     puntos = valor * 1;
        // }

        return (isNaN(valor)) 
            ?  (valor === 'A') ? 11 : 10
            :  puntos = valor * 1;

    // (isNaN(valor)) ? 'No es un numero': 'Es un numero';

        // console.log(puntos);

    }

    //turno de la computadora

    const turnoComputadora = (puntosMinimos) => {

        do{
            const carta = pedirCarta();

            puntosComputadoras = puntosComputadoras + valorCarta(carta);
            console.log(carta, puntosComputadoras);

            punteo[1].innerText = puntosComputadoras;

            const imgCarta = document.createElement('img');
            imgCarta.classList.add(
                'w-[110px]',
                'sm:w-[130px]', 
                'md:w-[150px]', 
                'flex-shrink-0', 
                'rounded-lg', 
                'shadow-md',
            )
            imgCarta.src = `./assets/cartas/${carta}.png`

            divCartasComputadora.append(imgCarta);

            if(puntosMinimos > 21){
                break;
            }

        }while((puntosComputadoras < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            if(puntosComputadoras === puntosMinimos){
                alert('perdieron');
            }else if(puntosMinimos > 21){
                alert('computer win');
            }else if (puntosComputadoras > 21){
                alert('you win');
            }else {
                alert('Computadora Gana')
            }
        },10);

    }


    btnPedir.addEventListener('click', ()=>{
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);

        punteo[0].innerHTML = puntosJugador;


        // <img
        //             src="./assets/cartas/2D.png"
        //             alt="carta"
        //             class="w-[110px] sm:w-[130px] md:w-[150px] flex-shrink-0 rounded-lg shadow-md"
        //           />

        const imgCarta = document.createElement('img');
        imgCarta.classList.add(
            'w-[110px]',
        'sm:w-[130px]', 
            'md:w-[150px]', 
            'flex-shrink-0', 
            'rounded-lg', 
            'shadow-md'
        )
        imgCarta.src = `./assets/cartas/${carta}.png`

        divCartasJugador.append(imgCarta);

        if(puntosJugador > 21){
            console.warn('perdistes');
            btnPedir.disabled = true;
            btnStop.disabled = true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador === 21){
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnStop.disabled = true;
            turnoComputadora(puntosJugador);
        }

    });

        btnStop.addEventListener('click', () =>{
            btnPedir.disabled = true;
            btnStop.disabled = true;
            turnoComputadora(puntosJugador)
        });
        
        
        btnNuevo.addEventListener('click',() => {
            inicializarJuego();
            // deck = [];
            // deck = crearDeck();
            puntosJugador = 0;
            puntosComputadoras = 0;
            punteo[0].innerText = 0;  
            punteo[1].innerText = 0;  
            divCartasJugador.innerHTML = '';
            divCartasComputadora.innerHTML = '';
            btnPedir.disabled = false;
            btnStop.disabled = false;
    });

})()