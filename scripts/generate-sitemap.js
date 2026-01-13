const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://johndoe.dev';

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about/', priority: '0.8', changefreq: 'monthly' },
  { url: '/projects/', priority: '0.8', changefreq: 'weekly' },
  { url: '/blog/', priority: '0.9', changefreq: 'daily' },
];

// Get blog posts
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      return {
        url: `/blog/${slug}/`,
        priority: '0.7',
        changefreq: 'monthly',
      };
    });
}

function generateSitemap() {
  const blogPosts = getBlogPosts();
  const allPages = [...staticPages, ...blogPosts];
  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Write to public directory
  const outDir = path.join(process.cwd(), 'out');
  const publicDir = path.join(process.cwd(), 'public');
  
  // Write to out directory if it exists (after build)
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
    console.log('✓ Sitemap generated at out/sitemap.xml');
  }
  
  // Also write to public directory
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✓ Sitemap generated at public/sitemap.xml');
}

generateSitemap();

