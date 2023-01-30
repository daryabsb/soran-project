<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownIcon } from "@heroicons/vue/24/outline"
const main = ref();
const ctx = ref();
const scrollTween = ref();

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

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const panels = self.selector('.panel');
        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: 'left right',
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
});

onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>


    <main ref="main">
        <!-- <section class="description ">
            <div>
                <h1>Layered pinning</h1>
                <p>Use pinning to layer panels on top of each other as you scroll.</p>
            </div>
        </section> -->
        <section class="panel dark">
            <LandingHero />
            <div class="flex flex-col justify-center items-center scroll-down animate-bounce">
                <span>Scroll Down</span>
                <ArrowDownIcon class="h-8 w-8" />
            </div>
        </section>
        <section class="panel orange">
            <LandingAbout />
        </section>
        <section class="panel purple">THREE</section>
        <section class="panel green">FOUR</section>
    </main>

</template>
