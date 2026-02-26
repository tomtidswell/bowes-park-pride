<template>
  <div class="donate-page">
    <section class="donate-hero">
      <div class="donate-hero-bg" />
      <div class="container donate-hero-content">
        <h1>Donate</h1>
        <p>
          Help us make Bowes Park Pride 2026 bigger, bolder, and more fabulous
          than ever.
        </p>
      </div>
      <div class="hero-wave">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z"
            fill="#FFF8F0"
          />
        </svg>
      </div>
    </section>

    <SectionWrapper color="off-white">
      <div class="donate-content reveal">
        <h2>Support Your Local Pride</h2>
        <p class="donate-intro">
          Bowes Park Pride is a free, community-led event — and we want to keep
          it that way. Your donation helps us cover the costs of staging a safe,
          joyful, and inclusive celebration for everyone in N22 and beyond.
        </p>

        <div class="donorbox-embed">
          <ClientOnly>
            <component
              :is="'script'"
              type="module"
              src="https://donorbox.org/widgets.js"
              async
            />
            <dbox-widget
              campaign="fundraising-for-bowes-park-pride"
              type="donation_form"
              enable-auto-scroll="true"
            />
            <noscript>
              <p class="noscript-message">
                Please enable JavaScript to use the donation form, or visit
                <a
                  href="https://donorbox.org/fundraising-for-bowes-park-pride"
                  target="_blank"
                  rel="noopener"
                >
                  our Donorbox page
                </a>
                directly.
              </p>
            </noscript>
          </ClientOnly>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Donate — Bowes Park Pride",
  meta: [
    {
      name: "description",
      content:
        "Donate to Bowes Park Pride and help us create a free, inclusive celebration for the community.",
    },
  ],
})

useScrollReveal()
</script>

<style lang="scss" scoped>
.donate-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  overflow: hidden;
}

.donate-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    $color-magenta,
    $color-purple,
    $color-blue
  );
  background-size: 200% 200%;
  animation: gradient-shift 12s ease infinite;
}

.donate-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: calc($header-height + 40px);
  padding-bottom: 80px;

  h1 {
    color: $color-white;
    margin-bottom: 16px;
  }

  p {
    @include body-text("lg", "regular");
    color: rgba(255, 255, 255, 0.9);
    max-width: 560px;
    margin-inline: auto;
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

.donate-content {
  text-align: center;
  max-width: 700px;
  margin-inline: auto;

  h2 {
    margin-bottom: 16px;
    color: $color-magenta;
  }
}

.donate-intro {
  @include body-text("lg", "regular");
  color: rgba($color-dark, 0.85);
  margin-bottom: 48px;
}

.donorbox-embed {
  max-width: 500px;
  margin-inline: auto;
}

.noscript-message {
  @include body-text("base", "regular");
  padding: 24px;
  border-radius: 12px;
  background: rgba($color-magenta, 0.08);
  color: rgba($color-dark, 0.8);

  a {
    color: $color-magenta;
    font-weight: 600;
  }
}
</style>
