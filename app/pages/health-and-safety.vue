<template>
  <div class="hs-page">
    <section class="hs-hero">
      <div class="hs-hero-bg" />
      <div class="container hs-hero-content">
        <h1>Health &amp; Safety Policy</h1>
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

        <PolicySection number="1" title="Policy Statement">
          <p>
            Bowes Park Pride is committed to providing a safe and healthy
            environment for all attendees, volunteers, contractors, performers,
            suppliers, and members of the public attending the event.
          </p>
          <p>
            We recognise our responsibility to minimise risks associated with
            event activities and to comply with applicable health and safety
            legislation. Everyone involved in the planning, delivery, and
            operation of Bowes Park Pride has a duty to act responsibly and
            contribute to a safe event environment.
          </p>
          <p>
            This policy applies to all volunteers, contractors, suppliers,
            performers, exhibitors, and event staff working on behalf of Bowes
            Park Pride.
          </p>
        </PolicySection>

        <PolicySection number="2" title="Health and Safety Objectives">
          <p>Bowes Park Pride will:</p>
          <ul>
            <li>Provide a safe environment for all event participants.</li>
            <li>Identify, assess, and manage foreseeable risks.</li>
            <li>Ensure suitable welfare and first aid arrangements are in place.</li>
            <li>Provide appropriate information, instruction, and supervision.</li>
            <li>Maintain safe access and egress routes throughout the event site.</li>
            <li>Promote a culture of safety, inclusion, and mutual respect.</li>
            <li>Review incidents and lessons learned to improve future events.</li>
          </ul>
        </PolicySection>

        <PolicySection number="3" title="Responsibilities">
          <h4>Event Organisers</h4>
          <p>The Event Management Team will:</p>
          <ul>
            <li>Prepare and review event risk assessments.</li>
            <li>Ensure appropriate insurance is in place.</li>
            <li>Appoint competent contractors and suppliers.</li>
            <li>Coordinate emergency procedures and communications.</li>
            <li>Provide access to limited first aid equipment with a First Aid Box.</li>
            <li>Monitor health and safety arrangements throughout the event.</li>
          </ul>
          <h4>Volunteers</h4>
          <p>All volunteers must:</p>
          <ul>
            <li>Attend any required briefing before commencing duties.</li>
            <li>Follow instructions from event organisers and supervisors.</li>
            <li>Take reasonable care of their own health and safety and that of others.</li>
            <li>Report hazards, accidents, near misses, or unsafe conditions immediately.</li>
            <li>Use equipment only when authorised and trained to do so.</li>
            <li>Wear any required identification, clothing, or personal protective equipment (PPE).</li>
            <li>Refrain from working under the influence of alcohol or drugs.</li>
          </ul>
          <h4>Contractors and Suppliers</h4>
          <p>Contractors and suppliers must:</p>
          <ul>
            <li>Operate in accordance with relevant legislation and industry standards.</li>
            <li>Provide suitable risk assessments and method statements where required.</li>
            <li>Ensure employees and subcontractors are competent and adequately trained.</li>
            <li>Maintain equipment in a safe condition.</li>
            <li>Cooperate with event organisers regarding site rules and emergency procedures.</li>
            <li>Hold appropriate public liability insurance.</li>
          </ul>
        </PolicySection>

        <PolicySection number="4" title="Risk Assessment">
          <p>
            Risk assessments will be completed for all significant event
            activities, including:
          </p>
          <ul>
            <li>Event build and breakdown.</li>
            <li>Temporary structures.</li>
            <li>Electrical installations.</li>
            <li>Vehicle movements.</li>
            <li>Stage and performance activities.</li>
            <li>Food and beverage operations.</li>
            <li>Crowd management.</li>
            <li>Adverse weather conditions.</li>
            <li>Accessibility arrangements.</li>
          </ul>
          <p>
            Control measures identified within risk assessments must be
            implemented and monitored.
          </p>
        </PolicySection>

        <PolicySection number="5" title="Site Safety">
          <p>The following requirements apply throughout the event:</p>
          <ul>
            <li>Walkways, exits, and emergency routes must remain clear at all times.</li>
            <li>Hazards such as trailing cables, uneven surfaces, or obstructions must be reported and managed promptly.</li>
            <li>Waste should be disposed of in designated bins.</li>
            <li>Vehicles must only enter authorised areas and follow site instructions.</li>
          </ul>
        </PolicySection>

        <PolicySection number="6" title="Weather and Environmental Conditions">
          <p>
            As Bowes Park Pride is an outdoor event, weather conditions will be
            monitored before and during the event. In the event of severe weather,
            organisers may:
          </p>
          <ul>
            <li>Suspend activities.</li>
            <li>Close specific areas.</li>
            <li>Evacuate the site if necessary.</li>
            <li>Modify event operations to maintain safety.</li>
          </ul>
          <p>
            Volunteers and contractors must follow instructions issued by the
            Event Management Team regarding weather-related risks.
          </p>
        </PolicySection>

        <PolicySection number="7" title="Manual Handling">
          <p>Where lifting or carrying is required:</p>
          <ul>
            <li>Assess the load before lifting.</li>
            <li>Use mechanical aids where available.</li>
            <li>Seek assistance for heavy or awkward items.</li>
            <li>Follow safe lifting techniques.</li>
            <li>Avoid lifting beyond individual capability.</li>
          </ul>
        </PolicySection>

        <PolicySection number="8" title="Electrical Safety">
          <ul>
            <li>All electrical equipment used on site must be suitable for outdoor use where required.</li>
            <li>Equipment should be visually inspected before use.</li>
            <li>Damaged equipment must not be used.</li>
            <li>Temporary electrical installations must be installed and maintained by competent persons.</li>
            <li>Cables should be protected to prevent trips and damage.</li>
          </ul>
        </PolicySection>

        <PolicySection number="9" title="Fire Safety">
          <ul>
            <li>Fire exits and emergency routes must remain unobstructed.</li>
            <li>
              Contractors using generators, cooking equipment, or other ignition
              sources must implement suitable fire precautions. Please note,
              Market Stalls fall under the Myddleton Road Health &amp; Safety
              Policy.
            </li>
            <li>Fire extinguishers should be provided where required.</li>
            <li>Any fire or suspected fire must be reported immediately to event management.</li>
          </ul>
        </PolicySection>

        <PolicySection number="10" title="First Aid and Incident Reporting">
          <p>
            Appropriate first aid provision will be available throughout the
            event via a First Aid Box in the Backstage Area.
          </p>
          <p>
            All accidents, injuries, near misses, and dangerous occurrences must
            be reported immediately to event management and recorded in the event
            incident log.
          </p>
          <p>Where necessary, emergency services will be contacted.</p>
        </PolicySection>

        <PolicySection number="11" title="Emergency Procedures">
          <p>All volunteers and contractors will be briefed on:</p>
          <ul>
            <li>Emergency contact arrangements.</li>
            <li>Evacuation procedures.</li>
            <li>Assembly points.</li>
            <li>Lost child and vulnerable person procedures.</li>
            <li>Communication methods during emergencies.</li>
          </ul>
          <p>
            In an emergency, instructions from event management, emergency
            services, or designated safety personnel must be followed
            immediately.
          </p>
        </PolicySection>

        <PolicySection number="12" title="Equality, Inclusion and Respect">
          <p>
            Bowes Park Pride is committed to creating a safe, welcoming, and
            inclusive environment for everyone regardless of age, disability,
            gender identity, race, religion, sexual orientation, or background.
          </p>
          <p>
            Bullying, harassment, discrimination, abusive behaviour, or
            threatening conduct will not be tolerated and may result in removal
            from the event.
          </p>
        </PolicySection>

        <PolicySection number="13" title="Monitoring and Review">
          <p>
            This policy will be reviewed annually and before each Bowes Park
            Pride event to ensure it remains effective and appropriate for the
            activities being undertaken.
          </p>
        </PolicySection>

        <div class="policy-declaration">
          <p>
            All volunteers, contractors, and suppliers participating in Bowes
            Park Pride are expected to comply with this Health and Safety Policy
            and work together to maintain a safe environment for everyone
            involved.
          </p>
          <p>
            <strong>Policy Owner:</strong> Bowes Park Pride Event Management
            Team<br />
            <strong>Effective Date:</strong> 3 June 2026
          </p>
        </div>

      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Health & Safety Policy — Bowes Park Pride",
  description:
    "The Health and Safety Policy for Bowes Park Pride, covering responsibilities, risk assessment, emergency procedures, and more.",
})
</script>

<style lang="scss" scoped>
.hs-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  overflow: hidden;
}

.hs-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, $color-magenta, $color-purple, $color-blue);
  background-size: 200% 200%;
  animation: gradient-shift 12s ease infinite;
}

.hs-hero-content {
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

.policy-declaration {
  margin-top: 40px;
  padding: 24px;
  background: var(--bg-solid);
  border-radius: 12px;
  border-left: 4px solid $color-magenta;

  p {
    @include body-text("base", "regular");
    color: var(--text-muted);
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
}
</style>
