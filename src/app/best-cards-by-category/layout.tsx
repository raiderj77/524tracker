import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Credit Cards by Spend Category (2026)',
  description:
    'Find the best credit card for gas, groceries, dining, travel, hotels, airlines, online shopping, and more. Top 3 cards per category with rewards rates and 5/24 impact.',
  keywords:
    'best credit card for groceries, best credit card for gas, best credit card for dining, best travel credit card, credit card by category',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/best-cards-by-category' },
  openGraph: {
    title: 'Best Credit Cards by Spend Category (2026)',
    description: 'Top 3 credit cards for every spending category — gas, groceries, dining, travel, and more.',
    url: 'https://524tracker.com/best-cards-by-category',
    type: 'website',
  },
};

export default function BestCardsByCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
