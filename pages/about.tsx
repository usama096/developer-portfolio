import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../components/Layout';
// FIX: Extracted data to separate file for maintainability
import { experiences, education, values } from '../data/about';

export default function About() {
  return (
    <Layout
      title="About - John Doe"
      description="Learn more about John Doe, a Senior Software Engineer with 5+ years of experience in building scalable web applications."
      url="/about"
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile.svg"
                  alt="John Doe"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-500/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="heading-lg mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Hi! I&apos;m John, a Senior Software Engineer based in San Francisco with a passion for building 
                  products that make a real difference. With over 5 years of experience in the tech industry, 
                  I&apos;ve had the privilege of working with startups and enterprises alike.
                </p>
                <p>
                  My journey in software development started during my time at UC Berkeley, where I discovered 
                  the joy of turning ideas into working applications. Since then, I&apos;ve been on a continuous 
                  learning path, always exploring new technologies and methodologies.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me hiking in the Bay Area trails, experimenting with 
                  new coffee brewing methods, or contributing to open-source projects. I believe in giving 
                  back to the community that has given me so much.
                </p>
              </div>

              {/* Download Resume */}
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  className="btn-primary"
                  download
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-[var(--color-bg-secondary)]/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Work Experience</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A timeline of my professional journey and the impact I&apos;ve made along the way
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* FIX: Use compound key for uniqueness (title might not be unique) */}
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-[var(--color-border)]" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary-500" />
                
                <div className="card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-xl">{exp.title}</h3>
                    <span className="text-sm text-primary-500 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] font-medium mb-3">{exp.company}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Education</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              The academic foundation that shaped my technical expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">{edu.degree}</h3>
                    <p className="text-[var(--color-text-secondary)]">{edu.school}</p>
                    <p className="text-sm text-primary-500 mt-1">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[var(--color-bg-secondary)]/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">What Drives Me</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              The principles and values that guide my work and collaborations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* FIX: Using extracted values data */}
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

