import _ from "underscore";
/**
 *Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo  ['A', 'J', 'Q', 'K']
 * @returns {Array<String>}retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta === 0)
    throw new Error("TiposDeCarta es Obligatorio y es un arreglo de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (const tipo of tiposDeCarta) {
    for (const esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  return _.shuffle(deck);
};
