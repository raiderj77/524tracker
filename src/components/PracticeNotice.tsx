import Link from 'next/link';

export default function PracticeNotice() {
  return (
    <aside
      aria-label="Important 5/24 limitation"
      className="border-b border-amber-200 bg-amber-50 text-amber-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 text-sm leading-relaxed sm:px-6 lg:px-8">
        <strong>Important:</strong> “5/24” is a community-observed Chase application
        practice, not a policy published or guaranteed by Chase. This site organizes dates; it
        cannot determine eligibility or approval odds.{' '}
        <Link href="/editorial-policy" className="font-semibold underline underline-offset-2">
          See our evidence policy
        </Link>
        .
      </div>
    </aside>
  );
}
