'use client';

import { useState, useMemo } from 'react';

type Bureau = 'Experian' | 'Equifax' | 'TransUnion';

interface PullData {
  issuer: string;
  card: string;
  bureaus: Bureau[];
  notes: string;
  lastVerified: string;
}

const PULL_DATA: PullData[] = [
  { issuer: 'Chase', card: 'Sapphire Preferred', bureaus: ['Experian'], notes: 'Most states; some states TU', lastVerified: 'March 2026' },
  { issuer: 'Chase', card: 'Sapphire Reserve', bureaus: ['Experian'], notes: 'Most states; some states TU', lastVerified: 'March 2026' },
  { issuer: 'Chase', card: 'Freedom Flex', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'Chase', card: 'Freedom Unlimited', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'Chase', card: 'Ink Preferred', bureaus: ['Experian'], notes: 'Business cards; most states', lastVerified: 'March 2026' },
  { issuer: 'Chase', card: 'Ink Cash', bureaus: ['Experian'], notes: 'Business cards; most states', lastVerified: 'March 2026' },
  { issuer: 'Amex', card: 'Platinum', bureaus: ['Experian'], notes: 'Soft pull for existing customers, hard for new', lastVerified: 'March 2026' },
  { issuer: 'Amex', card: 'Gold', bureaus: ['Experian'], notes: 'Soft pull for existing customers', lastVerified: 'March 2026' },
  { issuer: 'Amex', card: 'Blue Cash Preferred', bureaus: ['Experian'], notes: '', lastVerified: 'March 2026' },
  { issuer: 'Amex', card: 'Delta SkyMiles Gold', bureaus: ['Experian'], notes: '', lastVerified: 'March 2026' },
  { issuer: 'Citi', card: 'Strata Premier', bureaus: ['Experian', 'Equifax'], notes: 'Varies by state', lastVerified: 'March 2026' },
  { issuer: 'Citi', card: 'Custom Cash', bureaus: ['Experian', 'Equifax'], notes: 'Varies by state', lastVerified: 'March 2026' },
  { issuer: 'Citi', card: 'Double Cash', bureaus: ['Experian', 'Equifax'], notes: 'Varies by state', lastVerified: 'March 2026' },
  { issuer: 'BofA', card: 'Customized Cash', bureaus: ['Experian', 'TransUnion'], notes: 'Varies by state', lastVerified: 'March 2026' },
  { issuer: 'BofA', card: 'Premium Rewards', bureaus: ['Experian', 'TransUnion'], notes: 'Varies by state', lastVerified: 'March 2026' },
  { issuer: 'BofA', card: 'Travel Rewards', bureaus: ['Experian', 'TransUnion'], notes: 'Varies by state', lastVerified: 'March 2026' },
  { issuer: 'Capital One', card: 'Venture X', bureaus: ['Experian', 'Equifax', 'TransUnion'], notes: 'Pulls all 3 bureaus; cannot avoid with freeze', lastVerified: 'March 2026' },
  { issuer: 'Capital One', card: 'Venture', bureaus: ['Experian', 'Equifax', 'TransUnion'], notes: 'Pulls all 3 bureaus', lastVerified: 'March 2026' },
  { issuer: 'Capital One', card: 'SavorOne', bureaus: ['Experian', 'Equifax', 'TransUnion'], notes: 'Pulls all 3 bureaus', lastVerified: 'March 2026' },
  { issuer: 'Barclays', card: 'AAdvantage Aviator Red', bureaus: ['TransUnion'], notes: 'Primarily TU', lastVerified: 'March 2026' },
  { issuer: 'Barclays', card: 'JetBlue Plus', bureaus: ['TransUnion'], notes: 'Primarily TU', lastVerified: 'March 2026' },
  { issuer: 'US Bank', card: 'Altitude Reserve', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'US Bank', card: 'Cash+', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'Wells Fargo', card: 'Autograph', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'Wells Fargo', card: 'Autograph Journey', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'Wells Fargo', card: 'Active Cash', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'Discover', card: 'it Cash Back', bureaus: ['Experian'], notes: 'Most states', lastVerified: 'March 2026' },
  { issuer: 'Navy Federal', card: 'More Rewards', bureaus: ['TransUnion'], notes: 'Credit union', lastVerified: 'March 2026' },
  { issuer: 'PenFed', card: 'Pathfinder', bureaus: ['Equifax'], notes: 'Credit union', lastVerified: 'March 2026' },
];

const ISSUERS = ['All', 'Chase', 'Amex', 'Citi', 'BofA', 'Capital One', 'Barclays', 'US Bank', 'Wells Fargo', 'Discover', 'Navy Federal', 'PenFed'] as const;
const BUREAUS: ('All' | Bureau)[] = ['All', 'Experian', 'Equifax', 'TransUnion'];

const BUREAU_COLORS: Record<Bureau, string> = {
  Experian: 'bg-blue-100 text-blue-800 border-blue-200',
  Equifax: 'bg-green-100 text-green-800 border-green-200',
  TransUnion: 'bg-purple-100 text-purple-800 border-purple-200',
};

export default function CreditPullClient() {
  const [issuerFilter, setIssuerFilter] = useState<string>('All');
  const [bureauFilter, setBureauFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const filtered = useMemo(() => {
    return PULL_DATA.filter((row) => {
      if (issuerFilter !== 'All' && row.issuer !== issuerFilter) return false;
      if (bureauFilter !== 'All' && !row.bureaus.includes(bureauFilter as Bureau)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !row.card.toLowerCase().includes(q) &&
          !row.issuer.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [issuerFilter, bureauFilter, search]);

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 min-w-0">
          <label htmlFor="cpd-issuer" className="block text-xs font-semibold text-text-secondary mb-1">
            Issuer
          </label>
          <select
            id="cpd-issuer"
            value={issuerFilter}
            onChange={(e) => setIssuerFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          >
            {ISSUERS.map((issuer) => (
              <option key={issuer} value={issuer}>{issuer}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-0">
          <label htmlFor="cpd-bureau" className="block text-xs font-semibold text-text-secondary mb-1">
            Bureau
          </label>
          <select
            id="cpd-bureau"
            value={bureauFilter}
            onChange={(e) => setBureauFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          >
            {BUREAUS.map((bureau) => (
              <option key={bureau} value={bureau}>{bureau}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-0">
          <label htmlFor="cpd-search" className="block text-xs font-semibold text-text-secondary mb-1">
            Search
          </label>
          <input
            id="cpd-search"
            type="text"
            placeholder="Search card or issuer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary placeholder:text-gray-400 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
          />
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-text-secondary">
        Showing {filtered.length} of {PULL_DATA.length} cards
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-navy text-white text-left">
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Issuer</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Card</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Bureau(s)</th>
              <th className="px-4 py-3 font-semibold">Notes</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Last Verified</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-text-secondary">
                  No cards match your filters. Try adjusting your search or filter criteria.
                </td>
              </tr>
            ) : (
              filtered.map((row, i) => {
                const allThree = row.bureaus.length === 3;
                return (
                  <tr
                    key={`${row.issuer}-${row.card}`}
                    className={`border-t border-gray-100 ${
                      allThree
                        ? 'bg-amber-50'
                        : i % 2 === 0
                          ? 'bg-white'
                          : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-brand-navy whitespace-nowrap">
                      {row.issuer}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{row.card}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {row.bureaus.map((bureau) => (
                          <span
                            key={bureau}
                            className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${BUREAU_COLORS[bureau]}`}
                          >
                            {bureau}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-secondary text-xs">
                      {row.notes || '\u2014'}
                    </td>
                    <td className="px-4 py-3 text-xs text-text-secondary whitespace-nowrap">
                      {row.lastVerified}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
