import { els } from "../../main";
import { handleScrollUnlock } from "../utils/scrollLock";
import { placeholder } from "./placeholder.mjs";

export function handleModalClick(e) {
  if (e.target.nodeName !== "DIV") return;

  els.modal.ariaHidden = "true";
  placeholder.classList.remove("image-loaded");
  els.modalImg.src = "";

  handleScrollUnlock();
}
