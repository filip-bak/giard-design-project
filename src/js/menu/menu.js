const dropdownMenu = document.querySelector("#dropdown-menu");
const menuArrow = document.querySelector("#arrow-menu");

const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show-menu");
  menuArrow.classList.toggle("arrow-rotate");
};

export const handleMenuBtnClick = (e) => {
  e.stopPropagation();
  toggleDropdown();
};
export const handleMenuOutsideClick = () => {
  if (dropdownMenu.classList.contains("show-menu")) {
    toggleDropdown();
  }
};
