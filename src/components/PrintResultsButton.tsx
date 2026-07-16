'use client';

export function PrintResultsButton({ label = 'Print Results' }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-gold bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      title="Print these results or save them as a PDF"
    >
      {label}
    </button>
  );
}
