<template>
  <div class="sponsors-page">
    <section class="sponsors-hero">
      <div class="sponsors-hero-bg" />
      <div class="container sponsors-hero-content">
        <h1>2026 Sponsorship Opportunities</h1>
        <p>Support your local Pride and show your commitment to diversity and community.</p>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z" fill="#FFF8F0" />
        </svg>
      </div>
    </section>

    <SectionWrapper color="off-white">
      <div class="tiers-intro reveal">
        <h2>Sponsorship Tiers</h2>
        <p>
          Bowes Park Pride is a community grassroots Pride event. We are so proud of the
          local businesses, pubs, restaurants and cafes who are already supporting Bowes
          Park Pride 2026 — we'd love you to be a part of your local Pride!
        </p>
        <p>Here's how you can be involved…</p>
      </div>

      <div class="tiers-grid reveal">
        <div
          v-for="tier in sponsorTiers"
          :key="tier.id"
          class="tier-card"
          :style="{ '--tier-color': tier.color }"
        >
          <div class="tier-header">
            <h3>{{ tier.name }}</h3>
            <span class="tier-price">{{ tier.price }}</span>
          </div>
          <ul class="tier-benefits">
            <li v-for="(benefit, i) in tier.benefits" :key="i">
              <Check :size="16" />
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper color="teal" wave wave-previous-color="#FFF8F0">
      <div class="download-section reveal">
        <h2>Get in Touch</h2>
        <p>
          Interested in sponsoring Bowes Park Pride 2026? We'd love to hear from you.
        </p>
        <div class="download-actions">
          <a href="/bowes-park-pride-2026-sponsorship.pdf" target="_blank" class="contact-btn primary">
            <Download :size="20" />
            Download Sponsorship Pack
          </a>
          <a href="mailto:hello@bowesparkpride.org.uk" class="contact-btn">
            <Mail :size="20" />
            hello@bowesparkpride.org.uk
          </a>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { Check, Download, Mail } from 'lucide-vue-next'
import { sponsorTiers } from '@/data/sponsorTiers'

useHead({
  title: '2026 Sponsorship Opportunities — Bowes Park Pride',
  meta: [
    { name: 'description', content: 'Support Bowes Park Pride as a sponsor. View our sponsorship tiers and benefits.' },
  ],
})

useScrollReveal()
</script>

<style lang="scss" scoped>
.sponsors-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  overflow: hidden;
}

.sponsors-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, $color-magenta, $color-purple, $color-blue);
  background-size: 200% 200%;
  animation: gradient-shift 12s ease infinite;
}

.sponsors-hero-content {
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

.tiers-intro {
  text-align: center;
  margin-bottom: 48px;

  h2 {
    margin-bottom: 16px;
    color: $color-magenta;
  }

  p {
    @include body-text("lg", "regular");
    max-width: 600px;
    margin-inline: auto;
    color: rgba($color-dark, 0.8);
    margin-bottom: 12px;
  }
}

.tiers-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1000px;
  margin-inline: auto;

  @media (min-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.tier-card {
  background: $color-white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  &:first-child {
    @media (min-width: $bp-lg) {
      grid-column: 1 / -1;
    }
  }
}

.tier-header {
  background: var(--tier-color);
  padding: 24px;
  text-align: center;
  color: $color-white;

  h3 {
    @include heading-text("lg", "bold");
    margin-bottom: 4px;
  }

  .tier-price {
    @include body-text("sm", "medium");
    opacity: 0.9;
  }
}

.tier-benefits {
  padding: 24px;

  li {
    @include body-text("sm", "regular");
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
    color: rgba($color-dark, 0.8);

    svg {
      flex-shrink: 0;
      color: var(--tier-color);
      margin-top: 2px;
    }
  }
}

.download-section {
  text-align: center;
  max-width: 600px;
  margin-inline: auto;

  h2 {
    margin-bottom: 16px;
    color: color.adjust($color-teal, $lightness: -15%);
  }

  p {
    @include body-text("lg", "regular");
    color: rgba($color-dark, 0.85);
  }
}

.download-actions {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.contact-btn {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  border-radius: 50px;
  background: $color-white;
  color: $color-teal;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    color: $color-teal;
  }

  &.primary {
    background: $color-white;
    color: $color-magenta;

    &:hover {
      color: $color-magenta;
    }
  }
}
</style>
