import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter: max 5 submissions per hour per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) {
    return false;
  }

  entry.count += 1;
  return true;
}

// Periodically clean up expired entries to prevent unbounded memory growth
function pruneRateLimitMap() {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}

const ISSUERS = ['Chase', 'Amex', 'Citi', 'BofA', 'Capital One', 'Barclays', 'US Bank', 'Wells Fargo', 'Discover', 'Navy Federal', 'PenFed', 'Other'];
const BUREAUS = ['Experian', 'Equifax', 'TransUnion'];
const SOURCES = ['I applied and saw the inquiry', 'I read it on r/CreditCards', 'I read it on FlyerTalk', 'Other'];

export async function POST(req: NextRequest) {
  pruneRateLimitMap();

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { issuer, cardName, bureausPulled, state, applicationMonth, applicationYear, sourceProof, sourceUrl, notes } = body as Record<string, unknown>;

  // Validate required fields
  const errors: string[] = [];

  if (!issuer || !ISSUERS.includes(issuer as string)) {
    errors.push('issuer: must be one of the supported issuers');
  }
  if (!cardName || typeof cardName !== 'string' || (cardName as string).trim().length < 2) {
    errors.push('cardName: required');
  }
  if (!Array.isArray(bureausPulled) || (bureausPulled as string[]).length === 0 || !(bureausPulled as string[]).every((b) => BUREAUS.includes(b))) {
    errors.push('bureausPulled: must select at least one valid bureau');
  }
  if (!state || typeof state !== 'string' || (state as string).trim().length < 2) {
    errors.push('state: required');
  }
  if (!applicationMonth || typeof applicationMonth !== 'string') {
    errors.push('applicationMonth: required');
  }
  if (!applicationYear || typeof applicationYear !== 'string') {
    errors.push('applicationYear: required');
  }
  if (!sourceProof || !SOURCES.includes(sourceProof as string)) {
    errors.push('sourceProof: must select a valid source');
  }
  if (notes && typeof notes === 'string' && (notes as string).length > 500) {
    errors.push('notes: must be 500 characters or fewer');
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join('; ') }, { status: 422 });
  }

  const submission = {
    issuer,
    cardName: (cardName as string).trim(),
    bureausPulled,
    state,
    applicationMonth,
    applicationYear,
    sourceProof,
    sourceUrl: sourceUrl ? (sourceUrl as string).trim() : null,
    notes: notes ? (notes as string).trim() : null,
    submittedAt: new Date().toISOString(),
  };

  // TODO: Send email notification when email infrastructure is configured.
  // Suggested: nodemailer via SMTP_HOST/SMTP_USER/SMTP_PASS env vars, or Resend via RESEND_API_KEY.
  // Target: affiliates@yourfriendlydeveloper.com
  // For now, logging to console (visible in Vercel function logs).
  console.log('[submit-data-point] New submission:', JSON.stringify(submission, null, 2));

  return NextResponse.json({ success: true });
}
