<template>
  <component
    :is="sponsor.url ? 'a' : 'div'"
    class="sponsor-logo"
    :class="sponsor.tier"
    :href="sponsor.url"
    :target="sponsor.url ? '_blank' : undefined"
    :rel="sponsor.url ? 'noopener noreferrer' : undefined"
    :style="sponsor.bgColor ? { background: sponsor.bgColor } : undefined"
  >
    <img v-if="sponsor.logo" :src="sponsor.logo" :alt="sponsor.name" />
    <div v-else class="placeholder">
      <span>{{ sponsor.name }}</span>
    </div>
  </component>
</template>

<script setup lang="ts">
import type { Sponsor } from "@/data/sponsors"

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
  background: var(--bg-solid);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px var(--shadow-md);
  }

  &.headline {
    grid-column: 1 / -1;
    padding: 24px 32px;
    min-height: 200px;
  }

  &.gold {
    grid-column: span 3;
    padding: 32px 24px;

    img {
      max-height: 96px;
    }
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
  color: var(--text-extra-faint);
  text-align: center;
  padding: 12px;
}
</style>
