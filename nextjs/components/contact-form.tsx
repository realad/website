'use client';

import { useState, type FormEvent } from 'react';

const SERVICE_OPTIONS = [
  'Infrastructure rescue / stabilization',
  'Compliance (NIS2, SOC2, ISO 27001, DORA)',
  'Ongoing infrastructure support',
  'Infrastructure assessment / audit',
  'Something else',
];

const SPEND_OPTIONS = ['Under €1,000', '€1,000–5,000', '€5,000–20,000', '€20,000+'];

const inputClass =
  'mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Website inquiry: ${fd.get('service') || 'General'}`);
    const body = encodeURIComponent(
      [
        `Name: ${fd.get('name')}`,
        `Email: ${fd.get('email')}`,
        fd.get('company') ? `Company: ${fd.get('company')}` : '',
        `Service: ${fd.get('service')}`,
        fd.get('spend') ? `Monthly cloud spend: ${fd.get('spend')}` : '',
        '',
        (fd.get('message') as string) || '',
      ]
        .filter(Boolean)
        .join('\n'),
    );

    window.location.href = `mailto:hello@realad.io?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-8 text-center">
        <p className="text-lg font-medium text-white">Opening your email client...</p>
        <p className="mt-2 text-sm text-slate-400">
          If it doesn&apos;t open, email us directly at{' '}
          <a href="mailto:hello@realad.io" className="text-teal-500 hover:text-teal-400">
            hello@realad.io
          </a>
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 text-sm text-slate-400 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300">
          Name *
        </label>
        <input type="text" id="name" name="name" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Email *
        </label>
        <input type="email" id="email" name="email" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-300">
          Company <span className="text-slate-500">(optional)</span>
        </label>
        <input type="text" id="company" name="company" className={inputClass} />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-300">
          What do you need help with? *
        </label>
        <select id="service" name="service" required className={inputClass}>
          <option value="">Select...</option>
          {SERVICE_OPTIONS.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="spend" className="block text-sm font-medium text-slate-300">
          Monthly cloud spend <span className="text-slate-500">(optional)</span>
        </label>
        <select id="spend" name="spend" className={inputClass}>
          <option value="">Not sure</option>
          {SPEND_OPTIONS.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Tell us more <span className="text-slate-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What's your current stack? What's broken? What's the timeline?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 text-base font-medium text-slate-950 bg-teal-500 rounded-lg hover:bg-teal-400 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
