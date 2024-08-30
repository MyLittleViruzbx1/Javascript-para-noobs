class Persona {

    static porObjeto ({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido},${this.pais}`)
    }
}

const nombre1 = 'katty',
    apellido1 = 'Gamez',
    pais1 = 'Nigeria';

const fher = {
    nombre: 'fer',
    apellido: 'castillo',
    pais: 'pais'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);
console.log(persona1);
console.log(persona2);
persona1.getInfo();
persona2.getInfo();