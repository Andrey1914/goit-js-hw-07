import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        title="${description}"
      />
    </a>`
  )
  .join("");
gallery.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250 /* options */,
});

console.log(galleryItems);
