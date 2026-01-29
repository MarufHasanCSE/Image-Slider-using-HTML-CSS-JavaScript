const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.getElementById("prev");
const forwBtn = document.getElementById("forw");

let currentIndex = 0;

function showImage(index) {
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}
prevBtn.addEventListener("click", () => {
  showImage(currentIndex - 1);
});

forwBtn.addEventListener("click", () => {
  showImage(currentIndex + 1);
});

showImage(0);
