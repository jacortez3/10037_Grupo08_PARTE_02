/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Animacion box

    var box = document.querySelector('.animated-box');
    box.addEventListener('click', function() {
      box.style.animationPlayState = 'paused';
    });

    // EVENTOS DOM

  

      // Selecciona el elemento con la clase "box"
    var myElement = document.querySelector('.box2');

    // Agrega un EventListener al elemento
    myElement.addEventListener('click', function() {
      alert('¡Se hizo clic en la caja!');
    });


        // Crear un nuevo elemento <span>
    var spanElement = document.createElement('span');

    // Agregar contenido al elemento <span>
    spanElement.textContent = 'Texto del span';

    // Agregar atributo class al elemento <span>
    spanElement.setAttribute('class', 'highlight');

    // Seleccionar el elemento contenedor
    var container = document.getElementById('container');

    // Agregar el elemento <span> al contenedor
    container.appendChild(spanElement);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


















