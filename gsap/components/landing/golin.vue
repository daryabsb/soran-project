<template>
    <div class="w-full hero-section">
        <div class="hero-content">
            <h1 class="title">Go global with Golin.</h1>
            <p class="description">We help brands have meaningful conversations with the people that matter to them.</p>
            <button class="cta-button">Learn More</button>
        </div>
    </div>
</template>

<style>
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/img/section-img-02.jpg');
    background-size: cover;
    background-position: center;
}

.hero-content {
    text-align: center;
}

.title {
    font-size: 48px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 24px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.description {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 24px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.cta-button {
    padding: 12px 24px;
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
</style>

<script>
import { gsap } from "gsap";
// import { useEffect, ref } from "vue";

export default {
    setup() {
        let heroContent = ref(null);

        watchEffect(() => {
            gsap.to(heroContent.value, {
                duration: 1,
                opacity: 1,
                y: -50,
                ease: "power2.out"
            });
        }, []);

        return { heroContent };
    }
};
</script>
