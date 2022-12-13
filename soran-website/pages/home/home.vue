<template>
    <div>
        <full-page>
            <main-header></main-header>

            <div ref="sectionOne" class="relative section h-screen w-screen border" @scroll="goToSection(e)">
                <!-- <h3>Section 1</h3> -->
                <div class="relative h-full shadow-xl sm:overflow-hidden sm:rounded-2xl">

                    <div class="absolute inset-0 h-full">
                        <div class="bg-local" style="background-image: url(~assets/img/section-img-01.jpg)"></div>
                        <!-- <img src="~assets/img/section-img-01.jpg" class="object-cover w-full h-full" /> -->
                    </div>
                    <div class="relative h-screen w-screen  sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span class="block text-white">Take control of your</span>
                            <span class="block text-indigo-200">customer support</span>
                        </h1>
                        <p class="mx-auto max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                            Anim aute id
                            magna
                            aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                            veniam occaecat fugiat aliqua.</p>
                        <div class="mx-auto  max-w-sm sm:flex sm:max-w-none sm:justify-center">
                            <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                <a href="#"
                                    class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">Get
                                    started</a>
                                <a href="#"
                                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Live
                                    demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <h1 class="z-50 text-6xl text-red-400">Darya</h1> -->
            </div>
            <div ref="sectionTwo" class="section h-screen w-screen border">
                <div class="slide">
                    <h3>Slide 2.1</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.2</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.3</h3>
                </div>
            </div>
            <div ref="sectionThree" class="section h-screen w-screen border">
                <h3>Section 3</h3>
            </div>

        </full-page>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    window.addEventListener('scroll', goToSection)
})
const sectionOne = ref(null)
const sectionTwo = ref(null)
const sectionThree = ref(null)

const goToSection = (e) => {
    console.log(e);
}

</script>