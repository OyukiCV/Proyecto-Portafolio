// function menuHamburger() {
//     let itemsNav = document.getElementById('items-nav');
//     itemsNav.classList.toggle('items-nav-open');
//     let menuOpen = document.getElementById('menu-toggle');
//     menuOpen.classList.toggle('menu-open');

// }

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });