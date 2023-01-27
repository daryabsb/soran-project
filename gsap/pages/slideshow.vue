<template>
    <div class="container" ref="container">
        <div class="content" ref="slides" v-for="(slide, index) in slideEls" :key="index">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
            <a href="#">{{ slide.btn }}</a>
            <img :src="slide.img" alt="">
        </div>
    </div>
</template>
  
<script>
import { gsap } from "gsap";
import { onMounted, ref } from "@vue/composition-api";

export default {
    setup() {
        const slideEls = ref([
            { title: "GSAP SLIDE 1", description: 'This is an automatic slideshow', img: 'https://images.unsplash.com/photo-1604522571047-8de1e43bae1b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ', btn: 'Upcoming event' },
            { title: "GSAP SLIDE 2", description: 'This is an automatic slideshow', img: 'https://images.unsplash.com/photo-1605754452467-fda400b4c8f8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ', btn: 'Upcoming event' },
            { title: "GSAP SLIDE 3", description: 'This is an automatic slideshow', img: 'https://images.unsplash.com/photo-1604692221247-9490c6b88721?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ', btn: 'Upcoming event' },

        ]
        );
        const container = ref(null);
        const slides = ref([]);

        onMounted(() => {
            const els = gsap.utils.toArray(slides.value);
            var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

            tl.to(els[2], {
                duration: "5",
                opacity: 0,
            }, "+=2");
            tl.to(els[1], {
                duration: "5",
                opacity: 0,
            }, "+=2");
            tl.to(els[2], {
                duration: "5",
                opacity: 1,
            }, "+=2");
            tl.to(els[1], {
                duration: "0",
                opacity: 1,
            }, "");
        });

        return {
            container,
            // slideRefs,
            slides,
            slideEls
        };
    }
};
</script>

<style>
.container {
    position: relative;
    width: 100vw;
    height: calc(100vh - 10rem);
    overflow: hidden;
    margin: 5rem auto;

    /* display: flex; */
    justify-content: center;
    align-items: center;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.container::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #44004499
}

.content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 5rem;
}

h1,
p {
    z-index: 100;
    color: white;
    margin: 0;
}



a {
    z-index: 100;
    background-color: transparent;
    margin-right: auto;
    padding: .5rem;
    border: 1px solid #fff;
    border-radius: .5rem;
    color: #fff;
    text-decoration: none;
    margin-top: 1rem;
    transition: .3s;
}

a:hover {
    background-color: #fff;
    color: #111;
}
</style>