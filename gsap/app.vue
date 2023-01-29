<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import Header from './components/Header.vue';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
</script>

<template>
    <Header />
    <NuxtPage />
</template>
