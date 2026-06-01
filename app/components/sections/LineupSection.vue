<template>
  <SectionWrapper id="lineup" color="none" class="lineup-bg">
    <div class="lineup" v-reveal>
      <div class="lineup-images">
        <img
          src="/lineup-main.png"
          alt="Aiden Sadler * Homoparody ✶ Bollyqueer ✶ Four Play ✶ Topsie Redfern   ✶ Tola Kuforiji ✶ The Mayor of Haringey"
          class="lineup-img"
        />
        <img
          src="/lineup-street.png"
          alt="Barberfellas * Bluebell End ✶ Lily Lavin ✶ Issy Everett’s dance workshop ✶ Tottenham Community Choir ✶ R Voices"
          class="lineup-img"
        />
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { Music } from "lucide-vue-next"
import NewsletterSignup from "~/components/elements/NewsletterSignup.vue"
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

.lineup-images {
  display: flex;
  gap: 24px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.lineup-img {
  flex: 1 1 0;
  min-width: 0;
  width: 100%;
  height: auto;
  border-radius: 12px;
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

  & > svg:first-child {
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
