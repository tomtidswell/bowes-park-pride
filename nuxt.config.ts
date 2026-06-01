// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    baseURL: "/",
    head: {
      htmlAttrs: { lang: "en" },
      title: "Bowes Park Pride — Free LGBTQ+ Festival, Sunday 5th July 2026",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Bowes Park Pride is a free LGBTQ+ community pride festival on Myddleton Road, London N22. Sunday 5th July 2026 — live music, performances, food, and family fun in the heart of North London, serving Haringey, Enfield, Wood Green, Palmers Green and beyond.",
        },
        {
          name: "keywords",
          content:
            "Pride, LGBT, LGBTQ, LGBTQIA, Pride festival, Bowes Park Pride, Haringey Pride, Enfield Pride, North London Pride, Wood Green, Palmers Green, Muswell Hill, Alexandra Palace, Hertfordshire, N22, free festival, community pride, street festival, London Pride 2026, queer, inclusive, diversity",
        },
        { name: "robots", content: "index, follow" },
        { name: "referrer", content: "strict-origin-when-cross-origin" },
        {
          "http-equiv": "Content-Security-Policy",
          content: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://donorbox.org https://js.stripe.com https://jspm.dev https://cdn.jsdelivr.net https://pay.google.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://rsms.me https://donorbox.org",
            "font-src 'self' https://fonts.gstatic.com https://rsms.me",
            "img-src 'self' data: https://donorbox.org https://*.stripe.com https://pay.google.com",
            "frame-src https://donorbox.org https://js.stripe.com https://hooks.stripe.com https://pay.google.com",
            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://www.googletagmanager.com https://assets.mailerlite.com https://donorbox.org https://api.stripe.com https://q.stripe.com https://r.stripe.com https://m.stripe.com https://hooks.stripe.com https://pay.google.com",
            "object-src 'none'",
            "base-uri 'self'",
          ].join("; "),
        },
        {
          property: "og:title",
          content: "Bowes Park Pride — Free LGBTQ+ Festival, Sunday 5th July 2026",
        },
        {
          property: "og:description",
          content:
            "A free community pride festival on Myddleton Road, Bowes Park, London N22. Live music, performances, food and family activities. Sunday 5th July 2026.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://bowesparkpride.org.uk/" },
        { property: "og:locale", content: "en_GB" },
        {
          property: "og:image",
          content: "https://bowesparkpride.org.uk/bp-logo.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Bowes Park Pride — Free LGBTQ+ Festival, Sunday 5th July 2026",
        },
        {
          name: "twitter:description",
          content:
            "A free community pride festival on Myddleton Road, Bowes Park, London N22. Sunday 5th July 2026.",
        },
        {
          name: "twitter:image",
          content: "https://bowesparkpride.org.uk/bp-logo.png",
        },
        { name: "theme-color", content: "#E6007E" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://bowesparkpride.org.uk/",
        },
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

  modules: ["@nuxtjs/google-fonts", "nuxt-gtag", "@nuxtjs/sitemap", "@nuxtjs/color-mode"],

  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "-mode",
  },

  site: {
    url: "https://bowesparkpride.org.uk",
  },

  googleFonts: {
    families: {
      "Bricolage Grotesque": [400, 700, 800],
      "DM Sans": [400, 500, 600],
      "Lilita One": [400],
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