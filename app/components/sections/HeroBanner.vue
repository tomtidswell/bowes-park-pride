<template>
  <section class="hero">
    <div class="hero-bg" />
    <div class="hero-shimmer" />
    <div class="hero-shapes">
      <svg class="shape shape-circle" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="38" fill="currentColor" />
      </svg>
      <svg class="shape shape-star" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,2 50,30 80,30 56,48 64,78 40,58 16,78 24,48 0,30 30,30" fill="currentColor" />
      </svg>
      <svg class="shape shape-heart" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 72 C20 52 4 40 4 26 A18 18 0 0 1 40 18 A18 18 0 0 1 76 26 C76 40 60 52 40 72Z" fill="currentColor" />
      </svg>
      <svg class="shape shape-ring" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" stroke-width="6" />
      </svg>
    </div>
    <div class="hero-content container">
      <p class="hero-date">Sunday 5th July 2026</p>
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
  animation: gradient-shift 8s ease infinite;
}

.hero-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(255, 255, 255, 0.12) 45%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.12) 55%,
    transparent 70%
  );
  background-size: 200% 100%;
  animation: shimmer-sweep 4s ease-in-out infinite;
}

@keyframes shimmer-sweep {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

// Floating decorative shapes
.hero-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.shape {
  position: absolute;
  opacity: 0.15;
}

.shape-circle {
  width: 60px;
  height: 60px;
  top: 15%;
  left: 8%;
  color: $color-yellow;
  animation: float-drift 8s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 90px;
    height: 90px;
  }
}

.shape-star {
  width: 50px;
  height: 50px;
  top: 20%;
  right: 10%;
  color: $color-orange;
  opacity: 0.2;
  animation: float-rotate 10s linear infinite;

  @media (min-width: $bp-md) {
    width: 70px;
    height: 70px;
  }
}

.shape-heart {
  width: 40px;
  height: 40px;
  bottom: 25%;
  left: 12%;
  color: $color-magenta;
  opacity: 0.2;
  animation: float-drift 7s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 60px;
    height: 60px;
  }
}

.shape-ring {
  width: 55px;
  height: 55px;
  bottom: 20%;
  right: 8%;
  color: $color-teal;
  opacity: 0.25;
  animation: float-rotate 12s linear infinite reverse;

  @media (min-width: $bp-md) {
    width: 80px;
    height: 80px;
  }
}

@keyframes float-drift {
  0%, 100% { transform: translate(0, 0); }
  25%  { transform: translate(12px, -18px); }
  50%  { transform: translate(-8px, -30px); }
  75%  { transform: translate(15px, -12px); }
}

@keyframes float-rotate {
  0%   { transform: rotate(0deg) translate(0, 0); }
  25%  { transform: rotate(90deg) translate(10px, -15px); }
  50%  { transform: rotate(180deg) translate(-5px, -25px); }
  75%  { transform: rotate(270deg) translate(8px, -10px); }
  100% { transform: rotate(360deg) translate(0, 0); }
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
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.btn-primary {
  position: relative;
  background: $color-white;
  color: $color-magenta;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba($color-magenta, 0.08), rgba($color-purple, 0.12), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    box-shadow: 0 6px 28px rgba(0, 0, 0, 0.2);

    &::before {
      transform: translateX(100%);
    }
  }
}

.btn-outline {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: $color-white;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: $color-white;
    transform: translateY(-2px) scale(1.03);
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
