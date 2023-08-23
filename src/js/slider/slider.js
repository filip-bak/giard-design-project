const slider = document.querySelector("#slider-container");
const sliderBtnLeft = document.querySelector("#btn-left");
const sliderBtnRight = document.querySelector("#btn-right");

function moveSlider(direction) {
  if (direction === "left" || direction === "right") {
    const bannerWidht = slider.querySelector("#banner").offsetWidth;
    direction === "right"
      ? (slider.scrollLeft += bannerWidht)
      : (slider.scrollLeft -= bannerWidht);
  } else {
    throw new Error(`Specify proper direction ${direction}`);
  }
}

export function handleSliderBtnLeftClick() {
  moveSlider("left");
}
export function handleSliderBtnRightClick() {
  moveSlider("right");
}

sliderBtnLeft.addEventListener("click", handleSliderBtnLeftClick);
sliderBtnRight.addEventListener("click", handleSliderBtnRightClick);
