'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';

export function ConditionalFooter() {
  const pathname = usePathname();

  // Hide footer on home page (e.g., /en, /ja)
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length <= 1) return null;

  return <Footer />;
}
