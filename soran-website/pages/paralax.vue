<template>
    <div class="relative">
        <div class="fixed px-6 lg:px-8 bg-white bg-opacity-70 z-50 w-full ">
            <MainHeader :active="currentSlideNumber + 1" @updateNav="navigate" />

        </div>
        <div class="container absolute">
            <!-- h-screen flex flex-col justify-center items-center flex-nowrap text-white font-montserrat uppercase  will-change-transform -->
            <section id="section-1" class="background h-screen">
                <div class="content-wrapper">
                    <p class="content-title">Where communication & results intersect</p>
                    <p class="content-subtitle">Explore features >>></p>
                </div>
            </section>
            <section id="section-1" class="background">
                <div class="content-wrapper">
                    <p class="content-title">Where communication & results intersect</p>
                    <p class="content-subtitle">Explore features >>></p>
                </div>
            </section>
            <section id="section-2" class="background">
                <div class="content-wrapper">
                    <p class="content-title">The best customer relationship management platform for just about
                        everything.</p>
                    <p class="content-subtitle">

                        Convert leads into customers and then turn those customers into loyal fans of your brand by
                        leveraging next-generation automation and AI. Yes, it really can be automated, and no, you're
                        not dreaming.
                    </p>
                </div>
            </section>
            <section id="section-3" class="background">
                <div class="content-wrapper">
                    <p class="content-title">Etiam consequat lectus.</p>
                    <p class="content-subtitle">
                        Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at
                        nibh aliquam dapibus.
                    </p>
                </div>
            </section>
            <section id="section-4" class="background">
                <div class="content-wrapper">
                    <p class="content-title">Etiam consequat lectus.</p>
                    <p class="content-subtitle">
                        Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at
                        nibh aliquam dapibus.
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import MainHeader from "../components/headers/MainHeader.vue"
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
};

function slideDurationTimeout(slideDuration) {
    setTimeout(() => {
        ticking.value = false;
    }, slideDuration);
};

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
        delta = evt.detail * (-120);
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
    if (typeof window !== 'undefined') {
        var mousewheelEvent = isFirefox.value ? "DOMMouseScroll" : "wheel";
        window.addEventListener(mousewheelEvent, parallaxScroll, false);
    }

});
watch(() => currentSection.value, (newValue) => {
    currentSlideNumber.value = newValue - 1;
    if (newValue > currentSection.value) {
        nextItem();
    } else {
        previousItem();
    }
});


</script>
<style>
@import url("../assets/css/style.css");
</style>
