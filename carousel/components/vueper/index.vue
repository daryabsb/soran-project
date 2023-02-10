<template>
    <VueperSlides duration="3000" transitionSpeed="1500" bullets-outside :dragging-distance="50" autoplay
        fixed-height="100vh" slide-image-inside>

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
        title: 'Oil and Gas',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg',
        video: {
            url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            }
        }
    },
    {
        title: 'Oil and Gas',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg',
        video: {
            url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            }
        }
    },
    {
        title: 'Oil and Gas',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg',
        video: {
            url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            }
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