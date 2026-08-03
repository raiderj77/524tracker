import { buildPageMetadata } from '@/lib/siteMetadata';

export const metadata = buildPageMetadata({
  title: 'Card Value Calculator',
  description:
    'Compare an annual fee with the dollar values and point assumptions you enter. The calculator shows arithmetic, not financial advice.',
  path: '/card-value-calculator',
});

export default function CardValueCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
