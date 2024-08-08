/** 
 * 2C = Two of Clubs 
 * 2D = Two of Diaminds 
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
*/


const btnPedir      = document.querySelector('#btnPedir');
const btnPause      = document.querySelector('#btnPause');
const btnNew        = document.querySelector('#btnNew');

const jugador1      = document.querySelectorAll('small');
// const computadora1      = document.querySelectorAll('small')[1];
const cartasJugador = document.querySelector('#jugador-cartas');
const cartasPC      = document.querySelector('#computadora-cartas');


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//Esta funcion crea el nuevo deck
const crearDeck = () =>{
    for(let i = 2; i <= 10; i++){
       for(let tipo of tipos){
        deck.push(i + tipo);
       }
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
                deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

crearDeck();

//Esta funcion me permite tomar una nueva carta

const pedirCarta = () =>{

    if(deck.length === 0){
        throw 'No hay cartas en la baraja de cartas';
    }
    const carta = deck.pop();
  return carta;
}

// pedirCarta();

const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor) ) ?
        (valor === 'A')? 11 : 10
        : valor * 1;
}

//Turno de la PC gamer

const turnoComputadora = (puntosMinimos) =>{

    do{
        const carta = pedirCarta();
        
        puntosComputadora = puntosComputadora + valorCarta(carta);
        jugador1[1].textContent = puntosComputadora;
        
        const imgCarta = document. createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.alt = 'carta';
        imgCarta.classList = 'carta';
        cartasPC.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    } while( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 )


        setTimeout(() => {
            
            if(puntosComputadora === puntosMinimos){
                alert('Empate perras')
            }else if(puntosMinimos > 21){
                alert('Computadora Gano!!!') 
            }else if(puntosComputadora > 21 ){
                alert('Ganastes Campeon');
            }else {
                alert('Computadora Gana')
            }
        }, 10);

}



// const valor = valorCarta( pedirCarta() );

//Evento

btnNew.addEventListener('click', () =>{

    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador     = 0;
    puntosComputadora = 0;

    jugador1[0].innerText = 0
    jugador1[1].innerText = 0
    cartasPC.innerHTML = '';
    cartasJugador.innerHTML = '';


    btnPedir.disabled = false;
    btnPause.disabled = false;
});


btnPedir.addEventListener('click', () =>{
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);
    jugador1[0].textContent = puntosJugador;
    
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.alt = 'carta';
    imgCarta.classList = 'carta';
    
    // <img class="carta" src="./assets/cartas/10S.png" alt="">
    cartasJugador.append(imgCarta);
    
    if(puntosJugador > 21){
        console.log('Lo siento mucho, perdistes mi loca');
        btnPedir.disabled = true;
        btnPause.disabled = true;
        turnoComputadora(puntosJugador);
    }else if (puntosJugador === 21){
        console.log('Ganastes mi loca');
        btnPedir.disabled = true;
        btnPause.disabled = true;
        turnoComputadora(puntosJugador);
    }
    
})

btnPause.addEventListener('click', () =>{

    btnPedir.disabled = true;
    btnPause.disabled = true;

    turnoComputadora(puntosJugador);
});

