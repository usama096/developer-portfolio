import type { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import { getAllPosts } from '../lib/posts';
import { projects } from '../data/projects';
import type { BlogPost, Skill } from '../types';

interface HomeProps {
  recentPosts: BlogPost[];
}

export default function Home({ recentPosts }: HomeProps) {
  const featuredProjects = projects.slice(0, 3);

  const skills: Skill[] = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    { category: 'Tools', items: ['Git', 'Linux', 'Figma', 'Agile'] },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm font-medium text-primary-500">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="heading-xl mb-6">
                Hi, I&apos;m <span className="text-gradient">Usama Hafeez</span>
                <br />
                <span className="text-[var(--color-text-secondary)]">Senior Software Engineer</span>
              </h1>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl">
                I craft scalable web applications and elegant solutions to complex problems. With 5+
                years of experience, I specialize in building products that make a difference.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-primary">
                  View My Work
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link href="/about" className="btn-secondary">
                  About Me
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[var(--color-border)]">
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">5+</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">50+</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">20+</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 animate-[spin_20s_linear_infinite]" />

                {/* Main image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/20 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[var(--color-bg-secondary)]">
                    <Image
                      src="/images/profile.svg"
                      alt="Usama Hafeez"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 -left-4 px-4 py-2 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-lg"
                >
                  <span className="text-2xl">⚛️</span>
                  <span className="ml-2 font-medium text-sm">React Expert</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-20 -right-4 px-4 py-2 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-lg"
                >
                  <span className="text-2xl">☁️</span>
                  <span className="ml-2 font-medium text-sm">Cloud Native</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-[var(--color-bg-secondary)]/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Technical Skills</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A comprehensive toolkit built over years of solving real-world problems
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-display font-bold text-lg mb-4 text-primary-500">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-sm bg-[var(--color-bg)] border border-[var(--color-border)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="heading-lg mb-4">Featured Projects</h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl">
                A selection of projects that showcase my expertise and passion for building great
                software
              </p>
            </div>
            <Link href="/projects" className="link-underline shrink-0">
              View All Projects →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="section-padding bg-[var(--color-bg-secondary)]/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
            >
              <div>
                <h2 className="heading-lg mb-4">Latest Articles</h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl">
                  Thoughts, tutorials, and insights from my journey as a developer
                </p>
              </div>
              <Link href="/blog" className="link-underline shrink-0">
                View All Articles →
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 md:p-12 lg:p-16 text-center"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="heading-lg text-white mb-4">Let&apos;s Work Together</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>
              <a
                href="mailto:hello@usamahafeez.dev"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary-600 font-bold hover:bg-white/90 transition-colors"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);

  return {
    props: {
      recentPosts,
    },
  };
};
