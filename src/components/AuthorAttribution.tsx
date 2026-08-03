import Link from 'next/link';

export default function AuthorAttribution() {
  return (
    <p className="text-xs text-text-secondary mt-6 mb-1 max-w-3xl mx-auto px-4 leading-relaxed">
      Written and maintained by{' '}
      <Link href="/about" className="font-semibold underline underline-offset-2">
        Jason Ramirez
      </Link>
      , creator of 524Tracker. Jason writes from personal credit-rebuilding and software-building
      experience; he is not a licensed financial advisor or credit counselor.
    </p>
  );
}
