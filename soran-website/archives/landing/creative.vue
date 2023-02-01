<template>
    <slide>
        <div class="py-16 lg:py-24 z-20">

            <div class=" py-24 px-8  lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">

                <div class="relative lg:col-span-1">
                    <img class="h-12 bg-blood mx-auto w-auto"
                        src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                    <blockquote class="mt-6 font-montserrat text-zinc-900">
                        <p class="text-xl font-medium sm:text-2xl">This app has completely transformed how we
                            interact with customers. We've seen record bookings, higher customer satisfaction, and
                            reduced churn.</p>
                        <footer class="mt-6">
                            <p class="flex flex-col text-blood font-medium">
                                <span class="">Marie Chilvers</span>
                                <span>CEO, Workcation</span>
                            </p>
                        </footer>
                    </blockquote>
                </div>
            </div>
            <div
                class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                <div class="block lg:hidden relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <button type="button"
                        class="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="sr-only">Watch our video to learn more</span>
                        <img class="w-full" src="/img/section-img-02.jpg" alt="" />
                    </button>
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


  

