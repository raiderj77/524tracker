'use client';

/**
 * "Slot-opening reminder" email capture, following the pattern already
 * live on Creator Revenue Calculator: a Beehiiv subscribe form embedded
 * by URL, rendered only when the form URL is configured.
 *
 * Configuration: set NEXT_PUBLIC_BEEHIIV_FORM_URL to the publication's
 * subscribe-form URL (https://subscribe-forms.beehiiv.com/v3/forms/<id>)
 * in the deployment environment. When the variable is unset or does not
 * match that shape, this component renders nothing - the feature is off
 * and the page is unchanged. Creating the Beehiiv publication and form
 * is an account action for the site owner; see
 * docs/AFFILIATE_PROGRAMS_2026-11-01.md.
 *
 * Privacy posture: the form collects an email address only, handled by
 * Beehiiv. Tracker entries stay in the visitor's browser localStorage
 * and are not connected to this form.
 */

const BEEHIIV_FORM_URL_PATTERN =
  /^https:\/\/subscribe-forms\.beehiiv\.com\/v3\/forms\/[0-9a-fA-F-]{36}$/;

export function beehiivFormUrl(): string | null {
  const value = process.env.NEXT_PUBLIC_BEEHIIV_FORM_URL?.trim() ?? '';
  return BEEHIIV_FORM_URL_PATTERN.test(value) ? value : null;
}

export default function SlotReminderCapture() {
  const formUrl = beehiivFormUrl();
  if (!formUrl) return null;

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
        reminder to re-check your count before a 24-month slot opens. Signups are handled
        by Beehiiv, which receives only the email address entered in this form. Your
        tracker entries stay in this browser and are not shared with the list.
      </p>
      <iframe
        src={formUrl}
        title="Subscribe to 524Tracker email reminders via Beehiiv"
        loading="lazy"
        className="h-[320px] w-full rounded-xl border border-blue-100 bg-white"
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
      />
    </section>
  );
}
