import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../lib/posts';
import type { BlogPost } from '../../types';

interface BlogIndexProps {
  posts: BlogPost[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <Layout
      title="Blog - Usama Hafeez"
      description="Thoughts, tutorials, and insights about software development, web technologies, and my journey as a developer."
      url="/blog"
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="heading-xl mb-6">
              My <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Sharing what I learn along the way. From technical deep-dives to thoughts on software
              development best practices.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-[var(--color-text-secondary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="heading-md mb-4">No Posts Yet</h2>
              <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
                I&apos;m working on some great content. Check back soon for articles about software
                development, tutorials, and more!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-[var(--color-bg-secondary)]/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="heading-md mb-4">Stay Updated</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Get notified when I publish new articles. No spam, just quality content about software
              development.
            </p>
            {/* FIX: Added onSubmit handler to prevent default and show placeholder behavior */}
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder: integrate with newsletter service (e.g., ConvertKit, Mailchimp)
                alert('Newsletter signup coming soon!');
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                aria-label="Email address for newsletter"
                className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
