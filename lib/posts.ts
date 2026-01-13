import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '../types';

const postsDirectory = path.join(process.cwd(), 'posts');

// FIX: Added slug sanitization to prevent path traversal attacks
function sanitizeSlug(slug: string): string {
  return slug
    .replace(/\.\./g, '') // Remove parent directory traversal
    .replace(/[^a-zA-Z0-9-_]/g, '') // Only allow safe characters
    .toLowerCase();
}

// FIX: Validate date string to ensure proper ISO format
function validateDate(dateStr: unknown): string {
  if (typeof dateStr === 'string') {
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      return dateStr;
    }
  }
  return new Date().toISOString().split('T')[0];
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = sanitizeSlug(fileName.replace(/\.mdx$/, ''));
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: typeof data.title === 'string' ? data.title : 'Untitled',
        description: typeof data.description === 'string' ? data.description : '',
        date: validateDate(data.date),
        image: typeof data.image === 'string' ? data.image : '/blog-images/placeholder.svg',
      };
    });

  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): (BlogPost & { content: string }) | null {
  // FIX: Sanitize slug input to prevent path traversal
  const safeSlug = sanitizeSlug(slug);
  
  try {
    const fullPath = path.join(postsDirectory, `${safeSlug}.mdx`);
    
    // Additional security: verify the resolved path is within posts directory
    const resolvedPath = path.resolve(fullPath);
    if (!resolvedPath.startsWith(path.resolve(postsDirectory))) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: safeSlug,
      title: typeof data.title === 'string' ? data.title : 'Untitled',
      description: typeof data.description === 'string' ? data.description : '',
      date: validateDate(data.date),
      image: typeof data.image === 'string' ? data.image : '/blog-images/placeholder.svg',
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => sanitizeSlug(fileName.replace(/\.mdx$/, '')));
}

