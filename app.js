
let a = 10;
let b = a;
a= 30;

console.log({a,b});

let juan = {nombre: 'juan'};
let ana = {...juan};
ana.nombre = 'ana';

console.log({juan, ana});


const cambiarNombre = ({...persona}) =>{
    persona.nombre = 'tony';
    return persona;
}


let peter = {nombre: 'peter'}
let tony = cambiarNombre(peter);

console.log({peter, tony})

const frutas = ['Manzana', 'Pera', 'Durazno'];

const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});