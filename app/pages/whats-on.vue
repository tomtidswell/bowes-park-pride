<template>
  <div class="whats-on-page">
    <section class="whats-on-hero">
      <div class="whats-on-hero-bg" />
      <div class="container whats-on-hero-content">
        <h1>What's On</h1>
        <p>Fundraisers, socials and news from Bowes Park Pride</p>
      </div>
      <div class="hero-wave">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z"
            fill="#fff5e6"
          />
        </svg>
      </div>
    </section>

    <SectionWrapper color="orange" class="whats-on-section">
      <div class="whats-on">
        <h2 v-reveal>Coming up</h2>
        <div v-if="upcomingEvents.length" class="events-grid">
          <EventCard
            v-for="event in upcomingEvents"
            v-reveal
            :key="event.title"
            :event="event"
          />
        </div>
        <p v-else class="empty">
          Nothing new just yet. Check back soon, or sign up to our newsletter
          below for updates.
        </p>

        <template v-if="pastEvents.length">
          <h2 v-reveal class="past-heading">Past events and news</h2>
          <div v-reveal class="past-list">
            <component
              :is="event.link ? NuxtLink : 'div'"
              v-for="event in pastEvents"
              :key="event.title"
              :to="event.link"
              :target="isExternal(event.link) ? '_blank' : undefined"
              :rel="isExternal(event.link) ? 'noopener noreferrer' : undefined"
              class="past-item"
            >
              <span class="past-date">
                <CalendarDays :size="14" />
                {{ event.date }}
              </span>
              <span class="past-body">
                <span class="past-title">
                  {{ event.title }}
                  <span v-if="event.tag" class="past-tag">{{ event.tag }}</span>
                </span>
                <span v-if="event.location" class="past-location">
                  <MapPin :size="13" />
                  {{ event.location }}
                </span>
              </span>
              <ArrowRight v-if="event.link" :size="16" class="past-arrow" />
            </component>
          </div>
        </template>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { CalendarDays, ArrowRight, MapPin } from "lucide-vue-next"

const NuxtLink = resolveComponent("NuxtLink")
const { upcomingEvents, pastEvents } = useEvents()

const isExternal = (link?: string) =>
  !!link && (link.startsWith("http") || link.endsWith(".pdf"))

useSeoMeta({
  title: "What's On | Bowes Park Pride",
  description:
    "Upcoming fundraisers, socials and news from Bowes Park Pride, the free LGBTQ+ community festival on Myddleton Road, London N22.",
})
</script>

<style lang="scss" scoped>
.whats-on-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  overflow: hidden;
}

.whats-on-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, $color-orange, $color-magenta, $color-purple);
  background-size: 200% 200%;
  animation: gradient-shift 12s ease infinite;
}

.whats-on-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: calc($header-height + 40px);
  padding-bottom: 80px;

  h1 {
    color: $color-white;
    margin-bottom: 16px;
  }

  p {
    @include body-text("lg", "regular");
    color: rgba(255, 255, 255, 0.9);
    max-width: 560px;
    margin-inline: auto;
  }
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  line-height: 0;

  svg {
    width: 100%;
    height: 48px;

    @media (min-width: $bp-md) {
      height: 80px;
    }
  }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

// Listing page: a smaller top gap than the site's 25vh feature sections
.whats-on-section {
  padding-top: 56px;
  min-height: auto;
  justify-content: flex-start;
}

.whats-on {
  h2 {
    @include gradient-heading($color-orange);
    text-align: center;
    width: 100%;
    margin-bottom: 32px;
  }
}

.events-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: $bp-md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.empty {
  @include body-text("lg", "regular");
  text-align: center;
  color: var(--text-muted);
}

.past-heading {
  margin-top: 64px;
}

.past-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 720px;
  margin-inline: auto;
}

.past-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border-radius: 12px;
  background: var(--bg-surface-alt);
  text-decoration: none;
  color: inherit;
  opacity: 0.75;
  transition:
    opacity 0.2s ease,
    background 0.2s ease;

  &:hover {
    opacity: 1;
    background: var(--bg-surface);
  }
}

.past-date {
  @include body-text("xs", "medium");
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  flex-shrink: 0;
  width: 128px;

  svg {
    flex-shrink: 0;
  }
}

.past-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.past-title {
  @include body-text("sm", "semibold");
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
}

.past-tag {
  @include body-text("xs", "semibold");
  padding: 2px 10px;
  border-radius: 50px;
  background: $color-teal;
  color: $color-dark;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.past-location {
  @include body-text("xs", "regular");
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--text-faint);
}

.past-arrow {
  flex-shrink: 0;
  color: $color-orange;
}

@media (max-width: 640px) {
  .past-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 16px 18px;
  }

  .past-date {
    width: auto;
  }

  .past-title {
    flex-wrap: wrap;
    row-gap: 4px;
  }

  .past-arrow {
    display: none;
  }
}
</style>
