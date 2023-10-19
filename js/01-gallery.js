import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryContainer.addEventListener("click", onImageClick);

function createCardsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
              alt="${description}"
              />
            </a>
         </li>`
    )
    .join("");
}

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const originalImageSource = e.target.getAttribute("data-source");
  const altOfOriginalImage = e.target.getAttribute("alt");

  const instance = basicLightbox.create(
    `
		<img src="${originalImageSource}"  alt="${altOfOriginalImage}">
	`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onESCKeydown);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onESCKeydown);
      },
    }
  );

  instance.show();

  function onESCKeydown(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
