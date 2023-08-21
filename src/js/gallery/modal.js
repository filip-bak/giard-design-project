import { els } from "../../main";
import { handleScrollUnlock } from "../utils/scrollLock";

export function handleModalClick(e) {
  if (e.target.nodeName !== "DIV") return;

  els.modal.ariaHidden = "true";
  els.modalImg.src = "";

  handleScrollUnlock();
}
