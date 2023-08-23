import { els } from "../../main";
import { msnry } from "./masonry-gallery.mjs";

const btnMore = document.querySelector("#btn-more");
const blocker = document.querySelector("#blocker");

const galleryItemsData = [
  {
    src: "gallery/bridge-garden.jpg",
    srcset: "gallery/bridge-garden@2x.jpg 2x",
    placeholder: "gallery/bridge-garden-small.jpg ",
    class: ["gallery-item"],
  },
  {
    src: "gallery/park-garden.jpg",
    srcset: "gallery/park-garden@2x.jpg 2x",
    placeholder: "gallery/park-garden-small.jpg ",
    class: ["gallery-item", "gallery-item--medium"],
  },
  {
    src: "gallery/whirlpool-garden.jpg",
    srcset: "gallery/whirlpool-garden@2x.jpg 2x",
    placeholder: "gallery/whirlpool-garden-small.jpg",
    class: ["gallery-item"],
  },
];

btnMore.addEventListener("click", () => {
  blocker.classList.add("add-more");
  const galleryItems = [];
  galleryItemsData.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add(...el.class);
    const img = document.createElement("img");
    img.src = el.src;
    img.srcset = el.srcset;
    div.append(img);
    galleryItems.push(div);
  });

  els.gallery.append(...galleryItems);
  msnry.appended(galleryItems);
  msnry.layout();
});
