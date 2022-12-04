function burger() {
    var burg = document.querySelector('.but_menu2');
    var menus = document.querySelectorAll('.obj_btn');
    var checkIt = 0;
    var curWidth = document.documentElement.clientWidth;
    if (curWidth > 430) {
        burg.addEventListener('click', function() {
            for(var i=0; i<menus.length; i++) {
                if (checkIt % 2 == 0) {
                    menus[i].classList.add('_active');
                }
                else {
                    menus[i].classList.remove('_active');
                }
            }
            checkIt++;
        });
    } else {
        burg = document.querySelector('.p_burger');
        burg.innerHTML = 'Меню';
        menus = document.querySelectorAll('.but_menu');
        var obj = document.querySelectorAll('.obj_btn');
        burg.addEventListener('click', function() {
            if (checkIt == -1) {
                for(var i=0; i<obj.length; i++) {
                    obj[i].classList.remove('_active');
                }
                checkIt++;
            }
            for(var i=0; i<menus.length; i++) {
                if (checkIt % 2 == 0) {
                    menus[i].classList.add('_active');
                    burg.innerHTML = 'Выйти';
                }
                else {
                    menus[i].classList.remove('_active');
                    burg.innerHTML = 'Меню';
                }
            }
            checkIt++;
        });

        var but2 = document.querySelector('.but_menu2');
        but2.addEventListener('click', function() {
            for(var i=0; i<menus.length; i++) {
                menus[i].classList.remove('_active');
            }
            for(var i=0; i<obj.length; i++) {
                obj[i].classList.add('_active');
            }
            burg.innerHTML = 'Назад';
            checkIt = -1;
        })
    }
} 

burger();
window.onresize = burger;

