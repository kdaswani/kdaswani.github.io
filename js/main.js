/* Investments Off Canvas Menus */
var techMenu = document.querySelector('#tech-menu');
var techButtonOpen = document.querySelector('#tech-button');
var realEstateMenu = document.querySelector('#real-estate-menu');
var realEstateButtonOpen = document.querySelector('#real-estate-button');
var techButtonClose = document.querySelector('#menu-close-tech');
var realestateButtonClose = document.querySelector('#menu-close-real-estate');

techButtonOpen.addEventListener('click',function (){
    console.log('clicked');
    realEstateMenu.classList.remove('menu-open');
    techMenu.classList.toggle('menu-open');
})

techButtonClose.addEventListener('click',function (){
    techMenu.classList.toggle('menu-open');
})

realEstateButtonOpen.addEventListener('click',function (){
    techMenu.classList.remove('menu-open');
    realEstateMenu.classList.toggle('menu-open');
})


realestateButtonClose.addEventListener('click',function (){
    realEstateMenu.classList.toggle('menu-open');
})



// var submitButton = document.querySelector('#submit-button');

// submitButton.addEventListener('click', function (){
//     console.log('clicked submit')
//     alert('Thanks for your submission!');
// })

