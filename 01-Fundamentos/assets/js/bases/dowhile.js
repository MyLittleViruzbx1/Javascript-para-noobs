let numSecret = Math.floor(Math.random() * 10 ) + 1;

let intentos;


do {
 intentos = parseInt(prompt("Intenta adivinar el numero entre el 1 y el 10", 0));
    if(intentos > numSecret){
        console.log('el numero es mayor');
    } else if(intentos < numSecret){
        console.log('El numero es menor');
    }
} while (intentos !== numSecret);
console.log('Felicidades adivinastes el numero')