export interface SponsorTier {
  id: string
  name: string
  price: string
  color: string
  benefits: string[]
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: 'headline',
    name: 'Headline Sponsor',
    price: "Let's chat",
    color: '#E6007E',
    benefits: [
      'Prominent logo on all marketing materials',
      'Named stage sponsorship',
      'Dedicated social media features',
      'VIP area for your team',
      'Banner placement at prime locations',
      'Speaking opportunity at event',
      'Headline Sponsor Poster to display at your business',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    price: '£400',
    color: '#F5A623',
    benefits: [
      'Large logo & link to your website on event website',
      'Logo on event marketing materials',
      'Social media shout-outs',
      'Banner space at event',
      'Gold Sponsor Poster to display at your business',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    price: '£250',
    color: '#118AB2',
    benefits: [
      'Logo on event website',
      'Social media mention',
      'Banner space at event',
      'Silver Sponsor Poster to display at your business',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsor',
    price: '£150',
    color: '#06D6A0',
    benefits: [
      'Listing on our sponsors section of the website',
      'Social media mention',
      'Bronze Sponsor Poster to display in your window',
    ],
  },
]
