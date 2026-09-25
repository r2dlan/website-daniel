type LightboxTrigger = HTMLElement & {
  dataset: {
    fullSrc?: string;
    fullAlt?: string;
  };
};

export function initImageLightbox() {
  const dialog = document.querySelector(".project-lightbox");
  const dialogImage = document.querySelector(".project-lightbox__image");
  const counter = document.querySelector(".project-lightbox__counter");
  const closeButton = document.querySelector(".project-lightbox__close");
  const prevButton = document.querySelector(".project-lightbox__nav--prev");
  const nextButton = document.querySelector(".project-lightbox__nav--next");

  const triggers = Array.from(document.querySelectorAll(".project-image-trigger")) as LightboxTrigger[];
  const images = triggers
    .map((trigger) => ({ src: trigger.dataset.fullSrc ?? "", alt: trigger.dataset.fullAlt ?? "" }))
    .filter((image) => image.src);

  if (!(dialog instanceof HTMLDialogElement) || !(dialogImage instanceof HTMLImageElement) || images.length === 0) {
    return;
  }

  let currentIndex = 0;

  const syncDialog = () => {
    const image = images[currentIndex];
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    if (counter instanceof HTMLElement) {
      counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }
  };

  const openImage = (index: number) => {
    currentIndex = (index + images.length) % images.length;
    syncDialog();
    dialog.showModal();
  };

  const step = (delta: number) => openImage(currentIndex + delta);
  const close = () => dialog.close();

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => openImage(index));
  });

  closeButton?.addEventListener("click", close);
  prevButton?.addEventListener("click", () => step(-1));
  nextButton?.addEventListener("click", () => step(1));

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  });
}
