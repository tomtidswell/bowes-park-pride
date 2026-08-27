<template>
  <div class="sponsors-page">
    <section class="sponsors-hero">
      <div class="sponsors-hero-bg" />
      <div class="container sponsors-hero-content">
        <h1>2027 Sponsorship &amp; Partnership Opportunities</h1>
        <p>Support your local Pride and show your commitment to inclusion and community.</p>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z" fill="#FFF8F0" />
        </svg>
      </div>
    </section>

    <!-- About -->
    <SectionWrapper color="off-white">
      <div class="about-block" v-reveal>
        <h2>About Bowes Park Pride</h2>
        <p>
          Bowes Park Pride is a grassroots LGBTQIA+ celebration based in the heart of
          North London. Our inaugural Pride brought around 4,000 people to Myddleton
          Road, supported by roughly 60 volunteers, local businesses, community
          organisations, elected representatives and corporate partners.
        </p>
        <p>
          It created a welcoming, highly visible celebration for LGBTQIA+ people and
          allies — and a significant boost for the local economy, with several
          businesses reporting their best trading day ever.
        </p>
        <p>
          For 2027, we want to build on that success with a bigger, safer and more
          accessible Pride, alongside year-round community activity. We're looking for
          businesses and organisations that share our commitment to inclusion,
          community and LGBTQIA+ visibility.
        </p>
      </div>
    </SectionWrapper>

    <!-- Headline partnerships -->
    <SectionWrapper color="magenta" divider>
      <div class="section-heading" v-reveal>
        <h2>Headline Partnerships</h2>
        <p class="section-intro">
          Our most prominent partnerships, for organisations ready to make a
          significant commitment to Bowes Park Pride 2027. Investment levels are
          agreed individually with each partner — get in touch for guide figures.
        </p>
      </div>

      <div class="headline-grid" v-reveal>
        <div
          v-for="tier in headlinePartners"
          :key="tier.id"
          class="headline-card"
          :style="{ '--tier-color': tier.color }"
        >
          <div class="headline-card-header">
            <h3>{{ tier.name }}</h3>
            <span v-if="tier.availability" class="availability-badge">{{ tier.availability }}</span>
          </div>
          <p class="headline-desc">{{ tier.description }}</p>
          <ul class="tier-benefits">
            <li v-for="(benefit, i) in tier.benefits" :key="i">
              <Check :size="16" />
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>

    <!-- Themed partnerships -->
    <SectionWrapper color="purple" divider>
      <div class="section-heading" v-reveal>
        <h2>Themed Partnerships</h2>
        <p class="section-intro">
          Focused partnerships aligned with a specific part of the day — from the
          stages to accessibility and volunteering. As with our headline
          partnerships, amounts are guide figures agreed in conversation.
        </p>
      </div>

      <div class="themed-grid" v-reveal>
        <div
          v-for="tier in themedPartners"
          :key="tier.id"
          class="themed-card"
          :style="{ '--tier-color': tier.color }"
        >
          <h4>{{ tier.name }}</h4>
          <p>{{ tier.description }}</p>
          <ul class="tier-benefits compact">
            <li v-for="(benefit, i) in tier.benefits" :key="i">
              <Check :size="14" />
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>

    <!-- Supporter levels -->
    <SectionWrapper color="yellow" divider>
      <div class="section-heading" v-reveal>
        <h2>Supporter Levels</h2>
        <p class="section-intro">A simple way for local businesses to back Bowes Park Pride 2027.</p>
      </div>

      <div class="supporter-grid" v-reveal>
        <div
          v-for="tier in supporterLevels"
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

    <!-- Local business & bespoke -->
    <SectionWrapper color="teal" divider>
      <div class="local-bespoke-grid" v-reveal>
        <div class="local-block">
          <h2>Local Business Participation</h2>
          <div class="local-cards">
            <div
              v-for="opt in localBusinessOptions"
              :key="opt.id"
              class="local-card"
              :style="{ '--tier-color': opt.color }"
            >
              <h4>{{ opt.name }}</h4>
              <p>{{ opt.description }}</p>
            </div>
          </div>
        </div>

        <div class="bespoke-block">
          <h2>Bespoke &amp; In-Kind Partnerships</h2>
          <p>We also welcome conversations about bespoke and in-kind partnerships, including:</p>
          <div class="chip-list">
            <span v-for="item in inKindContributions" :key="item" class="chip">{{ item }}</span>
          </div>
          <p class="fine-print">
            The recognition offered will reflect the genuine value and impact of the
            contribution.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <!-- Get in touch -->
    <SectionWrapper color="off-white">
      <div class="download-section" v-reveal>
        <h2>Get in Touch</h2>
        <p>
          Interested in partnering with Bowes Park Pride 2027? We'd love to hear from
          you — get in touch and we'll talk through the right partnership for you.
        </p>
        <div class="download-actions">
          <a href="mailto:hello@bowesparkpride.org.uk" class="contact-btn primary">
            <Mail :size="20" />
            hello@bowesparkpride.org.uk
          </a>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { Check, Mail } from 'lucide-vue-next'
import {
  headlinePartners,
  themedPartners,
  supporterLevels,
  localBusinessOptions,
  inKindContributions,
} from '@/data/partnerTiers'

useHead({
  title: 'Sponsor Bowes Park Pride 2027 — Support North London\'s Free LGBTQ+ Festival',
  meta: [
    {
      name: 'description',
      content: 'Become a sponsor or partner of Bowes Park Pride 2027 — North London\'s free LGBTQ+ community festival. Reach thousands of people across Haringey, Enfield, Wood Green, Palmers Green and beyond. View partnership opportunities and benefits.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://bowesparkpride.org.uk/sponsors' }],
})
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

// About
.about-block {
  max-width: 720px;
  margin-inline: auto;
  text-align: center;

  h2 {
    margin-bottom: 24px;
    color: $color-magenta;
  }

  p {
    @include body-text("lg", "regular");
    color: var(--text-muted);
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// Shared section heading
.section-heading {
  text-align: center;
  margin-bottom: 48px;

  h2 {
    margin-bottom: 16px;
    color: var(--text-primary);
  }
}

.section-intro {
  @include body-text("lg", "regular");
  max-width: 640px;
  margin-inline: auto;
  color: var(--text-muted);
}

// Headline partnerships
.headline-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1100px;
  margin-inline: auto;

  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.headline-card {
  background: var(--bg-solid);
  border-radius: 20px;
  padding: 28px;
  border-top: 4px solid var(--tier-color);
  box-shadow: 0 2px 12px var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px var(--shadow-lg);
  }
}

.headline-card-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;

  h3 {
    @include heading-text("lg", "bold");
    color: var(--tier-color);
  }
}

.availability-badge {
  @include body-text("xs", "semibold");
  display: inline-block;
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: 50px;
  background: color-mix(in srgb, var(--tier-color) 15%, transparent);
  color: var(--tier-color);
}

.headline-desc {
  @include body-text("sm", "regular");
  color: var(--text-muted);
  margin-bottom: 16px;
}

// Themed partnerships
.themed-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1100px;
  margin-inline: auto;

  @media (min-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.themed-card {
  background: var(--bg-solid);
  border-radius: 16px;
  padding: 22px;
  border-left: 4px solid var(--tier-color);

  h4 {
    @include heading-text("base", "bold");
    color: var(--tier-color);
    margin-bottom: 8px;
  }

  > p {
    @include body-text("sm", "regular");
    color: var(--text-muted);
    margin-bottom: 12px;
  }
}

// Shared tier benefit list
.tier-benefits {
  li {
    @include body-text("sm", "regular");
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 6px 0;
    color: var(--text-muted);

    svg {
      flex-shrink: 0;
      color: var(--tier-color);
      margin-top: 2px;
    }
  }

  &.compact li {
    @include body-text("xs", "regular");
    padding: 4px 0;
  }
}

// Supporter levels (priced tiers)
.supporter-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 600px;
  margin-inline: auto;

  @media (min-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tier-card {
  background: var(--bg-solid);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 12px var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px var(--shadow-lg);
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

.tier-card .tier-benefits {
  padding: 24px;
}

// Local business & bespoke
.local-bespoke-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  max-width: 1000px;
  margin-inline: auto;

  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  h2 {
    margin-bottom: 20px;
    color: var(--text-primary);
  }

  > p {
    @include body-text("base", "regular");
    color: var(--text-muted);
  }
}

.local-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.local-card {
  background: var(--bg-solid);
  border-radius: 14px;
  padding: 20px;
  border-left: 4px solid var(--tier-color);

  h4 {
    @include heading-text("base", "bold");
    color: var(--tier-color);
    margin-bottom: 6px;
  }

  p {
    @include body-text("sm", "regular");
    color: var(--text-muted);
  }
}

.bespoke-block > p {
  margin-bottom: 20px;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.chip {
  @include body-text("sm", "medium");
  padding: 8px 16px;
  border-radius: 50px;
  background: var(--bg-surface);
  color: var(--text-primary);
}

.fine-print {
  @include body-text("xs", "regular");
  color: var(--text-faint);
}

// Get in touch
.download-section {
  text-align: center;
  max-width: 600px;
  margin-inline: auto;

  h2 {
    margin-bottom: 16px;
    color: $color-magenta;
  }

  p {
    @include body-text("lg", "regular");
    color: var(--text-secondary);
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
  background: var(--bg-solid);
  color: $color-magenta;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px var(--shadow-lg);
    color: $color-magenta;
  }

  &.primary {
    background: $color-magenta;
    color: $color-white;

    &:hover {
      color: $color-white;
    }
  }
}
</style>
