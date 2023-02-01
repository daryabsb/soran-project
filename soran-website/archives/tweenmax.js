// import gsap from "gsap";
import { ref } from "vue";

export default function useSlideshow() {
  //   const TweenMax = gsap.TweenMax;
  const slideshowDuration = 4000;
  const slideshow = ref(null);

  function slideshowSwitch(index, auto) {
    if (slideshow.value.data("wait")) return;

    const slides = slideshow.value.find(".slide");
    const pages = slideshow.value.find(".pagination");
    const activeSlide = slides.filter(".is-active");
    const activeSlideImage = activeSlide.find(".image-container");
    const newSlide = slides.eq(index);
    const newSlideImage = newSlide.find(".image-container");
    const newSlideContent = newSlide.find(".slide-content");
    const newSlideElements = newSlide.find(".caption > *");
    if (newSlide.is(activeSlide)) return;

    newSlide.addClass("is-new");
    let timeout = slideshow.value.data("timeout");
    clearTimeout(timeout);
    slideshow.value.data("wait", true);
    const transition = slideshow.value.attr("data-transition");
    if (transition == "fade") {
      newSlide.css({
        display: "block",
        zIndex: 2,
      });
      newSlideImage.css({
        opacity: 0,
      });

      TweenMax.to(newSlideImage, 1, {
        alpha: 1,
        onComplete: function () {
          newSlide.addClass("is-active").removeClass("is-new");
          activeSlide.removeClass("is-active");
          newSlide.css({ display: "", zIndex: "" });
          newSlideImage.css({ opacity: "" });
          slideshow.value.find(".pagination").trigger("check");
          slideshow.value.data("wait", false);
          if (auto) {
            timeout = setTimeout(function () {
              slideshowNext(slideshow.value, false, true);
            }, slideshowDuration);
            slideshow.value.data("timeout", timeout);
          }
        },
      });
    } else {
      if (transition == "slide") {
        if (newSlide.index() > activeSlide.index()) {
          const nextSlide = activeSlide.next(".slide");
          TweenMax.fromTo(nextSlide, 0.5, { x: "100%" }, { x: "0%" });
          TweenMax.to(activeSlide, 0.5, { x: "-100%" });
        } else {
          const prevSlide = activeSlide.prev(".slide");
          TweenMax.fromTo(prevSlide, 0.5, { x: "-100%" }, { x: "0%" });
          TweenMax.to(activeSlide, 0.5, { x: "100%" });
        }
        newSlide.addClass("is-active").removeClass("is-new");
        activeSlide.removeClass("is-active");
        slideshow.value.find(".pagination").trigger("check");
        slideshow.value.data("wait", false);
        if (auto) {
          timeout = setTimeout(function () {
            slideshowNext(slideshow.value, false, true);
          }, slideshowDuration);
          slideshow.value.data("timeout", timeout);
        }
      }
    }
  }
  function slideshowNext(slideshowEl, auto, direction) {
    const currentSlide = slideshowEl.find(".slide.is-active");
    const nextIndex =
      direction === "next"
        ? (currentSlide.index() + 1) % slideshowEl.find(".slide").length
        : (currentSlide.index() - 1 + slideshowEl.find(".slide").length) %
          slideshowEl.find(".slide").length;
    slideshowSwitch(nextIndex, auto);
  }
}
