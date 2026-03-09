<template>
  <SectionWrapper id="sponsors" color="none" divider class="sponsors-bg">
    <div class="sponsors-preview reveal">
      <h2>Our Sponsors</h2>
      <p class="intro">
        Bowes Park Pride is supported by generous local businesses and
        organisations. Want to join them?
      </p>
      <div class="sponsor-grid">
        <SponsorLogo
          v-for="(sponsor, i) in featuredSponsors"
          :key="i"
          :sponsor="sponsor"
        />
      </div>
      <NuxtLink to="/sponsors" class="sponsors-cta">
        <Heart :size="18" />
        Become a Sponsor
      </NuxtLink>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { Heart } from "lucide-vue-next"
import { sponsors } from "@/data/sponsors"

const featuredSponsors = sponsors.filter((s) =>
  ["headline", "gold", "silver"].includes(s.tier),
)
</script>

<style lang="scss" scoped>
.sponsors-bg {
  background-image: url("/street3.webp");
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;
  background-color: var(--bg-overlay);
}
:deep(.section-inner) {
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(255, 197, 76, 0.5) 0%,
    transparent 50%
  );
}
.sponsors-preview {
  text-align: center;

  h2 {
    display: inline-block;
    background: linear-gradient(135deg, $color-yellow, color.adjust($color-yellow, $lightness: -15%), $color-yellow);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    margin-bottom: 16px;
  }
}

.intro {
  @include body-text("lg", "regular");
  margin-bottom: 40px;
  color: var(--text-muted);
}

.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 3fr 2fr 1fr;
  gap: 16px;
  max-width: 800px;
  margin-inline: auto;
  margin-bottom: 40px;
}

.sponsors-cta {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: $color-yellow;
  color: $color-dark;
  border-radius: 50px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba($color-yellow, 0.3);
    color: $color-dark;
  }
}
</style>
