let juegos = [
    'Zelda',
    'Mario',
    'Sonic',
    'Metroid'
]

console.log('Largo',juegos.length);

juegos.forEach((elemento, indice, arreglo) =>{
    console.log({elemento, indice, arreglo})
})

juegos.push('F-zero');
juegos.push('Majoras maks');



let nuevaLongitud = juegos.unshift('Banjo');

console.log(juegos.length);
console.log({nuevaLongitud, juegos});


let juegoDelete = juegos.pop();
console.log({juegoDelete, juegos})



let positiones = 3;

let juegosBorrados = juegos.splice(positiones, 2);
console.log(juegosBorrados, juegos)


// const arr = new Array(10);
// const arreglo = [];
// console.log(arreglo)

// let videoJuegos = [
//     true,
//     123,
//     'Mario 3', 
//     'God of war', 
//     'Megaman',
//     1 + 2,
//     function(){},
//     ()=>{},
//     {a:1},
//     ['x', 'Megaman', 'soldier', 'kRATOS', [
//         'Dr Chily willy',
//         'Pandora',
//     ]]
// ];
// console.log(videoJuegos[9][4][1])