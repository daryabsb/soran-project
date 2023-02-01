<template>
    <header class="fixed w-full z-50">
        <nav class=" flex flex-col w-full" aria-label="Top">
            <!-- Top navigation -->
            <div class="bg-white h-4 w-full  px-4" />



            <!-- Secondary navigation -->
            <div class="bg-white global w-full bg-opacity-20 backdrop-blur-md backdrop-filter ">
                <div class="mx-auto max-w-full">
                    <div>
                        <div class="flex h-16 items-center justify-between">
                            <!-- Logo (lg+) -->
                            <div class="hidden pl-16 lg:flex lg:flex-1 lg:items-center">
                                <a href="#" class="flex items-center font-3xl">
                                    <span class="sr-only">Your Company</span>
                                    <img class="h-8 w-auto drop-shadow-2xl" src="~/assets/img/logos3-blood.svg"
                                        alt="" />

                                </a>
                            </div>

                            <div class="hidden h-full -ml-24 px-16 lg:flex">
                                <!-- Flyout menus -->
                                <PopoverGroup class="inset-x-0 bottom-0 px-4">
                                    <div class="flex h-full justify-center space-x-8">
                                        <Popover v-for="category in navigation.categories" :key="category.name"
                                            class="flex" v-slot="{ open }">
                                            <div class="relative flex">
                                                <PopoverButton
                                                    :class="[open ? 'border-blood text-blood' : ' border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">
                                                    {{ category.name }}</PopoverButton>
                                            </div>

                                            <transition enter-active-class="transition ease-out duration-200"
                                                enter-from-class="opacity-0" enter-to-class="opacity-100"
                                                leave-active-class="transition ease-in duration-150"
                                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">
                                                    <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                                    <div class="absolute inset-0 top-1/2 bg-white "
                                                        aria-hidden="true" />

                                                    <div class="relative bg-white">
                                                        <div class="mx-auto max-w-7xl px-8">
                                                            <div class="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                                <div v-for="item in category.featured" :key="item.name"
                                                                    class="group relative">
                                                                    <div
                                                                        class="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                        <img :src="item.imageSrc" :alt="item.imageAlt"
                                                                            class="object-cover object-center" />
                                                                    </div>
                                                                    <a :href="item.href"
                                                                        class="mt-4 block font-medium text-gray-900">
                                                                        <span class="absolute inset-0 z-10"
                                                                            aria-hidden="true" />
                                                                        {{ item.name }}
                                                                    </a>
                                                                    <p aria-hidden="true" class="mt-1">Shop now</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </PopoverPanel>
                                            </transition>
                                        </Popover>


                                    </div>
                                </PopoverGroup>
                            </div>

                            <!-- Mobile menu and search (lg-) -->
                            <div class="flex flex-1 items-center lg:hidden">
                                <button type="button" class="-ml-2 p-2 text-white" @click="mobileMenuOpen = true">
                                    <span class="sr-only">Open menu</span>
                                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                                </button>

                                <!-- Search -->
                                <a href="#" class="ml-2 p-2 text-white">
                                    <span class="sr-only">Search</span>
                                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                                </a>
                            </div>

                            <!-- Logo (lg-) -->
                            <a href="#" class="lg:hidden">
                                <span class="sr-only">Your Company</span>
                                <img src="https://tailwindui.com/img/logos/mark.svg?color=white" alt=""
                                    class="h-8 w-auto" />
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
const languages = ['EN', 'AR', 'KU', 'FA', 'TU']
const navigation = {
    categories: [
        {
            name: 'Services',
            featured: [
                {
                    name: 'Publications',
                    href: '#',
                    imageSrc: '/img/nav-publications.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Graphic Design',
                    href: '#',
                    imageSrc: '/img/nav-graphic.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
        {
            name: 'Extra',
            featured: [
                {
                    name: 'Event management',
                    href: '#',
                    imageSrc: '/img/nav-Event.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Conference',
                    href: '#',
                    imageSrc: '/img/nav-Conference.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },
        {
            name: 'About',
        },
        {
            name: 'Contact',
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}




const mobileMenuOpen = ref(false)
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway);
</style>