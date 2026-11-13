<template>
  <SectionWrapper id="events" color="none" divider class="events-bg">
    <div class="events" v-reveal>
      <h2>Events & News</h2>
      <p class="intro">
        Stay up to date with the latest from Bowes Park Pride.
      </p>
      <div class="events-grid">
        <component
          :is="event.link ? NuxtLink : 'div'"
          v-for="(event, i) in featuredEvents"
          :key="i"
          :to="event.link"
          :target="event.link?.startsWith('http') || event.link?.endsWith('.pdf') ? '_blank' : undefined"
          :rel="event.link?.startsWith('http') || event.link?.endsWith('.pdf') ? 'noopener noreferrer' : undefined"
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
      </div>

      <button
        v-if="moreEventsCount"
        class="more-toggle"
        @click="showMore = !showMore"
      >
        {{ showMore ? "Show less" : `See ${moreEventsCount} more events & news` }}
        <ChevronDown :size="18" :class="{ rotated: showMore }" />
      </button>

      <div v-if="showMore" class="more-groups">
        <div v-if="moreUpcoming.length" class="more-group">
          <h5 class="more-heading">More Upcoming</h5>
          <div class="more-list">
            <component
              :is="event.link ? NuxtLink : 'div'"
              v-for="(event, i) in moreUpcoming"
              :key="i"
              :to="event.link"
              :target="event.link?.startsWith('http') || event.link?.endsWith('.pdf') ? '_blank' : undefined"
              :rel="event.link?.startsWith('http') || event.link?.endsWith('.pdf') ? 'noopener noreferrer' : undefined"
              class="more-item"
            >
              <span class="more-date">
                <CalendarDays :size="14" />
                {{ event.date }}
              </span>
              <span class="more-body">
                <span class="more-title">
                  {{ event.title }}
                  <span v-if="event.tag" class="event-tag">{{ event.tag }}</span>
                </span>
                <span v-if="event.location" class="more-location">
                  <MapPin :size="13" />
                  {{ event.location }}
                </span>
              </span>
              <ArrowRight v-if="event.link" :size="16" class="more-arrow" />
            </component>
          </div>
        </div>

        <div v-if="pastEvents.length" class="more-group">
          <h5 class="more-heading">Past Events & News</h5>
          <div class="more-list">
            <component
              :is="event.link ? NuxtLink : 'div'"
              v-for="(event, i) in pastEvents"
              :key="i"
              :to="event.link"
              :target="event.link?.startsWith('http') || event.link?.endsWith('.pdf') ? '_blank' : undefined"
              :rel="event.link?.startsWith('http') || event.link?.endsWith('.pdf') ? 'noopener noreferrer' : undefined"
              class="more-item is-past"
            >
              <span class="more-date">
                <CalendarDays :size="14" />
                {{ event.date }}
              </span>
              <span class="more-body">
                <span class="more-title">
                  {{ event.title }}
                  <span v-if="event.tag" class="event-tag">{{ event.tag }}</span>
                </span>
                <span v-if="event.location" class="more-location">
                  <MapPin :size="13" />
                  {{ event.location }}
                </span>
              </span>
              <ArrowRight v-if="event.link" :size="16" class="more-arrow" />
            </component>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import {
  CalendarDays,
  ArrowRight,
  MapPin,
  ChevronDown,
} from "lucide-vue-next"
import { eventsData } from "@/data/events"

const NuxtLink = resolveComponent("NuxtLink")

const showMore = ref(false)

const now = new Date()

const upcomingEvents = computed(() =>
  eventsData
    .filter((e) => new Date(e.isoDate) >= now)
    .sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()),
)

const pastEvents = computed(() =>
  eventsData
    .filter((e) => new Date(e.isoDate) < now)
    .sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()),
)

const featuredEvents = computed(() => upcomingEvents.value.slice(0, 3))
const moreUpcoming = computed(() => upcomingEvents.value.slice(3))
const moreEventsCount = computed(() => moreUpcoming.value.length + pastEvents.value.length)
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

.more-toggle {
  @include body-text("sm", "semibold");
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 32px auto 0;
  color: $color-orange;

  svg {
    transition: transform 0.2s ease;

    &.rotated {
      transform: rotate(180deg);
    }
  }

  &:hover {
    text-decoration: underline;
  }
}

.more-groups {
  max-width: 720px;
  margin-inline: auto;
}

.more-group + .more-group {
  margin-top: 28px;
}

.more-heading {
  @include body-text("xs", "semibold");
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-faint);
  margin-bottom: 12px;
}

.more-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.more-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border-radius: 12px;
  background: var(--bg-surface-alt);
  text-decoration: none;
  color: inherit;
  opacity: 0.85;
  transition:
    opacity 0.2s ease,
    background 0.2s ease;

  &:hover {
    opacity: 1;
    background: var(--bg-surface);
  }

  &.is-past {
    opacity: 0.6;

    &:hover {
      opacity: 0.85;
    }
  }
}

.more-date {
  @include body-text("xs", "medium");
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  flex-shrink: 0;
  width: 108px;

  svg {
    flex-shrink: 0;
  }
}

.more-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.more-title {
  @include body-text("sm", "semibold");
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);

  .event-tag {
    padding: 2px 10px;
  }
}

.more-location {
  @include body-text("xs", "regular");
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--text-faint);
}

.more-arrow {
  flex-shrink: 0;
  color: $color-orange;
}

@media (max-width: $bp-sm) {
  .more-item {
    align-items: flex-start;
  }

  .more-date {
    width: auto;
  }
}
</style>
