import { NextResponse } from 'next/server';

// Public submissions are paused until there is a reviewed storage, moderation,
// retention, and abuse-prevention workflow. Do not parse or log request bodies.
export async function POST() {
  return NextResponse.json(
    { error: 'Data-point submissions are not currently available.' },
    { status: 410 }
  );
}
