<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="about-hero-bg" />
      <div class="container about-hero-content">
        <h1>About Bowes Park Pride</h1>
        <p>A free, community-led celebration of love, diversity, and togetherness.</p>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z" fill="#FFF0F7" />
        </svg>
      </div>
    </section>

    <SectionWrapper color="magenta">
      <div class="about reveal-left">
        <h2 class="gradient-text">What is Bowes Park Pride?</h2>

        <div class="about-layout">
          <div class="about-body">
            <p>
              Bowes Park Pride is a free, community-led celebration of love, diversity, and togetherness
              right in the heart of our neighbourhood. On <strong>Sunday 5th July 2026</strong>, Myddleton Road
              transforms into a vibrant street festival with live music, performances, local food,
              family activities, and so much more.
            </p>
            <p>
              We believe everyone deserves to feel welcome, seen, and celebrated. Whether you're part
              of the LGBTQ+ community, an ally, or simply someone who loves a great street party,
              Bowes Park Pride is for you.
            </p>
          </div>
          <div class="values">
            <div class="value">
              <Heart :size="28" :stroke-width="2" />
              <div>
                <h4>Inclusive</h4>
                <p>A safe and welcoming space for everyone, regardless of identity or background.</p>
              </div>
            </div>
            <div class="value">
              <Users :size="28" :stroke-width="2" />
              <div>
                <h4>Community-Led</h4>
                <p>Organised by local volunteers who care deeply about Bowes Park and its people.</p>
              </div>
            </div>
            <div class="value">
              <Sparkles :size="28" :stroke-width="2" />
              <div>
                <h4>Free for All</h4>
                <p>No tickets needed. Just turn up, bring your friends, and have a brilliant time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { Heart, Users, Sparkles } from 'lucide-vue-next'

useHead({
  title: 'About — Bowes Park Pride',
  meta: [
    { name: 'description', content: 'Learn about Bowes Park Pride — a free, community-led celebration of love, diversity, and togetherness in Bowes Park, London N22.' },
  ],
})

useScrollReveal()
</script>

<style lang="scss" scoped>
.about-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  overflow: hidden;
}

.about-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, $color-magenta, $color-purple, $color-blue);
  background-size: 200% 200%;
  animation: gradient-shift 12s ease infinite;
}

.about-hero-content {
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

.about {
  h2 {
    text-align: center;
    margin-bottom: 32px;
  }
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media (min-width: $bp-md) {
    grid-template-columns: 1.2fr 1fr;
    align-items: start;
  }
}

.about-body {
  > p {
    @include body-text("lg", "regular");
    margin-bottom: 20px;
    color: rgba($color-dark, 0.85);
  }
}

.values {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.value {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border-radius: 16px;
  background: rgba($color-white, 0.45);

  svg {
    color: $color-magenta;
    flex-shrink: 0;
    margin-top: 2px;
  }

  h4 {
    color: $color-dark;
    margin-bottom: 4px;
  }

  p {
    @include body-text("sm", "regular");
    color: rgba($color-dark, 0.7);
  }
}
</style>
