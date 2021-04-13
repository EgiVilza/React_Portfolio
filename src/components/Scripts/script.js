//import React from "react"

function JsScript() {
    const btnHamburger = document.querySelector('#btnHamburger');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const fadeElems = document.querySelectorAll('.has-fade');

    btnHamburger.addEventListener('click', function() {
        
        if(header.classList.contains('open')){ // close hamburger menu
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            })
            
        }
        else { // open hamburger menu
            body.classList.add('noscroll');
            header.classList.add('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            })
            
        }
        
    })
}

export default JsScript



