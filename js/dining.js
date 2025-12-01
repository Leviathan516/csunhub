
let slideIndexes = {
  group1: 0,
  group2: 0,
  group3: 0,
  group4: 0,
  group5: 0,
  group6: 0,
  group7: 0,
  group8: 0,
  group9: 0,
  group10: 0,
  group11: 0,

};

function changeSlide(direction, group) {
  let slides = document.querySelectorAll(`.slide.${group}`);
  slideIndexes[group] += direction;

  if (slideIndexes[group] < 0) slideIndexes[group] = slides.length - 1;
  if (slideIndexes[group] >= slides.length) slideIndexes[group] = 0;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndexes[group]].classList.add("active");
}
