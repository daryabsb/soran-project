<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { useTransitionComposable } from './composables/transition-composable';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { toggleTransitionComplete } = useTransitionComposable();

onMounted(() => {
  toggleTransitionComplete(true);
});

</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <HeadersNav />
    <NuxtPage />
  </div>
</template>
