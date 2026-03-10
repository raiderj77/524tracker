import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Card Value Calculator — Is Your Card Worth Keeping?',
  description:
    'Calculate whether your credit card is worth the annual fee. Compare benefits, credits, and rewards earned vs the annual fee to decide: keep, downgrade, or cancel.',
  keywords:
    'credit card value calculator, is my credit card worth it, annual fee calculator, keep or cancel credit card',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/card-value-calculator' },
  openGraph: {
    title: 'Card Value Calculator — Is Your Card Worth Keeping?',
    description: 'Compare your credit card benefits vs annual fee to decide: keep, downgrade, or cancel.',
    url: 'https://524tracker.com/card-value-calculator',
    type: 'website',
  },
};

export default function CardValueCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
