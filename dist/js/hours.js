window.addEventListener('DOMContentLoaded', () => {
   /* 
   * 
   *   Tables
   */
   // Content hours.html Tables 
   const showHideButtons = document.querySelectorAll('.icon_show');
   const tables = document.querySelectorAll('.hours_forecast-table-main');

   tables[0].classList.remove('border_none');

   showHideButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         const target = e.target;
         const commonTable = btn.parentElement.parentElement;
         const mainTable = btn.parentElement;
         const tableForShow = commonTable.querySelector('.hours_forecast-table-index');
         tableForShow.classList.toggle('showed');
         mainTable.classList.toggle('border_switch');
         target.classList.toggle('rotate');
         console.log(target);
      });
   });


});