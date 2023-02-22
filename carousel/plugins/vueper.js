import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VueperSlides", VueperSlides);
  nuxtApp.vueApp.component("VueperSlide", VueperSlide);
});
