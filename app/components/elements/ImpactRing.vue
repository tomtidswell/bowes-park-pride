<template>
  <div ref="el" class="impact-ring" :class="{ visible }">
    <svg viewBox="0 0 120 120" class="ring-svg">
      <circle
        class="ring-track"
        cx="60"
        cy="60"
        :r="radius"
        fill="none"
        stroke-width="10"
      />
      <circle
        class="ring-fill"
        cx="60"
        cy="60"
        :r="radius"
        fill="none"
        stroke-width="10"
        :stroke="color"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="visible ? offset : circumference"
      />
    </svg>
    <div class="ring-center">
      <span class="ring-value" :style="{ color }">{{ prefix }}{{ display }}{{ suffix }}</span>
    </div>
    <p class="ring-label"><slot /></p>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core"

const props = withDefaults(
  defineProps<{
    percent: number
    color?: string
    prefix?: string
    suffix?: string
    displayValue?: string
  }>(),
  {
    color: "#e6007e",
    prefix: "",
    suffix: "%",
    displayValue: undefined,
  },
)

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

useIntersectionObserver(
  el,
  ([entry]) => {
    if (entry?.isIntersecting) visible.value = true
  },
  { threshold: 0.4 },
)

const radius = 50
const circumference = 2 * Math.PI * radius
const clamped = computed(() => Math.min(Math.max(props.percent, 0), 100))
const offset = computed(() => circumference - (clamped.value / 100) * circumference)
const display = computed(() => props.displayValue ?? Math.round(props.percent))
</script>

<style lang="scss" scoped>
.impact-ring {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.ring-svg {
  width: 120px;
  height: 120px;
  transform: rotate(-90deg);
}

.ring-track {
  stroke: var(--border-subtle);
}

.ring-fill {
  transition: stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.ring-center {
  margin-top: -86px;
  margin-bottom: 34px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring-value {
  @include heading-text("xl", "extrabold");
  font-variant-numeric: tabular-nums;
}

.ring-label {
  @include body-text("sm", "medium");
  color: var(--text-muted);
  max-width: 22ch;
}
</style>
