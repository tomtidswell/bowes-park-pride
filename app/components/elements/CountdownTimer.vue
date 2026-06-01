<template>
  <div class="countdown">
    <span class="countdown-icon">🎉</span>
    <div class="countdown-card">
      <div class="countdown-units">
        <div class="unit">
          <span class="number">{{ placeholder ? "\u00A0\u00A0" : days }}</span>
          <span class="label">days</span>
        </div>
        <span class="separator">:</span>
        <div class="unit">
          <span class="number">{{ placeholder ? "\u00A0\u00A0" : hours }}</span>
          <span class="label">hours</span>
        </div>
        <span class="separator">:</span>
        <div class="unit">
          <span class="number">{{
            placeholder ? "\u00A0\u00A0" : minutes
          }}</span>
          <span class="label">mins</span>
        </div>
        <span class="separator">:</span>
        <div class="unit">
          <span class="number">{{
            placeholder ? "\u00A0\u00A0" : seconds
          }}</span>
          <span class="label">secs</span>
        </div>
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
const { days, hours, minutes, seconds } = useCountdown(eventDate)
</script>

<style lang="scss" scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-icon {
  font-size: 1.75rem;
  line-height: 1;
  margin-bottom: -10px;
  position: relative;
  z-index: 1;
}

.countdown-card {
  background: #ffd000;
  border-radius: 14px;
  padding: 10px 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.countdown-units {
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: $bp-md) {
    gap: 10px;
  }
}

.unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 44px;
}

.separator {
  font-family: "Lilita One", sans-serif;
  font-size: 1.5rem;
  color: #111;
  line-height: 1;
  margin-bottom: 14px;
}

.number {
  font-family: "Lilita One", sans-serif;
  font-size: 2rem;
  color: #111;
  line-height: 1;

  @media (min-width: $bp-md) {
    font-size: 2.5rem;
  }
}

.label {
  font-family: "Lilita One", sans-serif;
  font-size: 0.6rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (min-width: $bp-md) {
    font-size: 0.7rem;
  }
}
</style>
