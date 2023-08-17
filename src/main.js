import "./css/style.css";
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");

window.addEventListener("load", () => {
  searchBtn.addEventListener("click", () => {
    if (searchBar.classList.contains("search-active")) {
      // ADD this to remove search-bar button
      searchBar.classList.remove("search-active");
      // -------
      searchBar.value = "";
      return;
    } else {
      searchBar.classList.add("search-active");
    }
  });
});
