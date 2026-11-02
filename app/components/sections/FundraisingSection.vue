<template>
  <SectionWrapper id="support" color="none" divider class="support-bg">
    <div class="support-inner" v-reveal>
      <div class="icon-circle">
        <HeartHandshake :size="32" :stroke-width="1.5" />
      </div>
      <h2>Help Us Raise the Funds for 2027</h2>
      <p class="intro">
        Bowes Park Pride is free to attend and entirely funded by donations,
        sponsors and fundraising events like our quiz nights. To bring Pride
        back to Myddleton Road on Sunday 4th July 2027, we need your support
        now more than ever.
      </p>
      <div class="support-actions">
        <NuxtLink to="/donate" class="support-cta">
          <Heart :size="18" />
          Donate Now
        </NuxtLink>
        <NuxtLink to="/#events" class="support-link">
          See upcoming fundraisers
        </NuxtLink>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { Heart, HeartHandshake } from "lucide-vue-next"
</script>

<style lang="scss" scoped>
.support-bg {
  @include section-bg("/street2.webp");
}

.support-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 640px;
  margin-inline: auto;
}

.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--bg-surface);
  color: $color-teal;
  margin-bottom: 20px;
}

h2 {
  @include gradient-heading($color-teal);
  margin-bottom: 16px;
}

.intro {
  @include body-text("lg", "regular");
  color: var(--text-muted);
  margin-bottom: 32px;
}

.support-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.support-cta {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: $color-teal;
  color: $color-dark;
  border-radius: 50px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba($color-teal, 0.3);
    color: $color-dark;
  }
}

.support-link {
  @include body-text("sm", "semibold");
  color: var(--text-muted);
  text-decoration: underline;

  &:hover {
    color: $color-teal;
  }
}
</style>
