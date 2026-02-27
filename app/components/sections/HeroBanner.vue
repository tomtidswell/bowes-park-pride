<template>
  <section class="hero">
    <div class="hero-photo" />
    <!-- <div class="hero-bg" /> -->
    <div class="hero-shapes">
      <svg
        v-for="n in 14"
        :key="n"
        :class="`shape shape-heart${n}`"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 72 C20 52 4 40 4 26 A18 18 0 0 1 40 18 A18 18 0 0 1 76 26 C76 40 60 52 40 72Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div class="hero-content container">
      <ClientOnly>
        <CountdownTimer />
        <template #fallback>
          <CountdownTimer :placeholder="true" />
        </template>
      </ClientOnly>
      <p class="hero-date">Sunday 5th July 2026 &middot; 12:00–18:00</p>
      <p class="hero-location">
        <MapPin :size="18" />
        Myddleton Road, Bowes Park, London
      </p>
      <NuxtLink to="/#get-involved" class="btn btn-primary">↓</NuxtLink>
    </div>
    <div class="hero-wave">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z"
          fill="#f8f8f8"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin } from "lucide-vue-next"
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
}

.hero-photo {
  position: absolute;
  inset: 0;
  background: url("/street.webp") center / cover no-repeat;
}

.hero-bg {
  position: absolute;
  inset: 0;
  opacity: 0.25;
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
  animation: gradient-shift 20s ease infinite;
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

.shape-heart1 {
  width: 220px;
  height: 220px;
  top: 12%;
  left: 8%;
  color: $color-magenta;
  opacity: 0.2;
  animation: float-drift 8s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 320px;
    height: 320px;
  }
}

.shape-heart2 {
  width: 160px;
  height: 160px;
  top: 18%;
  right: 10%;
  color: $color-orange;
  opacity: 0.18;
  animation: float-drift 10s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 240px;
    height: 240px;
  }
}

.shape-heart3 {
  width: 140px;
  height: 140px;
  bottom: 28%;
  left: 12%;
  color: $color-purple;
  opacity: 0.2;
  animation: float-drift 7s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 200px;
    height: 200px;
  }
}

.shape-heart4 {
  width: 180px;
  height: 180px;
  top: 45%;
  right: 6%;
  color: $color-teal;
  opacity: 0.18;
  animation: float-drift 9s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 260px;
    height: 260px;
  }
}

.shape-heart5 {
  width: 120px;
  height: 120px;
  top: 8%;
  left: 38%;
  color: $color-yellow;
  opacity: 0.15;
  animation: float-drift 11s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 180px;
    height: 180px;
  }
}

.shape-heart6 {
  width: 200px;
  height: 200px;
  bottom: 18%;
  right: 15%;
  color: $color-blue;
  opacity: 0.2;
  animation: float-drift 12s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 280px;
    height: 280px;
  }
}

.shape-heart7 {
  width: 100px;
  height: 100px;
  bottom: 12%;
  left: 42%;
  color: $color-magenta;
  opacity: 0.18;
  animation: float-drift 9s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 160px;
    height: 160px;
  }
}

.shape-heart8 {
  width: 140px;
  height: 140px;
  top: 55%;
  left: 3%;
  color: $color-orange;
  opacity: 0.15;
  animation: float-drift 10s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 220px;
    height: 220px;
  }
}

.shape-heart9 {
  width: 160px;
  height: 160px;
  top: 30%;
  left: 25%;
  color: $color-teal;
  opacity: 0.15;
  animation: float-drift 11s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 240px;
    height: 240px;
  }
}

.shape-heart10 {
  width: 120px;
  height: 120px;
  top: 5%;
  right: 30%;
  color: $color-purple;
  opacity: 0.18;
  animation: float-drift 9s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 180px;
    height: 180px;
  }
}

.shape-heart11 {
  width: 190px;
  height: 190px;
  bottom: 5%;
  left: 18%;
  color: $color-blue;
  opacity: 0.15;
  animation: float-drift 13s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 280px;
    height: 280px;
  }
}

.shape-heart12 {
  width: 110px;
  height: 110px;
  top: 65%;
  right: 28%;
  color: $color-yellow;
  opacity: 0.18;
  animation: float-drift 8s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 170px;
    height: 170px;
  }
}

.shape-heart13 {
  width: 170px;
  height: 170px;
  top: 35%;
  left: 50%;
  color: $color-magenta;
  opacity: 0.12;
  animation: float-drift 14s ease-in-out infinite;

  @media (min-width: $bp-md) {
    width: 260px;
    height: 260px;
  }
}

.shape-heart14 {
  width: 130px;
  height: 130px;
  bottom: 35%;
  right: 3%;
  color: $color-orange;
  opacity: 0.16;
  animation: float-drift 10s ease-in-out infinite reverse;

  @media (min-width: $bp-md) {
    width: 200px;
    height: 200px;
  }
}

@keyframes float-drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(12px, -18px);
  }
  50% {
    transform: translate(-8px, -30px);
  }
  75% {
    transform: translate(15px, -12px);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: calc($header-height + 260px);
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 70%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      transparent 75%
    );
    pointer-events: none;
    z-index: -1;
  }
}

.hero-date {
  @include body-text("xs", "medium");
  color: $color-white;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba($color-dark, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba($color-dark, 0.2);
  padding: 8px 24px;
  border-radius: 50px;

  @media (min-width: $bp-md) {
    @include body-text("lg", "medium");
  }
}

.hero-title {
  @include heading-text("3xl", "extrabold");
  color: $color-white;
  font-size: clamp(3rem, 2.5rem + 4vw, 7rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.hero-location {
  @include body-text("xs", "medium");
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.85);
  background: rgba($color-dark, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba($color-dark, 0.2);
  padding: 8px 24px;
  border-radius: 50px;

  @media (min-width: $bp-md) {
    @include body-text("base", "medium");
  }
}

.btn {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  border-radius: 50px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.btn-primary {
  position: relative;
  background: $color-white;
  color: $color-dark;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
  overflow: hidden;
  padding: 14px 22px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba($color-magenta, 0.08),
      rgba($color-purple, 0.12),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.05);

    &::before {
      transform: translateX(4px);
    }
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
