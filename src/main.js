import "./css/style.css";
import { handleGaleryClick } from "./js/gallery/masonry-gallery.mjs";
import { handleModalClick } from "./js/gallery/modal";
import {
  handleSearchClick,
  handleSearchEnterKey,
} from "./js/search-bar/toggle-search";

export const els = {
  modalImg: document.querySelector("#modal-img"),
  modal: document.querySelector("#modal"),
  gallery: document.querySelector(".gallery"),
  searchBtn: document.querySelector("#search-btn"),
  searchBar: document.querySelector("#search-bar"),
};

window.addEventListener("load", () => {
  els.searchBar.addEventListener("keyup", handleSearchEnterKey);
  els.searchBtn.addEventListener("click", handleSearchClick);

  els.gallery.addEventListener("click", handleGaleryClick);

  els.modal.addEventListener("click", handleModalClick);
});
