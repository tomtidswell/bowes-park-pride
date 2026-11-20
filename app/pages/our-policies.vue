<template>
  <div class="policies-page">
    <section class="policies-hero">
      <div class="policies-hero-bg" />
      <div class="container policies-hero-content">
        <h1>Our policies</h1>
        <p>Bowes Park Pride</p>
      </div>
      <div class="hero-wave">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z"
            fill="#fff0f7"
          />
        </svg>
      </div>
    </section>

    <SectionWrapper color="magenta">
      <div class="policy-content" v-reveal>

        <div class="policy-purpose">
          <p>
            Bowes Park Pride is a Community Interest Company run by local
            volunteers. These are the commitments we make to everyone who comes
            to, volunteers at or supports Bowes Park Pride. If you have any
            questions, email
            <a href="mailto:hello@bowesparkpride.org.uk">hello@bowesparkpride.org.uk</a>.
          </p>
        </div>

        <PolicySection title="Safeguarding">
          <p>
            We are committed to safeguarding and promoting the welfare of
            children, young people and adults at risk who come to our event or
            are involved with us. Our street event is open to everyone,
            including families, and all our volunteers know how to report a
            safeguarding concern.
          </p>
          <p>
            If you're worried about someone at Bowes Park Pride, speak to any
            volunteer or email
            <a href="mailto:hello@bowesparkpride.org.uk">hello@bowesparkpride.org.uk</a>.
            If someone is in immediate danger, call 999. You can also contact
            the NSPCC Helpline on <a href="tel:08088005000">0808 800 5000</a>
            or Childline on <a href="tel:08001111">0800 1111</a>.
          </p>
        </PolicySection>

        <PolicySection title="Equality, diversity and inclusion">
          <p>
            We aim to reflect and include the full diversity of our
            neighbourhood and the wider LGBTQ+ community. Everyone involved with
            Bowes Park Pride, whatever their gender, race, ethnic origin,
            disability, age, nationality, sexuality, religion or belief, marital
            status or social class, must treat all people with respect.
          </p>
          <p>
            We recruit volunteers through a fair and transparent process, based
            on merit and suitability. If you need any adjustments to take part
            in Bowes Park Pride, please let us know.
          </p>
        </PolicySection>

        <PolicySection title="Anti harassment and bullying">
          <p>
            Everyone has the right to enjoy and volunteer at Bowes Park Pride
            free from discrimination, harassment, bullying or victimisation, and
            we will not allow or condone this behaviour. We take every report
            seriously and deal with it promptly and confidentially.
          </p>
        </PolicySection>

        <PolicySection title="Raising a concern or complaint">
          <p>
            If something isn't right, we want to hear about it so we can put it
            right. Email
            <a href="mailto:hello@bowesparkpride.org.uk">hello@bowesparkpride.org.uk</a>
            with a description of your concern, any relevant dates and details,
            and the outcome you're hoping for.
          </p>
          <p>
            All concerns are handled sensitively and confidentially.
          </p>
        </PolicySection>

        <PolicySection title="Volunteer code of conduct">
          <p>
            All our volunteers follow our
            <NuxtLink to="/volunteer-code-of-conduct">volunteer code of conduct</NuxtLink>.
          </p>
        </PolicySection>

        <PolicySection title="Health and safety">
          <p>
            We are committed to providing a safe and healthy environment for
            everyone attending Bowes Park Pride. Read our
            <NuxtLink to="/health-and-safety">health and safety policy</NuxtLink>.
          </p>
        </PolicySection>

        <PolicySection title="Privacy policy">
          <p>
            How we collect, use and protect personal information. Read our
            <NuxtLink to="/privacy-policy">privacy policy</NuxtLink>.
          </p>
        </PolicySection>

      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Our policies | Bowes Park Pride",
  description:
    "The commitments Bowes Park Pride makes to everyone who comes to, volunteers at or supports the event, including safeguarding, inclusion and how to raise a concern.",
})
</script>

<style lang="scss" scoped>
.policies-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  overflow: hidden;
}

.policies-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, $color-magenta, $color-purple, $color-blue);
  background-size: 200% 200%;
  animation: gradient-shift 12s ease infinite;
}

.policies-hero-content {
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

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.policy-content {
  max-width: 800px;
  margin-inline: auto;
}

.policy-purpose {
  margin-bottom: 8px;

  p {
    @include body-text("lg", "regular");
    color: var(--text-muted);
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.policy-purpose a {
  color: $color-magenta;

  &:hover {
    text-decoration: underline;
  }
}

.policy-declaration {
  margin-top: 40px;
  padding: 24px;
  background: var(--bg-solid);
  border-radius: 12px;
  border-left: 4px solid $color-magenta;

  p {
    @include body-text("base", "regular");
    color: var(--text-muted);
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: $color-magenta;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
}
</style>
