export const obtenerPersonajes = async () => {
    const response = await fetch('https://valorant-api.com/v1/agents');
    const data = await response.json();
    return data;
};

export const obtenerPersonajesPorId = async (id) => {
    

};

export class Personaje {
     nombre;
     icono;
     descripcion;
     id;

    constructor(nombre, icono, descripcion, id) {
        this.nombre = nombre;
        this.icono = icono;
        this.descripcion = descripcion;
        this.id = id;
    }

    render(){
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('personaje-card');
        tarjeta.id = this.id;

        const imagen = document.createElement('img');
        imagen.src = this.icono;
        imagen.alt = this.nombre;
        imagen.classList.add('personaje-card-img');

        const contenedorTexto = document.createElement('div');
        contenedorTexto.classList.add('personaje-card-texto');

        const nombre = document.createElement('h2');
        nombre.textContent = this.nombre;
        nombre.classList.add('personaje-card-nombre');
        
        const descripcion = document.createElement('p');
        descripcion.textContent = this.descripcion;

        const boton = document.createElement('button');
        boton.textContent = 'Ver más';
        boton.addEventListener('click', () => {
            window.location.href = `./personaje.html?id=${this.id}`;
        });



        tarjeta.appendChild(imagen);
        tarjeta.appendChild(contenedorTexto);
        contenedorTexto.appendChild(nombre);
        contenedorTexto.appendChild(descripcion);
        contenedorTexto.appendChild(boton);

        
        return tarjeta;

        
    }

    
}



