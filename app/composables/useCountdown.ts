export function useCountdown(targetDate: Date) {
  const now = ref(new Date())
  let timer: ReturnType<typeof setInterval> | null = null

  const diff = computed(() => Math.max(0, targetDate.getTime() - now.value.getTime()))

  const days = computed(() => Math.floor(diff.value / (1000 * 60 * 60 * 24)))
  const hours = computed(() => Math.floor((diff.value / (1000 * 60 * 60)) % 24))
  const minutes = computed(() => Math.floor((diff.value / (1000 * 60)) % 60))
  const seconds = computed(() => Math.floor((diff.value / 1000) % 60))
  const isOver = computed(() => diff.value === 0)

  onMounted(() => {
    timer = setInterval(() => {
      now.value = new Date()
    }, 1000)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { days, hours, minutes, seconds, isOver }
}
