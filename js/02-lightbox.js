import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
////Creating a markup from the gallery-items file
const markup = makeMarkup(galleryItems);
////Inserting a markup
galleryContainer.insertAdjacentHTML("beforeend", markup);

///initiation and modification of the lightbox signature
var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function makeMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join("");
}
