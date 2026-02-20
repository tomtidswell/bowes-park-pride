<template>
  <div class="faq-item" :class="{ open }">
    <button class="faq-trigger" @click="open = !open" :aria-expanded="open">
      <span class="faq-question">{{ question }}</span>
      <ChevronDown class="faq-icon" :size="20" />
    </button>
    <Transition name="accordion">
      <div v-if="open" class="faq-answer">
        <p>{{ answer }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{
  question: string
  answer: string
}>()

const open = ref(false)
</script>

<style lang="scss" scoped>
.faq-item {
  border-bottom: 1px solid rgba($color-dark, 0.1);
}

.faq-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  text-align: left;
  gap: 16px;
}

.faq-question {
  @include body-text("lg", "semibold");
}

.faq-icon {
  flex-shrink: 0;
  color: $color-magenta;
  transition: transform 0.3s ease;

  .open & {
    transform: rotate(180deg);
  }
}

.faq-answer {
  overflow: hidden;

  p {
    @include body-text("base", "regular");
    padding-bottom: 20px;
    color: rgba($color-dark, 0.8);
  }
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 300px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
