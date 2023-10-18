import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = createCardsMarkup(galleryItems);

function createCardsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
               class="gallery__image"
               src="${preview}"
               data-source="large-image.jpg"
              alt="${description}"
              />
            </a>
         </li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);
console.log(galleryItems);
