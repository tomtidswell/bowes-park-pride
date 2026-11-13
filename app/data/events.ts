export interface EventItem {
  title: string
  date: string
  isoDate: string
  description: string
  location?: string
  link?: string
  linkLabel?: string
  tag?: string
}

export const eventsData: EventItem[] = [
  {
    title: "Football vs Homophobia",
    date: "20 February 2027",
    isoDate: "2027-02-20",
    description:
      "We'll be at Haringey Borough FC's Football vs Homophobia day, fundraising for Bowes Park Pride 2027 and celebrating inclusion in football. Come say hello and cheer on the team, kicking off against Ware at 3pm.",
    location: "Coles Park, White Hart Lane, N17",
    link: "https://www.haringeyboroughfc.net/event/11823/",
    linkLabel: "Match details",
    tag: "Fundraiser",
  },
  {
    title: "Boybands vs Girlbands Quiz",
    date: "11 February 2027",
    isoDate: "2027-02-11",
    description:
      "Pick a side for our Boybands vs Girlbands fundraising quiz, raising money for Bowes Park Pride 2027. £12pp.",
    location: "The Hillbilly Social",
    link: "https://bowes-park-pride.sumupstore.com/product/boyband-vs-girlbands-quiz",
    linkLabel: "Get tickets",
    tag: "Fundraiser",
  },
  {
    title: "Pride Volunteers Info Evening",
    date: "10 February 2027",
    isoDate: "2027-02-10",
    description:
      "Thinking about volunteering for Bowes Park Pride 2027? Come along for an informal evening to find out more about the roles available and how you can get involved.",
    location: "The Hillbilly Social",
  },
  {
    title: "Traitors Quiz",
    date: "21 January 2027",
    isoDate: "2027-01-21",
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
    isoDate: "2026-12-10",
    description:
      "Deck the halls for our Camp Christmas fundraising quiz, raising money towards Bowes Park Pride 2027. Tickets are now sold out — thank you for the support!",
    location: "The Hillbilly Social",
    tag: "Fundraiser",
  },
  {
    title: "Merch Launch at the Winter Festival",
    date: "6 December 2026",
    isoDate: "2026-12-06",
    description:
      "We're launching our brand new Bowes Park Pride merch! Find our stall at the Myddleton Road Market Winter Festival to browse and buy.",
    location: "Myddleton Road Market",
  },
  {
    title: "Sponsor & Partner Applications Now Open",
    date: "14 September 2026",
    isoDate: "2026-09-14",
    description:
      "Local businesses and organisations can now apply to sponsor or partner with Bowes Park Pride 2027. Find out about our sponsorship and partnership tiers and how you can support your local pride event.",
    link: "/sponsors",
  },
  {
    title: "Our 2026 Impact Report Is Here",
    date: "21 August 2026",
    isoDate: "2026-08-21",
    description:
      "See the difference Bowes Park Pride 2026 made — from community impact and volunteering to our boost for the local economy. Read the full Impact Report.",
    link: "/impact-report",
    linkLabel: "Read the report",
  },
  {
    title: "LGBTQIA+ Mixer",
    date: "12 April 2026",
    isoDate: "2026-04-12",
    description:
      "Join us for a relaxed Sunday mixer starting at 2pm — a chance to meet fellow LGBTQIA+ locals and allies in Bowes Park ahead of Pride this summer. If you would like to be a Pride Volunteer please come at 1pm.",
    location: "The Hillbilly Social",
  },
]
