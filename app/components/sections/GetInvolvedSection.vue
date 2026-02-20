<template>
  <SectionWrapper id="get-involved" color="purple" wave wave-previous-color="#EBF8FF">
    <div class="involved reveal">
      <h2>Get Involved</h2>
      <p class="intro">
        Bowes Park Pride is made possible by amazing volunteers from our community.
        Whether you can spare a few hours on the day or want to help with planning,
        we'd love to hear from you.
      </p>
      <div class="cards">
        <div class="card">
          <HandHelping :size="32" :stroke-width="1.5" />
          <h4>Volunteer</h4>
          <p>Help us set up, run stalls, manage the stage, or keep the event safe and fun.</p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            class="card-btn"
          >
            Sign Up to Volunteer
          </a>
        </div>
        <div class="card">
          <Mic :size="32" :stroke-width="1.5" />
          <h4>Perform</h4>
          <p>Musician, DJ, drag artist, or spoken word poet? We want to hear from you.</p>
          <a href="mailto:hello@bowesparkpride.org" class="card-btn">
            Get in Touch
          </a>
        </div>
        <div class="card">
          <Store :size="32" :stroke-width="1.5" />
          <h4>Run a Stall</h4>
          <p>Local business or community group? Book a stall space at the event.</p>
          <a href="mailto:hello@bowesparkpride.org" class="card-btn">
            Enquire About Stalls
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { HandHelping, Mic, Store } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>
.involved {
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: $color-purple;
  }
}

.intro {
  @include body-text("lg", "regular");
  max-width: 640px;
  margin-inline: auto;
  margin-bottom: 48px;
  color: rgba($color-dark, 0.85);
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: $bp-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 24px;
  border-radius: 20px;
  background: rgba($color-white, 0.65);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  svg {
    color: $color-purple;
  }

  h4 {
    color: $color-dark;
  }

  p {
    @include body-text("sm", "regular");
    color: rgba($color-dark, 0.75);
    flex: 1;
  }
}

.card-btn {
  @include body-text("sm", "semibold");
  display: inline-flex;
  padding: 10px 24px;
  background: $color-purple;
  color: $color-white;
  border-radius: 50px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba($color-purple, 0.3);
    color: $color-white;
  }
}
</style>
