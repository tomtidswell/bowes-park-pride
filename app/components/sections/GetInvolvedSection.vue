<template>
  <SectionWrapper id="get-involved" color="none" class="involved-bg">
    <div class="involved reveal-right">
      <h2>Get Involved</h2>
      <p class="intro">
        Bowes Park Pride is made possible by amazing volunteers from our
        community. Whether you can spare a few hours on the day or want to help
        with planning, we'd love to hear from you.
      </p>
      <div class="cards">
        <div class="card card-magenta">
          <HandHelping :size="32" :stroke-width="1.5" />
          <h4>Volunteer</h4>
          <p>
            Help us set up, run stalls, manage the stage, or keep the event safe
            and fun.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpt0DULJ5gwzbi6hcydO4_HZvtL4p_7U6YIwJpjgMyL5a_5g/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            class="card-btn"
          >
            Sign Up to Volunteer
          </a>
        </div>
        <div class="card card-teal">
          <Mic :size="32" :stroke-width="1.5" />
          <h4>Perform</h4>
          <p>
            Are you an LGBTQIA+ or queer performer based in North London?
            Musician, DJ, drag artist or spoken word poet — we want to hear from
            you.
          </p>
          <a href="mailto:hello@bowesparkpride.org.uk" class="card-btn">
            Get in Touch
          </a>
        </div>
        <div class="card card-orange">
          <Store :size="32" :stroke-width="1.5" />
          <h4>Run a Stall</h4>
          <p>
            Proudly inclusive local business or community group? Join us as a
            stallholder.
          </p>
          <a href="mailto:hello@bowesparkpride.org.uk" class="card-btn">
            Enquire About Stalls
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { HandHelping, Mic, Store } from "lucide-vue-next"
</script>

<style lang="scss" scoped>
.involved-bg {
  @include section-bg("/street2.webp");
}

.involved {
  text-align: center;

  h2 {
    @include gradient-heading($color-magenta);
    margin-bottom: 20px;
  }
}

.intro {
  @include body-text("lg", "regular");
  text-align: center;
  max-width: 640px;
  margin-inline: auto;
  margin-bottom: 40px;
  color: var(--text-muted);
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
  background: var(--bg-surface);
  border-left: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  h4 {
    color: var(--text-primary);
  }

  p {
    @include body-text("sm", "regular");
    color: var(--text-faint);
    flex: 1;
  }
}

.card-magenta,
.card-teal,
.card-orange {
  svg {
    color: $color-magenta;
  }
}

.card-btn {
  @include body-text("sm", "semibold");
  display: inline-flex;
  padding: 10px 24px;
  background: $color-magenta;
  color: $color-white;
  border-radius: 50px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba($color-magenta, 0.3);
    color: $color-white;
  }
}
</style>
