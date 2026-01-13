import Head from 'next/head';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// FIX: Use explicit ReactNode import instead of React.ReactNode
interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  /** Relative path for canonical URL (e.g., '/about', '/blog/my-post') */
  url?: string;
}

// Constants extracted to avoid magic strings
const SITE_URL = 'https://usamahafeez.dev';
const DEFAULT_TITLE = 'Usama Hafeez - Senior Software Engineer';
const DEFAULT_DESCRIPTION =
  'Senior Software Engineer with 5+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud architecture.';
const DEFAULT_IMAGE = '/images/og-image.svg';

export default function Layout({
  children,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = '',
}: LayoutProps) {
  // FIX: Properly construct URLs - url should be a relative path
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImage} />
        <meta property="og:site_name" content="Usama Hafeez" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@johndoe" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImage} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={fullUrl} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
}
