import { reactive, onMounted, toRefs } from "vue";
import gsap from "gsap";

export default function useCarousel({ carouselItems, carouselDots }, state) {
  const targets = reactive([]);

  onMounted(() => {
    state.stagger = state.duration + state.pause;
    targets.splice(0, targets.length, ...Array.from(carouselItems.value));
    state.numberOfTargets = targets.length;
    state.repeatDelay =
      state.stagger * (state.numberOfTargets - 1) + state.pause;

    Array.from(carouselDots.value).forEach((dot) => {
      dot.addEventListener("click", (e) => {
        Array.from(carouselDots.value).forEach((d) =>
          d.classList.remove("active")
        );
        e.target.classList.add("active");
      });
    });

    init();
  });

  const init = () => {
    const items = gsap.utils.toArray(carouselItems.value);
    const tl = gsap.timeline({
      onComplete() {
        this.restart();
      },
    });
    gsap.set(items, {
      backgroundColor: gsap.utils.wrap([
        "#f87171",
        "#fb923c",
        "#fbbf24",
        "#facc15",
        "#a3e635",
      ]),
      xPercent: 100,
    });
    gsap.to(items[0], { xPercent: 0, duration: state.duration });
    items.forEach((item, i) => {
      if (i) {
        tl.to(
          item,
          { xPercent: 0, duration: state.duration },
          `+=${state.pause}`
        ).to(items[i - 1], { xPercent: -100, duration: state.duration }, "<");
      }
    });
    tl.fromTo(
      items[0],
      { xPercent: 100, immediateRender: false },
      { xPercent: 0 },
      `+=${state.pause}`
    ).to(
      items[items.length - 1],
      { xPercent: -100, duration: state.duration },
      "<"
    );
  };

  // return { ...toRefs(state), targets };
}

// import { reactive, onMounted, toRefs } from "vue";
// import gsap from "gsap";

// export default function useCarousel({ carouselItems, carouselDots }) {
//   const targets = reactive([]);
//   const state = reactive({
//     duration: 2.5,
//     pause: 3.5,
//     stagger: 0,
//     numberOfTargets: 0,
//     repeatDelay: 0,
//     currentSlide: 0,
//     auto: false,
//   });
//   onMounted(() => {
//     state.stagger = state.duration + state.pause;
//     targets.splice(0, targets.length, ...Array.from(carouselItems.value));
//     state.numberOfTargets = targets.length;
//     state.repeatDelay =
//       state.stagger * (state.numberOfTargets - 1) + state.pause;

//     Array.from(carouselDots.value).forEach((dot, i) => {
//       dot.addEventListener("click", (e) => {
//         Array.from(carouselDots.value).forEach((d) =>
//           d.classList.remove("active")
//         );
//         e.target.classList.add("active");
//         state.currentSlide = i;
//       });
//     });

//     init();

//     if (state.auto) {
//       const autoSlider = setInterval(() => {
//         state.currentSlide = (state.currentSlide + 1) % state.numberOfTargets;
//         Array.from(carouselDots.value).forEach((d) =>
//           d.classList.remove("active")
//         );
//         carouselDots.value[state.currentSlide].classList.add("active");
//       }, state.repeatDelay * 1000);
//     }
//   });

//   const init = () => {
//     const items = gsap.utils.toArray(carouselItems.value);
//     const tl = gsap.timeline({
//       onComplete() {
//         this.restart();
//       },
//     });
//     gsap.set(items, {
//       backgroundColor: gsap.utils.wrap([
//         "#f87171",
//         "#fb923c",
//         "#fbbf24",
//         "#facc15",
//         "#a3e635",
//       ]),
//       xPercent: 100,
//     });
//     gsap.to(items[0], { xPercent: 0, duration: state.duration });
//     items.forEach((item, i) => {
//       if (i) {
//         tl.to(
//           item,
//           { xPercent: 0, duration: state.duration },
//           `+=${state.pause}`
//         ).to(items[i - 1], { xPercent: -100, duration: state.duration }, "<");
//       }
//     });
//     tl.fromTo(
//       items[0],
//       { xPercent: 100, immediateRender: false },
//       { xPercent: 0 },
//       `+=${state.pause}`
//     ).to(
//       items[items.length - 1],
//       { xPercent: -100, duration: state.duration },
//       "<"

// import { reactive, onMounted, toRefs } from "vue";
// import gsap from "gsap";

// export default function useCarousel({ carouselItems, carouselDots }) {
//   const targets = reactive([]);
//   const state = reactive({
//     duration: 2.5,
//     pause: 3.5,
//     stagger: 0,
//     numberOfTargets: 0,
//     repeatDelay: 0,
//     auto: false
//   });
//   onMounted(() => {
//     state.stagger = state.duration + state.pause;
//     targets.splice(0, targets.length, ...Array.from(carouselItems.value));
//     state.numberOfTargets = targets.length;
//     state.repeatDelay =
//       state.stagger * (state.numberOfTargets - 1) + state.pause;

//     Array.from(carouselDots.value).forEach((dot, index) => {
//       dot.addEventListener("click", (e) => {
//         Array.from(carouselDots.value).forEach((d) =>
//           d.classList.remove("active")
//         );
//         e.target.classList.add("active");
//         slideTo(index);
//       });
//     });

//     init();
//     if (state.auto) startAuto();
//   });

//   const init = () => {
//     const items = gsap.utils.toArray(carouselItems.value);
//     const tl = gsap.timeline({
//       onComplete() {
//         this.restart();
//       },
//     });
//     gsap.set(items, {
//       backgroundColor: gsap.utils.wrap([
//         "#f87171",
//         "#fb923c",
//         "#fbbf24",
//         "#facc15",
//         "#a3e635",
//       ]),
//       xPercent: 100,
//     });
//     gsap.to(items[0], { xPercent: 0, duration: state.duration });
//     items.forEach((item, i) => {
//       if (i) {
//         tl.to(
//           item,
//           { xPercent: 0, duration: state.duration },
//           `+=${state.pause}`
//         ).to(items[i - 1], { xPercent: -100, duration: state.duration }, "<");
//       }
//     });
//     tl.fromTo(
//       items[0],
//       { xPercent: 100, immediateRender: false },
//       { xPercent: 0 },
//       `+=${state.pause}`
//     ).to(
//       items[items.length - 1],
//       { xPercent: -100, duration: state.duration },
//       "<"
//     );
//   };

//   const startAuto = () => {
//     const items = gsap.utils.toArray(carouselItems.value);
//     gsap.to(items, {
//       xPercent: "-=100",
//       duration: state.duration,
//       repeat: -1,
//       ease: "linear",
//       stagger: state.stagger,
//     });
//   };

//   const slideTo = (index) => {

/*

CHECK THIS:

const items = gsap.utils.toArray(carouselItems.value);
const currentIndex = items.findIndex((item) => item.style.xPercent === "0%");
const distance = index - currentIndex;
const newXPercent = `-=${distance * 100}`;

gsap.to(items, {
  xPercent: newXPercent,
  duration: state.duration,
  ease: "power2.inOut",
});
};

const nextSlide = () => {
const items = gsap.utils.toArray(carouselItems.value);
const currentIndex = items.findIndex((item) => item.style.xPercent === "0%");
const nextIndex = currentIndex === state.numberOfTargets - 1 ? 0 : currentIndex + 1;
slideTo(nextIndex);
};

const prevSlide = () => {
const items = gsap.utils.toArray(carouselItems.value);
const currentIndex = items.findIndex((item) => item.style.xPercent === "0%");
const prevIndex = currentIndex === 0 ? state.numberOfTargets - 1 : currentIndex - 1;
slideTo(prevIndex);
};

return { ...toRefs(state), targets, nextSlide, prevSlide, slideTo, startAuto };
}

*/
