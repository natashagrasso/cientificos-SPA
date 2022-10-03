//TODO funtion del endpoint a la API de rick and morty
/* como armar una funcion y por consola traer la data?*/

const API =  'https://rickandmortyapi.com/api/character';

const getData = async (id) => {
    const apiURL = id ?  `${API} ${id}` : API;

    try {
        const response = await fetch (apiURL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error){
        console.log('fetch error!', error);
    };
};

export default getData;