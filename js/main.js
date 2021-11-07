document.getElementById("search-btn").onclick = function () {
   document.getElementById("search-pannel").classList.toggle("search--active");
   document.getElementById("search-btn").classList.toggle("search__btn--active");
   document.getElementById("search").classList.toggle("search__input--active");
};
