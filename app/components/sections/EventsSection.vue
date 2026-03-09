<template>
  <SectionWrapper id="events" color="none" divider class="events-bg">
    <div class="events reveal">
      <h2>Events & News</h2>
      <p class="intro">
        Stay up to date with the latest from Bowes Park Pride.
      </p>
      <div class="events-grid">
        <component
          :is="event.link ? NuxtLink : 'div'"
          v-for="(event, i) in eventsData"
          :key="i"
          :to="event.link"
          :target="event.link?.startsWith('http') ? '_blank' : undefined"
          :rel="event.link?.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="event-card"
        >
          <span class="event-date">
            <CalendarDays :size="16" />
            {{ event.date }}
          </span>
          <h4>{{ event.title }}</h4>
          <span v-if="event.location" class="event-location">
            <MapPin :size="16" />
            {{ event.location }}
          </span>
          <p>{{ event.description }}</p>
          <span v-if="event.link" class="read-more">
            {{ event.linkLabel || 'Read more' }}
            <ArrowRight :size="16" />
          </span>
        </component>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { CalendarDays, ArrowRight, MapPin } from "lucide-vue-next"
import { eventsData } from "@/data/events"

const NuxtLink = resolveComponent("NuxtLink")
</script>

<style lang="scss" scoped>
.events-bg {
  @include section-bg("/street.webp");
}

.events {
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

.event-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 24px;
  border-radius: 16px;
  background: var(--bg-surface);
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  h4 {
    color: var(--text-primary);
  }

  p {
    @include body-text("sm", "regular");
    color: var(--text-muted);
    flex: 1;
  }
}

.event-date,
.event-location {
  @include body-text("xs", "medium");
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: $color-orange;

  svg {
    flex-shrink: 0;
  }
}

.read-more {
  @include body-text("sm", "semibold");
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: $color-orange;
  margin-top: auto;
}
</style>
