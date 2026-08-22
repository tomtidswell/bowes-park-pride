import { ref, type Ref } from "vue"
import { useIntersectionObserver } from "@vueuse/core"

export function useCountUp(
  target: Ref<HTMLElement | null>,
  end: Ref<number> | number,
  options: { duration?: number; decimals?: number } = {},
) {
  const { duration = 1400, decimals = 0 } = options
  const value = ref(0)
  const started = ref(false)

  const run = () => {
    const endValue = typeof end === "number" ? end : end.value
    const start = performance.now()
    const factor = 10 ** decimals

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      value.value = Math.round(endValue * eased * factor) / factor
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        value.value = endValue
      }
    }

    requestAnimationFrame(tick)
  }

  const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
      if (entry?.isIntersecting && !started.value) {
        started.value = true
        run()
        stop()
      }
    },
    { threshold: 0.3 },
  )

  return value
}
