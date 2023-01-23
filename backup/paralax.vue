<template>
    <div class="relative">
        <div class="fixed px-6 lg:px-8 bg-white bg-opacity-70 z-50 w-full">
            <MainHeader :active="currentSlideNumber + 1" @updateNav="navigate" />
        </div>
        <div class="container absolute">
            <section id="section-1" class="background h-screen">
                <div class="content-wrapper bg-white">
                    <div class="relative px-6 lg:px-8">
                        <div class="mx-auto max-w-3xl xl:max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                            <div>
                                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                                    <div
                                        class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20">
                                        <span class="text-gray-600">Announcing our next round of funding.
                                            <a href="#" class="font-semibold text-blood"><span class="absolute inset-0"
                                                    aria-hidden="true"></span>Read more <span
                                                    aria-hidden="true">→</span></a></span>
                                    </div>
                                </div>
                                <div>
                                    <h1
                                        class="content-title text-4xl leading-1 tracking-tight sm:text-center sm:text-8xl">
                                        Data to enrich your online business
                                    </h1>
                                    <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                                        qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                                        occaecat fugiat aliqua.
                                    </p>
                                    <div class="mt-8 flex gap-x-4 justify-center">
                                        <a href="#"
                                            class="inline-block rounded-lg bg-blood px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blood hover:bg-blood hover:ring-blood">Get
                                            started
                                            <span class="text-indigo-200" aria-hidden="true">→</span></a><a href="#"
                                            class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">Live
                                            demo
                                            <span class="text-gray-400" aria-hidden="true">→</span></a>
                                    </div>
                                </div>
                                <div
                                    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                    <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                        viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3"
                                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z">
                                        </path>
                                        <defs>
                                            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49"
                                                x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#9089FC"></stop>
                                                <stop offset="1" stop-color="#FF80B5"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                            <defs>
                                <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208"
                                    y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="pink" />
                                    <stop offset="1" stop-color="purple" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>

            <section id="section-1" class="background">
                <div class="content-wrapper">
                    <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left z-10">
                        <div class="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                            <h1
                                class="text-4xl font-montserrat font-normal tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span class="block xl:inline">We got you covered</span>
                                {{ " " }}
                                <span class="block text-blood xl:inline">with all we've got.</span>
                            </h1>
                            <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua.
                            </p>
                            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a href="#"
                                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-blood px-8 py-3 text-base font-medium text-white hover:bg-blood md:py-4 md:px-10 md:text-lg">Get
                                        started</a>
                                </div>
                                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a href="#"
                                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blood hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">Live
                                        demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                        <img class="absolute inset-0 h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                            alt="" />
                    </div>
                    <!-- <div class="hidden lg:block absolute top-0 h-screen">
                        <img src="/img/section-img-01.jpg" alt="" class=" object-cover">
                    </div> -->
                </div>
            </section>

            <section id="section-2" class="background">
                <div class="content-wrapper">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8 p-6 z-10">
                        <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                            <h1>
                                <span
                                    class="block text-base font-montserrat font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">Coming
                                    soon</span>
                                <span class="mt-1 block text-4xl tracking-tight sm:text-5xl xl:text-6xl">
                                    <span class="block text-gray-900">Data to enrich your</span>
                                    <span class="block font-normal text-blood">online business</span>
                                </span>
                            </h1>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua ad ad non deserunt sunt.
                            </p>
                            <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                                <p class="text-base font-medium text-gray-900">
                                    Sign up to get notified when it’s ready.
                                </p>
                                <form action="#" method="POST" class="mt-3 sm:flex">
                                    <label for="email" class="sr-only">Email</label>
                                    <input type="email" name="email" id="email"
                                        class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
                                        placeholder="Enter your email" />
                                    <button type="submit"
                                        class="mt-3 w-full border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">
                                        Notify me
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div
                            class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                            <div class="block lg:hidden relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <button type="button"
                                    class="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="sr-only">Watch our video to learn more</span>
                                    <img class="w-full" src="/img/section-img-02.jpg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block absolute top-0">
                        <img src="/img/section-img-02.jpg" alt="" class="h-screen w-screen object-cover" />
                    </div>
                </div>
            </section>

            <section id="section-3" class="background">
                <div class="content-wrapper relative">
                    <p class="content-title">Etiam consequat lectus.</p>
                    <p class="content-subtitle">
                        Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at
                        nibh aliquam dapibus.
                    </p>
                    <footer class="bg-white absolute bottom-0 w-full border-t border-zinc-500">
                        <div class="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                            <div class="flex justify-center space-x-6 md:order-2">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">{{ item.name }}</span>
                                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                                </a>
                            </div>
                            <div class="mt-8 md:order-1 md:mt-0">
                                <p class="text-center text-xs leading-5 text-gray-500">
                                    &copy; 2023 Darya Ibrahim, Inc. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import MainHeader from "../components/headers/MainHeader.vue";
import { defineComponent, h } from "vue";

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


</script>
<style scoped>
@import url("../assets/css/style.css");
</style>
