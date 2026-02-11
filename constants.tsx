import { ThumbnailItem, Metric, PricePackage } from './types';

export const METRICS: Metric[] = [
  { label: 'Avg. CTR Boost', value: '412%' },
  { label: 'Total Views Generated', value: '10M+' },
  { label: 'Creators Served', value: '50+' },
  { label: 'Retention Lift', value: '24%' },
];

export const THUMBNAILS: ThumbnailItem[] = [
  {
    id: '1',
    title: 'How Apple built a trillion dollar company',
    creator: 'IND Money',
    afterImage: 'https://lh3.googleusercontent.com/d/1_T5_X9A52I4-WxQ9ZrgnWsrHpy50Z3wI',
    beforeImage: '',
    ctr: '14.2%',
    views: '2.1M',
    category: 'Business'
  },
  {
    id: '2',
    title: 'These Study hacks will make you 10x smarter',
    creator: 'Aditya Singh',
    afterImage: 'https://lh3.googleusercontent.com/d/1pcv7otbtyLbanaQsDRn3-nblm2z_BBPz',
    beforeImage: '',
    ctr: '18.5%',
    views: '45M',
    category: 'Education'
  },
  {
    id: '3',
    title: 'i grew a clipping page to 130k+ followers in 30 days',
    creator: 'James Carter',
    afterImage: 'https://lh3.googleusercontent.com/d/1NtyeeYE6K9FZrhddtu2WZKQvFvpDNCT8',
    beforeImage: '',
    ctr: '12.8%',
    views: '800K',
    category: 'Business'
  },
  {
    id: '4',
    title: "I tried the new Dolmir's revenge in valorant",
    creator: 'Kaneki',
    afterImage: 'https://lh3.googleusercontent.com/d/1kcGLmH2DZgARrv68qB_JRJsZOQFzaESK',
    beforeImage: '',
    ctr: '16.1%',
    views: '12M',
    category: 'Gaming'
  },
  {
    id: '5',
    title: 'Never make these 5 mistakes in forex trading',
    creator: 'Forrex Trader',
    afterImage: 'https://lh3.googleusercontent.com/d/140aA0eW6_luIlo1WHG1oWTWCoWK7FbT-',
    beforeImage: '',
    ctr: '11.4%',
    views: '1.5M',
    category: 'Business'
  },
  {
    id: '6',
    title: 'The Exact Instagram System That Exploded This Account',
    creator: 'Mixed Fruit Podcast',
    afterImage: 'https://lh3.googleusercontent.com/d/1h3GHPAJaAHzfKlZ5bS5ooMWrbW5JuvVV',
    beforeImage: '',
    ctr: '15.7%',
    views: '940K',
    category: 'Business'
  },
  {
    id: '7',
    title: 'Trump vs Everyone: What’s Really Happening?',
    creator: 'Secret Documentary',
    afterImage: 'https://lh3.googleusercontent.com/d/1mUGu0OKKxCwgIiu1KSw01WzfZW-av2Ge',
    beforeImage: '',
    ctr: '21.4%',
    views: '3.8M',
    category: 'Entertainment'
  },
  {
    id: '8',
    title: 'I took a challenge to gift my mom an iphone',
    creator: 'Dev Got Money',
    afterImage: 'https://lh3.googleusercontent.com/d/1TrYQ2U3LhytMCQ3A7YdjUVYCnFuQo4RL',
    beforeImage: '',
    ctr: '19.8%',
    views: '1.5M',
    category: 'Entertainment'
  },
  {
    id: '9',
    title: 'How to change your habits in 1 day',
    creator: 'The Stoic',
    afterImage: 'https://lh3.googleusercontent.com/d/16gGyvyfb5FP_ELgSSTJmZlX_KzyyQ1Tk',
    beforeImage: '',
    ctr: '17.2%',
    views: '3.2M',
    category: 'Education'
  },
];

export const PACKAGES: PricePackage[] = [
  {
    name: 'Starter Hook',
    price: '$250',
    features: [
      '5 High-Performance Thumbnails',
      '3 variations of each for A/B Testing',
      '24-Hour Turnaround',
      'Unlimited Revisions',
      'Click Psychology Audit'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Pro Growth',
    price: '$540',
    features: [
      '12 High-Performance Thumbnails',
      '3 variations of each for A/B Testing',
      'Priority Delivery',
      'Custom Title Hooks',
      'Direct Support'
    ],
    cta: 'Most Popular',
    isPopular: true
  },
  {
    name: 'Creator Partner',
    price: '$1250',
    features: [
      'Monthly Retainer (Full Channel)',
      'Unlimited Thumbnails',
      'Full Growth Consulting',
      'Competitor Analysis',
      'Exclusive Branding'
    ],
    cta: 'Partner Now'
  }
];