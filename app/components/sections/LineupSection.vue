<template>
  <SectionWrapper
    id="lineup"
    color="none"
    divider
    class="lineup-bg"
  >
    <div class="lineup reveal-scale">
      <h2>Lineup</h2>
      <div class="lineup-tba">
        <Music :size="48" :stroke-width="1.5" />
        <h3>Watch This Space!</h3>
        <p>
          Our lineup is being finalised. Expect live music, DJs, drag
          performances, spoken word, and more. Sign up to our mailing list to be
          the first to know when acts are announced.
        </p>
        <a
          href="https://preview.mailerlite.io/forms/1823960/179647431588185955/share"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-link"
        >
          <Mail :size="18" />
          Join the Mailing List
        </a>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { Music, Mail } from "lucide-vue-next"
</script>

<style lang="scss" scoped>
.lineup-bg {
  @include section-bg("/street3.webp");
}

.lineup {
  text-align: center;

  h2 {
    @include gradient-heading($color-teal);
    margin-bottom: 40px;
  }
}

.lineup-tba {
  max-width: 560px;
  margin-inline: auto;
  padding: 48px 32px;
  border-radius: 20px;
  background: var(--bg-surface-alt);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  svg:first-child {
    color: $color-teal;
  }

  h3 {
    color: var(--text-primary);
  }

  p {
    @include body-text("base", "regular");
    color: var(--text-muted);
  }
}

.cta-link {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: $color-teal;
  color: $color-white;
  border-radius: 50px;
  margin-top: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba($color-teal, 0.3);
    color: $color-white;
  }
}
</style>
