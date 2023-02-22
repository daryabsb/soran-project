<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



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

const goToSlide = (i, panel) => {
    ctx.value.data.forEach((e) => {
        if (e.vars && e.vars.id === 'scrollTween') {
            e.kill();
        }
    });
    ctx.value.add(() => {
        scrollTween.value = gsap.to(panel.querySelector('.slides'), {
            scrollTo: { x: i * window.innerWidth, autoKill: false },
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
                start: 'top bottom',
                end: '+=200%',
                onToggle: (self) =>
                    self.isActive && !scrollTween.value && goToSection(i),
            });
            const slides = panel.querySelectorAll('.slide');
            slides.forEach((slide, j) => {
                ScrollTrigger.create({
                    trigger: slide,
                    start: 'left center',
                    end: '+=200%',
                    onToggle: (self) =>
                        self.isActive && !scrollTween.value && goToSlide(j, panel),
                });
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

const slides = ref([
    {
        title: 'Oil and Gas',
        content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
        image: '/img/hero-oil-01.webp',
        video: {
            url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            }
        }
    },
    {
        title: 'Agriculture',
        content: 'This video can\'t be interacted with.',
        image: '/img/hero-agriculture-01.jpg',
        video: {
            url: 'https://www.youtube.com/embed/2sr9MGkkeks?controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'autoplay'
            },
            pointerEvents: false
        }
    },
    {
        title: 'Vehicl COS',
        content: 'This video can\'t be interacted with.',
        image: '/img/hero-vehicle-01.jpg',
        video: {
            url: 'https://www.youtube.com/embed/2sr9MGkkeks?controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
            props: {
                allow: 'autoplay'
            },
            pointerEvents: false
        }
    },

])
</script>

<template>
    <main ref="main">
        <section class="description panel blue">
            <div>
                <h1>Layered pinning</h1>
                <p>Use pinning to layer panels on top of each other as you scroll.</p>

            </div>
        </section>
        <section class="panel ">
            <vueper />
        </section>

        <section class="panel purple">THREE</section>
        <section class="panel green">FOUR</section>
    </main>
</template>
