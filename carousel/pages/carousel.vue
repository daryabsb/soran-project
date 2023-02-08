<template>
    <div class="bod">
        <div class="carousel">
            <div v-for="(item) in components" :key="item.id" class="carousel-item" ref="carouselItems">
                <component :is="item.component" />
            </div>
            <div class="carousel-dot-wrapper">
                <div class="carousel-dot" v-for="(item, index) in components" :key="index" ref="carouselDots" />
            </div>

        </div>
    </div>
</template>

<script setup>
import useCarousel from "~/composables/useCarousel"
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import SlideOne from "~/components/SlideOne.vue"
import SlideTwo from "~/components/SlideTwo.vue"
import SlideThree from "~/components/SlideThree.vue"

const components = [
    {
        id: 1,
        component: SlideOne,
    },
    {
        id: 2,
        component: SlideTwo,
    },
    {
        id: 3,
        component: SlideThree,
    },

]
const carouselItems = ref([])
const carouselDots = ref(null)
const state = reactive({
    duration: 2.5,
    pause: 3.5,
    stagger: 0,
    // targets: [],
    numberOfTargets: 0,
    repeatDelay: 0,
});
useCarousel({ carouselItems, carouselDots }, state)
onMounted(() => {
})




</script>

<style>
.body {
    margin: 0;
    padding: 0;
}

.bod {

    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel {
    height: 100vh;
    position: relative;
    width: 100vw;
    overflow: hidden;
}

.carousel .carousel-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: white;
    font-weight: 600;
}

.image {

    height: 100%;
    object-fit: fill;

}

.carousel .carousel-item .pink {
    background-color: #f87171;

}

.carousel .carousel-item .orang {
    background-color: #fb923c;

}

.carousel .carousel-item .yellow {
    background-color: #fbbf24;

}

.carousel .carousel-item .lime {
    background-color: #facc15;

}

.carousel .carousel-item .green {
    background-color: #a3e635;
}

.carousel .carousel-dot-wrapper {
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px 8px;
}

.carousel .carousel-dot {
    border-radius: 9999px;
    width: 12px;
    height: 12px;
    background-color: #818cf8;
    cursor: pointer;
    transition: 0.3s;
}

.carousel .carousel-dot:hover,
.carousel .carousel-dot.active {
    background-color: #a78bfa;
    outline: 2px solid #a78bfa;
}

.carousel .carousel-dot.active {
    outline-offset: 2px;
}
</style>