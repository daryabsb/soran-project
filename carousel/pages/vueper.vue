<template>
    <VueperSlides duration="3000" transitionSpeed="1500" bullets-outside :dragging-distance="50" autoplay
        fixed-height="90vh">
        <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title"
            :content="slide.content" />
    </VueperSlides>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

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
.vueperslide--loading .vueperslide__content-wrapper {
    display: none !important;
}
</style>