import type { Metadata } from 'next';
import Link from 'next/link';
import { PULL_DATA } from '@/lib/pullData';
import FinancialDisclaimer from '@/components/FinancialDisclaimer';

export const metadata: Metadata = {
  title: 'Credit Bureau Pull Analysis — Bureau Distribution Across 29 Cards | 524Tracker',
  description:
    'Bureau distribution, issuer breakdowns, and freeze strategy recommendations derived from 29 reference cards across 11 issuers. Experian dominates at 86% of tracked cards.',
  keywords:
    'credit bureau pull analysis, experian pull frequency, bureau freeze strategy, chase experian, capital one all bureaus',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/credit-pull-database/analysis' },
  openGraph: {
    title: 'Credit Bureau Pull Analysis — Bureau Distribution Across 29 Cards',
    description:
      'Bureau distribution, issuer breakdowns, and freeze strategy recommendations from the 524Tracker reference database.',
    url: 'https://524tracker.com/credit-pull-database/analysis',
    type: 'article',
  },
};

const datePublished = '2026-04-26';
const dateModified = new Date().toISOString().substring(0, 10);

// Derived stats computed at build time from shared PULL_DATA
function computeStats() {
  const total = PULL_DATA.length;

  // Bureau pull frequency (cards that include each bureau)
  const pullsExperian = PULL_DATA.filter((c) => c.bureaus.includes('Experian')).length;
  const pullsEquifax = PULL_DATA.filter((c) => c.bureaus.includes('Equifax')).length;
  const pullsTransUnion = PULL_DATA.filter((c) => c.bureaus.includes('TransUnion')).length;

  // Exclusive patterns
  const experianOnly = PULL_DATA.filter((c) => c.bureaus.length === 1 && c.bureaus[0] === 'Experian').length;
  const equifaxOnly = PULL_DATA.filter((c) => c.bureaus.length === 1 && c.bureaus[0] === 'Equifax').length;
  const transUnionOnly = PULL_DATA.filter((c) => c.bureaus.length === 1 && c.bureaus[0] === 'TransUnion').length;
  const experianEquifax = PULL_DATA.filter(
    (c) => c.bureaus.length === 2 && c.bureaus.includes('Experian') && c.bureaus.includes('Equifax')
  ).length;
  const experianTransUnion = PULL_DATA.filter(
    (c) => c.bureaus.length === 2 && c.bureaus.includes('Experian') && c.bureaus.includes('TransUnion')
  ).length;
  const allThree = PULL_DATA.filter((c) => c.bureaus.length === 3).length;

  // Per-issuer breakdown
  const issuers = [...new Set(PULL_DATA.map((c) => c.issuer))];
  const issuerStats = issuers.map((issuer) => {
    const cards = PULL_DATA.filter((c) => c.issuer === issuer);
    const bureauSet = new Set(cards.flatMap((c) => c.bureaus));
    return {
      issuer,
      cardCount: cards.length,
      bureaus: [...bureauSet].sort(),
      pullsAll3: cards.every((c) => c.bureaus.length === 3),
      consistent: new Set(cards.map((c) => c.bureaus.join('+'))).size === 1,
    };
  });

  return {
    total,
    pullsExperian,
    pullsEquifax,
    pullsTransUnion,
    experianOnly,
    equifaxOnly,
    transUnionOnly,
    experianEquifax,
    experianTransUnion,
    allThree,
    issuerStats,
  };
}

const S = computeStats();

function pct(n: number, d: number) {
  return ((n / d) * 100).toFixed(1);
}

// Inline SVG bar chart for bureau distribution
function BureauBarChart() {
  const bars = [
    { label: 'Experian only', count: S.experianOnly, color: '#3b82f6' },
    { label: 'TransUnion only', count: S.transUnionOnly, color: '#8b5cf6' },
    { label: 'Exp + EQ', count: S.experianEquifax, color: '#6366f1' },
    { label: 'Exp + TU', count: S.experianTransUnion, color: '#a78bfa' },
    { label: 'All 3', count: S.allThree, color: '#f59e0b' },
    { label: 'Equifax only', count: S.equifaxOnly, color: '#10b981' },
  ];
  const max = Math.max(...bars.map((b) => b.count));
  const chartWidth = 400;
  const barHeight = 28;
  const gap = 10;
  const labelWidth = 100;
  const countWidth = 30;
  const barAreaWidth = chartWidth - labelWidth - countWidth;
  const totalHeight = bars.length * (barHeight + gap);

  return (
    <svg
      viewBox={`0 0 ${chartWidth} ${totalHeight}`}
      role="img"
      aria-label="Bar chart showing bureau pull pattern distribution"
      className="w-full max-w-md"
    >
      {bars.map((bar, i) => {
        const y = i * (barHeight + gap);
        const barWidth = max > 0 ? (bar.count / max) * barAreaWidth : 0;
        return (
          <g key={bar.label}>
            <text x={0} y={y + barHeight / 2 + 5} fontSize={11} fill="#4A5568" fontFamily="sans-serif">
              {bar.label}
            </text>
            <rect x={labelWidth} y={y} width={Math.max(barWidth, bar.count > 0 ? 4 : 0)} height={barHeight} fill={bar.color} rx={3} />
            <text x={labelWidth + barWidth + 6} y={y + barHeight / 2 + 5} fontSize={11} fill="#0A1628" fontFamily="sans-serif" fontWeight="600">
              {bar.count}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function CreditPullAnalysisPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Credit Bureau Pull Analysis: Bureau Distribution Across 29 Cards',
    description:
      'Bureau distribution, issuer breakdowns, and freeze strategy recommendations derived from 29 reference cards across 11 issuers.',
    url: 'https://524tracker.com/credit-pull-database/analysis',
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: '524Tracker',
      url: 'https://524tracker.com',
    },
    publisher: {
      '@type': 'Organization',
      name: '524Tracker',
      url: 'https://524tracker.com',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://524tracker.com' },
      { '@type': 'ListItem', position: 2, name: 'Credit Pull Database', item: 'https://524tracker.com/credit-pull-database' },
      { '@type': 'ListItem', position: 3, name: 'Analysis', item: 'https://524tracker.com/credit-pull-database/analysis' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-xs text-text-secondary mb-6">
          <Link href="/" className="text-brand-gold hover:text-amber-600">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/credit-pull-database" className="text-brand-gold hover:text-amber-600">Credit Pull Database</Link>
          <span className="mx-1">/</span>
          <span>Analysis</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
            Bureau Pull Analysis
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            Derived from {S.total} reference cards across {S.issuerStats.length} issuers. This analysis reflects the patterns in our reference database. Individual results vary. Verify with the bank before applying.
          </p>
          <p className="text-xs text-text-secondary mt-2">Updated {dateModified} &middot; Built by an experienced web professional</p>
        </header>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-sm text-amber-900">
          This analysis reflects the patterns in our reference database, which contains {S.total} cards across {S.issuerStats.length} issuers. Individual results vary. Verify with the bank before applying.
        </div>

        <article className="space-y-12">

          {/* Summary stats */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Summary Stats</h2>
            <p className="text-base text-text-primary leading-relaxed mb-6">
              Experian dominates this database. Of the {S.total} cards tracked, {S.pullsExperian} ({pct(S.pullsExperian, S.total)}%) include Experian in their pull pattern. That number is high because Experian appears in combinations (Experian + Equifax, all three bureaus) as well as solo pulls. The sole-Experian group is even more striking: {S.experianOnly} of {S.total} cards pull Experian and nothing else.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Total cards tracked', value: S.total },
                { label: 'Issuers covered', value: S.issuerStats.length },
                { label: 'Pull Experian (any)', value: `${S.pullsExperian} (${pct(S.pullsExperian, S.total)}%)` },
                { label: 'Pull Equifax (any)', value: `${S.pullsEquifax} (${pct(S.pullsEquifax, S.total)}%)` },
                { label: 'Pull TransUnion (any)', value: `${S.pullsTransUnion} (${pct(S.pullsTransUnion, S.total)}%)` },
                { label: 'Pull all 3 bureaus', value: `${S.allThree} (${pct(S.allThree, S.total)}%)` },
              ].map((stat) => (
                <div key={stat.label} className="bg-brand-light rounded-xl p-4 border border-gray-100">
                  <p className="text-2xl font-bold text-brand-navy font-display">{stat.value}</p>
                  <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display font-semibold text-lg text-brand-navy mb-3">Pull pattern distribution</h3>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              Breaking down by pull pattern (not just bureau presence):
            </p>

            <BureauBarChart />

            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white text-left">
                    <th className="px-4 py-3 font-semibold">Pull pattern</th>
                    <th className="px-4 py-3 font-semibold text-right">Cards</th>
                    <th className="px-4 py-3 font-semibold text-right">Share</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pattern: 'Experian only', count: S.experianOnly },
                    { pattern: 'TransUnion only', count: S.transUnionOnly },
                    { pattern: 'Equifax only', count: S.equifaxOnly },
                    { pattern: 'Experian + Equifax', count: S.experianEquifax },
                    { pattern: 'Experian + TransUnion', count: S.experianTransUnion },
                    { pattern: 'All 3 bureaus', count: S.allThree },
                  ].map((row, i) => (
                    <tr key={row.pattern} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-4 py-3">{row.pattern}</td>
                      <td className="px-4 py-3 text-right font-medium text-brand-navy">{row.count}</td>
                      <td className="px-4 py-3 text-right text-text-secondary">{pct(row.count, S.total)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Per-issuer breakdown */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Per-Issuer Breakdown</h2>
            <p className="text-base text-text-primary leading-relaxed mb-6">
              Within this reference database, the big issuers are remarkably consistent. Chase pulls Experian on all 6 tracked cards. Amex pulls Experian on all 4. Wells Fargo pulls Experian on all 3. The state-variance exceptions show up in how Citi and Bank of America are coded: those entries show two possible bureaus because pull behavior varies by state.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white text-left">
                    <th className="px-4 py-3 font-semibold">Issuer</th>
                    <th className="px-4 py-3 font-semibold text-right">Cards</th>
                    <th className="px-4 py-3 font-semibold">Bureau(s)</th>
                    <th className="px-4 py-3 font-semibold">Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  {S.issuerStats.map((row, i) => (
                    <tr key={row.issuer} className={`border-t border-gray-100 ${row.pullsAll3 ? 'bg-amber-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-4 py-3 font-medium text-brand-navy">{row.issuer}</td>
                      <td className="px-4 py-3 text-right">{row.cardCount}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.bureaus.join(', ')}</td>
                      <td className="px-4 py-3 text-xs text-text-secondary">
                        {row.pullsAll3
                          ? 'All 3 - freeze won\'t help'
                          : row.consistent
                            ? 'Consistent across tracked cards'
                            : 'Varies by state or card'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-display font-semibold text-lg text-brand-navy">Notable patterns</h3>
              <p className="text-base text-text-primary leading-relaxed">
                <strong>Chase:</strong> Pulls Experian on all 6 tracked cards in most states. Notes on the Sapphire Preferred and Reserve cards acknowledge some states see TransUnion. For the majority of applicants, Chase is a reliably Experian-only issuer. This makes Chase a good candidate for applying after freezing Equifax and TransUnion.
              </p>
              <p className="text-base text-text-primary leading-relaxed">
                <strong>Amex:</strong> Experian across all 4 tracked cards, but with an important nuance. Existing American Express cardholders often get a soft pull when adding a new card, not a hard pull. New-to-Amex applicants receive a hard pull. The bureau is still Experian in both cases, but the impact on your score differs.
              </p>
              <p className="text-base text-text-primary leading-relaxed">
                <strong>Citi:</strong> All 3 tracked Citi cards show Experian + Equifax, meaning Citi pulls one of those two depending on your state. You cannot freeze Experian before a Citi application without risking a denial if Citi wants Experian in your state. Freezing TransUnion before a Citi application is safe.
              </p>
              <p className="text-base text-text-primary leading-relaxed">
                <strong>Capital One:</strong> Pulls all 3 bureaus on all 3 tracked cards. This is the most frequently confirmed pattern in community data and is consistent across virtually every Capital One product. No freeze strategy helps here. A Capital One application leaves a hard inquiry on all three reports regardless.
              </p>
              <p className="text-base text-text-primary leading-relaxed">
                <strong>Barclays:</strong> TransUnion on both tracked cards. Consistently reported as TransUnion-first across the community. Freezing Experian and Equifax before a Barclays application is a viable strategy if you want to protect those bureaus.
              </p>
            </div>
          </section>

          {/* Freeze strategy */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">Freeze Strategy by Goal</h2>
            <p className="text-base text-text-primary leading-relaxed mb-6">
              The patterns above translate directly into strategic freeze decisions. Here are the most common goal-based strategies based on what this database shows.
            </p>

            <div className="space-y-6">

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-display font-semibold text-base text-brand-navy mb-2">
                  Goal: maximize Chase and Amex approvals while limiting Capital One damage
                </h3>
                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  Freeze Equifax and TransUnion. Both Chase and Amex pull primarily Experian. With the other two frozen, applications to those issuers show up only on your Experian report, leaving Equifax and TransUnion clean for future use.
                </p>
                <p className="text-sm text-text-secondary">
                  <strong>Limitation:</strong> Capital One pulls all 3 bureaus, so any Cap One application breaks through regardless. Avoid Capital One during this strategy window if protecting inquiry count matters.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-display font-semibold text-base text-brand-navy mb-2">
                  Goal: apply with Barclays or Navy Federal while keeping Experian clean
                </h3>
                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  Freeze Experian (and optionally Equifax). Barclays pulls TransUnion and Navy Federal pulls TransUnion. With Experian frozen, those applications show only on TransUnion. Experian stays untouched for Chase or Amex applications later.
                </p>
                <p className="text-sm text-text-secondary">
                  <strong>Limitation:</strong> Confirm your state-specific pull before freezing. These patterns are from the reference database, not verified data points.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-display font-semibold text-base text-brand-navy mb-2">
                  Goal: apply with PenFed while keeping Experian and TransUnion clean
                </h3>
                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  Freeze Experian and TransUnion. PenFed pulls Equifax only. With the other two frozen, the PenFed hard inquiry hits only Equifax.
                </p>
                <p className="text-sm text-text-secondary">
                  <strong>Limitation:</strong> PenFed is a single data point in this database (1 card). This is a low-confidence reference pattern.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5 border-amber-200 bg-amber-50">
                <h3 className="font-display font-semibold text-base text-brand-navy mb-2">
                  Goal: apply with Citi or BofA while targeting a specific bureau
                </h3>
                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  Citi pulls Experian or Equifax depending on state. BofA pulls Experian or TransUnion depending on state. You can freeze TransUnion before a Citi application (safe in all states). Before BofA, freezing is riskier because you need to know your state&apos;s pattern to pick the right bureau to keep open.
                </p>
                <p className="text-sm text-amber-900 font-medium">
                  State variance makes this the highest-uncertainty scenario. Check current community data for your state before freezing anything for a Citi or BofA application.
                </p>
              </div>

            </div>
          </section>

          {/* Data limitations callout */}
          <section>
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-4">What This Analysis Cannot Tell You</h2>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              This analysis is derived from 29 reference entries that have not yet been independently verified through our community submission process. The patterns are directionally useful but carry real uncertainty.
            </p>
            <p className="text-base text-text-primary leading-relaxed mb-4">
              The analysis cannot tell you what bureau your specific bank will pull in your specific state for the specific card you want today. Pull patterns change. Regional variations exist that are not captured in a single reference entry per card. Some entries in this database are two or more years old as reported in the source communities.
            </p>
            <p className="text-base text-text-primary leading-relaxed">
              The right move is to use this analysis to form a hypothesis, then check current community data on{' '}
              <a href="https://www.doctorofcredit.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-amber-600">
                Doctor of Credit
              </a>{' '}
              or{' '}
              <a href="https://www.reddit.com/r/CreditCards/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-amber-600">
                r/CreditCards
              </a>{' '}
              before you freeze anything. If you recently applied and saw which bureau was pulled, consider{' '}
              <Link href="/submit-data-point" className="text-brand-gold hover:text-amber-600 font-semibold">
                submitting a data point
              </Link>{' '}
              to help improve this database.
            </p>
          </section>

        </article>

        <div className="mt-8 bg-brand-light border border-gray-200 rounded-xl p-5">
          <p className="text-sm font-semibold text-brand-navy mb-1">See the full reference database</p>
          <Link href="/credit-pull-database" className="text-sm text-brand-gold hover:text-amber-600 font-semibold">
            Browse and filter all 29 cards &rarr;
          </Link>
        </div>

        <FinancialDisclaimer />
      </div>
    </>
  );
}
