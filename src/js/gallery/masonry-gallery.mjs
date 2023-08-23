import Masonry from "masonry-layout";
import { getLargeImg } from "../utils/getLargeImg";
import { els } from "/src/main";
import { desktopMedia, handleScrollLock } from "../utils/scrollLock";

export let msnry = new Masonry(".gallery", {
  itemSelector: ".gallery-item",
  transitionDuration: "0.2s",
  horizontalOrder: true,
  fitWidth: true,
  gutter: 43,
});

export function handleGaleryClick(e) {
  if (e.target.nodeName !== "IMG") return;

  els.modal.ariaHidden = "false";

  els.modalImg.src = getLargeImg(e.target.srcset);
  els.modalImg.parentElement.style.backgroundImage = `url(${e.target.dataset.placeholder})`;

  handleScrollLock();
  if (desktopMedia.matches) {
    return;
  }

  // trigger layout
  msnry.layout();
}
