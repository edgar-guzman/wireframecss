const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
// const menuNone = doc.querySelector(".overlay-none");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  // menuNone.classList.add("overlay-none");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  // menuNone.classList.remove("overlay-none");
});