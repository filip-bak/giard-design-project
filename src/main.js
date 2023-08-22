import "./css/style.css";
import { handleGaleryClick } from "./js/gallery/masonry-gallery.mjs";
import { handleModalClick } from "./js/gallery/modal";
import { handleMenuBtnClick, handleMenuOutsideClick } from "./js/menu/menu";
import { handleSliderBtnLeftClick } from "./js/slider/slider.js";
import {
  handleSearchClick,
  handleSearchEnterKey,
} from "./js/search-bar/toggle-search";

import "./js/gallery/gallerymore.js";

export const els = {
  menuBtn: document.querySelector("#btn-menu"),

  gallery: document.querySelector(".gallery"),

  searchBtn: document.querySelector("#search-btn"),
  searchBar: document.querySelector("#search-bar"),

  modal: document.querySelector("#modal"),
  modalImg: document.querySelector("#modal-img"),
};

window.addEventListener("load", () => {
  // Search Bar
  els.searchBar.addEventListener("keyup", handleSearchEnterKey);
  els.searchBtn.addEventListener("click", handleSearchClick);

  // Gallery
  els.gallery.addEventListener("click", handleGaleryClick);

  // Modal
  els.modal.addEventListener("click", handleModalClick);

  // Menu
  els.menuBtn.addEventListener("click", handleMenuBtnClick);
  // Event listener to close the menu when clicking outside of it
  document.addEventListener("click", handleMenuOutsideClick);

  // Slider
});
