<template>
    <slide class="">
        <div class=" -mt-12 lg:grid lg:grid-cols-12 lg:gap-8 p-6 z-10">
            <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                    <span
                        class="block text-base font-montserrat font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">Coming
                        soon</span>
                    <span class="mt-1 block text-4xl tracking-tight sm:text-5xl xl:text-6xl">
                        <span class="block text-gray-900">Data to enrich your</span>
                        <span class="block font-normal text-blood">online business</span>
                    </span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                    fugiat aliqua ad ad non deserunt sunt.
                </p>
                <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                    <p class="text-base font-medium text-gray-900">
                        Sign up to get notified when it’s ready.
                    </p>
                    <form action="#" method="POST" class="mt-3 sm:flex">
                        <label for="email" class="sr-only">Email</label>
                        <input type="email" name="email" id="email"
                            class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
                            placeholder="Enter your email" />
                        <button type="submit"
                            class="mt-3 w-full border border-transparent bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">
                            Notify me
                        </button>
                    </form>
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