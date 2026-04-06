import { useIntersectionObserver } from "@vueuse/core"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    beforeMount(el) {
      el.classList.add("reveal")
    },
    mounted(el) {
      const { stop } = useIntersectionObserver(
        el,
        ([entry]) => {
          if (entry?.isIntersecting) {
            el.classList.add("visible")
            stop()
          }
        },
        { threshold: 0.15 },
      )
    },
  })
})
