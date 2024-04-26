import { obtenerPersonajesPorId} from "./utils.js";
   
const render = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const personaje = await obtenerPersonajesPorId(parseInt(id));


    const contenedor = document.getElementById('personaje-container');
   
    const contenedorImagen = document.createElement('img');
    contenedorImagen.src = personaje.fullPortrait;
    contenedorImagen.alt = personaje.displayName;

    contenedor.appendChild(contenedorImagen);

    return contenedor


};

document.addEventListener('DOMContentLoaded', render);