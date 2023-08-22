import "./css/style.css";
import { handleGaleryClick } from "./js/gallery/masonry-gallery.mjs";
import { handleModalClick } from "./js/gallery/modal";
import { handleMenuBtnClick, handleMenuOutsideClick } from "./js/menu/menu";
import {
  handleSearchClick,
  handleSearchEnterKey,
} from "./js/search-bar/toggle-search";

export const els = {
  menuBtn: document.querySelector("#btn-menu"),

  gallery: document.querySelector(".gallery"),

  searchBtn: document.querySelector("#search-btn"),
  searchBar: document.querySelector("#search-bar"),

  modal: document.querySelector("#modal"),
  modalImg: document.querySelector("#modal-img"),
};

window.addEventListener("load", () => {
  els.searchBar.addEventListener("keyup", handleSearchEnterKey);
  els.searchBtn.addEventListener("click", handleSearchClick);

  els.gallery.addEventListener("click", handleGaleryClick);

  els.modal.addEventListener("click", handleModalClick);

  els.menuBtn.addEventListener("click", handleMenuBtnClick);
  // Event listener to close the menu when clicking outside of it
  document.addEventListener("click", handleMenuOutsideClick);
});
