class Persona {

    nombre="";
    codigo="";
    frase="";
    lugar="";


    constructor(nombre,codigo,frase){
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        console.log('first');
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y ${this.codigo} digo ${this.frase}`)
    }

    miFrase(){
        console.log(`Esta es mi frase ${this.frase}`)
    }
}


const spiderman = new Persona(21,'willy21','He vuelto');
const Ironman = new Persona(22,'yo soy ironman','chasquido');
const hulk = new Persona(23,'hulk aplasta','grandulon se siente mal');
console.log(spiderman);
console.log(Ironman);
console.log(hulk);

spiderman.quienSoy();
Ironman.quienSoy();
hulk.quienSoy();
hulk.miFrase();