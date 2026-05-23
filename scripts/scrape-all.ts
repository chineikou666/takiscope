import { scrapeBlogspotImage } from '../src/lib/scrape-blogspot';
import { mockTexts } from '../src/data/mock-texts';
import { mockNews } from '../src/data/mock-news';

async function main() {
  // Collect all unique blogspot URLs
  const all = [
    ...mockTexts.filter((t) => t.href?.includes('blogspot')).map((t) => ({ id: t.id, href: t.href!, source: 'texts' as const })),
    ...mockNews.filter((n) => n.href?.includes('blogspot')).map((n) => ({ id: n.id, href: n.href!, source: 'news' as const })),
  ];

  // Deduplicate by href
  const seen = new Set<string>();
  const unique = all.filter((x) => {
    if (seen.has(x.href)) return false;
    seen.add(x.href);
    return true;
  });

  console.log(`Scraping ${unique.length} unique blogspot URLs...\n`);

  const results: Record<string, { id: string; source: string; href: string; image: string | null }> = {};

  for (let i = 0; i < unique.length; i++) {
    const item = unique[i];
    console.log(`[${i + 1}/${unique.length}] ${item.id}...`);
    const image = await scrapeBlogspotImage(item.href);
    results[item.id] = { id: item.id, source: item.source, href: item.href, image };
    if (image) {
      console.log(`  => ${image.substring(0, 100)}...`);
    } else {
      console.log(`  => NO IMAGE FOUND`);
    }
    // Be polite to the server
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log('\n=== RESULTS ===\n');
  for (const [id, r] of Object.entries(results)) {
    console.log(`${id} (${r.source}): ${r.image || 'null'}`);
  }
}

main().catch(console.error);
