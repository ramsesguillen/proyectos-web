/** 
 * 
 * 
*/


const btnFlotante = document.querySelector('.btn-flotante');
const footer      = document.querySelector('#footer');
const imagenHero  = document.querySelector('.hero');



btnFlotante.addEventListener('click', ( e ) => {
    e.preventDefault();

    footer.classList.toggle('activo');
    btnFlotante.classList.toggle('activo');

    ( btnFlotante.classList.contains('activo') ) ? btnFlotante.textContent = 'Cerrar'
                                                 : btnFlotante.textContent = 'Idioma y moneda';
})


//
const crearHero = () => {
    let i = 0;
    let tiempo = 0;

    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    setInterval(() => {

        imagenHero.style.backgroundPositionX = `-${tiempo}px`;
        
        if ( tiempo > 40 ) {

            tiempo = 0;

            imagenHero.style.backgroundImage = `url(../img/${imagenes[i]})`;
            if ( i === imagenes.length - 1 ) {
                i = 0;
            } else {
                i++;
            }
            console.log( imagenes[i] );
        }

        tiempo++;

    }, 100);
}



document.addEventListener('DOMContentLoaded', () => {
    crearHero();
});