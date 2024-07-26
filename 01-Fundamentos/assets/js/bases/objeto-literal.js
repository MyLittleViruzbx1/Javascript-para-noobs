let personaje = {
    nombre: 'Batman',
    idcode: 121221,
    Vivo: 'prueba',
    vivienda: false,
    coordenadas: {
        lugar: 'malivu',
        zona: 'festival',
        long: -123123
        },
    trajes: ['Mark I', 'Mark v', 'Hulkbuster']
    }

console.log('nombre', personaje.nombre);
console.log('codigo', personaje.idcode);
console.log(personaje.trajes.length)
console.log(personaje.trajes[personaje.trajes.length - 1]);

const x = 'Vivo';

console.log('vivo', personaje[x]);

console.log({personaje});

delete personaje.nombre;
// duda con el nombre ---

console.log({personaje});

const entriesPares = Object.entries( personaje);
console.log(entriesPares);

const propiedadesName = Object.getOwnPropertyNames(personaje);
// lo mismo pero con .values
console.log({propiedadesName})

