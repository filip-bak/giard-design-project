import "./css/style.css";
import { handleGaleryClick } from "./js/gallery/masonry-gallery.mjs";
import { handleModalClick } from "./js/gallery/modal";
import { handleMenuBtnClick, handleMenuOutsideClick } from "./js/menu/menu";
import {
  handleSearchClick,
  handleSearchEnterKey,
} from "./js/search-bar/toggle-search";
import { handleClickMobileNav } from "./js/menu/mobile-nav.js";

import "./js/gallery/gallerymore.js";
import "./js/menu/mobile-nav.js";

export const els = {
  menuBtn: document.querySelector("#btn-menu"),
  menuBtnMobile: document.querySelector("#btn-menu-mobile"),

  dropdownMenuMobile: document.querySelector("#dropdown-menu-mobile"),
  menuArrowMobile: document.querySelector("#arrow-menu-mobile"),
  btnBurgerMobile: document.querySelector("#btn-burger"),
  closeBtnMobile: document.querySelector("#mobile-close-btn"),

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

  // Mobile
  els.menuBtnMobile.addEventListener("click", handleMenuBtnClick);
  els.closeBtnMobile.addEventListener("click", handleClickMobileNav);
  els.btnBurgerMobile.addEventListener("click", handleClickMobileNav);
});
