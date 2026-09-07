import type { Product } from '@/app/components/ProductCard';

const base: Product[] = [
  {
    id: 'p1',
    name: 'Lord Ganesha Idol (Brass)',
    href: '/p/ganesha-brass',
    price: '₹2,999',
    compareAt: '₹3,999',
    rating: 4.8,
    image: 'https://www.divinehindu.in/cdn/shop/products/brass-ganesha-idol-6-inch_1024x1024.jpg?v=1647916147',
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: 'Lakshmi Idol (Marble)',
    href: '/p/lakshmi-marble',
    price: '₹4,999',
    compareAt: '₹6,999',
    rating: 4.7,
    image: 'https://www.divinehindu.in/cdn/shop/products/marble-lakshmi-idol-8-inch_1024x1024.jpg?v=1647916147',
    badge: 'Premium'
  },
  {
    id: 'p3',
    name: 'Silver Plated Pooja Thali Set',
    href: '/p/pooja-thali',
    price: '₹1,899',
    compareAt: '₹2,499',
    rating: 4.5,
    image: 'https://www.divinehindu.in/cdn/shop/products/silver-plated-pooja-thali_1024x1024.jpg?v=1647916147',
    badge: 'Handcrafted'
  },
  {
    id: 'p4',
    name: 'Sandalwood Incense Sticks',
    href: '/p/incense-premium',
    price: '₹299',
    compareAt: '₹399',
    rating: 4.3,
    image: 'https://www.divinehindu.in/cdn/shop/products/sandalwood-incense-sticks_1024x1024.jpg?v=1647916147',
    badge: 'Natural'
  },
  {
    id: 'p5',
    name: '5 Mukhi Rudraksha Mala',
    href: '/p/rudraksha-mala',
    price: '₹1,299',
    compareAt: '₹1,799',
    rating: 4.6,
    image: 'https://www.divinehindu.in/cdn/shop/products/5-mukhi-rudraksha-mala_1024x1024.jpg?v=1647916147',
    badge: 'Authentic'
  }
];

export const products = {
  bestSellers: base,
  newArrivals: [...base].reverse()
};