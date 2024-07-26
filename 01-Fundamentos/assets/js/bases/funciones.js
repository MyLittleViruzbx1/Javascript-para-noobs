

function saludar(nombre){
    console.log(arguments); //
    console.log('hola' +  ' ' + nombre);

    return 10;
    console.log('Hello myz')
}


const returnSaluda = () =>{
    console.log('Hola a todos');
}

let personaje = {
    nombre: "test"
}

saludar('myz');

console.log(personaje)
// const x=prompt("Hola que hace");
delete personaje.nombre;
console.log(personaje)

// const personaje = {
//     nombre:'jesus'
// }

// console.log(personaje)
// delete personaje.nombre
// console.log(personaje)