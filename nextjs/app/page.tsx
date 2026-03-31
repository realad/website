import Link from 'next/link';
import { CTADiscovery } from '@/components/cta';

const TRUST = [
  '11+ years in cloud infrastructure',
  'Every second client is a rescue',
  'Avg. client relationship: 18+ months',
  'SOC2 · ISO 27001 · HIPAA delivered',
];

const PROOF_POINTS = [
  { value: '90+', label: 'Infrastructure findings in a single audit' },
  { value: '35%', label: 'Reduction in API latency after optimization' },
  { value: '130K', label: 'Concurrent users handled at peak load' },
  { value: '<100ms', label: 'Latency SLA on real-time systems' },
  { value: '11+', label: 'Years of cloud infrastructure experience' },
  { value: 'Zero', label: 'Downtime during managed transitions' },
];

const INDUSTRIES = ['FinTech', 'HealthTech', 'SaaS / B2B', 'AI / ML Infrastructure', 'InsurTech', 'VoIP / Telecom'];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero-grid relative py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Your infrastructure is on fire.
            <br />
            We&apos;ve rescued startups exactly like yours.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl">
            For CTOs at Series A–C startups whose cloud infrastructure needs rescue, compliance implementation, or an
            experienced architect on retainer. The person on this call is the person doing the work — no hand-offs to
            juniors.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-950 bg-teal-500 rounded-lg hover:bg-teal-400 transition-colors"
            >
              Book a 30-Min Rescue Call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-slate-600 rounded-lg hover:border-teal-500 transition-colors"
            >
              See Our Case Studies
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 border-t border-slate-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2 text-sm text-slate-400">
              {TRUST.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem Recognition Triggers ── */}
      <section className="py-20 lg:py-28 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Which of these sounds like you?</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="border-l-2 border-teal-500 pl-6">
              <p className="text-lg text-slate-200 italic">
                &ldquo;Our DevOps engineer just left and we have a product launch next month.&rdquo;
              </p>
              <Link
                href="/services#rescue"
                className="mt-3 inline-flex text-sm text-teal-500 hover:text-teal-400 transition-colors"
              >
                → Infrastructure Rescue &amp; Stabilization
              </Link>
            </div>

            <div className="border-l-2 border-teal-500 pl-6">
              <p className="text-lg text-slate-200 italic">
                &ldquo;We need SOC2 for our enterprise deal, but nobody on the team knows how to implement the actual
                technical controls.&rdquo;
              </p>
              <Link
                href="/services#compliance"
                className="mt-3 inline-flex text-sm text-teal-500 hover:text-teal-400 transition-colors"
              >
                → Compliance Infrastructure
              </Link>
            </div>

            <div className="border-l-2 border-teal-500 pl-6">
              <p className="text-lg text-slate-200 italic">
                &ldquo;We need senior AWS and Kubernetes oversight, but can&apos;t justify a €100K/year full-time hire
                for 10 hours of work per week.&rdquo;
              </p>
              <Link
                href="/services#partnership"
                className="mt-3 inline-flex text-sm text-teal-500 hover:text-teal-400 transition-colors"
              >
                → Fractional Infrastructure Partner
              </Link>
            </div>
          </div>

          <p className="mt-10 text-slate-300 max-w-2xl">
            We&apos;ve seen each of these patterns multiple times. Half our clients came to us after a
            predecessor&apos;s work failed. We know how to assess the damage, stabilize fast, and stay to maintain.
          </p>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Three ways we help</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="p-6 lg:p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-teal-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white">Rescue &amp; Stabilization</h3>
              <p className="mt-3 text-slate-300">
                Your infrastructure is down, slow, or unreliable. We audit, diagnose, and fix it — typically within 2
                weeks. Then we stick around to make sure it stays fixed.
              </p>
              <Link
                href="/services#rescue"
                className="mt-4 inline-flex text-sm text-teal-500 hover:text-teal-400 transition-colors"
              >
                Learn more →
              </Link>
            </div>

            <div className="p-6 lg:p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-teal-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white">Compliance Acceleration</h3>
              <p className="mt-3 text-slate-300">
                NIS2, SOC2, ISO 27001, DORA, HIPAA — we implement the technical controls, not just the paperwork. Get
                audit-ready in weeks, not months.
              </p>
              <Link
                href="/services#compliance"
                className="mt-4 inline-flex text-sm text-teal-500 hover:text-teal-400 transition-colors"
              >
                Learn more →
              </Link>
            </div>

            <div className="p-6 lg:p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-teal-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white">Ongoing Partnership</h3>
              <p className="mt-3 text-slate-300">
                Part-time infrastructure architect on retainer. Architecture reviews, cost optimization, incident
                response, security posture — without a full-time hire.
              </p>
              <Link
                href="/services#partnership"
                className="mt-4 inline-flex text-sm text-teal-500 hover:text-teal-400 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Points ── */}
      <section className="py-16 lg:py-20 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {PROOF_POINTS.map(p => (
              <div key={p.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white">{p.value}</p>
                <p className="mt-1 text-sm text-slate-400">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">From crisis to confidence in three steps</h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <div>
              <span className="text-6xl font-bold text-teal-500/20">01</span>
              <h3 className="mt-2 text-xl font-bold text-white">Assess</h3>
              <p className="mt-3 text-slate-300">
                We start with a structured infrastructure audit. Current topology, performance profiling, security
                posture, cost analysis. You get a written report with prioritized findings — not a sales pitch.
              </p>
              <p className="mt-3 text-sm text-teal-500">1–2 weeks</p>
            </div>

            <div>
              <span className="text-6xl font-bold text-teal-500/20">02</span>
              <h3 className="mt-2 text-xl font-bold text-white">Stabilize</h3>
              <p className="mt-3 text-slate-300">
                Fix what&apos;s critical first. Reduce blast radius, patch security gaps, improve deployment
                reliability. We work alongside your team, not instead of them.
              </p>
              <p className="mt-3 text-sm text-teal-500">2–4 weeks</p>
            </div>

            <div>
              <span className="text-6xl font-bold text-teal-500/20">03</span>
              <h3 className="mt-2 text-xl font-bold text-white">Maintain</h3>
              <p className="mt-3 text-slate-300">
                Once stable, shift to ongoing support. Architecture reviews, monitoring, cost optimization, compliance
                maintenance. Low overhead, async communication, predictable monthly cost.
              </p>
              <p className="mt-3 text-sm text-teal-500">Ongoing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-16 lg:py-20 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Industries we serve</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {INDUSTRIES.map(i => (
              <span key={i} className="px-4 py-2 text-sm text-slate-300 border border-slate-700 rounded-full">
                {i}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-400 max-w-2xl">
            We work best with startups and scale-ups (Series A to C, 20–150 people) running production workloads on AWS
            or Kubernetes. If your infrastructure needs an experienced architect more than a junior DevOps hire — we
            should talk.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTADiscovery />
    </main>
  );
}
