<template>
  <div class="impact-page">
    <section class="impact-hero">
      <div class="impact-hero-bg" />
      <div class="impact-hero-overlay" />
      <div class="container impact-hero-content">
        <span class="eyebrow">Sunday 5 July 2026 · Myddleton Road</span>
        <h1>2026 Impact Report</h1>
        <p>
          One street. One incredible day. Here's the difference Bowes Park
          Pride made — for our community, our high street, and each other.
        </p>

        <nav class="quick-jump" aria-label="Report sections">
          <a v-for="link in jumpLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80 720 0 1080 40 S1440 80 1440 80 V80 H0Z" fill="#FFF0F7" />
        </svg>
      </div>
    </section>

    <!-- By the numbers -->
    <SectionWrapper id="numbers" color="magenta" divider>
      <div class="numbers" v-reveal>
        <h2 class="gradient-text">By the Numbers</h2>
        <p class="section-intro">
          Bowes Park Pride transformed Myddleton Road into a vibrant
          celebration of equality, diversity and community spirit —
          collaborating with Myddleton Road Market to build something truly
          special.
        </p>

        <ImpactStat
          :end="4000"
          :icon="Users"
          large
          class="headline-stat"
          style="--impact-accent: #e6007e; --impact-accent-soft: #e6007e26"
        >
          people estimated to have attended Bowes Park Pride
        </ImpactStat>

        <div class="stat-grid">
          <ImpactStat :end="98" suffix="%" :icon="Smile" style="--impact-accent: #e8780a; --impact-accent-soft: #e8780a26">
            of attendees likely to come again
          </ImpactStat>
          <ImpactStat :end="59" :icon="HeartHandshake" style="--impact-accent: #7b2d8e; --impact-accent-soft: #7b2d8e26">
            volunteers on the day
          </ImpactStat>
          <ImpactStat :end="35" suffix="+" :icon="Store" style="--impact-accent: #06d6a0; --impact-accent-soft: #06d6a026">
            market stalls trading
          </ImpactStat>
          <ImpactStat :end="6" :icon="Music" style="--impact-accent: #118ab2; --impact-accent-soft: #118ab226">
            hours of continuous entertainment
          </ImpactStat>
          <ImpactStat :end="2" :icon="Mic2" style="--impact-accent: #e6007e; --impact-accent-soft: #e6007e26">
            stages featuring local talent
          </ImpactStat>
          <ImpactStat :end="1" :icon="Heart" style="--impact-accent: #e8780a; --impact-accent-soft: #e8780a26">
            community, brought together
          </ImpactStat>
        </div>
      </div>
    </SectionWrapper>

    <!-- Community impact -->
    <SectionWrapper id="community" color="purple" divider>
      <div class="community" v-reveal>
        <h2 class="gradient-text" style="--tw: 1">Making Our Community Stronger</h2>
        <p class="section-intro">
          For many attendees, Pride offers much more than entertainment — it
          provides visibility, acceptance, connection, and reassurance that
          everyone belongs.
        </p>

        <div class="impact-list">
          <div v-for="item in communityImpact" :key="item.label" class="impact-list-item">
            <component :is="item.icon" :size="20" :stroke-width="2" />
            <span>{{ item.label }}</span>
          </div>
        </div>

        <div class="quote-strip" v-reveal>
          <ImpactQuote
            v-for="q in communityQuotes"
            :key="q.author"
            :text="q.text"
            :author="q.author"
            color="#7b2d8e"
          />
        </div>
      </div>
    </SectionWrapper>

    <!-- Local economy -->
    <SectionWrapper id="economy" color="orange" divider>
      <div class="economy" v-reveal>
        <h2 class="gradient-text">A Boost for the Local Economy</h2>
        <p class="section-intro">
          Several businesses reported their best-ever day of trading, as
          Myddleton Road experienced one of its busiest days in recent
          decades.
        </p>

        <ImpactStat
          :end="84"
          prefix="£"
          suffix="k"
          :icon="PiggyBank"
          large
          class="headline-stat"
          style="--impact-accent: #e8780a; --impact-accent-soft: #e8780a26"
        >
          estimated benefit to the local economy from Pride attendees
        </ImpactStat>

        <div class="ring-grid">
          <ImpactRing :percent="42" prefix="+" color="#e8780a">average takings increase for shops, cafés & bars</ImpactRing>
          <ImpactRing :percent="73" prefix="+" color="#e6007e">average increase in stallholder takings</ImpactRing>
          <ImpactRing :percent="90" color="#7b2d8e">of local businesses saw an increase in footfall</ImpactRing>
          <ImpactRing :percent="100" color="#06d6a0">of local businesses surveyed would like another Pride</ImpactRing>
        </div>

        <div class="quote-strip" v-reveal>
          <ImpactQuote
            v-for="q in economyQuotes"
            :key="q.author"
            :text="q.text"
            :author="q.author"
            color="#e8780a"
          />
        </div>
      </div>
    </SectionWrapper>

    <!-- Volunteering -->
    <SectionWrapper id="volunteering" color="yellow" divider>
      <div class="volunteering" v-reveal>
        <h2 class="gradient-text">Proud to Be Run by Volunteers</h2>
        <p class="section-intro">
          More than 60 volunteers and key supporters made the event possible
          — from serving on the organising committee to delivering event-day
          operations. All volunteers completed Counter Terrorism awareness
          training delivered by the London Metropolitan Police.
        </p>

        <div class="stat-grid stat-grid-2">
          <ImpactStat :end="750" suffix="+" :icon="Clock" large style="--impact-accent: #e8780a; --impact-accent-soft: #e8780a26">
            hours of volunteering before, during and after Pride day
          </ImpactStat>
          <ImpactStat :end="60" suffix="+" :icon="Users2" large style="--impact-accent: #7b2d8e; --impact-accent-soft: #7b2d8e26">
            volunteers and key supporters
          </ImpactStat>
        </div>

        <div class="skills-cloud">
          <span class="skills-cloud-label">Skills developed by local people</span>
          <div class="skill-chips">
            <span v-for="skill in skills" :key="skill" class="skill-chip">{{ skill }}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Social media -->
    <SectionWrapper id="social" color="blue" divider>
      <div class="social" v-reveal>
        <h2 class="gradient-text">Amplifying Our Message</h2>
        <p class="section-intro">
          Engaging, inclusive and eye-catching content raised awareness of
          Bowes Park Pride and turned online engagement into real-world
          visitors — with a further boost from an endorsement by Sophie
          Ellis-Bextor.
        </p>

        <ImpactStat
          :end="547000"
          :icon="Instagram"
          icon-href="https://instagram.com/bowesparkpride"
          icon-label="Bowes Park Pride on Instagram"
          large
          class="headline-stat"
          style="--impact-accent: #118ab2; --impact-accent-soft: #118ab226"
        >
          views on Instagram between May and July
        </ImpactStat>

        <div class="stat-grid">
          <ImpactStat :end="113" suffix="k" :icon="Eye" style="--impact-accent: #e6007e; --impact-accent-soft: #e6007e26">
            people reached via Instagram
          </ImpactStat>
          <ImpactStat :end="20" suffix="k" :icon="Heart" style="--impact-accent: #e8780a; --impact-accent-soft: #e8780a26">
            social media content interactions
          </ImpactStat>
          <ImpactStat :end="285" :icon="Megaphone" style="--impact-accent: #06d6a0; --impact-accent-soft: #06d6a026">
            Instagram posts & stories published
          </ImpactStat>
        </div>
      </div>
    </SectionWrapper>

    <!-- Environment -->
    <SectionWrapper id="environment" color="teal" divider>
      <div class="environment" v-reveal>
        <h2 class="gradient-text">Keeping It Clean & Green</h2>
        <p class="section-intro">
          More than 30 volunteers cleaned the site immediately after the
          event, unused food was donated to a local foodbank, and our main
          stage ran on solar power alone.
        </p>

        <div class="environment-layout">
          <ImpactRing :percent="89" color="#06d6a0">of attendees came by public transport, bike or on foot</ImpactRing>

          <div class="stat-grid stat-grid-compact">
            <ImpactStat :end="0" :icon="Recycle" style="--impact-accent: #06d6a0; --impact-accent-soft: #06d6a026">
              single-use plastics given away as "free gifts"
            </ImpactStat>
            <ImpactStat :end="100" suffix="%" :icon="Sun" style="--impact-accent: #e8780a; --impact-accent-soft: #e8780a26">
              solar power used by the main stage
            </ImpactStat>
            <ImpactStat :end="100" suffix="%" :icon="Utensils" style="--impact-accent: #7b2d8e; --impact-accent-soft: #7b2d8e26">
              of reusable food items donated to a foodbank
            </ImpactStat>
            <ImpactStat :end="30" suffix="+" :icon="Leaf" style="--impact-accent: #118ab2; --impact-accent-soft: #118ab226">
              street-cleaning volunteers on the day
            </ImpactStat>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Outcomes & future -->
    <SectionWrapper id="outcomes" color="off-white" divider>
      <div class="outcomes" v-reveal>
        <h2 class="gradient-text">What Next for Bowes Park Pride?</h2>
        <p class="section-intro">
          The success of Bowes Park Pride demonstrates growing demand for
          inclusive community events — with continued funding and
          investment, here's what we're building towards.
        </p>

        <div class="outcomes-grid">
          <div class="outcomes-col">
            <h4><CheckCircle2 :size="20" /> We achieved</h4>
            <ul class="modern-list check-list">
              <li v-for="item in achieved" :key="item">
                <span class="bullet-icon"><Check :size="13" :stroke-width="3" /></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="outcomes-col">
            <h4><Rocket :size="20" /> Looking ahead</h4>
            <ul class="modern-list arrow-list">
              <li v-for="item in lookingAhead" :key="item">
                <span class="bullet-icon"><ArrowUpRight :size="13" :stroke-width="3" /></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>

    <!-- Thank you / CTA -->
    <section class="impact-cta">
      <div class="container">
        <ImpactQuote
          class="cta-quote"
          text="This is how Pride should always be done. They put the community and message at the heart of it and it was absolutely beautiful."
          author="David, London"
          color="#ffd166"
        />

        <h2>Thank You, Bowes Park</h2>
        <p>
          Bowes Park Pride 2026 would not have been possible without the
          commitment of our volunteers, performers, community organisations,
          local businesses, sponsors, public services, and everyone who
          attended. Together, we've shown that Bowes Park is a place where
          everyone is welcome, everyone belongs, and everyone can take
          pride.
        </p>

        <div class="cta-actions">
          <a
            href="/bowes-park-pride-2026-impact-report.pdf"
            download
            class="download-btn"
          >
            <Download :size="18" />
            Download the Full Report (PDF)
          </a>
          <div class="cta-links">
            <NuxtLink to="/about">Meet the committee</NuxtLink>
            <NuxtLink to="/sponsors">See our sponsors</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  Users,
  Users2,
  Smile,
  HeartHandshake,
  Store,
  Music,
  Mic2,
  Heart,
  Eye,
  ShieldCheck,
  MessageCircleHeart,
  Sparkles,
  PiggyBank,
  Clock,
  Instagram,
  Megaphone,
  Recycle,
  Sun,
  Utensils,
  Leaf,
  CheckCircle2,
  Check,
  ArrowUpRight,
  Rocket,
  Download,
} from "lucide-vue-next"

const jumpLinks = [
  { href: "#numbers", label: "The Numbers" },
  { href: "#community", label: "Community" },
  { href: "#economy", label: "Economy" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#social", label: "Social" },
  { href: "#environment", label: "Environment" },
  { href: "#outcomes", label: "What's Next" },
]

const communityImpact = [
  { icon: Eye, label: "Increased LGBTQ+ visibility within the local community" },
  { icon: HeartHandshake, label: "Reduced feelings of isolation" },
  { icon: ShieldCheck, label: "Promoted acceptance and understanding" },
  { icon: MessageCircleHeart, label: "Encouraged positive conversations about equality and diversity" },
  { icon: Sparkles, label: "Fostered a stronger sense of belonging within Bowes Park" },
]

const communityQuotes = [
  {
    text: "I've been fearful for all of us, but coming to Bowes Park Pride was exactly what was needed. It made me realise that we are not alone, that love is louder than all of the hate being spread online.",
    author: "North London resident",
  },
  {
    text: "We feel so much more part of our community and more accepted and visible as a queer family locally. The ripples from this will be immeasurable.",
    author: "Charlie, Local resident",
  },
  {
    text: "It really was like Pride in the old days, which was joyful to experience. Bravo to the whole team.",
    author: "Bella, Local resident",
  },
]

const economyQuotes = [
  {
    text: "New customers, more customers, intake was great. A lot of new faces. Best day's takings in 10 years.",
    author: "Abe, Manager at Bohem Tap Room",
  },
  {
    text: "A really positive experience because it brought an influx of new customers to Myddleton Road unlike anything we had seen before.",
    author: "Daniela, Mexican street food stall holder",
  },
]

const skills = [
  "Audio visual technology",
  "Licencing & event management",
  "Community organising",
  "Counter terrorism training",
  "Digital & social media",
  "Event marshalling",
  "Merchandising",
  "People management",
  "Set building",
  "Stage management",
]

const achieved = [
  "Celebrated LGBTQ+ communities and promoted equality",
  "Created a safe, welcoming, and inclusive public event",
  "Made it family friendly, for all varieties of family",
  "Increased community participation and civic pride",
  "Strengthened relationships between residents & businesses",
  "Supported local businesses through increased footfall",
]

const lookingAhead = [
  "Ensure more LGBTQ+ community members feel supported",
  "Expand accessibility measures",
  "Develop additional youth and family activities",
  "Support more local artists and performers",
  "Improve environmental sustainability further",
  "Build Bowes Park Pride on sustainable financial foundations",
]

useSeoMeta({
  title: "2026 Impact Report — Bowes Park Pride",
  description:
    "See the difference Bowes Park Pride 2026 made — 4,000 attendees, a boost for the local economy, community impact, volunteering, and more.",
  ogTitle: "2026 Impact Report — Bowes Park Pride",
  ogDescription:
    "See the difference Bowes Park Pride 2026 made for our community, our high street, and each other.",
})

useHead({
  link: [{ rel: "canonical", href: "https://bowesparkpride.org.uk/impact-report" }],
})
</script>

<style lang="scss" scoped>
.impact-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55vh;
  overflow: hidden;
}

.impact-hero-bg {
  position: absolute;
  inset: 0;
  background: url("/impact-hero.jpg") center / cover no-repeat;
}

.impact-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 0, 15, 0.7) 0%,
    rgba(50, 5, 50, 0.5) 45%,
    rgba(15, 0, 15, 0.68) 100%
  );
}

.impact-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: calc($header-height + 40px);
  padding-bottom: 96px;

  .eyebrow {
    @include body-text("sm", "semibold");
    display: inline-block;
    color: $color-white;
    background: rgba(255, 255, 255, 0.15);
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 20px;
  }

  h1 {
    color: $color-white;
    margin-bottom: 16px;
  }

  p {
    @include body-text("lg", "regular");
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin-inline: auto;
  }
}

.quick-jump {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;

  a {
    @include body-text("xs", "semibold");
    color: $color-white;
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    padding: 8px 16px;
    border-radius: 50px;
    transition: background 0.2s ease, border-color 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: $color-white;
      color: $color-white;
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

// Shared section heading/intro styles
h2 {
  text-align: center;
  margin-bottom: 16px;
  width: 100%;
}

.section-intro {
  @include body-text("lg", "regular");
  text-align: center;
  max-width: 640px;
  margin-inline: auto;
  margin-bottom: 48px;
  color: var(--text-secondary);
}

.headline-stat {
  margin-bottom: 56px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 20px;

  @media (min-width: $bp-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.stat-grid-2 {
  grid-template-columns: 1fr;
  max-width: 640px;
  margin-inline: auto;
  gap: 48px;

  @media (min-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-grid-compact {
  gap: 28px 20px;
}

// Community
.impact-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  max-width: 620px;
  margin: 0 auto 48px;

  @media (min-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.impact-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 14px;
  background: var(--bg-surface);

  svg {
    flex-shrink: 0;
    color: $color-purple;
  }

  span {
    @include body-text("sm", "medium");
    color: var(--text-primary);
  }
}

.quote-strip {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 4px 4px 16px;
  margin-bottom: 40px;
  scrollbar-width: thin;

  &:last-of-type {
    margin-bottom: 0;
  }
}

// Economy
.ring-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 20px;
  max-width: 720px;
  margin: 0 auto 48px;

  @media (min-width: $bp-md) {
    grid-template-columns: repeat(4, 1fr);
  }
}

// Volunteering
.skills-cloud {
  text-align: center;
  margin-top: 56px;
}

.skills-cloud-label {
  @include body-text("sm", "semibold");
  color: var(--text-muted);
  display: block;
  margin-bottom: 16px;
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 780px;
  margin-inline: auto;
}

.skill-chip {
  @include body-text("sm", "medium");
  padding: 9px 18px;
  border-radius: 50px;
  background: var(--bg-surface);
  color: var(--text-primary);
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    background: $color-yellow;
    color: $color-dark;
  }
}

// Environment
.environment-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  max-width: 900px;
  margin-inline: auto;

  @media (min-width: $bp-md) {
    grid-template-columns: auto 1fr;
    gap: 56px;
  }
}

// Outcomes
.outcomes-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  max-width: 900px;
  margin-inline: auto;

  @media (min-width: $bp-md) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.outcomes-col {
  h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-primary);
    margin-bottom: 16px;

    svg {
      color: $color-teal;
      flex-shrink: 0;
    }
  }
}

.modern-list {
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  span:last-child {
    @include body-text("sm", "regular");
    color: var(--text-muted);
    padding-top: 2px;
  }
}

.bullet-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-top: 1px;
}

.check-list .bullet-icon {
  background: #06d6a026;
  color: $color-teal;
}

.arrow-list .bullet-icon {
  background: $color-purple-20;
  color: $color-purple;
}

// CTA
.impact-cta {
  background: $color-dark;
  padding-block: 96px;
  text-align: center;

  h2 {
    color: $color-white;
    margin-top: 40px;
  }

  p {
    @include body-text("base", "regular");
    color: rgba(255, 255, 255, 0.75);
    max-width: 620px;
    margin: 16px auto 40px;
  }
}

.cta-quote {
  margin-inline: auto;
  background: rgba(255, 255, 255, 0.06);

  :deep(blockquote) {
    color: $color-white;
  }
}

.cta-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.download-btn {
  @include body-text("base", "semibold");
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: linear-gradient(135deg, $color-magenta, $color-purple);
  color: $color-white;
  border-radius: 50px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba($color-magenta, 0.35);
    color: $color-white;
  }
}

.cta-links {
  display: flex;
  gap: 24px;

  a {
    @include body-text("sm", "medium");
    color: rgba(255, 255, 255, 0.7);

    &:hover {
      color: $color-teal;
    }
  }
}
</style>
