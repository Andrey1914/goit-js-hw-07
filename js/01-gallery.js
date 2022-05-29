import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", onGalleryClick);

function onEscPress(instance) {
  return function (event) {
    if (event.key === "Escape") {
      instance.close();
    }
  };
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(
      `
    <img src="${event.target.dataset.source}" width="1400" height="900">
`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", fn);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", fn);
        },
      }
    );
    const fn = onEscPress(instance);
    instance.show();
  }
}
