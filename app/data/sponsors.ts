export interface Sponsor {
  name: string
  logo?: string
  url?: string
  bgColor?: string
  tier: "headline" | "gold" | "silver" | "bronze"
}

export const sponsors: Sponsor[] = [
  // Placeholder sponsors — replace with real data
  { name: "Headline Sponsor", tier: "headline" },
  {
    name: "North London Box Sash",
    logo: "/sponsors/nlbs-white.webp",
    url: "https://www.northlondonboxsash.com/",
    bgColor: "#29440d",
    tier: "gold",
  },
  { name: "Gold Sponsor", tier: "gold" },
  {
    name: "Ellis & Co",
    logo: "/sponsors/ellis-and-co.svg",
    url: "https://www.ellisandco.co.uk/",
    bgColor: "#00454E",
    tier: "silver",
  },
  {
    name: "Myddleton Road Emporium",
    logo: "/sponsors/mre.webp",
    url: "https://myddletonrdemp.co.uk/",
    bgColor: "#111d05",
    tier: "silver",
  },
  { name: "Silver Sponsor", tier: "silver" },
  { name: "Bronze Sponsor", tier: "bronze" },
  { name: "Bronze Sponsor", tier: "bronze" },
]
