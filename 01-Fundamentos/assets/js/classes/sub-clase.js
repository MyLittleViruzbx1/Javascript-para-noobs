class Persona {
    //propiedades
        static _conteo = 0;
        static get conteo(){
            return Persona._conteo + ' ' + 'instancias';
        }
    
    
    
        //metodos
        static mensaje(){
            console.log(this.nombre);
            console.log('Hola a todos, soy un método');
        }
    
        nombre="";
        codigo="";
        frase="";
        lugar="";
    
        constructor(nombre="sin nombre",codigo="sin codigo",frase="sin frase"){
            this.codigo = codigo;
            this.nombre = nombre;
            this.frase = frase;
            Persona._conteo++;
        }
    
        quienSoy(){
            console.log(`Soy ${this.nombre} y ${this.codigo} digo ${this.frase}`)
        }
    
        miFrase(){
            console.log(`Esta es mi frase ${this.frase}`)
        }
    }
    

class Heroe extends Persona {
    clan = 'sin clan';
    constructor(nombre, codigo, frase){
        super(nombre, codigo,frase );
        this.clan = 'avengers';
    }
}

const hulk = new Heroe('hulk','grandulon', 'Hulk aplasta');
    
    // const spiderman = new Heroe();

    console.log(hulk)
    hulk.quienSoy();