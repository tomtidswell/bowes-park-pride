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
    price: 'Contact us',
    color: '#E6007E',
    benefits: [
      'Prominent logo on all marketing materials',
      'Named stage sponsorship',
      'Dedicated social media features',
      'VIP area for your team',
      'Banner placement at prime locations',
      'Speaking opportunity at the event',
      'Logo on event merchandise',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    price: 'Contact us',
    color: '#F5A623',
    benefits: [
      'Logo on event marketing materials',
      'Social media shout-outs',
      'Banner space at the event',
      'Logo on event website',
      'Complimentary stall space',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    price: 'Contact us',
    color: '#118AB2',
    benefits: [
      'Logo on event website',
      'Social media mention',
      'Logo on printed programme',
      'Banner space at the event',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsor',
    price: 'Contact us',
    color: '#06D6A0',
    benefits: [
      'Logo on event website',
      'Social media mention',
      'Logo on printed programme',
    ],
  },
  {
    id: 'community',
    name: 'Community Partner',
    price: 'In-kind / flexible',
    color: '#7B2D8E',
    benefits: [
      'Logo on event website',
      'Social media mention',
      'Perfect for local businesses and community groups',
    ],
  },
]
