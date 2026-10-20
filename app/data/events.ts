export interface EventItem {
  title: string
  date: string
  description: string
  location?: string
  link?: string
  linkLabel?: string
}

export const eventsData: EventItem[] = [
  {
    title: "Camp Christmas Quiz",
    date: "10 December 2026",
    description:
      "Deck the halls for our Camp Christmas fundraising quiz, raising money towards Bowes Park Pride 2027. Tickets available now.",
    location: "The Hillbilly Social",
    link: "https://bowes-park-pride.sumupstore.com/product/camp-christmas-quiz-tickets",
    linkLabel: "Get tickets",
  },
  {
    title: "Halloween Quiz — Sold Out!",
    date: "29 October 2026",
    description:
      "Join us for a spooky pre-Pride fundraising quiz, bringing the local community together and raising money towards Bowes Park Pride 2027. Tickets are now sold out — thank you for the support!",
    location: "The Hillbilly Social",
  },
  {
    title: "Sponsor & Partner Applications Now Open",
    date: "14 September 2026",
    description:
      "Local businesses and organisations can now apply to sponsor or partner with Bowes Park Pride 2027. Find out about our sponsorship and partnership tiers and how you can support your local pride event.",
    link: "/sponsors",
  },
  {
    title: "Our 2026 Impact Report Is Here",
    date: "21 August 2026",
    description:
      "See the difference Bowes Park Pride 2026 made — from community impact and volunteering to our boost for the local economy. Read the full Impact Report.",
    link: "/impact-report",
    linkLabel: "Read the report",
  },
  {
    title: "LGBTQIA+ Mixer",
    date: "12 April 2026",
    description:
      "Join us for a relaxed Sunday mixer starting at 2pm — a chance to meet fellow LGBTQIA+ locals and allies in Bowes Park ahead of Pride this summer. If you would like to be a Pride Volunteer please come at 1pm.",
    location: "The Hillbilly Social",
  },
]
