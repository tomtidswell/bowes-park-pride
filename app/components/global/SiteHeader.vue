<template>
  <header
    class="site-header"
    :class="{
      scrolled,
      'menu-open': mobileOpen,
      sponsors: $route.name === 'sponsors',
    }"
  >
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" aria-label="Bowes Park Pride home">
        <img src="/bp-logo.png" alt="Bowes Park Pride" class="logo-img" />
      </NuxtLink>

      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <button
        class="hamburger"
        :class="{ open: mobileOpen }"
        aria-label="Toggle menu"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>

    <Transition name="slide">
      <nav v-if="mobileOpen" class="mobile-nav" aria-label="Mobile navigation">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#lineup", label: "Lineup" },
  { href: "/#info", label: "Info" },
  { href: "/#get-involved", label: "Get Involved" },
  { href: "/sponsors", label: "Sponsors" },
]

const mobileOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener("scroll", onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener("scroll", onScroll))
})
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;

  &.scrolled,
  &.menu-open {
    background: rgba($color-white, 0.95);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  }
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: $header-height;
}

.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 72px);
  transition:
    left 0.5s ease,
    top 0.5s ease,
    transform 0.5s ease;

  .scrolled &,
  .sponsors & {
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .menu-open & {
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }
}

.logo-img {
  height: auto;
  width: min(280px, 50vw);
  transition: width 0.5s ease;

  .scrolled &,
  .sponsors & {
    width: 80px;
  }

  .menu-open & {
    width: 80px;
  }
}

.desktop-nav {
  display: none;
  gap: 32px;

  @media (min-width: $bp-md) {
    display: flex;
  }

  a {
    @include body-text("sm", "medium");
    color: $color-dark;
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: $color-magenta;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

.hamburger {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;

  @media (min-width: $bp-md) {
    display: none;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: $color-dark;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  &.open {
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 16px 20px 24px;
  background: $color-white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (min-width: $bp-md) {
    display: none;
  }

  a {
    @include body-text("lg", "medium");
    padding: 12px 0;
    color: $color-dark;
    border-bottom: 1px solid rgba($color-dark, 0.08);

    &:last-child {
      border-bottom: none;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}
</style>
