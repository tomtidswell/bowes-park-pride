<template>
  <div ref="el" class="impact-stat" :class="{ large }">
    <a
      v-if="icon && iconHref"
      :href="iconHref"
      target="_blank"
      rel="noopener noreferrer"
      class="impact-stat-icon is-link"
      :aria-label="iconLabel"
    >
      <component :is="icon" :size="iconSize" :stroke-width="1.75" />
    </a>
    <div v-else-if="icon" class="impact-stat-icon">
      <component :is="icon" :size="iconSize" :stroke-width="1.75" />
    </div>
    <div class="impact-stat-value">{{ prefix }}{{ formatted }}{{ suffix }}</div>
    <div class="impact-stat-label"><slot /></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    end: number
    icon?: unknown
    iconHref?: string
    iconLabel?: string
    prefix?: string
    suffix?: string
    decimals?: number
    duration?: number
    iconSize?: number
    large?: boolean
  }>(),
  {
    icon: undefined,
    iconHref: undefined,
    iconLabel: undefined,
    prefix: "",
    suffix: "",
    decimals: 0,
    duration: 1400,
    iconSize: 26,
    large: false,
  },
)

const el = ref<HTMLElement | null>(null)
const value = useCountUp(el, props.end, {
  duration: props.duration,
  decimals: props.decimals,
})

const formatted = computed(() =>
  value.value.toLocaleString("en-GB", {
    minimumFractionDigits: props.decimals,
    maximumFractionDigits: props.decimals,
  }),
)
</script>

<style lang="scss" scoped>
.impact-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
}

.impact-stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--impact-accent-soft, rgba(0, 0, 0, 0.06));
  color: var(--impact-accent, currentColor);
  margin-bottom: 4px;

  &.is-link {
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover,
    &:focus-visible {
      transform: translateY(-2px) scale(1.06);
      box-shadow: 0 6px 18px var(--impact-accent-soft, rgba(0, 0, 0, 0.15));
    }
  }
}

.impact-stat-value {
  @include heading-text("2xl", "extrabold");
  color: var(--impact-accent, var(--text-primary));
  font-variant-numeric: tabular-nums;
  line-height: 1.05;
}

.impact-stat-label {
  @include body-text("sm", "medium");
  color: var(--text-muted);
  max-width: 20ch;
}

.impact-stat.large {
  .impact-stat-value {
    @include heading-text("3xl", "extrabold");
    font-size: clamp(3rem, 2.2rem + 4vw, 5.5rem);
  }

  .impact-stat-label {
    @include body-text("base", "medium");
    max-width: 32ch;
  }
}
</style>
