<template>
  <SectionWrapper
    id="sponsors"
    color="none"
    wave
    wave-previous-color="#f2f2f2"
    class="sponsors-bg"
  >
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
  background-color: rgba(255, 255, 255, 0.85);
}
:deep(.section-inner) {
  background-image: radial-gradient(
    circle at 50% 50%,
    #ffc54ce3 0%,
    transparent 50%
  );
}
.sponsors-preview {
  text-align: center;

  h2 {
    margin-bottom: 16px;
    color: color.adjust(#f5a623, $lightness: -15%);
  }
}

.intro {
  @include body-text("lg", "regular");
  margin-bottom: 40px;
  color: rgba($color-dark, 0.8);
}

.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
  background: $color-magenta;
  color: $color-white;
  border-radius: 50px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba($color-magenta, 0.3);
    color: $color-white;
  }
}
</style>
