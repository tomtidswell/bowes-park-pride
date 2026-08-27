export interface PartnerTier {
  id: string
  name: string
  availability?: string
  price?: string
  color: string
  description: string
  benefits: string[]
}

export const headlinePartners: PartnerTier[] = [
  {
    id: 'principal',
    name: 'Principal Partner',
    availability: 'One opportunity available',
    color: '#E6007E',
    description:
      'Our highest-profile partnership, for an organisation wishing to make a significant commitment to LGBTQIA+ inclusion and community impact.',
    benefits: [
      'Recognition as Principal Partner of Bowes Park Pride 2027',
      'Prominent logo placement across key event materials and press activity',
      'Branding at the main stage and selected festival areas',
      'Employee volunteering opportunities and invitations to stakeholder events',
      'A post-event impact summary demonstrating the difference you made',
    ],
  },
  {
    id: 'festival',
    name: 'Festival Partner',
    availability: 'Two opportunities available',
    color: '#7B2D8E',
    description:
      'A prominent partnership supporting the overall delivery, safety and accessibility of Bowes Park Pride.',
    benefits: [
      'Recognition as an official Festival Partner',
      'Prominent logo placement on event signage and digital materials',
      'On-stage acknowledgement during the festival',
      'An appropriate presence or activation at the event',
      'Employee-volunteering opportunities',
    ],
  },
  {
    id: 'main-stage',
    name: 'Main Stage Partner',
    availability: 'One opportunity available',
    color: '#118AB2',
    description:
      'Support the main stage and its programme of LGBTQIA+ music, cabaret, drag, performance and community voices.',
    benefits: [
      'Naming association with the main stage',
      'Prominent branding around the stage area',
      'Acknowledgement by stage hosts throughout the day',
      'Logo placement on stage schedules and promotional materials',
    ],
  },
]

export const themedPartners: PartnerTier[] = [
  {
    id: 'volunteer-team',
    name: 'Volunteer Team Partner',
    color: '#E8780A',
    description:
      'Support the recruitment, training, meals, refreshments, equipment and recognition of the ~60 volunteers who make Pride possible.',
    benefits: [
      'A dedicated team photograph featuring partner recognition',
      'Social media content celebrating the volunteer team',
      'Opportunities for employee volunteering',
    ],
  },
  {
    id: 'community-wellbeing',
    name: 'Community & Wellbeing Partner',
    color: '#06D6A0',
    description:
      'Support welfare provision, the community safe space, and activities that help make Pride welcoming and inclusive.',
    benefits: [
      'Sensitively agreed branding within the relevant area',
      'Support for year-round community activity',
    ],
  },
  {
    id: 'street-stage',
    name: 'Street Stage Partner',
    color: '#118AB2',
    description:
      'Support a lively programme of emerging performers, local artists and community entertainment.',
    benefits: [
      'Naming association with the Street Stage',
      'Branding around the stage area',
      'Acknowledgement by hosts during the day',
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility Partner',
    color: '#7B2D8E',
    description:
      'Help us remove barriers to participation through accessible viewing, seating, signage, interpretation and information.',
    benefits: [
      'Logo placement on accessibility information',
      'An impact summary explaining how the funding improved access',
    ],
  },
  {
    id: 'community-bar',
    name: 'Community Bar Partner',
    color: '#E6007E',
    description:
      'Support the Bowes Park Pride Community Bar, whose proceeds help sustain future Pride and community activity.',
    benefits: [
      'Branding within the bar area',
      'Cash or an agreed stock contribution welcome',
    ],
  },
  {
    id: 'impact-legacy',
    name: 'Impact & Legacy Partner',
    color: '#E8780A',
    description:
      'Help us capture, evaluate and share the social, cultural and economic impact of Bowes Park Pride.',
    benefits: [
      'Logo placement on the partner acknowledgement page of the Impact Report',
      'Five printed copies of the final report',
      "Access to approved impact information for your own reporting",
    ],
  },
  {
    id: 'quiz',
    name: 'Fundraising Quiz Partner',
    color: '#06D6A0',
    description:
      'Support a pre-Pride fundraising quiz bringing the local community together and raising money towards Pride 2027.',
    benefits: [
      'Logo placement on quiz promotional materials',
      'Acknowledgement during the event',
      'Four complimentary quiz tickets',
    ],
  },
]

export const supporterLevels: PartnerTier[] = [
  {
    id: 'gold',
    name: 'Gold Supporter',
    price: '£500',
    color: '#F5A623',
    description: '',
    benefits: [
      'Gold Supporter recognition on the Bowes Park Pride website',
      'Logo placement on shared sponsor materials',
      'Social media acknowledgement',
      'Recognition in the Impact Report',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Supporter',
    price: '£300',
    color: '#118AB2',
    description: '',
    benefits: [
      'Silver Supporter recognition on the Bowes Park Pride website',
      'Name or logo on shared sponsor materials',
      'Recognition in the Impact Report',
    ],
  },
]

export interface LocalBusinessOption {
  id: string
  name: string
  color: string
  description: string
}

export const localBusinessOptions: LocalBusinessOption[] = [
  {
    id: 'shop-window',
    name: 'Shop-Window Competition',
    color: '#E6007E',
    description:
      'Decorate your window to celebrate Pride and help create a welcoming atmosphere across Bowes Park.',
  },
  {
    id: 'trader-stall',
    name: 'Regular Trader Stall',
    color: '#06D6A0',
    description:
      'For businesses and independent traders wishing to sell or promote products and services at the festival.',
  },
]

export const inKindContributions = [
  'Event equipment & infrastructure',
  'Food & refreshments for volunteers',
  'Hotel accommodation',
  'Printing & signage',
  'Transport',
  'Technology & connectivity',
  'Professional services',
  'Photography & video production',
  'Accessibility services',
  'Drinks or bar stock',
]
