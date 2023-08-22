import { els } from "../../main";
import { msnry } from "./masonry-gallery.mjs";

const btnMore = document.querySelector("#btn-more");
const blocker = document.querySelector("#blocker");

const galleryItemsData = [
  {
    src: "/src/assets/images/gallery/bridge-garden.jpg",
    srcset: "/src/assets/images/gallery/bridge-garden@2x.jpg 2x",
    class: ["gallery-item"],
  },
  {
    src: "/src/assets/images/gallery/park-garden.jpg",
    srcset: "/src/assets/images/gallery/park-garden@2x.jpg 2x",
    class: ["gallery-item", "gallery-item--medium"],
  },
  {
    src: "/src/assets/images/gallery/whirlpool-garden.jpg",
    srcset: "/src/assets/images/gallery/whirlpool-garden@2x.jpg 2x",
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
  console.log(galleryItems);

  els.gallery.append(...galleryItems);
  msnry.appended(galleryItems);
  msnry.layout();
});
