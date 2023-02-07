// ------------- VARIABLES ------------- //
let ticking = false;
let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
let isIe =
  navigator.userAgent.toLowerCase().indexOf("msie") > -1 ||
  navigator.userAgent.toLowerCase().indexOf("trident") > -1;
let scrollSensitivitySetting = 30;
let slideDurationSetting = 600;
let currentSlideNumber = 0;
let totalSlideNumber = document.getElementsByClassName("background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  let delta;
  if (isFirefox) {
    delta = evt.detail * -120;
  } else if (isIe) {
    delta = -evt.deltaY;
  } else {
    delta = evt.wheelDelta;
  }

  if (!ticking) {
    if (delta <= -scrollSensitivitySetting) {
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(() => {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
let mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, parallaxScroll, false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  let previousSlide = document.getElementsByClassName("background")[
    currentSlideNumber - 1
  ];
  previousSlide.classList.remove("up-scroll");
  previousSlide.classList.add("down-scroll");
}

function previousItem() {
  let currentSlide = document.getElementsByClassName("background")[
    currentSlideNumber
  ];
  currentSlide.classList.remove("down-scroll");
  currentSlide.classList.add("up-scroll");
}
