<script setup>
import { onUnmounted, ref, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useTransitionComposable } from '../composables/transition-composable';
import transitionConfig from '../helpers/transitionConfig';

definePageMeta({
    pageTransition: transitionConfig,
});

const { transitionState } = useTransitionComposable();
const main = ref(),
    ctx = ref(),
    scrollTween = ref();

const goToSection = (i) => {
    // Remove the GSAP instance with the specific ID
    // to prevent memory leak
    ctx.value.data.forEach((e) => {
        if (e.vars && e.vars.id === 'scrollTween') {
            e.kill();
        }
    });
    ctx.value.add(() => {
        scrollTween.value = gsap.to(window, {
            scrollTo: { y: i * window.innerHeight, autoKill: false },
            duration: 1,
            id: 'scrollTween',
            onComplete: () => (scrollTween.value = null),
            overwrite: true,
        });
    });
};

watch(
    () => transitionState.transitionComplete,
    (newValue) => {
        if (newValue) {
            ctx.value = gsap.context((self) => {
                const panels = self.selector('.panel');
                panels.forEach((panel, i) => {
                    ScrollTrigger.create({
                        trigger: panel,
                        start: 'top bottom',
                        end: '+=200%',
                        onToggle: (self) =>
                            self.isActive && !scrollTween.value && goToSection(i),
                    });
                });
                ScrollTrigger.create({
                    start: 0,
                    end: 'max',
                    snap: 1 / (panels.length - 1),
                });
            }, main.value); // <- Scope!
        }
    }
);

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <div ref="main">
        <section class=" panel ">

            <LandingHero />
        </section>
        <section class="panel">
            <LandingAbout />
        </section>
        <section class="panel">
            <LandingTeam />
        </section>
        <!-- <section class="panel">
            <LandingFetures />
        </section> -->
        <section class="panel">
            <LandingInsights />
        </section>
        <section class="panel">
            <LandingContact />
        </section>
    </div>
</template>
