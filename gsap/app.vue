<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import Header from './components/Header.vue';
import LandingLayout from '~/layouts/LandingLayout.vue';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
</script>

<template>
    <LandingLayout>
        <NuxtPage />
    </LandingLayout>
</template>
