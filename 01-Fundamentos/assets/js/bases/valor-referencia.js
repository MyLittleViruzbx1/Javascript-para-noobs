const juan = {nombre: 'juanito'}
ana = juan;

ana.nombre = 'ana';
console.log({juan, ana})



//function valor- referencia


// paso por valor
function duplicar(numero){
    return numero * 2;
}

let numero = 10;

console.log(numero);
console.log(duplicar(numero));



// paso por referencia

function objReferencia(obj){
    obj.propiedad = 'valor por referencia';
}

let obj = {propiedad: 'valor original'}


objReferencia(obj);


console.log(obj);




const cambiarNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona
}

let peter = {nombre:'Peter'};

let tony = cambiarNombre(peter)

console.log({peter, tony});
console.log('=============')

const dialetras2 = [
    {'DOMINGO': 0},
    {'LUNES': 1},
    {'MARTES': 2},
    {'MIERCOLES': 3},
    {'JUEVES': 4},
    {'VIERNES': 5},
    {'SABADO': 6},
]


const dialetras = {
   0: 'Domingo',
   1: 'Lunes',
   2: 'Martes',
   3: 'Miercoles',
   4: 'Jueves',
   5: 'viernes',
   6: 'Sabado',
}

console.log(dialetras[3])
console.log(dialetras2[3])