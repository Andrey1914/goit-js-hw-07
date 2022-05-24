import { galleryItems } from "./gallery-items.js";
// Change code below this line

const instance = basicLightbox.create(`
    <img src=${original} width="800" height="600">
`);

instance.show();
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
gallery.innerHTML(galleryMarkup);
// const galleryMarkup = galleryItems.reduce(
//   (acc, galleryItem) => acc + createGalleryItem(galleryItem),
//   ""
// );
// gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
// instance.classList.add("gallery__image");

// refs.gallery.addEventListener("click", onGalleryClick);
// refs.btn.addEventListener("click", onClickHandlerClose);
// refs.modal.addEventListener("click", closeLightbox);

// function onGalleryClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   if (e.target.nodeName === "IMG") {
//     refs.lightbox.classList.add("is-open");
//     refs.lightbox__image.src = e.target.getAttribute("data-source");
//     refs.lightbox__image.alt = e.target.alt;
//   }
//   window.addEventListener("keyup", clickKey);
// }

// function onClickHandlerClose(e) {
//   e.preventDefault();
//   refs.lightbox.classList.remove("is-open");
//   refs.lightbox__image.src = "";
//   refs.lightbox__image.alt = "";
//   window.removeEventListener("keyup", clickKey);
// }

function closeLightbox(event) {
  if (event.target === event.currentTarget) {
    onClickHandlerClose();
  }
}

function clickKey(event) {
  if (event.code === "Escape") {
    onClickHandlerClose();
  }
}
