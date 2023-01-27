<template>
    <main class="main-content">
        <section class="slideshow">
            <div class="slideshow-inner">
                <div class="slides" ref="slideshow">
                    <div class="slide is-active" ref="activeSlide">
                        <div class="slide-content">
                            <div class="caption">
                                <div class="title">Slide title 1</div>
                                <div class="text">
                                    <p>Slide description 1</p>
                                </div>
                                <a href="#" class="btn">
                                    <span class="btn-inner">Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg"
                                alt="" class="image" />
                        </div>
                    </div>
                    <div class="slide" ref="slide2">
                        <div class="slide-content">
                            <div class="caption">
                                <div class="title">Slide title 2</div>
                                <div class="text">
                                    <p>Slide description 2</p>
                                </div>
                                <a href="#" class="btn">
                                    <span class="btn-inner">Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg"
                                alt="" class="image" />
                        </div>
                    </div>
                </div>

                <div class="pagination">
                    <div class="item is-active" ref="activePagination">
                        <span class="icon">1</span>
                    </div>
                    <div class="item" ref="pagination2">
                        <span class="icon">2</span>
                    </div>
                </div>
                <div class="arrows">
                    <div class="arrow prev" @click="prevSlide">
                        <span class="svg svg-arrow-left">
                            <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                                <path
                                    d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" />
                            </svg>
                            <span class="alt sr-only"></span>
                        </span>
                    </div>
                    <div class="arrow next">
                        <span class="svg svg-arrow-right">
                            <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px"
                                viewBox="0 0 14 26" enable-background="new 0 0 14 26" xml:space="preserve">
                                <path
                                    d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" />
                            </svg>
                            <span class="alt sr-only"></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import useSlideshow from './tweenmax';

const slideshow = ref(null)
const prevSlide = () => console.log('prev slide');
const nextSlide = () => console.log('next slide');
onMounted(() => {
    slideshow.value = useSlideshow();
})
console.log(slideshow.value);

</script>