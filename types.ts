
export interface ThumbnailItem {
  id: string;
  title: string;
  creator: string;
  afterImage: string;
  beforeImage: string;
  ctr: string;
  views: string;
  category: 'Gaming' | 'Education' | 'Entertainment' | 'Business';
}

export interface Metric {
  label: string;
  value: string;
}

export interface PricePackage {
  name: string;
  price: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}
