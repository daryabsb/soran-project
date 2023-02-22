<template>
    <div class="w-full h-full">

        <VueperSlides duration="3000" transitionSpeed="1500" bullets-outside :dragging-distance="50" autoplay
            fixed-height="100vh">

            <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content"
                :link="slide.link">
                <template #content>
                    <div class="absolute bottom-[50%] md:bottom-8 w-full">
                        <h1 class=" font-montserrat text-center font-thin text-4xl">{{ slide.title }}</h1>
                        <p class="text-white font-montserrat font-extralight text-center  ">{{ slide.content }}</p>
                    </div>
                </template>
            </VueperSlide>

            <template #bullets="{ bulletIndexes, goToSlide, currentSlide }">
                <div class=" absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button v-for="(slideIndex, i) in bulletIndexes" :key="i" type="button"
                        :class="[currentSlide === slideIndex ? 'active bg-opacity-70' : 'bg-opacity-25 transition-all', 'h-1 w-10 bg-white  mx-2 focus']"
                        @click="goToSlide(slideIndex)" aria-current="true" aria-label="Slide 1"></button>

                </div>
            </template>
        </VueperSlides>
    </div>
</template>

<script setup>
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

const slides = [
    {
        title: 'Vehicle COC',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg',
        link: "/industries/1",

    },
    {
        title: 'Agriculture',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg',
        link: "/industries/3",

    },
    {
        title: 'Oil and Gas',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg',
        link: "/industries/2",

    },


]
</script>

<style>
.vueperslides__arrow {
    @apply text-blood
}

.vueperslides__arrow svg {
    @apply w-[2.8em] p-[1em]
}

.vueperslides__arrow svg {
    @apply items-center fill-none w-[2.8em] p-[1em] stroke-1 box-border stroke-current ease-in-out
}

.vueperslides__arrow svg {
    transition: .3s;

}

.vueperslide--loading .vueperslide__content-wrapper {
    @apply hidden
}

/* vertical-align: middle;
    stroke: currentColor;
    fill: none;
    width: 2.8em;
    padding: 1em;
    stroke-width: 1;
    box-sizing: border-box; */
</style>