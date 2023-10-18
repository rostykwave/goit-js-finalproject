import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><img src="${preview}" alt="${description}" class="gallery__image"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);
