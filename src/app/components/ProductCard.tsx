import Image from 'next/image';
import Link from 'next/link';
import RatingStars from './ui/RatingStars';

export type Product = {
  id: string;
  name: string;
  href: string;
  price: string;
  compareAt?: string;
  rating?: number;
  image: string;
  alt?: string;
  badge?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex w-[80%] min-w-[240px] max-w-xs flex-col overflow-hidden rounded-md border border-black/5 bg-white shadow-soft sm:w-[44%] md:w-[30%] lg:w-[22%]">
      <Link href={product.href} className="relative block aspect-[4/5] w-full">
        <Image
          src={product.image}
          alt={product.alt || product.name}
          fill
          sizes="(max-width:640px) 80vw, (max-width:1024px) 44vw, (max-width:1280px) 30vw, 22vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded bg-brand px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <Link href={product.href} className="line-clamp-2 text-sm font-medium text-ink">{product.name}</Link>
        {product.rating ? <RatingStars rating={product.rating} className="mt-1" /> : null}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-semibold text-ink">{product.price}</span>
          {product.compareAt && <span className="text-sm text-ink/50 line-through">{product.compareAt}</span>}
        </div>
        <button className="mt-3 inline-flex items-center justify-center rounded-md border border-black/10 px-3 py-2 text-sm font-medium text-ink hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink">
          Add to cart
        </button>
      </div>
    </article>
  );
}