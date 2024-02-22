//Selectors
const text = document.querySelector(".text");
const image = document.querySelector(".image");

window.addEventListener("scroll", appearOnScroll);

function appearOnScroll() {
  let textPosition = text.getBoundingClientRect().top;
  let windowHeight = window.innerHeight / 1.2;
  if (windowHeight > textPosition) {
    text.classList.remove("push-up");
    text.classList.remove("push-left");
    text.classList.remove("push-right");
  } else {
    text.classList.add("push-up");
    text.classList.add("push-left");
    text.classList.add("push-right");
  }
}
