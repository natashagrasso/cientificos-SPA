/* todo el manejo de id para los personajes */
/* travis */

const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase.split('/') || '/'  /* convierte en minuscula toda la cadena */

export default getHash;