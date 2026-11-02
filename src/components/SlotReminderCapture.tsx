'use client';

import { useState } from 'react';

/**
 * "Slot-opening reminder" email capture. The form POSTs directly to the
 * fleet capture table (Supabase REST) - rows land in
 * public.fleet_subscribers (PermitPulse project) with site =
 * '524tracker'. This replaced the earlier Beehiiv iframe plan on
 * 2026-11-01: Jason chose a table inside an existing project over a
 * Beehiiv upgrade or a new Supabase project.
 *
 * Configuration: set NEXT_PUBLIC_CAPTURE_ENDPOINT to the table's REST
 * URL (https://<project-ref>.supabase.co/rest/v1/fleet_subscribers) and
 * NEXT_PUBLIC_CAPTURE_KEY to that project's publishable key in the
 * deployment environment. When either is unset or malformed, this
 * component renders nothing - the feature is off and the page is
 * unchanged. The publishable key is safe to expose in the browser: the
 * table's row-level security lets this key INSERT only - it cannot
 * read the list back.
 *
 * Privacy posture: the form collects an email address only. Tracker
 * entries stay in the visitor's browser localStorage and are not
 * connected to this form. A hidden honeypot field silently drops bot
 * submissions.
 */

const CAPTURE_ENDPOINT_PATTERN =
  /^https:\/\/[a-z0-9]+\.supabase\.co\/rest\/v1\/fleet_subscribers$/;

export interface CaptureConfig {
  endpoint: string;
  key: string;
}

export function captureConfig(): CaptureConfig | null {
  const endpoint = process.env.NEXT_PUBLIC_CAPTURE_ENDPOINT?.trim() ?? '';
  const key = process.env.NEXT_PUBLIC_CAPTURE_KEY?.trim() ?? '';
  if (!CAPTURE_ENDPOINT_PATTERN.test(endpoint)) return null;
  if (!key) return null;
  return { endpoint, key };
}

type Status = 'idle' | 'submitting' | 'done' | 'already' | 'error';

export default function SlotReminderCapture() {
  const config = captureConfig();
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  if (!config) return null;
  const { endpoint, key } = config;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting' || status === 'done') return;
    // Honeypot: a filled hidden field means a bot. Pretend success and
    // drop the submission without sending anything.
    if (honeypot) {
      setStatus('done');
      return;
    }
    setStatus('submitting');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          site: '524tracker',
          email: email.trim(),
          source: window.location.pathname,
        }),
      });
      if (response.status === 201) setStatus('done');
      else if (response.status === 409) setStatus('already');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      aria-label="Email reminder signup"
      className="rounded-2xl border border-blue-200 bg-blue-50 p-6"
    >
      <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">
        Get a slot-opening reminder
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-text-primary">
        Join the free 524Tracker email list for occasional card-rule change notes and a
        reminder to re-check your count before a 24-month slot opens. This form sends
        only the email address you enter to 524Tracker&apos;s own list. Your tracker
        entries stay in this browser and are not shared with the list.
      </p>
      {status === 'done' ? (
        <p className="text-sm font-semibold text-brand-navy" role="status">
          You&apos;re on the list — we&apos;ll email when a slot is about to open or the
          rules change.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="slot-reminder-email">
            Email address
          </label>
          <input
            id="slot-reminder-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full flex-1 rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm text-text-primary"
          />
          <div
            className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label>
              Leave this field empty
              <input
                type="text"
                name="fleet_hp"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded-xl bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {status === 'submitting' ? 'Joining…' : 'Remind me'}
          </button>
        </form>
      )}
      {status === 'already' ? (
        <p className="mt-3 text-sm text-text-primary" role="status">
          That email is already on the list.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          Something went wrong — please try again.
        </p>
      ) : null}
    </section>
  );
}
