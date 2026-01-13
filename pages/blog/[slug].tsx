import type { GetStaticProps, GetStaticPaths } from 'next';
import type { HTMLAttributes, ImgHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import Layout from '../../components/Layout';
import { getPostBySlug, getAllPostSlugs } from '../../lib/posts';
import { calculateReadingTime, formatDate, getISODate } from '../../lib/utils';
import type { BlogPost } from '../../types';

interface BlogPostPageProps {
  post: BlogPost;
  mdxSource: MDXRemoteSerializeResult;
  readingTime: string;
}

// FIX: Improved MDX component types with explicit imports
type MDXComponents = {
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => JSX.Element;
  pre: (props: HTMLAttributes<HTMLPreElement>) => JSX.Element;
  code: (props: HTMLAttributes<HTMLElement>) => JSX.Element;
};

// Custom MDX components with proper typing
const components: MDXComponents = {
  img: (props) => (
    <span className="block my-8">
      <Image
        src={props.src || ''}
        alt={props.alt || ''}
        width={800}
        height={400}
        className="rounded-xl w-full h-auto"
      />
    </span>
  ),
  // FIX: Check if link is internal before adding target="_blank"
  a: (props) => {
    const isExternal = props.href?.startsWith('http') || props.href?.startsWith('//');
    return (
      <a 
        {...props} 
        className="text-primary-500 hover:underline" 
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      />
    );
  },
  pre: (props) => (
    <pre {...props} className="rounded-xl overflow-x-auto" />
  ),
  code: (props) => (
    <code {...props} className="font-mono" />
  ),
};

export default function BlogPostPage({ post, mdxSource, readingTime }: BlogPostPageProps) {
  // FIX: Use utility functions for date formatting
  const formattedDate = formatDate(post.date);
  const isoDate = getISODate(post.date);

  return (
    <Layout
      title={`${post.title} - John Doe`}
      description={post.description}
      image={post.image}
      url={`/blog/${post.slug}`}
    >
      <article>
        {/* Hero Section */}
        <section className="section-padding pb-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-primary-500 transition-colors mb-8"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              {/* Meta - FIX: Added dateTime attribute for SEO */}
              <div className="flex items-center gap-4 mb-6">
                <time dateTime={isoDate} className="text-sm font-medium text-primary-500">
                  {formattedDate}
                </time>
                <span className="text-[var(--color-text-secondary)]">•</span>
                {/* FIX: Dynamic reading time calculation */}
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {readingTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="heading-lg mb-6">{post.title}</h1>

              {/* Description */}
              <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                {post.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container-custom mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container-custom"
        >
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote {...mdxSource} components={components} />
            </div>
          </div>
        </motion.div>

        {/* Author & Share */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="border-t border-[var(--color-border)] pt-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src="/images/profile.svg"
                        alt="John Doe"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-display font-bold">John Doe</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Senior Software Engineer
                      </p>
                    </div>
                  </div>

                  {/* Share */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[var(--color-text-secondary)]">Share:</span>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://johndoe.dev/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-primary-500/50 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://johndoe.dev/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-primary-500/50 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();
  
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });

  // FIX: Calculate reading time at build time
  const readingTime = calculateReadingTime(post.content);

  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        image: post.image,
      },
      mdxSource,
      readingTime,
    },
  };
};

