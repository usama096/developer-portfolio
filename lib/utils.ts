/**
 * Utility functions for the portfolio site
 */

/**
 * Calculate estimated reading time for content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 wpm)
 * @returns Formatted reading time string
 */
export function calculateReadingTime(content: string, wordsPerMinute = 200): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Format a date string to a human-readable format
 * @param dateStr - ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get ISO date string for SEO datetime attributes
 * @param dateStr - Date string
 * @returns ISO formatted date string
 */
export function getISODate(dateStr: string): string {
  return new Date(dateStr).toISOString();
}

