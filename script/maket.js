var btn = document.querySelector('.earth_btn');
var orbit = document.querySelector('.earth');

btn.addEventListener('click', function() {
    orbit.classList.add('_active');
});

var btn2 = document.querySelector('.mercury_btn');
var orbit2 = document.querySelector('.mercury');

btn2.addEventListener('click', function() {
    orbit2.classList.add('_active');
});

var btn3 = document.querySelector('.venus_btn');
var orbit3 = document.querySelector('.venus');

btn3.addEventListener('click', function() {
    orbit3.classList.add('_active');
});

var btn4 = document.querySelector('.mars_btn');
var orbit4 = document.querySelector('.mars');

btn4.addEventListener('click', function() {
    orbit4.classList.add('_active');
});

var btn5 = document.querySelector('.jupiter_btn');
var orbit5 = document.querySelector('.jupiter');

btn5.addEventListener('click', function() {
    orbit5.classList.add('_active');
});