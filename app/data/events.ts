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
    title: "Pride Divas Pub Quiz",
    date: "4 June 2026",
    description:
      "How well do you know your Pride Divas? Join us for a fun pub quiz night celebrating the iconic women of pop and dance music. Grab your team and get your tickets now!",
    location: "The Hillbilly Social",
    link: "https://www.eventbrite.co.uk/e/pride-divas-pub-quiz-at-hillbilly-social-2026-tickets-1986421427964",
    linkLabel: "Buy tickets",
  },
  {
    title: "LGBTQIA+ Mixer",
    date: "12 April 2026",
    description:
      "Join us for a relaxed Sunday mixer starting at 2pm — a chance to meet fellow LGBTQIA+ locals and allies in Bowes Park ahead of Pride this summer. If you would like to be a Pride Volunteer please come at 1pm.",
    location: "The Hillbilly Social",
  },
  {
    title: "Bowes Park Pride 2026 — Date Announced!",
    date: "9 March 2026",
    description:
      "We're thrilled to confirm that Bowes Park Pride returns on Sunday 5th July 2026! Join us on Myddleton Road for a day of live music, performances, food, and community celebration.",
  },
  {
    title: "Sponsor Applications Now Open",
    date: "1 March 2026",
    description:
      "Local businesses and organisations can now apply to sponsor Bowes Park Pride 2026. Find out about our sponsorship tiers and how you can support your local pride event.",
    link: "/sponsors",
  },
  {
    title: "Volunteer Call-Out",
    date: "15 February 2026",
    description:
      "We're looking for volunteers to help make Bowes Park Pride 2026 the best yet. Whether you can spare an hour or the whole day, we'd love to hear from you.",
  },
]
