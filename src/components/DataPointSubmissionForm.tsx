'use client';

import { useState, useId } from 'react';

const ISSUERS = ['Chase', 'Amex', 'Citi', 'BofA', 'Capital One', 'Barclays', 'US Bank', 'Wells Fargo', 'Discover', 'Navy Federal', 'PenFed', 'Other'];
const BUREAUS = ['Experian', 'Equifax', 'TransUnion'] as const;
const SOURCES = [
  'I applied and saw the inquiry',
  'I read it on r/CreditCards',
  'I read it on FlyerTalk',
  'Other',
] as const;
const STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
];
const MONTHS = [
  { value: '01', label: 'January' }, { value: '02', label: 'February' }, { value: '03', label: 'March' },
  { value: '04', label: 'April' }, { value: '05', label: 'May' }, { value: '06', label: 'June' },
  { value: '07', label: 'July' }, { value: '08', label: 'August' }, { value: '09', label: 'September' },
  { value: '10', label: 'October' }, { value: '11', label: 'November' }, { value: '12', label: 'December' },
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 4 }, (_, i) => String(currentYear - i));

interface FormState {
  issuer: string;
  cardName: string;
  bureausPulled: string[];
  state: string;
  applicationMonth: string;
  applicationYear: string;
  sourceProof: string;
  sourceUrl: string;
  notes: string;
}

const EMPTY_FORM: FormState = {
  issuer: '',
  cardName: '',
  bureausPulled: [],
  state: '',
  applicationMonth: '',
  applicationYear: '',
  sourceProof: '',
  sourceUrl: '',
  notes: '',
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.issuer) errors.issuer = 'Select an issuer.';
  if (!form.cardName.trim() || form.cardName.trim().length < 2) errors.cardName = 'Enter the card name.';
  if (form.bureausPulled.length === 0) errors.bureausPulled = 'Select at least one bureau.';
  if (!form.state) errors.state = 'Select your state.';
  if (!form.applicationMonth) errors.applicationMonth = 'Select the application month.';
  if (!form.applicationYear) errors.applicationYear = 'Select the application year.';
  if (!form.sourceProof) errors.sourceProof = 'Select your source.';
  if (form.notes.length > 500) errors.notes = 'Notes must be 500 characters or fewer.';
  return errors;
}

const inputClass = 'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-primary focus:border-brand-gold focus:ring-1 focus:ring-brand-gold';
const errorClass = 'mt-1 text-xs text-red-600';
const labelClass = 'block text-sm font-semibold text-brand-navy mb-1';

export default function DataPointSubmissionForm() {
  const uid = useId();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (fieldErrors[key]) {
      setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function toggleBureau(bureau: string) {
    const next = form.bureausPulled.includes(bureau)
      ? form.bureausPulled.filter((b) => b !== bureau)
      : [...form.bureausPulled, bureau];
    setField('bureausPulled', next);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/submit-data-point', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
        setForm(EMPTY_FORM);
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800 mb-2">Data point received.</p>
        <p className="text-sm text-green-700 leading-relaxed">
          Thank you. Your data point will be reviewed and added to the database after verification by additional submissions.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-brand-gold hover:text-amber-600 font-semibold underline underline-offset-2"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Issuer */}
      <div>
        <label htmlFor={`${uid}-issuer`} className={labelClass}>Issuer</label>
        <select
          id={`${uid}-issuer`}
          value={form.issuer}
          onChange={(e) => setField('issuer', e.target.value)}
          className={inputClass}
        >
          <option value="">Select issuer...</option>
          {ISSUERS.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
        {fieldErrors.issuer && <p className={errorClass}>{fieldErrors.issuer}</p>}
      </div>

      {/* Card name */}
      <div>
        <label htmlFor={`${uid}-card`} className={labelClass}>Card name</label>
        <input
          id={`${uid}-card`}
          type="text"
          placeholder="e.g. Sapphire Preferred"
          value={form.cardName}
          onChange={(e) => setField('cardName', e.target.value)}
          className={inputClass}
        />
        {fieldErrors.cardName && <p className={errorClass}>{fieldErrors.cardName}</p>}
      </div>

      {/* Bureau(s) pulled */}
      <fieldset>
        <legend className={labelClass}>Bureau(s) pulled</legend>
        <div className="flex flex-wrap gap-4 mt-1">
          {BUREAUS.map((bureau) => (
            <label key={bureau} className="flex items-center gap-2 text-sm text-text-primary cursor-pointer">
              <input
                type="checkbox"
                checked={form.bureausPulled.includes(bureau)}
                onChange={() => toggleBureau(bureau)}
                className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold"
              />
              {bureau}
            </label>
          ))}
        </div>
        {fieldErrors.bureausPulled && <p className={errorClass}>{fieldErrors.bureausPulled}</p>}
      </fieldset>

      {/* State */}
      <div>
        <label htmlFor={`${uid}-state`} className={labelClass}>State of application</label>
        <select
          id={`${uid}-state`}
          value={form.state}
          onChange={(e) => setField('state', e.target.value)}
          className={inputClass}
        >
          <option value="">Select state...</option>
          {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {fieldErrors.state && <p className={errorClass}>{fieldErrors.state}</p>}
      </div>

      {/* Application date */}
      <div>
        <span className={labelClass}>Application date</span>
        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor={`${uid}-month`} className="sr-only">Month</label>
            <select
              id={`${uid}-month`}
              value={form.applicationMonth}
              onChange={(e) => setField('applicationMonth', e.target.value)}
              className={inputClass}
            >
              <option value="">Month...</option>
              {MONTHS.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
            {fieldErrors.applicationMonth && <p className={errorClass}>{fieldErrors.applicationMonth}</p>}
          </div>
          <div className="flex-1">
            <label htmlFor={`${uid}-year`} className="sr-only">Year</label>
            <select
              id={`${uid}-year`}
              value={form.applicationYear}
              onChange={(e) => setField('applicationYear', e.target.value)}
              className={inputClass}
            >
              <option value="">Year...</option>
              {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
            {fieldErrors.applicationYear && <p className={errorClass}>{fieldErrors.applicationYear}</p>}
          </div>
        </div>
      </div>

      {/* Source proof */}
      <fieldset>
        <legend className={labelClass}>How do you know this?</legend>
        <div className="space-y-2 mt-1">
          {SOURCES.map((src) => (
            <label key={src} className="flex items-start gap-2 text-sm text-text-primary cursor-pointer">
              <input
                type="radio"
                name={`${uid}-source`}
                value={src}
                checked={form.sourceProof === src}
                onChange={() => setField('sourceProof', src)}
                className="mt-0.5 border-gray-300 text-brand-gold focus:ring-brand-gold"
              />
              {src}
            </label>
          ))}
        </div>
        {fieldErrors.sourceProof && <p className={errorClass}>{fieldErrors.sourceProof}</p>}
      </fieldset>

      {/* Source URL (optional) */}
      <div>
        <label htmlFor={`${uid}-url`} className={labelClass}>
          Source URL <span className="font-normal text-text-secondary">(optional)</span>
        </label>
        <input
          id={`${uid}-url`}
          type="url"
          placeholder="https://..."
          value={form.sourceUrl}
          onChange={(e) => setField('sourceUrl', e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Notes (optional) */}
      <div>
        <label htmlFor={`${uid}-notes`} className={labelClass}>
          Notes <span className="font-normal text-text-secondary">(optional, 500 char max)</span>
        </label>
        <textarea
          id={`${uid}-notes`}
          rows={3}
          placeholder="Any state-specific details, soft vs. hard pull notes, etc."
          value={form.notes}
          onChange={(e) => setField('notes', e.target.value)}
          maxLength={500}
          className={`${inputClass} resize-none`}
        />
        <p className="mt-1 text-xs text-text-secondary text-right">{form.notes.length}/500</p>
        {fieldErrors.notes && <p className={errorClass}>{fieldErrors.notes}</p>}
      </div>

      {serverError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm text-red-700">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
      >
        {submitting ? 'Submitting...' : 'Submit data point'}
      </button>
    </form>
  );
}
