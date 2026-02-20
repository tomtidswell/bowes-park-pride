<template>
  <SectionWrapper id="about" color="magenta" wave wave-previous-color="#FFF8F0">
    <div class="about reveal-left">
      <h2 class="gradient-text">What is Bowes Park Pride?</h2>

      <blockquote class="pull-quote">
        "Everyone deserves to celebrate who they are — right here in our neighbourhood."
      </blockquote>

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
</template>

<script setup lang="ts">
import { Heart, Users, Sparkles } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>
.about {
  h2 {
    text-align: center;
    margin-bottom: 32px;
  }
}

.pull-quote {
  @include heading-text("xl", "medium");
  font-style: italic;
  text-align: center;
  max-width: 680px;
  margin-inline: auto;
  margin-bottom: 48px;
  padding: 24px 32px;
  border-left: 4px solid transparent;
  border-image: linear-gradient(to bottom, $color-magenta, $color-purple, $color-teal) 1;
  color: rgba($color-dark, 0.85);

  @media (min-width: $bp-md) {
    text-align: left;
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
  background: rgba($color-white, 0.6);

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
