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
  {
    name: "Wilkinson Byrne",
    logo: "/sponsors/wilkinson-byrne-white.webp",
    url: "https://www.wilkinsonbyrne.com/",
    bgColor: "linear-gradient(to right, #DEE365, #7CBF6D)",
    tier: "gold",
  },
  {
    name: "Hillbilly Social",
    logo: "/sponsors/hillbilly.webp",
    url: "https://www.hillbillysocial.co.uk/",
    bgColor: "hsl(47, 100%, 50%)",
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
  {
    name: "Something Different",
    logo: "/sponsors/something-different.png",
    url: "https://something-different.co.uk/",
    bgColor: "rgb(20, 22, 23)",
    tier: "silver",
  },
  { name: "Bronze Sponsor", tier: "bronze" },
  { name: "Bronze Sponsor", tier: "bronze" },
]
