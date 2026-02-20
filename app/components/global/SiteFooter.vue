<template>
  <footer class="site-footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40 C360 0 720 80 1080 40 S1440 0 1440 0 V80 H0Z" fill="currentColor" />
      </svg>
    </div>

    <div class="footer-body">
      <div class="container footer-grid">
        <div class="footer-col">
          <img src="/bp-logo.png" alt="Bowes Park Pride" class="footer-logo" />
          <p class="footer-tagline">A free community pride event celebrating love, diversity, and togetherness in Bowes Park.</p>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <nav>
            <NuxtLink to="/#about">About</NuxtLink>
            <NuxtLink to="/#lineup">Lineup</NuxtLink>
            <NuxtLink to="/#info">Info & FAQ</NuxtLink>
            <NuxtLink to="/#get-involved">Get Involved</NuxtLink>
            <NuxtLink to="/sponsors">Sponsors</NuxtLink>
          </nav>
        </div>

        <div class="footer-col">
          <h4>Connect</h4>
          <div class="socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram :size="22" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook :size="22" />
            </a>
            <a href="mailto:hello@bowesparkpride.org" aria-label="Email us">
              <Mail :size="22" />
            </a>
          </div>
          <p class="email-link">
            <a href="mailto:hello@bowesparkpride.org">hello@bowesparkpride.org</a>
          </p>
        </div>

        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>Sign up for event updates and announcements.</p>
          <a href="https://preview.mailerlite.io/forms/1823960/179647431588185955/share" target="_blank" rel="noopener noreferrer" class="newsletter-link">
            Sign Up
          </a>
        </div>
      </div>

      <div class="container footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Bowes Park Pride. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Facebook, Mail } from 'lucide-vue-next'
</script>

<style lang="scss" scoped>
.site-footer {
  position: relative;
}

.footer-wave {
  color: $color-dark;
  line-height: 0;

  svg {
    width: 100%;
    height: 48px;

    @media (min-width: $bp-md) {
      height: 80px;
    }
  }
}

.footer-body {
  background: $color-dark;
  color: $color-off-white;
  padding-top: 24px;
  padding-bottom: 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba($color-off-white, 0.15);

  @media (min-width: $bp-md) {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
}

.footer-col {
  h4 {
    @include heading-text("sm", "bold");
    margin-bottom: 16px;
    color: $color-yellow;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      @include body-text("sm", "regular");
      color: rgba($color-off-white, 0.8);
      transition: color 0.2s;

      &:hover { color: $color-teal; }
    }
  }
}

.footer-logo {
  display: block;
  height: 48px;
  width: auto;
  margin-bottom: 12px;
  filter: brightness(0) invert(1);
}

.footer-tagline {
  @include body-text("sm", "regular");
  color: rgba($color-off-white, 0.7);
  max-width: 300px;
}

.socials {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba($color-off-white, 0.1);
    color: $color-off-white;
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: $color-magenta;
      color: $color-white;
    }
  }
}

.email-link a {
  @include body-text("sm", "regular");
  color: rgba($color-off-white, 0.8);

  &:hover { color: $color-teal; }
}

.newsletter-link {
  @include body-text("sm", "semibold");
  display: inline-block;
  padding: 10px 24px;
  border-radius: 50px;
  background: $color-magenta;
  color: $color-white;
  margin-top: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba($color-magenta, 0.4);
    color: $color-white;
  }
}

.footer-bottom {
  padding-top: 24px;
  text-align: center;

  p {
    @include body-text("xs", "regular");
    color: rgba($color-off-white, 0.5);
  }
}
</style>
