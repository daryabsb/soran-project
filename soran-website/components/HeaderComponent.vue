<template>
    <header className="header"
        class="flex justify-between items-center py-5 bg-white mt-3 global w-full bg-opacity-20 backdrop-blur-md backdrop-filter">
        <a className="brand" class="brand" href="/" target="_blank" rel="noreferrer">
            <img className="greensock-icon" class="h-full" src="~/assets/img/logos3-blood.svg" width="200" height="64"
                alt="ScrollTrigger" />
        </a>
        <nav>
            <ul>
                <li class=" drop-shadow-2xl">
                    <NuxtLink to="/boxes" class=" drop-shadow-2xl">Boxes</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/scroll">ScrollTrigger</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/layers">Layers Section</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
