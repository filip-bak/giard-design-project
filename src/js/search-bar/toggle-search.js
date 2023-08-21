import { els } from "../../main";

let searchQuery = "";

export function handleSearchEnterKey(e) {
  if (e.code === "Enter") {
    if (els.searchBar.value === "") {
      els.searchBar.classList.remove("search-active");
      return;
    }
    els.searchBar.classList.remove("search-active");
    searchQuery = els.searchBar.value;
    console.log("EnterQuery:", searchQuery);
  }
}
export function handleSearchClick(e) {
  els.searchBar.classList.toggle("search-active");

  if (els.searchBar.classList.contains("search-active")) {
    els.searchBar.value = "";
    els.searchBar.focus();
  } else {
    if (els.searchBar.value !== "") {
      searchQuery = els.searchBar.value;
      console.log("ClickQuery:", searchQuery);
    }
  }
}
