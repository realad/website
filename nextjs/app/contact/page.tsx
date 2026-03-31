import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact RealAd — Book a Discovery Call',
  description:
    'Book a 30-minute discovery call to discuss your infrastructure challenges. Or request an infrastructure assessment directly.',
  openGraph: {
    title: 'Contact RealAd',
    description: "Let's talk about your infrastructure. Book a discovery call or request an assessment.",
    images: [{ url: '/og-contact.png', width: 1200, height: 630 }],
  },
};

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can you start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For emergency situations, we can begin within 48 hours. For planned engagements, typical onboarding takes 3-5 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work on-site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work remotely, based in Spain (CET timezone). All communication is async-first via Slack, with video calls as needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project-based pricing for assessments and compliance sprints. Monthly retainer for ongoing partnerships. We discuss specifics during the discovery call based on your scope and needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cloud platforms do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primarily AWS (10+ years of experience). We also work with DigitalOcean and Azure. Most of our clients run on AWS.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size companies do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Typically startups and scale-ups with 20-150 people, Series A through C. Large enough to have production infrastructure, small enough that a full-time senior DevOps hire isn't practical.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work alongside our existing team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely — that's how most of our engagements work. We integrate with your team's workflow, review PRs, join architecture discussions, and transfer knowledge so your team grows stronger.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    q: 'How quickly can you start?',
    a: 'For emergency situations, we can begin within 48 hours. For planned engagements, typical onboarding takes 3–5 business days.',
  },
  {
    q: 'Do you work on-site?',
    a: 'We work remotely, based in Spain (CET timezone). All communication is async-first via Slack, with video calls as needed.',
  },
  {
    q: 'How does pricing work?',
    a: 'Project-based pricing for assessments and compliance sprints. Monthly retainer for ongoing partnerships. We discuss specifics during the discovery call — pricing depends on scope, timeline, and complexity.',
  },
  {
    q: 'What cloud platforms do you support?',
    a: 'Primarily AWS — we have 10+ years of hands-on experience across dozens of services. We also work with DigitalOcean and Azure. Most of our clients run on AWS.',
  },
  {
    q: 'What size companies do you work with?',
    a: "Typically startups and scale-ups with 20–150 people, Series A through C. Large enough to have real production infrastructure, small enough that a full-time senior DevOps hire isn't practical or cost-effective.",
  },
  {
    q: 'Can you work alongside our existing team?',
    a: "That's how most of our engagements work. We integrate with your team's workflow — review PRs, join architecture discussions, share context. The goal is to make your team stronger, not to create a dependency.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />

      {/* ── Hero ── */}
      <section className="hero-grid py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white max-w-4xl leading-tight text-pretty">
            Let&apos;s talk about your infrastructure
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl">
            Book a 30-minute discovery call, or tell us what you need and we&apos;ll get back to you within one business
            day.
          </p>
        </div>
      </section>

      {/* ── Contact Options ── */}
      <section className="py-20 lg:py-28 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Option A: Book directly */}
            <div>
              <h2 className="text-2xl font-bold text-white">Book directly</h2>
              <p className="mt-4 text-slate-300">
                Schedule a 30-minute infrastructure call. We&apos;ll discuss your situation, assess whether we can help,
                and propose a concrete next step.
              </p>

              {/* TODO: Replace with Calendly/Cal.com embed */}
              <div className="mt-8 p-8 rounded-xl border border-dashed border-slate-700 bg-slate-900/30 text-center">
                <p className="text-slate-400 text-sm">Booking calendar coming soon</p>
                <a
                  href="mailto:hello@realad.io?subject=Discovery%20Call%20Request"
                  className="mt-4 inline-flex items-center px-6 py-3 text-base font-medium text-slate-950 bg-teal-500 rounded-lg hover:bg-teal-400 transition-colors"
                >
                  Book a Rescue Call
                </a>
              </div>

              <div className="mt-8 p-5 rounded-lg border border-slate-800 bg-slate-900/50">
                <p className="text-sm text-slate-400">
                  Or email us directly:{' '}
                  <a href="mailto:hello@realad.io" className="text-teal-500 hover:text-teal-400">
                    hello@realad.io
                  </a>
                </p>
                <p className="text-sm text-slate-500 mt-1">Response time: within 1 business day.</p>
              </div>
            </div>

            {/* Option B: Send a message */}
            <div>
              <h2 className="text-2xl font-bold text-white">Send a message</h2>
              <p className="mt-4 text-slate-300 mb-8">Tell us about your situation and we&apos;ll get back to you.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-pretty">Frequently asked questions</h2>

          <div className="mt-10 divide-y divide-slate-800">
            {FAQ_ITEMS.map(item => (
              <details key={item.q} className="group">
                <summary className="flex items-center justify-between py-5 cursor-pointer text-white hover:text-teal-400 transition-colors">
                  <span className="text-lg font-medium pr-4">{item.q}</span>
                  <svg
                    className="faq-chevron h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="pb-5 text-slate-300 pr-8">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
