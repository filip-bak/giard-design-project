import { els } from "../../main";

let searchQuery = "";

export function formSubmit() {
  els.searchBar.classList.remove("search-active");
  searchQuery = els.searchBar.value;

  // dev
  console.log("Submitted Data:", searchQuery);
}
