<template>
  <div class="index">
    <HeroBanner />
    <GetInvolvedSection />
    <SponsorsPreview />
    <InfoSection />
    <LineupSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Bowes Park Pride 2026",
        description:
          "A free community pride event on Myddleton Road, Bowes Park, London. Live music, performances, local food, family activities, and more.",
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
        },
        image: "https://bowesparkpride.org.uk/bp-logo.png",
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
      }),
    },
  ],
})

useScrollReveal()
</script>

