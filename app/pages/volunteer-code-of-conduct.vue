<template>
  <div class="vcc-page">
    <section class="vcc-hero">
      <div class="vcc-hero-bg" />
      <div class="container vcc-hero-content">
        <h1>Volunteer Code of Conduct</h1>
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
            Bowes Park Pride is committed to creating a safe, welcoming,
            inclusive and enjoyable event for everyone. This code applies to all
            our volunteers whenever they're representing Bowes Park Pride,
            before, during and after the event, including online. It forms part
            of our Volunteer Handbook, which all volunteers receive when they're
            selected.
          </p>
        </div>

        <PolicySection number="1" title="Our Values">
          <p>
            Everything we do is guided by three values.
            <strong>Visibility:</strong> we amplify LGBTQ+ voices and make sure
            our community is seen, heard and represented.
            <strong>Unity:</strong> we bring people together across different
            backgrounds, identities and experiences.
            <strong>Equality:</strong> we stand for equal rights and a society
            where everyone can live authentically and without discrimination.
          </p>
        </PolicySection>

        <PolicySection number="2" title="Respect and Inclusion">
          <p>
            Treat everyone you meet with courtesy and respect at all times.
            Never take part in harassment, bullying, discrimination or
            intimidation, including online and in group chats. Be mindful of
            different perspectives, backgrounds and experiences, and challenge,
            respectfully, any behaviour that goes against our values.
          </p>
        </PolicySection>

        <PolicySection number="3" title="Professional Conduct">
          <p>
            Perform your role to the best of your ability, meet the commitments
            you've agreed to, and give us notice when you're not available. Be
            honest, never use your role for personal gain, and declare any
            conflicts of interest. Don't enter into agreements on behalf of
            Bowes Park Pride, accept gifts that could be seen as a bribe, or use
            our name or logo without permission. Pass any donations to the
            organising team so they can be recorded.
          </p>
        </PolicySection>

        <PolicySection number="4" title="Health and Safety">
          <p>
            Take reasonable care of your own health and safety and that of
            others. Follow the instructions in your event day briefing, use
            equipment as you've been shown, and report any concern straight
            away. In an emergency, anyone has the authority to call 999.
          </p>
        </PolicySection>

        <PolicySection number="5" title="Safeguarding">
          <p>
            We are committed to safeguarding children, young people and adults
            at risk who come to our event. If you're worried about someone's
            safety, or someone tells you about abuse or harm, report it straight
            away to the organising team. If someone is in immediate danger, call
            999 first. Never promise to keep a disclosure secret, and don't try
            to investigate yourself.
          </p>
        </PolicySection>

        <PolicySection number="6" title="Confidentiality and Privacy">
          <p>
            Respect confidentiality and protect any personal information you see
            in your role, even after your volunteering ends. Only use personal
            data for the reason it was collected, keep it secure, and report any
            data breach straight away. Read our
            <NuxtLink to="/privacy-policy">privacy policy</NuxtLink>.
          </p>
        </PolicySection>

        <PolicySection number="7" title="Social Media and Public Communications">
          <p>
            If you mention that you volunteer with us, make clear your views are
            your own. Don't share confidential information, make disparaging
            comments, or post photos of other volunteers or attendees without
            their permission, and never post photos of children without their
            parent or carer's permission. Send any media requests to
            <a href="mailto:hello@bowesparkpride.org.uk">hello@bowesparkpride.org.uk</a>.
          </p>
        </PolicySection>

        <PolicySection number="8" title="Substance Use">
          <p>
            Don't drink alcohol or take drugs before or during your volunteering
            shift, and never volunteer while under the influence. If you take
            medication that could affect your ability to do your role safely,
            let us know in confidence. Once your shift has finished you're
            welcome to enjoy the celebrations, but remember people may still
            recognise you as part of the team.
          </p>
        </PolicySection>

        <PolicySection number="9" title="Reporting Concerns">
          <p>
            If you have a concern about your role, someone's behaviour, safety
            or anything else to do with volunteering, speak to your volunteer
            lead or email
            <a href="mailto:hello@bowesparkpride.org.uk">hello@bowesparkpride.org.uk</a>.
            If your concern is about the organising team, you can ask for it to
            go to our independent contact. Concerns are handled confidentially,
            and no one who raises a genuine concern in good faith will be
            treated unfavourably.
          </p>
        </PolicySection>

        <PolicySection number="10" title="Breaches of the Code">
          <p>
            We'll usually talk to you informally first if there are concerns
            about your behaviour. If concerns continue, or the behaviour is
            serious, we may end your volunteering. Serious misconduct, such as
            discrimination, harassment, bullying or a safeguarding breach, may
            lead to your volunteering being ended immediately.
          </p>
        </PolicySection>

        <div class="policy-declaration">
          <p>
            <strong>Updated:</strong> 20 November 2026
          </p>
          <p>
            <NuxtLink to="/our-policies">Read all our policies</NuxtLink>
          </p>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Volunteer Code of Conduct | Bowes Park Pride",
  description:
    "The Volunteer Code of Conduct for Bowes Park Pride, setting out the standards of behaviour expected of all volunteers.",
})
</script>

<style lang="scss" scoped>
.vcc-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  overflow: hidden;
}

.vcc-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, $color-magenta, $color-purple, $color-blue);
  background-size: 200% 200%;
  animation: gradient-shift 12s ease infinite;
}

.vcc-hero-content {
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
