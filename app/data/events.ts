export interface EventItem {
  title: string
  date: string
  description: string
  location?: string
  link?: string
  linkLabel?: string
  tag?: string
}

export const eventsData: EventItem[] = [
  {
    title: "Traitors Quiz",
    date: "21 January 2027",
    description:
      "Gather your most faithful friends for a Traitors Quiz raising money for Bowes Park Pride 2027. Devious questions, fabulous prizes and plenty of camp chaos. £12pp, max group of 6.",
    location: "The Hillbilly Social",
    link: "https://bowes-park-pride.sumupstore.com/product/traitors-quiz",
    linkLabel: "Get tickets",
    tag: "Fundraiser",
  },
  {
    title: "Camp Christmas Quiz — Sold Out!",
    date: "10 December 2026",
    description:
      "Deck the halls for our Camp Christmas fundraising quiz, raising money towards Bowes Park Pride 2027. Tickets are now sold out — thank you for the support!",
    location: "The Hillbilly Social",
    tag: "Fundraiser",
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
