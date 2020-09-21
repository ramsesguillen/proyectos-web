(()=> {
  "use strict";

  // Expresion regular validar e-amil
  const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Campos Datos Usuario
  const nombre   = document.querySelector('#nombre');
  const apellido = document.querySelector('#apellido');
  const email    = document.querySelector('#email');

  // Campos pases
  const pase_dia      = document.querySelector('#pase_dia');
  const pase_dosdias  = document.querySelector('#pase_dosdias');
  const pase_completo = document.querySelector('#pase_completo');

  // Botones y divs
  const calcular      = document.querySelector('#calcular');
  const errorDiv      = document.querySelector('#error');
  const botonRegistro = document.querySelector('#btnRegistro');
  const resultado     = document.querySelector('#lista-productos');
  const suma          = document.querySelector('#suma-total');

  const regalo = document.querySelector('#regalo');

  // Extras
  const etiquetas = document.querySelector('#etiquetas');
  const camisas   = document.querySelector('#camisa_evento');




  // Funciones
  const calcularMonto = ( e ) => {
    e.preventDefault();

    if ( regalo.value === '') {
      alert('Debes elegir un relago');
      regalo.focus();
    } else {
      const boletoDia      = parseInt( pase_dia.value, 10 ) || 0,
            boletos2Dias   = parseInt( pase_dosdias.value, 10 ) || 0,
            boletoCompleto = parseInt( pase_completo.value, 10 ) || 0,
            catCamisas     = parseInt( camisas.value, 10 ) || 0,
            cantEtiquetas  = parseInt( etiquetas.value, 10 ) || 0;

      let totalPagar = ( boletoDia * 30 ) + ( boletos2Dias * 45 ) + ( boletoCompleto * 50 ) + (( catCamisas * 10 ) * .93 ) + ( cantEtiquetas * 2 );

      let listadoProducto = [];

      if ( boletoDia >= 1 ) {
        listadoProducto = [...listadoProducto, `${boletoDia} Pases por día`];
      }
      if ( boletos2Dias >= 1 ) {
        listadoProducto = [...listadoProducto, `${boletos2Dias} Pases por día`];
      }
      if ( boletoCompleto >= 1 ) {
        listadoProducto = [...listadoProducto, `${boletoCompleto} pases Completo`];
      }
      if ( catCamisas >= 1 ) {
        listadoProducto = [...listadoProducto, `${catCamisas} Camisas`];
      }
      if ( cantEtiquetas >= 1 ) {
        listadoProducto = [...listadoProducto, `${cantEtiquetas} Etiquetas`];
      }

      resultado.innerHTML = '';
      resultado.classList.add('lista-productos');
      suma.classList.add('suma-total');

      for ( let producto of listadoProducto ) {
        resultado.innerHTML += `${producto} <br/>`;
      }
      suma.innerHTML = `$ ${totalPagar.toFixed(2)}`;

    }

  }


  //
  const mostrarDias = ( e ) => {
    const boletoDia      = parseInt( pase_dia.value, 10 ) || 0,
          boletos2Dias   = parseInt( pase_dosdias.value, 10 ) || 0,
          boletoCompleto = parseInt( pase_completo.value, 10 ) || 0;

    let diasElegidos = [];

    if ( boletoDia > 0 ) {
      diasElegidos = [...diasElegidos, 'viernes'];
    }
    if ( boletos2Dias > 0 ){
      diasElegidos = [...diasElegidos, 'viernes', 'sabado'];
    }
    if ( boletoCompleto > 0 ){
      diasElegidos = [...diasElegidos, 'viernes', 'sabado', 'domingo'];
    }

    for (let dias of diasElegidos ) document.getElementById(dias).style.display = 'block';
  }


  // validar formulario
  const validarCampos = function() {
    if (this.value === '') {
      errorDiv.style.display = 'flex';
      errorDiv.textContent = 'Este campos es obligatorio';
      this.style.border = '1px solid red';
      errorDiv.style.border = '1px solid red';
    } else {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid green';
    }
  }


  // validarEmail
  const validarEmail = function () {
    if ( er.test( this.value ) ) {
      errorDiv.style.display = 'none';
      this.style.border = '1px solid green';
    } else {
      console.log('correo invalido');
      errorDiv.style.display = 'flex';
      errorDiv.textContent = 'Este correo es invalido';
      this.style.border = '1px solid red';
      errorDiv.style.border = '1px solid red';
    }
  }




// ===========================================
  const mostrarMapa = () => {
    var map = L.map('mapa').setView([15.875034, -97.091761], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([15.875034, -97.091761]).addTo(map)
        .bindPopup('GDlWebCamp 2020 </br> Boletos ya disponibles.')
        .openPopup();
  }


  // Se ejecuta al cargar la pagina
  document.addEventListener('DOMContentLoaded', () => {

    if ( document.querySelector('#mapa') ) {
      mostrarMapa();
    }

    if ( calcular ){
      //Mostrar mapa en el index

      // llamada a eventos
      calcular.addEventListener('click', calcularMonto );
      pase_dia.addEventListener('blur', mostrarDias );
      pase_completo.addEventListener('blur', mostrarDias );
      pase_dosdias.addEventListener('blur', mostrarDias );
      nombre.addEventListener('blur', validarCampos );
      apellido.addEventListener('blur', validarCampos );
      email.addEventListener('blur', validarCampos );
      email.addEventListener('blur', validarEmail );
    }
  });
})();





/**
 *
 * * ====================== Codigo de jquery =====================================
 *
 */
$( function() {

  // Ñettering
  $('.nombre-sitio').lettering();


  // Menu fijo
  const windowHight = $(window).height();
  const barraAltura = $('.barra').innerHeight();

  $(window).scroll( function() {
    const scroll = $(window).scrollTop();

    if ( scroll > windowHight ) {
      $('.barra').addClass('fixed');
      $('body').css({'margin-top': barraAltura + 'px' });
    } else {
      $('.barra').removeClass('fixed');
      $('body').css({'margin-top': '0px' });
    }
  });


  // Menu responsive
  $('.menu-mobil').on('click', function() {
    $('.navegacion-principal').toggleClass('is-active');
    // $('.navegacion-principal').slideToggle();
  });


  // Programa de conferencias
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function() {

    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');

    $('.ocultar').hide();

    const enlace = $(this).attr('href');
    $(enlace).fadeIn(1000);

    return false; /*! evitar brinco en en el click de los enlaces */
  });


  // Animaciones para los números
  $('.resumen-evento li:nth-child(1) p').animateNumber( {number: 6 }, 1500);
  $('.resumen-evento li:nth-child(2) p').animateNumber( {number: 15 }, 1500);
  $('.resumen-evento li:nth-child(3) p').animateNumber( {number: 3 }, 1500);
  $('.resumen-evento li:nth-child(4) p').animateNumber( {number: 9 }, 1500);


  // Cuenta regresiva
  $('.cuenta-regresiva').countdown('2020/12/25 09:00:00', function( e ) {
    $('#dias').html(e.strftime('%D'));
    $('#horas').html(e.strftime('%H'));
    $('#minutos').html(e.strftime('%M'));
    $('#segundos').html(e.strftime('%S'));
  });


});
