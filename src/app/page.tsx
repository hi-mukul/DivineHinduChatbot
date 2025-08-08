import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import CategoryGrid from '@/app/components/CategoryGrid';
import ProductCarousel from '@/app/components/ProductCarousel';
import BlogPosts from '@/app/components/BlogPosts';
import Newsletter from '@/app/components/Newsletter';
import Footer from '@/app/components/Footer';
import { features } from '@/app/data/features';
import { categories } from '@/app/data/categories';
import { products } from '@/app/data/products';
import { posts } from '@/app/data/posts';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Features items={features} />
      <CategoryGrid items={categories} />
      <ProductCarousel title="Best Sellers" items={products.bestSellers} />
      <ProductCarousel title="New Arrivals" items={products.newArrivals} />
      <BlogPosts items={posts} />
      <Newsletter />
      <Footer />
    </div>
  );
}
