<template>
  <div class="policy-section" :class="{ open }">
    <button class="policy-trigger" @click="open = !open" :aria-expanded="open">
      <span class="policy-number">{{ number }}</span>
      <span class="policy-title">{{ title }}</span>
      <ChevronDown class="policy-icon" :size="20" />
    </button>
    <Transition name="accordion">
      <div v-if="open" class="policy-body">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{
  number: string
  title: string
}>()

const open = ref(false)
</script>

<style lang="scss" scoped>
.policy-section {
  border-bottom: 1px solid var(--border-subtle);
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
  max-height: 1000px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
