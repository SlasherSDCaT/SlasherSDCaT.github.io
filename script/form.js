var r1 = document.querySelector('.rp1');
var r2 = document.querySelector('.rp2');
var r3 = document.querySelector('.rp3');
var r4 = document.querySelector('.rp4');
var r5 = document.querySelector('.rp5');

var next1 = document.querySelector('.next1');
var next2 = document.querySelector('.next2');
var next3 = document.querySelector('.next3');
var next4 = document.querySelector('.next4');
var next5 = document.querySelector('.next5');

var prev2 = document.querySelector('.prev2');
var prev3 = document.querySelector('.prev3');
var prev4 = document.querySelector('.prev4');
var prev5 = document.querySelector('.prev5');

var check = false;

r1.classList.add('_active');

var ans1 = document.querySelector('.ans11');
var ans2 = document.querySelector('.ans12');
var ans3 = document.querySelector('.ans13');

ans1.addEventListener('click', function() {
    ans1.classList.add('_active');
    ans2.classList.remove('_active');
    ans3.classList.remove('_active');
    check = true;
});
ans2.addEventListener('click', function() {
    ans1.classList.remove('_active');
    ans2.classList.add('_active');
    ans3.classList.remove('_active');
    check = true;
});
ans3.addEventListener('click', function() {
    ans1.classList.remove('_active');
    ans2.classList.remove('_active');
    ans3.classList.add('_active');
    check = true;
});

next1.addEventListener('click', function() {
    if (check) {
        r1.classList.add('_visit');
        r2.classList.add('_active');
        check = false;
    }
    else {
        r1.classList.add('_none');
        setTimeout(function() {
            r1.classList.remove('_none');
        }, 700);
    }
});

var ans12 = document.querySelector('.ans21');
var ans22 = document.querySelector('.ans22');
var ans32 = document.querySelector('.ans23');

ans12.addEventListener('click', function() {
    ans12.classList.add('_active');
    ans22.classList.remove('_active');
    ans32.classList.remove('_active');
    check = true;
});
ans22.addEventListener('click', function() {
    ans12.classList.remove('_active');
    ans22.classList.add('_active');
    ans32.classList.remove('_active');
    check = true;
});
ans32.addEventListener('click', function() {
    ans12.classList.remove('_active');
    ans22.classList.remove('_active');
    ans32.classList.add('_active');
    check = true;
});

next2.addEventListener('click', function() {
    if (check) {
        r2.classList.add('_visit');
        r3.classList.add('_active');
        check = false;
    }
    else {
        r2.classList.add('_none');
        setTimeout(function() {
            r2.classList.remove('_none');
        }, 700);
    }
});

var ans13 = document.querySelector('.ans31');
var ans23 = document.querySelector('.ans32');
var ans33 = document.querySelector('.ans33');

ans13.addEventListener('click', function() {
    ans13.classList.add('_active');
    ans23.classList.remove('_active');
    ans33.classList.remove('_active');
    check = true;
});
ans23.addEventListener('click', function() {
    ans13.classList.remove('_active');
    ans23.classList.add('_active');
    ans33.classList.remove('_active');
    check = true;
});
ans33.addEventListener('click', function() {
    ans13.classList.remove('_active');
    ans23.classList.remove('_active');
    ans33.classList.add('_active');
    check = true;
});

next3.addEventListener('click', function() {
    if (check) {
        r3.classList.add('_visit');
        r4.classList.add('_active');
        check = false;
    }
    else {
        r3.classList.add('_none');
        setTimeout(function() {
            r3.classList.remove('_none');
        }, 700);
    }
});

var ans14 = document.querySelector('.ans41');
var ans24 = document.querySelector('.ans42');
var ans34 = document.querySelector('.ans43');

ans14.addEventListener('click', function() {
    ans14.classList.add('_active');
    ans24.classList.remove('_active');
    ans34.classList.remove('_active');
    check = true;
});
ans24.addEventListener('click', function() {
    ans14.classList.remove('_active');
    ans24.classList.add('_active');
    ans34.classList.remove('_active');
    check = true;
});
ans34.addEventListener('click', function() {
    ans14.classList.remove('_active');
    ans24.classList.remove('_active');
    ans34.classList.add('_active');
    check = true;
});

next4.addEventListener('click', function() {
    if (check) {
        r4.classList.add('_visit');
        r5.classList.add('_active');
        check = false;
    }
    else {
        r4.classList.add('_none');
        setTimeout(function() {
            r4.classList.remove('_none');
        }, 700);
    }
});

prev2.addEventListener('click', function() {
    r2.classList.remove('_active');
    r1.classList.remove('_visit');
    check = true;
});
prev3.addEventListener('click', function() {
    r3.classList.remove('_active');
    r2.classList.remove('_visit');
    check = true;
});
prev4.addEventListener('click', function() {
    r4.classList.remove('_active');
    r3.classList.remove('_visit');
    check = true;
});
prev5.addEventListener('click', function() {
    r5.classList.remove('_active');
    r4.classList.remove('_visit');
    check = true;
});


next5.addEventListener('click', function() {
    var thx = document.querySelector('.h1_form');
    var block = document.querySelector('.reg_block');
    block.classList.add('_active');
    thx.classList.add('_active');
    setTimeout(function() {
        var post = document.getElementById('postloader');
        post.style.visibility = 'visible';
        post.style.opacity = 1;
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1300);
    }, 1500);
});
