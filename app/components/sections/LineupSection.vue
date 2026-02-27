<template>
  <SectionWrapper
    id="lineup"
    color="none"
    wave
    wave-previous-color="#f2f2f2"
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
  background-image: url("/street3.webp");
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;
  background-color: rgba(255, 255, 255, 0.85);
}

.lineup {
  text-align: center;

  h2 {
    margin-bottom: 40px;
    color: $color-dark;
  }
}

.lineup-tba {
  max-width: 560px;
  margin-inline: auto;
  padding: 48px 32px;
  border-radius: 20px;
  background: rgba($color-white, 0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  svg:first-child {
    color: $color-blue;
  }

  h3 {
    color: $color-dark;
  }

  p {
    @include body-text("base", "regular");
    color: rgba($color-dark, 0.8);
  }
}

.cta-link {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: $color-dark;
  color: $color-white;
  border-radius: 50px;
  margin-top: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba($color-dark, 0.3);
    color: $color-white;
  }
}
</style>
