function menu() {
  // var $toggle = document.getElementById('menu_toggle');
  // var $sideMenu = document.getElementById('side-menu');
  var $menuCloseButton = document.getElementById('menuCloseButton');
  var $menuOpenButton = document.getElementById('menuOpenButton');

  // var $tl       = new TimelineMax();
  $menuOpenButton.addEventListener('click', function() {
    document.body.classList.add('is-showing-menu');
    // classie.toggle($sideMenu, "sideMenuToggle");
    // $tl.staggerFrom('li', .5, {alpha:0, xPercent:"-=50", ease:Back.easeOut},0.2);
  });
  $menuCloseButton.addEventListener('click', function() {
    // classie.remove($sideMenu, "sideMenuToggle");
    document.body.classList.remove('is-showing-menu');
  });
}
menu();
