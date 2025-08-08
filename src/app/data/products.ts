import type { Product } from '@/app/components/ProductCard';

const base: Product[] = [
  {
    id: 'p1',
    name: 'Lord Ganesha Idol (Brass)',
    href: '/p/ganesha-brass',
    price: '₹1,499',
    compareAt: '₹1,799',
    rating: 4.8,
    image: '/assets/products/ganesha-1.jpg'
  },
  {
    id: 'p2',
    name: 'Lakshmi Idol (Marble)',
    href: '/p/lakshmi-marble',
    price: '₹1,899',
    rating: 4.7,
    image: '/assets/products/lakshmi-1.jpg',
    badge: 'New'
  },
  {
    id: 'p3',
    name: 'Pooja Thali Set',
    href: '/p/pooja-thali',
    price: '₹999',
    rating: 4.5,
    image: '/assets/products/thali-1.jpg'
  },
  {
    id: 'p4',
    name: 'Premium Incense Sticks',
    href: '/p/incense-premium',
    price: '₹299',
    rating: 4.3,
    image: '/assets/products/incense-1.jpg'
  },
  {
    id: 'p5',
    name: 'Rudraksha Mala',
    href: '/p/rudraksha-mala',
    price: '₹699',
    rating: 4.6,
    image: '/assets/products/rudraksha-1.jpg'
  }
];

export const products = {
  bestSellers: base,
  newArrivals: [...base].reverse()
};