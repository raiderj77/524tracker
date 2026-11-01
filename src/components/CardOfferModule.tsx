import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import {
  getCardLink,
  offerCardsCompare,
  offerCardsOver524,
  offerCardsUnder524,
  type OfferCard,
} from '@/lib/affiliateUrls';

export type CardOfferVariant = 'slots-open' | 'over-threshold' | 'compare';

const variantContent: Record<
  CardOfferVariant,
  { heading: string; intro: string; cards: OfferCard[] }
> = {
  'slots-open': {
    heading: 'Researching a next card?',
    intro:
      'Your reference count is below the commonly reported 5/24 threshold. If you are comparing cards, the issuer pages below list current offers and terms. 524Tracker does not rank cards or predict application decisions, so treat these as starting points and confirm the current offer with the issuer.',
    cards: offerCardsUnder524,
  },
  'over-threshold': {
    heading: 'At or over the reference count?',
    intro:
      'The 5/24 pattern in community reports concerns Chase applications. Other issuers publish their own application rules and current offers on their own sites. If you are researching cards from other issuers, start with the issuer pages below and review each issuer\u2019s current terms directly.',
    cards: offerCardsOver524,
  },
  compare: {
    heading: 'Comparing a different card?',
    intro:
      'If the card you are valuing is not the one you keep, the issuer pages below list current offers and terms for several widely held cards. 524Tracker does not rank cards or predict application decisions; confirm the current offer with the issuer.',
    cards: offerCardsCompare,
  },
};

/**
 * Card-offer module used by the tracker results state, the card value
 * calculator, and the rules guide. Links resolve through
 * src/lib/affiliateUrls.ts: affiliate network URLs when configured,
 * issuer pages otherwise. No card terms, rates, or bonuses are stated
 * here - the issuer page is the source for current offers.
 */
export default function CardOfferModule({ variant }: { variant: CardOfferVariant }) {
  const content = variantContent[variant];

  return (
    <section
      aria-label="Card offers from issuers"
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">
        {content.heading}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-text-primary">{content.intro}</p>
      <ul className="divide-y divide-gray-100">
        {content.cards.map((card) => {
          const link = getCardLink(card.slug);
          const external = link.url.startsWith('http');
          return (
            <li key={card.slug} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text-primary">{card.name}</p>
                <p className="text-xs text-text-secondary">
                  {card.bank} &middot; {card.category}
                </p>
              </div>
              <a
                href={link.url}
                {...(external
                  ? {
                      target: '_blank',
                      rel: link.isAffiliate
                        ? 'nofollow sponsored noopener noreferrer'
                        : 'noopener noreferrer',
                    }
                  : {})}
                data-affiliate-card={card.slug}
                data-affiliate-bank={card.bank}
                className="inline-flex min-h-[44px] shrink-0 items-center rounded-lg border border-brand-gold px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-amber-50"
              >
                View current offer
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 border-t border-gray-100 pt-3">
        <AffiliateDisclosure />
      </div>
    </section>
  );
}
