import { galleryItems } from "./gallery-items.js";
// Change code below this line

const instance = basicLightbox.create(`
    <img src="./gallery-items.js" width="800" height="600">
`);

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

galleryItems.element.addEventListener("click", () => {
  instance.show();
  // instance.style.display = "block";
  // gallery.src = this.dataset.source;
});
gallery.element.addEventListener("click", onGalleryClick);
function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}
// gallery.forEach((element) => {
//   element.addEventListener("click", function () {
//     instance.style.display = "block";
//     gallery.src = this.dataset.source;
//   });
// });
// instance.show();
// gallery.element.addEventListener("click", onGalleryClick);
// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
// }
// instance.close(() => {
//   instance.style.display = "none";
// });
// gallery.element.addEventListener("click", () => {
//   instance.close();
//   // instance.style.display = "none";
// });

// gallery.addEventListener("click", onGalleryClick);
// refs.btn.addEventListener("click", onClickHandlerClose);
// refs.modal.addEventListener("click", closeLightbox);

// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   if (event.target.nodeName === "IMG") {
//     basicLightbox.classList.add("is-open");
//     gallery__image.src = event.target.getAttribute("data-source");
//     gallery__image.alt = event.target.alt;
//   }
//   window.addEventListener("keyup", clickKey);
// }

// function closeLightbox(event) {
//   if (event.target === event.currentTarget) {
//     onClickHandlerClose();
//   }
// }

// function clickKey(event) {
//   if (event.code === "Escape") {
//     onClickHandlerClose();
//   }
// }
