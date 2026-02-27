<template>
  <section :id="id" class="section-wrapper" :class="[`bg-${color}`, { 'has-divider': divider }]">
    <div class="section-inner container">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  color?: string
  divider?: boolean
}>(), {
  id: undefined,
  color: 'off-white',
  divider: false,
})
</script>

<style lang="scss" scoped>
.section-wrapper {
  position: relative;
  @include section-padding;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @each $name, $bg in $section-colors {
    &.bg-#{$name} {
      background-color: $bg;
    }
  }

  &.has-divider::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(80%, 600px);
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.12), transparent);
  }
}

.section-inner {
  position: relative;
}
</style>
