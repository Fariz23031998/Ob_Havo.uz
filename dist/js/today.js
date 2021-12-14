window.addEventListener('DOMContentLoaded', () => {
   const moreBtn = document.getElementById('more');
   const dailyForecast = document.getElementById('dailyForecast');

   moreBtn.addEventListener('click', showHideDailyForecast);

   // show Daily Forecast Content
   function showHideDailyForecast(e) {
   dailyForecast.classList.toggle('show_daily-forecast');
   moreBtn.classList.toggle('rotate_180');
}
});
