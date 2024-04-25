// Función asincrónica para obtener el enlace de la API de Valorant
async function obtenerURLAPI() {
    // En este ejemplo, simplemente devolvemos la URL directamente,
    // pero podrías realizar cualquier lógica asincrónica aquí, como hacer una solicitud HTTP
    // para obtener la URL desde algún servicio externo.
    return 'https://valorant-api.com/v1/agents';
}

// Exportar la función para que esté disponible para otros archivos
export { obtenerURLAPI };

