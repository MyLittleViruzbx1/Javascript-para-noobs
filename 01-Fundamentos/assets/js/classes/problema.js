class Persona {
    nombre = '';
    codigo = '';
    edad = '';
    propiedad = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', edad = 'sin edad', propiedad = 'sin propiedad'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.edad = edad;
        this.propiedad = propiedad;
    }
}

const spiderman = new Persona('Max steel', 'turbo', 'Accion turbo', 'N-TEK');
const Ben10     = new Persona('Ben Tennyson', 'Omnitrix', 'AlienX', 'cambio');
console.log(spiderman);
console.log(Ben10);


