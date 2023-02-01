<template>
    <main class="main-content">
        <section class="slideshow">
            <div class="slideshow-inner">
                <div class="slides">
                    <div class="slide is-active ">
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
                    <div class="slide">
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
                    <div class="slide">
                        <div class="slide-content">
                            <div class="caption">
                                <div class="title">Slide title 3</div>
                                <div class="text">
                                    <p>Slide description 3</p>
                                </div>
                                <a href="#" class="btn">
                                    <span class="btn-inner">Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg" alt=""
                                class="image" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-content">
                            <div class="caption">
                                <div class="title">Slide title 4</div>
                                <div class="text">
                                    <p>Slide description 4</p>
                                </div>
                                <a href="#" class="btn">
                                    <span class="btn-inner">Learn More</span>
                                </a>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg"
                                alt="" class="image" />
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <div class="item is-active">
                        <span class="icon">1</span>
                    </div>
                    <div class="item">
                        <span class="icon">2</span>
                    </div>
                    <div class="item">
                        <span class="icon">3</span>
                    </div>
                    <div class="item">
                        <span class="icon">4</span>
                    </div>
                </div>
                <div class="arrows">
                    <div class="arrow prev">
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
import gsap from 'gsap'
// import { TweenMax } from 'gsap/TweenMax'
// gsap.registerPlugin(TweenMax)
// import useSlideshow from './tweenmax';
const slideshowDuration = 4000;
const slideshow = ref(null);
const timeout = ref(null)



const prevSlide = () => console.log('prev slide');
const nextSlide = () => console.log('next slide');

function slideshowSwitch(index, auto) {
    if (slideshow.value.data("wait")) return;

    const slides = slideshow.value.find(".slide");
    const pages = slideshow.value.find(".pagination");
    const activeSlide = slides.filter(".is-active");
    const activeSlideImage = activeSlide.find(".image-container");
    const newSlide = slides.eq(index);
    const newSlideImage = newSlide.find(".image-container");
    const newSlideContent = newSlide.find(".slide-content");
    const newSlideElements = newSlide.find(".caption > *");
    if (newSlide.is(activeSlide)) return;

    newSlide.addClass("is-new");
    let timeout = slideshow.value.data("timeout");
    clearTimeout(timeout);
    slideshow.value.data("wait", true);
    const transition = slideshow.value.attr("data-transition");
    if (transition == "fade") {
        newSlide.css({
            display: "block",
            zIndex: 2,
        });
        newSlideImage.css({
            opacity: 0,
        });

        const TweenMax = new gsap.TweenMax()
        TweenMax.to(newSlideImage, 1, {
            alpha: 1,
            onComplete: function () {
                newSlide.addClass("is-active").removeClass("is-new");
                activeSlide.removeClass("is-active");
                newSlide.css({ display: "", zIndex: "" });
                newSlideImage.css({ opacity: "" });
                slideshow.value.find(".pagination").trigger("check");
                slideshow.value.data("wait", false);
                if (auto) {
                    timeout = setTimeout(function () {
                        slideshowNext(slideshow.value, false, true);
                    }, slideshowDuration);
                    slideshow.value.data("timeout", timeout);
                }
            },
        });
    } else {
        if (transition == "slide") {
            if (newSlide.index() > activeSlide.index()) {
                const nextSlide = activeSlide.next(".slide");
                TweenMax.fromTo(nextSlide, 0.5, { x: "100%" }, { x: "0%" });
                TweenMax.to(activeSlide, 0.5, { x: "-100%" });
            } else {
                const prevSlide = activeSlide.prev(".slide");
                TweenMax.fromTo(prevSlide, 0.5, { x: "-100%" }, { x: "0%" });
                TweenMax.to(activeSlide, 0.5, { x: "100%" });
            }
            newSlide.addClass("is-active").removeClass("is-new");
            activeSlide.removeClass("is-active");
            slideshow.value.find(".pagination").trigger("check");
            slideshow.value.data("wait", false);
            if (auto) {
                timeout = setTimeout(function () {
                    slideshowNext(slideshow.value, false, true);
                }, slideshowDuration);
                slideshow.value.data("timeout", timeout);
            }
        }
    }
}

function slideshowNext(prev = false) {
    // implementation here
    var slides = slideshow.find(".slide");
    var activeSlide = slides.filter(".is-active");
    var newSlide = null;
    if (previous) {
        newSlide = activeSlide.prev(".slide");
        if (newSlide.length === 0) {
            newSlide = slides.last();
        }
    } else {
        newSlide = activeSlide.next(".slide");
        if (newSlide.length == 0) newSlide = slides.filter(".slide").first();
    }

    slideshowSwitch(slideshow, newSlide.index(), auto);
}

function slideshowSwitch2(index) {
    // implementation here
}

function check() {
    // implementation here
}

onMounted(() => {
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide) => slide.classList.add('is-loaded'))

    const arrows = document.querySelectorAll('.slideshow .arrows .arrow')
    arrows.forEach((arrow) => {
        arrow.addEventListener('click', (event) => {
            slideshowNext(event.target.closest('.slideshow'), event.target.classList.contains('prev'))
        })
    })

    const items = document.querySelectorAll('.slideshow .pagination .item')
    items.forEach((item) => {
        item.addEventListener('click', (event) => {
            slideshowSwitch(event.target.closest('.slideshow'), event.target.index())
        })
    })

    const pagination = document.querySelectorAll('.slideshow .pagination')
    pagination.forEach((pagination) => {
        pagination.addEventListener('check', check)
    })

    timeout.value = setTimeout(() => {
        slideshowNext(slideshow, false, true)
    }, slideshowDuration)

})
if (document.querySelectorAll('.main-content .slideshow').length > 1) {
    window.addEventListener('scroll', homeSlideshowParallax)
}


</script>