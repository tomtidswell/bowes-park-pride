<template>
  <div class="index">
    <HeroBanner />
    <GetInvolvedSection />
    <EventsSection />
    <SponsorsPreview />
    <LineupSection />
    <InfoSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Bowes Park Pride — Free LGBTQ+ Festival, Sunday 5th July 2026",
  meta: [
    {
      name: "description",
      content:
        "Bowes Park Pride is a free LGBTQ+ community pride festival on Myddleton Road, London N22. Sunday 5th July 2026 — live music, performances, food, and family fun in the heart of North London, serving Haringey, Enfield, Wood Green, Palmers Green and beyond.",
    },
  ],
  link: [{ rel: "canonical", href: "https://bowesparkpride.org.uk/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Bowes Park Pride 2026",
        description:
          "A free LGBTQ+ community pride festival on Myddleton Road, Bowes Park, London N22. Live music, performances, local food, family activities, and more. Serving Haringey, Enfield, Wood Green, Palmers Green, Muswell Hill and surrounding areas.",
        keywords:
          "Pride, LGBT, LGBTQ, LGBTQIA, Haringey, Enfield, North London, Bowes Park, Wood Green, Palmers Green, N22, free festival, community pride, queer, inclusive",
        startDate: "2026-07-05T10:00:00+01:00",
        endDate: "2026-07-05T18:00:00+01:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Myddleton Road",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Myddleton Road",
            addressLocality: "Bowes Park",
            addressRegion: "London",
            postalCode: "N22",
            addressCountry: "GB",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 51.6089,
            longitude: -0.1227,
          },
        },
        image: "https://bowesparkpride.org.uk/bp-logo.png",
        url: "https://bowesparkpride.org.uk",
        organizer: {
          "@type": "Organization",
          name: "Bowes Park Pride",
          url: "https://bowesparkpride.org.uk",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: "https://bowesparkpride.org.uk",
          validFrom: "2026-01-01",
        },
        isAccessibleForFree: true,
        audience: {
          "@type": "Audience",
          audienceType: "LGBTQ+ community, allies, families, local residents",
        },
        about: [
          { "@type": "Thing", name: "LGBTQ+ Pride" },
          { "@type": "Thing", name: "Community Festival" },
          { "@type": "Thing", name: "Street Festival" },
          { "@type": "Place", name: "Haringey" },
          { "@type": "Place", name: "Enfield" },
          { "@type": "Place", name: "North London" },
        ],
      }),
    },
  ],
})
</script>
