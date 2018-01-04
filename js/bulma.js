// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.menu');
    var menuItem = document.querySelectorAll('.menu-item');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-hidden-mobile');
        menu.classList.toggle('mobile-menu');
    });


})();


// Set current link in menu to active
let nav = document.getElementsByClassName('menu-list'),
anchor = document.querySelectorAll( 'a' )
current = window.location.pathname.split('/')[1]
  for (var i = 0; i < anchor.length; i++) {
    if(anchor[i].getAttribute('href') == current) {
        anchor[i].classList.add('is-active')
        console.log(anchor)
    }
}
