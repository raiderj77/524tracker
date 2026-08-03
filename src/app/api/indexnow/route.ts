import { NextResponse } from 'next/server';

function retired() {
  return NextResponse.json(
    {
      error: 'This public submission endpoint is retired. Indexing notifications run only from trusted deployment automation.',
    },
    { status: 410 }
  );
}

export async function POST() {
  return retired();
}

export async function GET() {
  return retired();
}
