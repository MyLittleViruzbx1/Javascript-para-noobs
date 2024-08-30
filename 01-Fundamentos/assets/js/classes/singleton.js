class Singleton {
    static instancia;
    nombre;

    constructor(nombre=''){

        if(!!Singleton.instancia){
            return Singleton.instancia
        }

        Singleton.instancia = this;
        this.nombre = nombre;
        // return this;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('Hulk');

console.log(`El nombre es ${instancia1.nombre}`);
console.log(`El nombre es ${instancia2.nombre}`);
console.log(`El nombre es ${instancia3.nombre}`);