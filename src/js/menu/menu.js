import { els } from "../../main";
const dropdownMenu = document.querySelector("#dropdown-menu");
const menuArrow = document.querySelector("#arrow-menu");

const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show-menu");
  menuArrow.classList.toggle("arrow-rotate");
};
const toggleMobileDropdown = () => {
  els.dropdownMenuMobile.classList.toggle("show-menu");
  els.menuArrowMobile.classList.toggle("arrow-rotate");
};

export const handleMenuBtnClick = (e) => {
  e.stopPropagation();
  if (e.target.id === "btn-menu" || e.target.id === "arrow-menu")
    toggleDropdown();
  if (e.target.id === "btn-menu-mobile" || e.target.id === "arrow-menu-mobile")
    toggleMobileDropdown();
};
export const handleMenuOutsideClick = (e) => {
  if (dropdownMenu.classList.contains("show-menu")) {
    toggleDropdown(e);
    return;
  }
  if (els.dropdownMenuMobile?.classList.contains("show-menu")) {
    toggleMobileDropdown(e);
  }
};
