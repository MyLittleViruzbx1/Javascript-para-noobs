const pedro = {
    nombre: 'pedrito',
    edad:22,
    imprimir(){
        console.log(`Nombre: ${this.nombre} tiene ${pedro.edad}`)
    }
}


const juan = {
    nombre: 'juanito',
    edad:22
}
pedro.imprimir();

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} tiene ${pedro.edad}`)
    }
    
    console.log('first');
}

const maria = new Persona('Maria', 11);
console.log(maria);
maria.imprimir();




const persona = {
    nombre: 'willy',
    edad: '21',
    lugar: 'quiche',
}

console.log(persona.nombre);
console.log(persona.apellido);
