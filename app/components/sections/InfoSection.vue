<template>
  <SectionWrapper id="info" color="blue" wave wave-previous-color="#ECFDF5">
    <div class="info reveal">
      <h2>Info & FAQ</h2>
      <div class="info-grid">
        <div class="info-card">
          <MapPin :size="24" />
          <h4>Location</h4>
          <p>Myddleton Road, Bowes Park, London N22</p>
        </div>
        <div class="info-card">
          <Clock :size="24" />
          <h4>Times</h4>
          <p>Gates open at 12 noon. Event runs until 8pm.</p>
        </div>
        <div class="info-card">
          <Train :size="24" />
          <h4>Getting There</h4>
          <p>Bowes Park rail (2 min walk) or Bounds Green tube (10 min walk).</p>
        </div>
        <div class="info-card">
          <Ticket :size="24" />
          <h4>Cost</h4>
          <p>Completely free! No tickets needed.</p>
        </div>
      </div>

      <div class="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div class="faq-list">
          <FaqItem
            v-for="(item, i) in faqData"
            :key="i"
            :question="item.question"
            :answer="item.answer"
          />
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { MapPin, Clock, Train, Ticket } from 'lucide-vue-next'
import { faqData } from '@/data/faq'
</script>

<style lang="scss" scoped>
.info {
  h2 {
    text-align: center;
    margin-bottom: 40px;
    color: $color-blue;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 64px;

  @media (min-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 28px 20px;
  border-radius: 16px;
  background: rgba($color-white, 0.6);

  svg {
    color: $color-blue;
  }

  h4 {
    color: $color-dark;
  }

  p {
    @include body-text("sm", "regular");
    color: rgba($color-dark, 0.8);
  }
}

.faq-section {
  max-width: 720px;
  margin-inline: auto;

  h3 {
    text-align: center;
    margin-bottom: 32px;
    color: $color-dark;
  }
}

.faq-list {
  background: rgba($color-white, 0.6);
  border-radius: 16px;
  padding: 8px 24px;
}
</style>
