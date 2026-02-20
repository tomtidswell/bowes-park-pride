export interface Sponsor {
  name: string
  logo?: string
  url?: string
  tier: 'headline' | 'gold' | 'silver' | 'bronze' | 'community'
}

export const sponsors: Sponsor[] = [
  // Placeholder sponsors — replace with real data
  { name: 'Headline Sponsor', tier: 'headline' },
  { name: 'Gold Sponsor 1', tier: 'gold' },
  { name: 'Gold Sponsor 2', tier: 'gold' },
  { name: 'Silver Sponsor 1', tier: 'silver' },
  { name: 'Silver Sponsor 2', tier: 'silver' },
  { name: 'Silver Sponsor 3', tier: 'silver' },
  { name: 'Bronze Sponsor 1', tier: 'bronze' },
  { name: 'Bronze Sponsor 2', tier: 'bronze' },
  { name: 'Community Partner 1', tier: 'community' },
  { name: 'Community Partner 2', tier: 'community' },
]
