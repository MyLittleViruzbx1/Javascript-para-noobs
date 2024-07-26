// Dias de semana abrir a las 11
// pero los fines de semana abrimos a las 9

// Entra a un sitio web, para consultar si esta abierto...
const dia = 1;
const horaActual = 7;
let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las 00:00


// if(dia === 0 || dia === 6) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }



horaApertura = ([0,6].includes(dia) ) ? 9 : 11;


// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = 'Esta cerrado, hoy abrimos a las ' + horaApertura
// }


mensaje = (horaActual >= horaApertura) ? mensaje = 'Esta abierto' : mensaje = 'Esta cerrado, hoy abrimos a las ' + horaApertura;
console.log({horaApertura})


console.log(mensaje);




