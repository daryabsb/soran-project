// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      title: "Logos 0|0",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:400,900",
        },
      ],
    },
  },
  css: [
    "~/assets/styles.css",
    "~/assets/css/main.css",
    "~/assets/css/underline.css",
  ],
  build: {
    transpile: ["gsap"],
  },
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
