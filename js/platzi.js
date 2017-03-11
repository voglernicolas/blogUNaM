//media query en javascript
var consulta = window.matchMedia('(max-width: 800px)');

consulta.addListener(mediaQuery);

//boton tipo hamburguesa
var menuButton = document.getElementById('menu-button');

//menu responsive
var menu = document.getElementById('nav'); 

function toggleMenu() {
    menu.classList.toggle('active'); 
}
function showMenu() {
    menu.classList.add('active');
}
function hideMenu() {
    menu.classList.remove('active');
}

function mediaQuery(){
    if(consulta.matches){
        menuButton.addEventListener('click',toggleMenu);
                           
    }else{
        menuButton.removeEventListener('touchstart',toggleMenu);
    } 
}
mediaQuery();

//gestos touch con la libreria hammer.js
//encapsulando a body    
var body = document.body;
var gestos = new Hammer(body);

gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);