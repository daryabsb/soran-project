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
            duration: .5,
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
        <section class="panel">
            <LandingHero />

        </section>
        <section class="panel">
            <LandingAbout />
        </section>
        <section class="panel">
            <LandingTem />
        </section>
        <section class="panel">
            <LandingFetures />
        </section>
        <section class="panel">
            <LandingInsights />
        </section>
        <section class="panel">
            <LandingContact />
        </section>
    </main>

</template>
