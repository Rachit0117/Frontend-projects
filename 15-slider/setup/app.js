const slides = document.querySelectorAll(".slide");
const nextbtn = document.querySelector(".nextBtn");
const prevbtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextbtn.addEventListener("click", function () {
  counter++;

  carousel();
});
prevbtn.addEventListener("click", function () {
  counter--;

  carousel();
});
function carousel() {
  if (counter === slides.length) counter = 0;
  else if (counter < 0) counter = slides.length - 1;
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
