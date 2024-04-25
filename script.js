import { obtenerURLAPI } from './utils.js';

class Personaje {
    constructor(displayIcon, displayName, description, id) {
        this.displayIcon = displayIcon;
        this.displayName = displayName;
        this.description = description;
        this.id = id;
    }

    render() {
        return `
        <div class="personaje-card">
            <img src="${this.displayIcon}" alt="${this.displayName}">
            <h2>${this.displayName}</h2>
            <p>${this.description}</p>
            <button onclick="verInformacion(${this.id})">Ver información detallada</button>
        </div>
        `;
    }
}

// function verInformacion(id) {
//     window.location.href = `segunda_pagina.html?id=${id}`;
// }

async function obtenerPersonajes() {
    // Obtener la URL de la API utilizando la función asincrónica
    const apiUrl = await obtenerURLAPI();
    
    // Hacer la solicitud a la API utilizando la URL obtenida
    const response = await fetch(apiUrl);
    const data = await response.json();
    const personajesContainer = document.getElementById('personajes-container');
    
    data.data.forEach(personaje => {
        const { displayIcon, displayName, description, uuid } = personaje;
        const card = new Personaje(displayIcon, displayName, description, uuid);
        personajesContainer.innerHTML += card.render();
    });
}

obtenerPersonajes();
