import { els } from "../../main";
import { formSubmit } from "../utils/formSubmit";

let searchQuery = "";

export function handleSearchEnterKey(e) {
  if (e.key === "Enter" || e.keyCode === 13 || e.which === 13) {
    if (els.searchBar.value === "") {
      els.searchBar.classList.remove("search-active");
      return;
    } else {
      formSubmit();
    }
  }
}

export function handleSearchClick(e) {
  els.searchBar.classList.toggle("search-active");

  if (els.searchBar.classList.contains("search-active")) {
    els.searchBar.value = "";
    els.searchBar.focus();
  }
  if (els.searchBar.value !== "") {
    formSubmit();
  }
}
