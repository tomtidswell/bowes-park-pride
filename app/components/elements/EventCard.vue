<template>
  <component
    :is="event.link ? NuxtLink : 'div'"
    :to="event.link"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="event-card"
  >
    <span class="event-date">
      <CalendarDays :size="16" />
      {{ event.date }}
    </span>
    <span v-if="event.tag" class="event-tag">{{ event.tag }}</span>
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
</template>

<script setup lang="ts">
import { CalendarDays, ArrowRight, MapPin } from "lucide-vue-next"
import type { EventItem } from "@/data/events"

const props = defineProps<{ event: EventItem }>()

const NuxtLink = resolveComponent("NuxtLink")

const isExternal = computed(
  () => !!props.event.link && (props.event.link.startsWith("http") || props.event.link.endsWith(".pdf")),
)
</script>

<style lang="scss" scoped>
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

.event-tag {
  @include body-text("xs", "semibold");
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: 50px;
  background: $color-teal;
  color: $color-dark;
  text-transform: uppercase;
  letter-spacing: 0.03em;
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
