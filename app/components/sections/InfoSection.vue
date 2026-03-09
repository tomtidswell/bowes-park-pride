<template>
  <SectionWrapper
    id="info"
    color="none"
    divider
    class="info-bg"
  >
    <div class="info reveal">
      <h2>Info & FAQ</h2>
      <div class="info-grid">
        <div class="info-card">
          <div class="icon-circle">
            <MapPin :size="24" />
          </div>
          <h4>Location</h4>
          <p>Myddleton Road, Bowes Park, London N22</p>
        </div>
        <div class="info-card">
          <div class="icon-circle">
            <Clock :size="24" />
          </div>
          <h4>Times</h4>
          <p>Myddleton Road Market opens at 12pm. Event runs until 6pm.</p>
        </div>
        <div class="info-card">
          <div class="icon-circle">
            <Train :size="24" />
          </div>
          <h4>Getting There</h4>
          <p>
            Bowes Park rail (2 min walk) or Bounds Green tube (10 min walk).
          </p>
        </div>
        <div class="info-card">
          <div class="icon-circle">
            <Ticket :size="24" />
          </div>
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
import { MapPin, Clock, Train, Ticket } from "lucide-vue-next"
import { faqData } from "@/data/faq"
</script>

<style lang="scss" scoped>
.info-bg {
  @include section-bg("/street2.webp");
}

.info {
  h2 {
    @include gradient-heading($color-blue);
    text-align: center;
    margin-bottom: 40px;
    width: 100%;
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
  background: var(--bg-surface);

  h4 {
    color: var(--text-primary);
  }

  p {
    @include body-text("sm", "regular");
    color: var(--text-muted);
  }
}

.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;

  svg {
    color: $color-white;
  }
}

.icon-circle {
  background: $color-blue;
}

.faq-section {
  max-width: 720px;
  margin-inline: auto;

  h3 {
    text-align: center;
    margin-bottom: 32px;
    color: var(--text-primary);
  }
}

.faq-list {
  background: var(--bg-surface);
  border-radius: 16px;
  padding: 8px 24px;

  :deep(.faq-icon) {
    color: $color-blue;
  }
}
</style>
