import Link from 'next/link';

/**
 * Short-form affiliate disclosure shown with every card-offer module.
 * The full disclosure lives at /affiliate-disclosure.
 */
export default function AffiliateDisclosure() {
  return (
    <p className="text-xs leading-relaxed text-text-secondary">
      <strong className="font-semibold text-text-primary">Affiliate disclosure:</strong>{' '}
      Some outbound card links on this page are affiliate links. If a visitor applies
      through one and is approved, the site operator may earn a commission from the
      issuer or its affiliate network, at no additional cost to the applicant. Offers
      and terms change; confirm the current offer on the issuer&apos;s site before
      applying. Read the{' '}
      <Link href="/affiliate-disclosure" className="underline underline-offset-2">
        full affiliate disclosure
      </Link>
      .
    </p>
  );
}
