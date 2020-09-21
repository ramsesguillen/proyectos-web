/** 
 * 
 * 
*/

// -------------- Variables ------------------- 
// Referencias al html 
const listado = document.querySelector('#listado');
// Funciones 

const crearHTML = async () => {

    const portafolio = await cargarPortafolio();

    let html = ''; 

    portafolio.forEach( porta => {

        const {id, nombre, desc} = porta;
        html += `
            <div class="elemento">
                <img src="img/${id}.jpg">
                <div class="contenido">
                    <h3>${nombre}</h3>
                    <p>${desc}</p>
                </div>
            </div>
        `;
    });

    listado.innerHTML = html;
}


const cargarPortafolio = async () => {
    const resp = await fetch('datos.json');
    const data = await resp.json();
    return data.portafolio;
}

// Eventos 
document.addEventListener('DOMContentLoaded', () => {
    crearHTML();
});


