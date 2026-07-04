export interface Service {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  scope: string[];
  imageUrl: string;
  pricingInfo: string;
  season: 'Spring/Summer' | 'Autumn' | 'Winter' | 'Year-Round';
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  selectedServices: string[];
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly' | 'seasonal';
  lotSize: string;
  timeline: string;
  notes: string;
}
