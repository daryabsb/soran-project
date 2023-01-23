in parallax component, navigate function and currentSlideNumber are available
how do I access them from MainHeader component?  -->
<template>
    <div class="relative overflow-hidden">
        <!-- <GradientUnit /> -->
        <parallax>
            <template v-slot="{ navigate, currentSlideNumber }">
                <div class="fixed px-6 lg:px-8 bg-white bg-opacity-70 z-50 w-full">
                    <MainHeader :active="currentSlideNumber + 1" @updateNav="navigate" />

                </div>
                <slide id="section-1">
                    <Hero />
                </slide>
                <slide id="section-2">
                    <Features />
                </slide>
                <slide id="section-3">
                    <SeactionCreative />
                </slide>
            </template>
        </parallax>
    </div>
</template>
<script setup>

import MainHeader from '~~/components/headers/MainHeader.vue';
import Parallax from '~/components/Paralax/parallax.vue';
import slide from '~/components/Paralax/slide.vue';
import Hero from '~/components/landing/hero.vue';
import Features from '~/components/landing/fetures.vue';

</script>