import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { getServiceLink } from '@/lib/affiliateUrls';

/**
 * Compact credit-monitoring placement for the rules guide. Renders nothing
 * unless NEXT_PUBLIC_AFFILIATE_WALLETHUB holds a valid https URL (see
 * getServiceLink in src/lib/affiliateUrls.ts). Copy is limited to what
 * WalletHub offers for free; no approval, savings, or score claims.
 */
export default function CreditMonitoringModule() {
  const link = getServiceLink('wallethub');
  if (!link) return null;

  return (
    <section
      aria-label="Free credit monitoring"
      className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">
        Keeping an eye on your credit while older accounts age out?
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-text-primary">
        If you are waiting for older openings to fall outside the 5/24 reference window, a free
        monitoring service can help you watch your credit in the meantime. WalletHub offers a free
        credit score and a free credit report with daily updates. It is a third-party service, not
        a replacement for your official free reports at AnnualCreditReport.com, and it cannot tell
        you how any issuer will treat an application.
      </p>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-text-primary">WalletHub &middot; Free credit score and report</p>
        <a
          href={link.url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          data-affiliate-service={link.slug}
          className="inline-flex min-h-[44px] shrink-0 items-center rounded-lg border border-brand-gold px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-amber-50"
        >
          Visit WalletHub
        </a>
      </div>
      <div className="mt-4 border-t border-gray-100 pt-3">
        <AffiliateDisclosure />
      </div>
    </section>
  );
}
