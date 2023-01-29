<template>
    <header class="header bg-white bg-opacity-80">
        <a class="py-3" href="/" target="_blank" rel="noreferrer">
            <!-- https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg -->
            <img class="greensock-icon h-12 text-zinc-900" src="~/assets/img/logo.svg" alt="ScrollTrigger" />
        </a>
        <nav>
            <ul class="">
                <li>
                    <NuxtLink class="text-red-900" to="/boxes">Boxes</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-red-900" to="/scroll">ScrollTrigger</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-red-900" to="/layers">Layers Section</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
