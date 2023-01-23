<template>
    <slide>
        <div class="py-16 lg:py-24 z-20">

            <div class=" py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">

                <div class="relative lg:col-span-1">
                    <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                    <blockquote class="mt-6 text-white">
                        <p class="text-xl font-medium sm:text-2xl">This app has completely transformed how we
                            interact with customers. We've seen record bookings, higher customer satisfaction, and
                            reduced churn.</p>
                        <footer class="mt-6">
                            <p class="flex flex-col font-medium">
                                <span>Marie Chilvers</span>
                                <span>CEO, Workcation</span>
                            </p>
                        </footer>
                    </blockquote>
                </div>
            </div>

        </div>
        <div class="hidden lg:block absolute top-0">
            <img src="/img/section-img-02.jpg" alt="" class="h-screen w-screen object-cover" />
        </div>
    </slide>
</template>
<script setup>
import slide from '~/components/Paralax/slide.vue';

</script>


  

