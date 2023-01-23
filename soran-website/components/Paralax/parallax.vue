<template>
    <div class="container relative">

        <slot :navigate="navigate" :currentSlideNumber="currentSlideNumber" />

    </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";


// const emitNavigate = defineEmits(["navigate"]);
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

defineExpose({
    navigate,
    currentSlideNumber
})

</script>
