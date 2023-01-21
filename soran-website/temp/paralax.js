//     // ------------- VARIABLES ------------- //
//     var ticking = false;
//     var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
//     var isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1 || navigator.userAgent.toLowerCase().indexOf('trident') > -1;
//     var scrollSensitivitySetting = 30;
//     var slideDurationSetting = 600;
//     var currentSlideNumber = 0;
//     var totalSlideNumber = document.getElementsByClassName("background").length;

//     // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
//     function parallaxScroll(evt) {
//         var delta;
//         if (isFirefox) {
//             delta = evt.detail * (-120);
//         } else if (isIe) {
//             delta = -evt.deltaY;
//         } else {
//             delta = evt.wheelDelta;
//         }

//         if (ticking != true) {
//             if (delta <= -scrollSensitivitySetting) {
//                 ticking = true;
//                 if (currentSlideNumber !== totalSlideNumber - 1) {
//                     currentSlideNumber++;
//                     nextItem();
//                 }
//                 slideDurationTimeout(slideDurationSetting);
//             }
//             if (delta >= scrollSensitivitySetting) {
//                 ticking = true;
//                 if (currentSlideNumber !== 0) {
//                     currentSlideNumber--;
//                 }
//                 previousItem();
//                 slideDurationTimeout(slideDurationSetting);
//             }
//         }
//     }

//     // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
//     function slideDurationTimeout(slideDuration) {
//         setTimeout(function () {
//             ticking = false;
//         }, slideDuration);
//     }

//     // ------------- ADD EVENT LISTENER ------------- //
//     var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
//     window.addEventListener(mousewheelEvent, parallaxScroll, false);

//     // ------------- SLIDE MOTION ------------- //
//     function nextItem() {
//         var previousSlide = document.getElementsByClassName("background")[currentSlideNumber - 1];
//         previousSlide.classList.remove("up-scroll");
//         previousSlide.classList.add("down-scroll");
//     }

//     function previousItem() {
//         var currentSlide = document.getElementsByClassName("background")[currentSlideNumber];
//         currentSlide.classList.remove("down-scroll");
//         currentSlide.classList.add("up-scroll");
//     }
