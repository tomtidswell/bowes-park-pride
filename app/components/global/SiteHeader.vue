<template>
  <header
    class="site-header"
    :class="{
      scrolled,
      'menu-open': mobileOpen,
      sponsors:
        $route.name === 'sponsors' ||
        $route.name === 'about' ||
        $route.name === 'donate',
    }"
  >
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" aria-label="Bowes Park Pride home">
        <img src="/collab-logo.png" alt="Bowes Park Pride" class="logo-img" />
      </NuxtLink>

      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/donate"
          class="nav-donate-btn"
          :style="{ background: donateColor }"
          >Donate</NuxtLink
        >
      </nav>

      <div class="mobile-actions">
        <NuxtLink
          v-if="$route.name !== 'donate'"
          to="/donate"
          class="mobile-donate-btn"
          :style="{ background: donateColor }"
          >Donate</NuxtLink
        >
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
        <NuxtLink
          to="/donate"
          class="nav-donate-btn"
          :style="{ background: donateColor }"
          @click="mobileOpen = false"
        >
          Donate
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  // { href: "/#get-involved", label: "Get Involved" },
  // { href: "/#info", label: "Info" },
  // { href: "/#lineup", label: "Lineup" },
  { href: "/about", label: "About" },
  // { href: "/sponsors", label: "Sponsors" },
]

const mobileOpen = ref(false)
const scrolled = ref(false)
const donateColor = ref("#000000")

const colorStops: [number, number, number][] = [
  [0, 0, 0], // black   (hero)
  [230, 0, 126], // magenta #e6007e
  [245, 166, 35], // orange  #f5a623
  [17, 138, 178], // blue    #118ab2
  [6, 214, 160], // teal    #06d6a0
  [6, 214, 160], // teal    #06d6a0 (footer)
]

function lerpColor(t: number): string {
  const segment = t * (colorStops.length - 1)
  const i = Math.min(Math.floor(segment), colorStops.length - 2)
  const f = segment - i
  const a = colorStops[i]!
  const b = colorStops[i + 1]!
  const r = Math.round(a[0] + (b[0] - a[0]) * f)
  const g = Math.round(a[1] + (b[1] - a[1]) * f)
  const bl = Math.round(a[2] + (b[2] - a[2]) * f)
  return `rgb(${r},${g},${bl})`
}

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const t = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
    donateColor.value = lerpColor(t)
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
    filter 0.3s ease,
    box-shadow 0.3s ease;

  &.scrolled,
  &.menu-open {
    background: rgba($color-white, 0.95);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    .logo {
      filter: none;
    }
  }
}

.header-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: $header-height;
}

.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  filter: brightness(0) invert(1);
  transform: translate(-50%, 150px);
  transition:
    filter 0.5s ease,
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
  width: min(600px, 80vw);
  max-width: initial;
  transition: width 0.5s ease;

  .scrolled &,
  .sponsors &,
  .menu-open & {
    width: 200px;
    max-width: 40vw;
  }
}

.desktop-nav {
  display: none;
  gap: 32px;

  @media (min-width: $bp-md) {
    display: flex;
    align-items: center;
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

  .nav-donate-btn {
    @include body-text("sm", "semibold");
    color: $color-white;
    padding: 8px 20px;
    border-radius: 50px;
    text-decoration: none;
    transition:
      filter 0.2s ease,
      transform 0.2s ease;

    &::after {
      display: none;
    }

    &:hover {
      filter: brightness(0.85);
      transform: translateY(-1px);
    }
  }
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: $bp-md) {
    display: none;
  }
}

.mobile-donate-btn {
  @include body-text("xs", "semibold");
  color: $color-white;
  padding: 6px 16px;
  border-radius: 50px;
  text-decoration: none;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;

  &:hover {
    filter: brightness(0.85);
    transform: translateY(-1px);
  }
}

.hamburger {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;

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

  .nav-donate-btn {
    @include body-text("lg", "semibold");
    margin-top: 8px;
    padding: 12px 0;
    text-align: center;
    color: $color-white;
    border-radius: 50px;
    border-bottom: none;
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
