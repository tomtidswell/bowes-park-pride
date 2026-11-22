<template>
  <SectionWrapper id="events" color="none" divider class="events-bg">
    <div class="events" v-reveal>
      <h2>What's On</h2>
      <p class="intro">
        Stay up to date with the latest from Bowes Park Pride.
      </p>
      <div class="events-grid">
        <EventCard
          v-for="event in featuredEvents"
          :key="event.title"
          :event="event"
        />
      </div>

      <NuxtLink to="/whats-on" class="all-events-btn">
        See all events
        <ArrowRight :size="18" />
      </NuxtLink>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next"

const { upcomingEvents } = useEvents()

const featuredEvents = computed(() => upcomingEvents.value.slice(0, 3))
</script>

<style lang="scss" scoped>
.events-bg {
  @include section-bg("/street.webp");
}

.events {
  display: flex;
  flex-direction: column;

  h2 {
    @include gradient-heading($color-orange);
    text-align: center;
    margin-bottom: 16px;
    width: 100%;
  }
}

.intro {
  @include body-text("lg", "regular");
  text-align: center;
  margin-bottom: 40px;
  color: var(--text-muted);
}

.events-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: $bp-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.all-events-btn {
  @include body-text("sm", "semibold");
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: 8px;
  margin-top: 32px;
  padding: 12px 28px;
  border-radius: 50px;
  background: $color-orange;
  color: $color-white;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba($color-orange, 0.3);
    color: $color-white;
  }
}
</style>
