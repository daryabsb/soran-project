<template>
    <div>
        <div class="parallax-container">
            <slot name="slides" class="background"></slot>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch, onMounted, defineEmits } from "vue";

export default defineComponent({
    setup() {
        const emitNavigate = defineEmits("navigate");
        const ticking = ref(false);
        const currentSection = ref(1);
        const isFirefox = ref(
            typeof navigator !== "undefined"
                ? navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                : false
        );
        const isIe = ref(
            typeof navigator !== "undefined"
                ? navigator.userAgent.toLowerCase().indexOf("msie") > -1 ||
                navigator.userAgent.toLowerCase().indexOf("trident") > -1
                : false
        );

        const scrollSensitivitySetting = ref(30);
        const slideDurationSetting = ref(600);
        const currentSlideNumber = ref(0);
        const slides = ref([]);
        const totalSlideNumber = computed(() => slides.value.length);

        function navigate(section) {
            if (section > currentSection.value) {
                while (currentSection.value !== section) {
                    if (currentSlideNumber.value !== totalSlideNumber.value - 1) {
                        currentSlideNumber.value++;
                        nextItem();
                        currentSection.value++;
                    }
                }
            } else if (section < currentSection.value) {
                while (currentSection.value !== section) {
                    if (currentSlideNumber.value !== 0) {
                        currentSlideNumber.value--;
                        previousItem();
                        currentSection.value--;
                    }
                }
            }
            slideDurationTimeout(slideDurationSetting.value);
        }

        function slideDurationTimeout(slideDuration) {
            setTimeout(() => {
                ticking.value = false;
            }, slideDuration);
        }

        function nextItem() {
            var previousSlide = slides.value[currentSlideNumber.value - 1];
            previousSlide.classList.remove("up-scroll");
            previousSlide.classList.add("down-scroll");
        }

        function previousItem() {
            var currentSlide = slides.value[currentSlideNumber.value];
            currentSlide.classList.remove("down-scroll");
            currentSlide.classList.add("up-scroll");
        }
        function parallaxScroll(evt) {
            var delta;
            if (isFirefox.value) {
                delta = evt.detail * -120;
            } else if (isIe.value) {
                delta = -evt.deltaY;
            } else {
                delta = evt.wheelDelta;
            }

            if (ticking.value != true) {
                if (delta <= -scrollSensitivitySetting.value) {
                    ticking.value = true;
                    if (currentSlideNumber.value !== totalSlideNumber.value - 1) {
                        currentSlideNumber.value++;
                        nextItem();
                    }
                    slideDurationTimeout(slideDurationSetting.value);
                }
                if (delta >= scrollSensitivitySetting.value) {
                    ticking.value = true;
                    if (currentSlideNumber.value !== 0) {
                        currentSlideNumber.value--;
                    }
                    previousItem();
                    slideDurationTimeout(slideDurationSetting.value);
                }
            }
        }
        onMounted(() => {
            slides.value = document.querySelectorAll(".background");
            if (typeof window !== "undefined") {
                var mousewheelEvent = isFirefox.value ? "DOMMouseScroll" : "wheel";
                window.addEventListener(mousewheelEvent, parallaxScroll, false);
            }
        });
        watch(
            () => currentSection.value,
            (newValue) => {
                currentSlideNumber.value = newValue - 1;
                if (newValue > currentSection.value) {
                    nextItem();
                } else {
                    previousItem();
                }
            }
        );

        return {
            ...emitNavigate(navigate),
        }
    },
});
</script>
<style scoped>
.background {
    /* height: 100vh; */
    background-size: cover;
    background-color: white;
    /* display: none; */
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: 130vh;
    position: fixed;
    width: 100%;
    transform: translateY(30vh);
    transition: all 1.2s cubic-bezier(0.22, 0.44, 0, 1);
}

.background:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(0, 0, 0, 0.3); */
}

/*
.background:first-child {
    // background-image: url(/img/section-img-01.jpg);
    // background-color: whitesmoke;
    transform: translateY(-15vh);
}

.background:first-child .content-wrapper {
    transform: translateY(15vh);
}

// Set stacking context of slides
.background:nth-child(1) {
    z-index: 5;
}

.background:nth-child(2) {
    z-index: 4;
}

.background:nth-child(3) {
    z-index: 3;
}

.background:nth-child(4) {
    z-index: 2;
}

.background:nth-child(5) {
    z-index: 1;
}
*/
</style>