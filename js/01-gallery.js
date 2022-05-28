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

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(
      `
    <img src="${event.target.dataset.source}" width="800" height="600">
`
      // {
      //   onShow: (instance) => {
      //     instance.element().querySelector("img").onclick = instance.close;
      //   },
      // }
    );
    instance.show();
  }
}

// gallery.dataset.source.addEventListener("keyup", clickKey);

// function clickKey(event) {
//   if (event.code === "Escape") {
//     instance.close();
//   }
// }
