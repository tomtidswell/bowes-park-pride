<template>
  <figure class="impact-quote" :style="{ '--quote-accent': color }">
    <Quote :size="28" class="quote-mark" />
    <blockquote>{{ text }}</blockquote>
    <figcaption v-if="author">— {{ author }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { Quote } from "lucide-vue-next"

withDefaults(
  defineProps<{
    text: string
    author?: string
    color?: string
  }>(),
  {
    author: undefined,
    color: "#e6007e",
  },
)
</script>

<style lang="scss" scoped>
.impact-quote {
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: min(340px, 82vw);
  padding: 28px 24px;
  border-radius: 20px;
  background: var(--bg-surface);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quote-mark {
  color: var(--quote-accent);
}

blockquote {
  @include body-text("base", "medium");
  color: var(--text-primary);
  line-height: 1.55;
}

figcaption {
  @include body-text("sm", "semibold");
  color: var(--quote-accent);
}
</style>
