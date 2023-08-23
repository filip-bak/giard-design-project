const mainNavList = document.querySelectorAll(
  "#main-nav-list [data-mobile='true']",
);
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavList = document.querySelector("#mobile-nav-container");

const mainNavListCopies = [];

function changeToMobileId(arrayOfElementsToChange) {
  for (const el of arrayOfElementsToChange) {
    if (el === null) return;
    el.id += "-mobile";
  }
}

function classChange({ el, removeClasses, AddClasses }) {
  if (el === null) return;
  if (removeClasses) el.classList.remove(...removeClasses.split(" "));
  if (AddClasses) el.classList.add(...AddClasses.split(" "));
}

mainNavList.forEach((el, i) => {
  const copy = el.cloneNode(true);
  copy.classList.remove("hidden");
  copy.classList.add("text-left");

  if (i === 0) {
    const btnMenu = copy.querySelector("#btn-menu");
    const btnArrow = copy.querySelector("#btn-menu #arrow-menu");
    const dropdownMenu = copy.querySelector("#dropdown-menu");
    console.log(btnMenu, btnArrow, dropdownMenu);

    const elementsToChange = [btnMenu, btnArrow, dropdownMenu];
    changeToMobileId(elementsToChange);

    classChange({
      el: dropdownMenu,
      removeClasses: "right-64 border-2 border-accent-green",
      AddClasses: "-left-full right-full -top-4 rounded-r-none",
    });
    classChange({
      el: btnArrow,
      AddClasses: "rotate-90 invert",
    });
  }

  mainNavListCopies.push(copy);
});

export function handleClickMobileNav(e) {
  mobileNav.classList.toggle("show-mobile-nav");
}
//   arrow-menu

mobileNavList.append(...mainNavListCopies);

console.log("copy", mainNavListCopies);
console.log(mainNavList);
console.log(mobileNav);
