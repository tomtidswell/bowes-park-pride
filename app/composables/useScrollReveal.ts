export function useScrollReveal() {
  onMounted(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    const elements = document.querySelectorAll(selectors)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    onUnmounted(() => observer.disconnect())
  })
}
