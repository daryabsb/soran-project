<template>
    <VueperSlides duration="3000" transitionSpeed="1500" bullets-outside :dragging-distance="50" autoplay
        fixed-height="100vh" slide-image-inside>
        <!-- <template #arrow-left>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <div class="arrow-left fill-white"></div>

            </button>
        </template> -->

        <!-- <template #arrow-right>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <div class="arrow-right"></div>
            </button>
        </template> -->
        <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title"
            :content="slide.content">
        </VueperSlide>
        <template #bullets="{ bulletIndexes, goToSlide, currentSlide }">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button v-for="(slideIndex, i) in bulletIndexes" :key="i" type="button"
                    :class="[currentSlide === slideIndex ? 'active bg-opacity-70' : 'bg-opacity-25 transition-all', 'h-1 w-10 bg-white  mx-2 focus']"
                    @click="goToSlide(slideIndex)" aria-current="true" aria-label="Slide 1"></button>

            </div>

        </template>
    </VueperSlides>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid"

const slides = [
    {
        title: 'Aurora Borealis',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
        video: {
            url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            }
        }
    },
    {
        title: 'Fjords',
        content: 'This video can\'t be interacted with.',
        image: 'https://i.ytimg.com/vi/2sr9MGkkeks/maxresdefault.jpg',
        video: {
            url: 'https://www.youtube.com/embed/2sr9MGkkeks?controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'autoplay'
            },
            pointerEvents: false
        }
    },

]
</script>

<style>
.vueperslides__arrow {
    color: yellow
}

.vueperslides__arrow svg {

    width: 2.8em;
    padding: 1em;
}

.vueperslides__arrow svg {
    vertical-align: middle;
    stroke: currentColor;
    fill: none;
    width: 2.8em;
    padding: 1em;
    stroke-width: 1;
    transition: .3s ease-in-out;
    box-sizing: border-box;
}

.vueperslide--loading .vueperslide__content-wrapper {
    display: none !important;
}
</style>