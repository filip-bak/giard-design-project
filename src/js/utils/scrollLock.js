import { els } from "../../main";

export const desktopMedia = window.matchMedia("(min-width: 1440px)");

export const handleScrollLock = () => {
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth;

  document.body.style.overflowY = "hidden";
  if (!desktopMedia.matches) {
    document.body.style.paddingRight = scrollBarWidth + "px";
  }
};

export const handleScrollUnlock = () => {
  document.body.style.overflowY = "auto";
  document.body.style.paddingRight = "";
};
