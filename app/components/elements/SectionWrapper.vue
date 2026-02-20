<template>
  <section :id="id" class="section-wrapper" :class="[`bg-${color}`, { 'has-wave': wave }]">
    <div v-if="wave" class="wave-top">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60 C480 0 960 60 1440 20 V0 H0Z" :fill="wavePreviousColor" />
      </svg>
    </div>
    <div class="section-inner container">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  color?: string
  wave?: boolean
  wavePreviousColor?: string
}>(), {
  id: undefined,
  color: 'off-white',
  wave: false,
  wavePreviousColor: '#FFF8F0',
})
</script>

<style lang="scss" scoped>
.section-wrapper {
  position: relative;
  @include section-padding;

  @each $name, $bg in $section-colors {
    &.bg-#{$name} {
      background-color: $bg;
    }
  }
}

.wave-top {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  line-height: 0;

  svg {
    width: 100%;
    height: 40px;

    @media (min-width: $bp-md) {
      height: 60px;
    }
  }
}

.section-inner {
  position: relative;
}
</style>
