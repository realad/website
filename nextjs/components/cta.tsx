import Link from 'next/link';

export function CTADiscovery() {
  return (
    <section className="py-20 lg:py-28 border-t border-slate-800">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">Let&apos;s talk about your infrastructure</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Book a 30-minute discovery call. We&apos;ll discuss your current challenges and whether we&apos;re a good fit.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-slate-950 bg-teal-500 rounded-lg hover:bg-teal-400 transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTAAssessment() {
  return (
    <section className="py-20 lg:py-28 border-t border-slate-800">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">Start with an infrastructure audit</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          A 2-week assessment of your current architecture. You get a written report with prioritized findings — whether
          we continue working together or not.
        </p>
        <div className="mt-8">
          <Link
            href="/contact?service=assessment"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-slate-950 bg-teal-500 rounded-lg hover:bg-teal-400 transition-colors"
          >
            Request an Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
