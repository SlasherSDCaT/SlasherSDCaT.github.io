document.body.onload = function() {
setTimeout(function() {
    var preloader = document.getElementById("page-preloader");
    var h_text = document.getElementById("text-h1");
    var h_text1 = document.getElementById("text-h2");
    var span = document.getElementById("span-main");

    if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
        h_text.classList.add("_active");
        h_text1.classList.add("_active");
        span.classList.add("_active");
    };
}, 700);
}

