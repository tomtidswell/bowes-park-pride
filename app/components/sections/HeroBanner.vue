<template>
  <section class="hero">
    <div class="hero-bg" />
    <div class="hero-content container">
      <p class="hero-date">Sunday 5th July 2026</p>
      <h1 class="hero-title">Bowes Park<br />Pride</h1>
      <p class="hero-tagline">Love. Community. Celebration.</p>
      <p class="hero-location">
        <MapPin :size="18" />
        Myddleton Road, Bowes Park, London
      </p>
      <ClientOnly>
        <CountdownTimer />
        <template #fallback>
          <CountdownTimer :placeholder="true" />
        </template>
      </ClientOnly>
      <div class="hero-cta">
        <NuxtLink to="/#about" class="btn btn-primary">Find Out More</NuxtLink>
        <NuxtLink to="/#get-involved" class="btn btn-outline">Get Involved</NuxtLink>
      </div>
    </div>
    <div class="hero-wave">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z" fill="#FFF0F7" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    $color-magenta,
    $color-purple,
    $color-blue,
    $color-teal,
    $color-orange,
    $color-magenta
  );
  background-size: 300% 300%;
  animation: gradient-shift 12s ease infinite;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: calc($header-height + 40px);
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.hero-date {
  @include body-text("lg", "medium");
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-title {
  @include heading-text("3xl", "extrabold");
  color: $color-white;
  font-size: clamp(3rem, 2.5rem + 4vw, 7rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.hero-tagline {
  @include heading-text("xl", "regular");
  color: rgba(255, 255, 255, 0.9);
}

.hero-location {
  @include body-text("base", "medium");
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.85);
}

.hero-cta {
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  border-radius: 50px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.btn-primary {
  background: $color-white;
  color: $color-magenta;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.2);
  }
}

.btn-outline {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: $color-white;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
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
</style>
