var upper = document.getElementById('swap_up');
upper.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

var slider = document.querySelector('.card_interest');
var next_btn = document.querySelector('.next_interest');
var prev_btn = document.querySelector('.prev_interest');
var offset = 0;
var count = 0;
var curWidth = 0;

function getCurWidth() {
    var curWidths = document.documentElement.clientWidth;
    if (curWidths > 1026) {
        count = 2;
    }
    if (curWidths < 1026) {
        count = 3;
    }
    if (curWidths < 770) {
        count = 4;
    }
    if (curWidths < 430) {
        count = 5;
    }
    return curWidths;
}

next_btn.addEventListener('click', function() {
    curWidth = getCurWidth();
    offset+=40;
    if (offset > 40*count) {
        offset = 0;
    }
    slider.style.left = -offset+10 + 'vh';
})
prev_btn.addEventListener('click', function() {
    curWidth = getCurWidth();
    offset-=40;
    if (offset < 0) {
        offset = 40*count;
    }
    slider.style.left = -offset+10 + 'vh';
})