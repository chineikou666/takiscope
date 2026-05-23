import * as cheerio from 'cheerio';

export async function scrapeBlogspotImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; takiscope-bot/1.0)' },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const $ = cheerio.load(html);

    // Blogspot post body is typically in .post-body or article
    const body = $('.post-body').first();
    if (body.length === 0) return null;

    const img = body.find('img').first();
    if (!img.length) return null;

    const src = img.attr('src');
    if (!src) return null;

    // If it's a protocol-relative URL, add https:
    if (src.startsWith('//')) return `https:${src}`;
    return src;
  } catch {
    return null;
  }
}
