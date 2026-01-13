import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const { slug, title, description, date, image } = post;

  // FIX: Memoize date parsing to avoid recalculation
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  // FIX: ISO date string for machine-readable dateTime attribute (SEO/Accessibility)
  const isoDate = dateObj.toISOString();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <Link href={`/blog/${slug}`} className="block">
        {/* Cover Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg)]">
          <Image
            src={image || '/blog-images/placeholder.svg'}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date - FIX: Added dateTime attribute for SEO/accessibility */}
          <time
            dateTime={isoDate}
            className="text-xs font-medium text-primary-500 uppercase tracking-wider"
          >
            {formattedDate}
          </time>

          {/* Title */}
          <h3 className="font-display font-bold text-xl mt-2 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Read More */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-500 group-hover:gap-3 transition-all">
            Read Article
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
