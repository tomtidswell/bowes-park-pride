<template>
  <div class="countdown">
    <div class="countdown-units">
      <div class="unit unit-days">
        <span class="number">{{ placeholder ? "\u00A0" : days }}</span>
        <span class="label">days</span>
      </div>
      <div class="unit unit-hours">
        <span class="number">{{ placeholder ? "\u00A0" : hours }}</span>
        <span class="label">hours</span>
      </div>
      <div class="unit unit-mins">
        <span class="number">{{ placeholder ? "\u00A0" : minutes }}</span>
        <span class="label">mins</span>
      </div>
      <div class="unit unit-secs">
        <span class="number">{{ placeholder ? "\u00A0" : seconds }}</span>
        <span class="label">secs</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    placeholder?: boolean
  }>(),
  {
    placeholder: false,
  },
)

const eventDate = new Date("2026-07-05T12:00:00+01:00")
const { days, hours, minutes, seconds, isOver } = useCountdown(eventDate)
</script>

<style lang="scss" scoped>
.countdown-units {
  display: flex;
  gap: 8px;
  justify-content: center;

  @media (min-width: $bp-md) {
    gap: 24px;
  }
}

.unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba($color-magenta, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba($color-magenta, 0.2);

  @media (min-width: $bp-md) {
    min-width: 80px;
    padding: 16px 20px;
    border-radius: 12px;
  }
}

.number {
  @include heading-text("lg", "extrabold");
  color: $color-white;

  @media (min-width: $bp-md) {
    @include heading-text("2xl", "extrabold");
  }
}

.label {
  @include body-text("xs", "medium");
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.65rem;

  @media (min-width: $bp-md) {
    font-size: unset;
  }
}

.countdown-over {
  @include heading-text("xl", "bold");
  color: $color-white;
  text-align: center;
}
</style>
