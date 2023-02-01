<template>
    <div class="relative ">
        <!-- <GradientUnit /> -->
        <ParalaxParallax>
            <template #nav>
                <!-- <template v-slot:nav="{ navigate, currentSlideNumber }"> -->
                <!-- <div class="fixed px-6 lg:px-8 bg-white bg-opacity-70 z-50 w-full"> -->
                <!-- <MainHeader :active="currentSlideNumber + 1" @updateNav="navigate" /> -->
                <!-- <HeadersNav :active="currentSlideNumber + 1" @updateNav="navigate" /> -->
                <HeadersHeader />

            </template>
            <template #sections>
                <LandingHero id="section-1" />
                <LandingFetures id="section-2" />
                <LandingCreative id="section-3" />
                <LandingTeam id="section-4" />
                <LandingNewsletter id="section-5" />
            </template>
        </ParalaxParallax>
    </div>
</template>
<script setup>

</script>
