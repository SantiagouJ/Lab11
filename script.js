import { obtenerPersonajes, Personaje } from "./utils.js";

const render = async () => {
    const data = await obtenerPersonajes();

    const personajes = data.data;
    const contenedor = document.getElementById('personajes-container');

    for(const personaje of personajes) {
        const nuevoPersonaje = new Personaje(personaje.displayName, personaje.displayIcon, personaje.description, personaje.uuid, personaje.role.description, personaje.fullPortrait);
        const tarjeta = nuevoPersonaje.render();
        contenedor.appendChild(tarjeta);
    }
};

document.addEventListener('DOMContentLoaded', render);