// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    baseURL: "/",
    head: {
      htmlAttrs: { lang: "en" },
      title: "Bowes Park Pride — Sunday 5th July 2026",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "A free community pride event on Myddleton Road, Bowes Park, London. Sunday 5th July 2026.",
        },
        {
          property: "og:title",
          content: "Bowes Park Pride — Sunday 5th July 2026",
        },
        {
          property: "og:description",
          content:
            "A free community pride event on Myddleton Road, Bowes Park, London.",
        },
        { property: "og:type", content: "website" },
        { name: "theme-color", content: "#E6007E" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'dbox-widget',
    },
  },

  components: [{ path: "@/components", pathPrefix: false }],

  modules: ["@nuxtjs/google-fonts", "nuxt-gtag"],

  googleFonts: {
    families: {
      "Bricolage Grotesque": [400, 700, 800],
      "DM Sans": [400, 500, 600],
    },
    display: "swap",
  },

  gtag: {
    id: "G-JDNJVSG8SY",
  },

  css: ["@/assets/styles/global.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:color";
            @use "@/assets/styles/_variables" as *;
            @use "@/assets/styles/_typography" as *;
            @use "@/assets/styles/_mixins" as *;
          `,
        },
      },
    },
  },
})