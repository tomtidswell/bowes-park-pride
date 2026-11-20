<template>
  <div :id="id" ref="root" class="policy-section" :class="{ open, unnumbered: !number }">
    <button
      class="policy-trigger"
      @click="open = !open"
      :aria-expanded="open"
      :aria-controls="id ? `${id}-body` : undefined"
    >
      <span v-if="number" class="policy-number">{{ number }}</span>
      <span class="policy-title">{{ title }}</span>
      <ChevronDown class="policy-icon" :size="20" />
    </button>
    <Transition name="accordion">
      <div v-if="open" :id="id ? `${id}-body` : undefined" class="policy-body">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const props = defineProps<{
  number?: string
  title: string
  /** Anchor ID; the section opens automatically when the URL hash matches it */
  id?: string
}>()

const open = ref(false)
const root = ref<HTMLElement | null>(null)
const route = useRoute()

function openIfTargeted(hash: string) {
  if (!props.id || hash !== `#${props.id}`) return
  open.value = true
  nextTick(() => root.value?.scrollIntoView({ block: 'start' }))
}

// Run on mount rather than during setup so server and client render the same markup
onMounted(() => openIfTargeted(route.hash))
watch(() => route.hash, openIfTargeted)
</script>

<style lang="scss" scoped>
.policy-section {
  border-bottom: 1px solid var(--border-subtle);
  scroll-margin-top: calc($header-height + 16px);
}

.policy-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  text-align: left;
  gap: 14px;
}

.policy-number {
  @include body-text("sm", "bold");
  color: $color-magenta;
  flex-shrink: 0;
  min-width: 28px;
}

.policy-title {
  @include body-text("lg", "semibold");
  color: var(--text-primary);
  flex: 1;
}

.policy-icon {
  flex-shrink: 0;
  color: $color-magenta;
  transition: transform 0.3s ease;

  .open & {
    transform: rotate(180deg);
  }
}

.policy-body {
  overflow: hidden;
  padding-bottom: 24px;
  padding-left: 42px;

  .unnumbered & {
    padding-left: 0;
  }

  :deep(p) {
    @include body-text("base", "regular");
    color: var(--text-muted);
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(ul) {
    list-style: none;
    margin: 8px 0 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  :deep(li) {
    @include body-text("base", "regular");
    color: var(--text-muted);
    padding-left: 16px;
    position: relative;

    &::before {
      content: "–";
      position: absolute;
      left: 0;
      color: $color-magenta;
    }
  }

  :deep(h4) {
    @include body-text("base", "semibold");
    color: var(--text-primary);
    margin: 16px 0 8px;

    &:first-child {
      margin-top: 0;
    }
  }

  :deep(strong) {
    font-weight: 600;
    color: var(--text-primary);
  }

  :deep(a) {
    color: $color-magenta;

    &:hover {
      text-decoration: underline;
    }
  }
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 6000px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
