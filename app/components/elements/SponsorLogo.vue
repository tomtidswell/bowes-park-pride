<template>
  <component
    :is="sponsor.url ? 'a' : 'div'"
    class="sponsor-logo"
    :class="sponsor.tier"
    :href="sponsor.url"
    :target="sponsor.url ? '_blank' : undefined"
    :rel="sponsor.url ? 'noopener noreferrer' : undefined"
  >
    <img v-if="sponsor.logo" :src="sponsor.logo" :alt="sponsor.name" />
    <div v-else class="placeholder">
      <span>{{ sponsor.name }}</span>
    </div>
  </component>
</template>

<script setup lang="ts">
import type { Sponsor } from '@/data/sponsors'

defineProps<{
  sponsor: Sponsor
}>()
</script>

<style lang="scss" scoped>
.sponsor-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 12px;
  background: $color-white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  &.headline {
    grid-column: 1 / -1;
    padding: 24px 32px;
    min-height: 200px;
  }

  &.gold {
    grid-column: span 3;
  }

  &.silver {
    grid-column: span 2;
  }

  img {
    max-height: 48px;
    width: auto;
    object-fit: contain;
  }
}

.placeholder {
  @include body-text("sm", "medium");
  color: rgba($color-dark, 0.4);
  text-align: center;
  padding: 12px;
}
</style>
