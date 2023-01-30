<template>
    <header class="fixed w-full z-50">
        <nav class=" flex flex-col w-full" aria-label="Top">
            <!-- Top navigation -->
            <div class="bg-blood w-full  px-4">
                <div class="flex h-10  mx-auto max-w-7xl items-center justify-between ">
                    <!-- Currency selector -->
                    <form>
                        <div>
                            <label for="desktop-currency" class="sr-only">Currency</label>
                            <div class="group relative -ml-2 border-transparent">
                                <select id="desktop-currency" name="currency"
                                    class="flex items-center rounded-md border-transparent bg-inherit bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100">
                                    <option v-for="lang in languages" :key="lang">{{ lang }}
                                    </option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                    <ChevronDownIcon class="h-5 w-5 text-gray-300" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="flex items-center space-x-6">
                        <a href="#" class="text-sm font-medium text-white hover:text-gray-100">CONTACT NOW:</a>
                        <a href="#" class="text-sm font-medium text-white hover:text-gray-100">+964 770 198 3581</a>
                    </div>
                </div>
            </div>

            <!-- Secondary navigation -->
            <div class="bg-zinc-900 global w-full bg-opacity-20 backdrop-blur-md backdrop-filter ">
                <div class="mx-auto max-w-full">
                    <div>
                        <div class="flex h-16 items-center justify-between">
                            <!-- Logo (lg+) -->
                            <div class="hidden lg:flex lg:flex-1 lg:items-center">
                                <a href="#">
                                    <span class="sr-only">Your Company</span>
                                    <img class="h-16 w-auto" src="~/assets/img/logos.2.svg" alt="" />
                                </a>
                            </div>

                            <div class="hidden h-full -ml-24 px-16 lg:flex">
                                <!-- Flyout menus -->
                                <PopoverGroup class="inset-x-0 bottom-0 ">
                                    <div class="flex h-full justify-center space-x-10">
                                        <Popover v-for="category in navigation.categories" :key="category.name"
                                            class="flex" v-slot="{ open }">
                                            <div
                                                class="relative flex justify-center items-center nav-item hover:text-zinc-900 w-20">
                                                <PopoverButton
                                                    class="relative nav-link w-full z-10 flex items-center justify-center transition-colors duration-200 ease-out">
                                                    {{ category.name }}
                                                    <span
                                                        :class="[open ? 'bg-white' : '', 'absolute inset-x-0 -bottom-px transition duration-200 ease-out']"
                                                        aria-hidden="true" />
                                                </PopoverButton>
                                            </div>

                                            <transition enter-active-class="transition ease-out duration-200"
                                                enter-from-class="opacity-0" enter-to-class="opacity-100"
                                                leave-active-class="transition ease-in duration-150"
                                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">
                                                    <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                                    <div class="absolute inset-0 top-1/2 bg-white shadow"
                                                        aria-hidden="true" />

                                                    <div class="relative bg-white">
                                                        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                                                                    <p aria-hidden="true" class="mt-1">Shop now
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </PopoverPanel>
                                            </transition>
                                        </Popover>
                                        <div v-for="page in navigation.pages" :key="page.name"
                                            class="relative flex justify-center items-center nav-item hover:text-zinc-900 w-20">
                                            <a :href="page.href" class="">{{
                                                page.name
                                            }}</a>
                                        </div>
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
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
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
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
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
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}




const mobileMenuOpen = ref(false)
</script>