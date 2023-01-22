<template>
    <div class="relative">
        <div class="fixed px-6 lg:px-8 bg-white bg-opacity-70 z-50 w-full ">
            <MainHeader :active="currentSlideNumber + 1" @updateNav="navigate" />

        </div>
        <div class="container absolute">
            <!-- h-screen flex flex-col justify-center items-center flex-nowrap text-white font-montserrat uppercase  will-change-transform -->
            <section id="section-1" class="background h-screen">
                <div class="content-wrapper bg-white ">
                    <p class="content-title text-zinc-900">Where communication & results intersect</p>
                    <p class="content-subtitle text-zinc-900">Explore features >>></p>
                </div>
            </section>

            <section id="section-1" class="background h-screen">
                <div class="content-wrapper bg-white ">
                    <div class="relative px-6 lg:px-8">
                        <div class="mx-auto max-w-3xl xl:max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                            <div>
                                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                                    <div
                                        class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        <span class="text-gray-600">Announcing our next round of funding. <a href="#"
                                                class="font-semibold text-indigo-600"><span class="absolute inset-0"
                                                    aria-hidden="true"></span>Read more <span
                                                    aria-hidden="true">→</span></a></span>
                                    </div>
                                </div>
                                <div>
                                    <h1
                                        class="content-title text-4xl leading-1 tracking-tight sm:text-center sm:text-8xl">
                                        Data to
                                        enrich your online business</h1>
                                    <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Anim aute id magna
                                        aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                        amet fugiat veniam occaecat fugiat aliqua.</p>
                                    <div class="mt-8 flex gap-x-4 justify-center"><a href="#"
                                            class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">Get
                                            started <span class="text-indigo-200" aria-hidden="true">→</span></a><a
                                            href="#"
                                            class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">Live
                                            demo <span class="text-gray-400" aria-hidden="true">→</span></a></div>
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
                <div class="content-wrapper ">
                    <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left z-10">
                        <div class="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                            <h1
                                class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span class="block xl:inline">Data to enrich your</span>
                                {{ ' ' }}
                                <span class="block text-indigo-600 xl:inline">online business</span>
                            </h1>
                            <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Anim
                                aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a href="#"
                                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get
                                        started</a>
                                </div>
                                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a href="#"
                                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">Live
                                        demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class=" relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 ">
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
                <div class="content-wrapper ">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8 p-6 z-10">
                        <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                            <h1>
                                <span
                                    class="block text-base font-montserrat font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">Coming
                                    soon</span>
                                <span class="mt-1 block text-4xl  tracking-tight sm:text-5xl xl:text-6xl">
                                    <span class="block  text-gray-900">Data to enrich your</span>
                                    <span class="block font-normal text-blood">online business</span>
                                </span>
                            </h1>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Anim aute
                                id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                                sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
                            <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                                <p class="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.
                                </p>
                                <form action="#" method="POST" class="mt-3 sm:flex">
                                    <label for="email" class="sr-only">Email</label>
                                    <input type="email" name="email" id="email"
                                        class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
                                        placeholder="Enter your email">
                                    <button type="submit"
                                        class="mt-3 w-full  border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">Notify
                                        me</button>
                                </form>

                            </div>
                        </div>
                        <div
                            class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">

                            <div class="block lg:hidden relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <button type="button"
                                    class="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="sr-only">Watch our video to learn more</span>
                                    <img class="w-full" src="/img/section-img-02.jpg" alt="">

                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block absolute top-0 ">
                        <img src="/img/section-img-02.jpg" alt="" class="h-screen w-screen object-cover">
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
                    <footer class="bg-white absolute bottom-0">
                        <div class="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                            <div class="flex justify-center space-x-6 md:order-2">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    class="text-gray-400 hover:text-gray-500">
                                    <span class="sr-only">{{ item.name }}</span>
                                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                                </a>
                            </div>
                            <div class=" mt-8 md:order-1 md:mt-0">
                                <p class="text-center text-xs leading-5 text-gray-500">&copy; 2023 Darya Ibrahim, Inc.
                                    All rights reserved.</p>
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
import MainHeader from "../components/headers/MainHeader.vue"
import { defineComponent, h } from 'vue'


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

const navigation = [
    {
        name: 'Facebook',
        href: '#',
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
    {
        name: 'Twitter',
        href: '#',
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                    }),
                ]),
        }),
    },
    {
        name: 'GitHub',
        href: '#',
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
    {
        name: 'YouTube',
        href: '#',
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
]

</script>
<style>
@import url("../assets/css/style.css");
</style>
