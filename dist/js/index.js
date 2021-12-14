window.addEventListener('DOMContentLoaded', () => {
   const openMenu = document.getElementById('openMenu');
   const closeMenu = document.getElementById('closeMenu');
   const nav = document.getElementById('nav');
   const navInfo = document.getElementById('navInfo');
   const searchButton = document.getElementById('searchButton');
   const searchBar = document.getElementById('searchBar');
   const headerLogo = document.getElementById('headerLogo');
   const moreBtn = document.getElementById('more');
   const dailyForecast = document.getElementById('dailyForecast');
   const body = document.getElementById('body');
   const headerDetector = document.getElementById('header_temp-detector');
   const header = document.getElementById('header');

   /* Header
   * 
   *   Nav
   */

   if(window.outerWidth < 561) {
      header.append(headerDetector);
   }

   openMenu.addEventListener('click', openMenuPressed);
   closeMenu.addEventListener('click', closeMenuPressed);
   searchButton.addEventListener('click', expandSearchBar);

   // Open Menu
   function openMenuPressed() {
      nav.classList.add('nav_menu');
      openMenu.style.display = 'none';
      closeMenu.style.display = 'inline-block';
      body.style.overflow = 'hidden';
   }

   function closeMenuPressed() {
      nav.classList.remove('nav_menu');
      openMenu.style.display = 'inline-block';
      closeMenu.style.display = 'none';
      body.style.overflow = 'visible';
      hideSearchBar();
   }

   // Expanding search bar
   function expandSearchBar(e) {
      if(window.outerWidth <= 414) {
         searchBar.classList.add('expand');
         headerLogo.style.display = 'none';
         searchButton.classList.add('typed');

         openMenu.style.display = 'none';
         closeMenu.style.display = 'inline-block';
      }
   }

   function hideSearchBar() {
      searchBar.classList.remove('expand');
      headerLogo.style.display = 'inline-block';
      searchButton.classList.remove('typed');
   }
   console.log(window);

});


