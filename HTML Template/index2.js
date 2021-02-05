scrollToTopBtn = document.getElementById('scrollToTopBtn')

window.onscroll = function() {scrollFunction()};

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}