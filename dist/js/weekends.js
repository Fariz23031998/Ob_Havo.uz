if(document.readyState == 'loading') {
   document.addEventListener('DOMContentLoaded', ready);
} else {
   ready();
}

function ready() {
   const hideIndicatorButtons = document.querySelectorAll('.hide_indicator');
   for(let i = 0; i < hideIndicatorButtons.length; i++) {
      const button = hideIndicatorButtons[i];
      button.addEventListener('click', hideIndicator);

      button.addEventListener('click', addTranslateForTables);
   }

   const showIndicatorButtons = document.querySelectorAll('.show_indicator');
   for(let i = 0; i < showIndicatorButtons.length; i++) {
      const button = showIndicatorButtons[i];
      button.addEventListener('click', showIndicator);

      button.addEventListener('click', addTranslateForTables);
   }

   hideIndicatorButtons[0].addEventListener('click', addTranslateForTables);
   showIndicatorButtons[0].addEventListener('click', removeTranslateForTables);
}

const footer = document.querySelector('.footer');

function hideIndicator(event) {
   const button = event.target;
   const indicator = button.parentElement.parentElement;
   const mainBox = button.parentElement.parentElement.parentElement;
   const table = mainBox.querySelector('.weekend_forecast-table');
   indicator.classList.add('indicator_none');
   table.classList.remove('table_none');
}

function showIndicator(event) {
   const button = event.target;
   const mainBox = button.parentElement.parentElement.parentElement;
   const table = button.parentElement.parentElement;
   const indicator = mainBox.querySelector('.weekends_forecast-detail');
  
   removeAllIndicators();

   indicator.classList.remove('indicator_none');
   table.classList.add('table_none');
}

function addTranslateForTables() {
   const tablesContainer = document.querySelector('.weekend_forecast-tables');
   tablesContainer.classList.add('tables_translate');
}

function removeTranslateForTables() {
   const tablesContainer = document.querySelector('.weekend_forecast-tables');
   tablesContainer.classList.remove('tables_translate');
}

function removeAllIndicators() {
   const indicators = document.querySelectorAll('.weekends_forecast-detail');
   indicators.forEach(item => {
      item.classList.add('indicator_none');    
   });

   const tables = document.querySelectorAll('.weekend_forecast-table');
   tables.forEach(item => {
      item.classList.remove('table_none');
   });
}
