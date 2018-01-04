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
    for (i = 0; i < menuItem.length; i++) {
      menuItem[i].addEventListener('click', function() {
          console.log('lol')
          burger.classList.toggle('is-active');
          menu.classList.toggle('is-hidden-mobile');
          menu.classList.toggle('mobile-menu');
      });
    }

})();
