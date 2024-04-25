// Función asincrónica para obtener los datos de la API de Valorant
// export const obtenerPersonajes = async () => {
//     try {
//         const response = await fetch('https://valorant-api.com/v1/agents');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error al obtener los datos de la API:', error);
//         throw error;
//     }
// };

export const obtenerPersonajes = async () => {
    const response = await fetch('https://valorant-api.com/v1/agents');
    const data = await response.json();
    return data;
};


