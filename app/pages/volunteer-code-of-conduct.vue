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
            inclusive, and enjoyable event for everyone. Volunteers play a vital
            role in achieving this aim and are expected to uphold the values of
            the event at all times.
          </p>
          <p>
            This Code of Conduct sets out the standards of behaviour expected of
            all volunteers before, during, and after Bowes Park Pride activities.
          </p>
        </div>

        <PolicySection number="1" title="Our Values">
          <p>As a Bowes Park Pride volunteer, I will:</p>
          <ul>
            <li>Treat all people with dignity, respect, and kindness.</li>
            <li>Promote equality, diversity, and inclusion.</li>
            <li>Help create a welcoming environment for all attendees.</li>
            <li>Support the aims and values of Bowes Park Pride.</li>
            <li>Act in a way that reflects positively on the event and the wider community.</li>
          </ul>
        </PolicySection>

        <PolicySection number="2" title="Respect and Inclusion">
          <p>Volunteers must:</p>
          <ul>
            <li>Respect people regardless of age, disability, gender identity, race, religion, sexual orientation, nationality, or background.</li>
            <li>Use inclusive and respectful language.</li>
            <li>Respect individuals' names and pronouns.</li>
            <li>Listen to and value different perspectives and experiences.</li>
            <li>Challenge discrimination appropriately by reporting concerns to event management.</li>
          </ul>
          <p>The following behaviours will not be tolerated:</p>
          <ul>
            <li>Harassment or bullying.</li>
            <li>Discrimination of any kind.</li>
            <li>Hate speech or offensive comments.</li>
            <li>Intimidation, threatening behaviour, or abuse.</li>
            <li>Sexual harassment or unwanted attention.</li>
          </ul>
        </PolicySection>

        <PolicySection number="3" title="Professional Conduct">
          <p>Volunteers are expected to:</p>
          <ul>
            <li>Arrive on time and fulfil agreed responsibilities.</li>
            <li>Follow instructions from designated event organisers and team leaders.</li>
            <li>Wear volunteer identification where provided.</li>
            <li>Act honestly and responsibly.</li>
            <li>Maintain a positive and cooperative attitude.</li>
            <li>Communicate professionally with attendees, volunteers, contractors, performers, and partners.</li>
          </ul>
          <p>Volunteers should not:</p>
          <ul>
            <li>Represent themselves as speaking on behalf of Bowes Park Pride unless authorised.</li>
            <li>Make commitments or promises on behalf of the organisation without approval.</li>
            <li>Engage in arguments or confrontations with attendees.</li>
          </ul>
        </PolicySection>

        <PolicySection number="4" title="Health and Safety">
          <p>Volunteers must:</p>
          <ul>
            <li>Follow all health and safety instructions.</li>
            <li>Take reasonable care of their own safety and that of others.</li>
            <li>Report hazards, accidents, incidents, and near misses promptly.</li>
            <li>Use equipment only if authorised and trained.</li>
            <li>Follow emergency procedures and instructions from event management.</li>
          </ul>
          <p>Volunteers must not:</p>
          <ul>
            <li>Undertake tasks they are not trained or authorised to perform.</li>
            <li>Create unnecessary risks for themselves or others.</li>
            <li>Attend volunteer duties while under the influence of alcohol or illegal drugs.</li>
          </ul>
        </PolicySection>

        <PolicySection number="5" title="Safeguarding">
          <p>Volunteers must:</p>
          <ul>
            <li>Help maintain a safe environment for children and vulnerable adults.</li>
            <li>Report any safeguarding concerns immediately to the designated Safeguarding Lead or Event Manager.</li>
            <li>Respect personal boundaries and privacy.</li>
          </ul>
          <p>Volunteers must not:</p>
          <ul>
            <li>Place themselves in situations that could compromise their safety or that of others.</li>
            <li>Ignore safeguarding concerns or incidents.</li>
          </ul>
        </PolicySection>

        <PolicySection number="6" title="Confidentiality and Privacy">
          <p>
            Volunteers may become aware of personal information relating to
            attendees, volunteers, performers, or partners.
          </p>
          <p>Volunteers must:</p>
          <ul>
            <li>Treat personal information confidentially.</li>
            <li>Comply with applicable data protection requirements.</li>
            <li>Share information only with authorised event personnel when necessary.</li>
          </ul>
          <p>Volunteers must not:</p>
          <ul>
            <li>Share personal information on social media or with third parties.</li>
            <li>Take photographs of individuals in situations where privacy is expected without consent.</li>
          </ul>
        </PolicySection>

        <PolicySection number="7" title="Social Media and Public Communications">
          <p>Volunteers are encouraged to celebrate and promote Bowes Park Pride positively. When using social media, volunteers should:</p>
          <ul>
            <li>Be respectful and inclusive.</li>
            <li>Avoid posting content that may damage the reputation of Bowes Park Pride.</li>
            <li>Respect confidentiality and privacy.</li>
            <li>Follow any photography and media guidance issued by organisers.</li>
          </ul>
        </PolicySection>

        <PolicySection number="8" title="Substance Use">
          <p>Volunteers must not:</p>
          <ul>
            <li>Consume alcohol while undertaking volunteer duties unless specifically authorised by event management.</li>
            <li>Attend volunteer duties while impaired by alcohol, illegal drugs, or misuse of medication.</li>
            <li>Possess or distribute illegal substances at any Bowes Park Pride activity.</li>
          </ul>
        </PolicySection>

        <PolicySection number="9" title="Reporting Concerns">
          <p>Volunteers should report:</p>
          <ul>
            <li>Health and safety concerns.</li>
            <li>Discrimination, harassment, or bullying.</li>
            <li>Safeguarding concerns.</li>
            <li>Breaches of this Code of Conduct.</li>
            <li>Any behaviour that may put people or the event at risk.</li>
          </ul>
          <p>
            Reports should be made to the Volunteer Coordinator, Event Manager,
            or Safeguarding Lead.
          </p>
        </PolicySection>

        <PolicySection number="10" title="Breaches of the Code">
          <p>Failure to comply with this Code of Conduct may result in:</p>
          <ul>
            <li>Informal guidance or additional training.</li>
            <li>Removal from volunteer duties.</li>
            <li>Exclusion from future Bowes Park Pride volunteering opportunities.</li>
            <li>Referral to relevant authorities where appropriate.</li>
          </ul>
        </PolicySection>

        <div class="policy-declaration">
          <p>
            <strong>Updated:</strong> 3 June 2026
          </p>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Volunteer Code of Conduct — Bowes Park Pride",
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
    margin-bottom: 0;
  }

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
}
</style>
