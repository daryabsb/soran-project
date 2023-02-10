<template>
    <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
        <vueper-slides>
            <vueper-slide v-for="i in 4" :key="i" :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
                <template #content>

                    Complex content with Vue.js {{ 1 === 1 ? 'interpreted' : 'non-interpreted' }} compilable content &
                    <span v-pre>{{ mustaches }}</span>.
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
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