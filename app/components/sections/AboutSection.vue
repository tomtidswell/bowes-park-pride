<template>
  <SectionWrapper id="about" color="magenta" wave wave-previous-color="#FFF8F0">
    <div class="about reveal">
      <h2>What is Bowes Park Pride?</h2>
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
        <div class="values">
          <div class="value">
            <Heart :size="28" :stroke-width="2" />
            <h4>Inclusive</h4>
            <p>A safe and welcoming space for everyone, regardless of identity or background.</p>
          </div>
          <div class="value">
            <Users :size="28" :stroke-width="2" />
            <h4>Community-Led</h4>
            <p>Organised by local volunteers who care deeply about Bowes Park and its people.</p>
          </div>
          <div class="value">
            <Sparkles :size="28" :stroke-width="2" />
            <h4>Free for All</h4>
            <p>No tickets needed. Just turn up, bring your friends, and have a brilliant time.</p>
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
  text-align: center;

  h2 {
    margin-bottom: 32px;
    color: $color-magenta;
  }
}

.about-body {
  max-width: 720px;
  margin-inline: auto;

  > p {
    @include body-text("lg", "regular");
    margin-bottom: 20px;
    color: rgba($color-dark, 0.85);
  }
}

.values {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: 48px;

  @media (min-width: $bp-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.value {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  background: rgba($color-white, 0.6);

  svg {
    color: $color-magenta;
  }

  h4 {
    color: $color-dark;
  }

  p {
    @include body-text("sm", "regular");
    color: rgba($color-dark, 0.7);
  }
}
</style>
