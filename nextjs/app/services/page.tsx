import type { Metadata } from 'next';
import Link from 'next/link';
import { CTADiscovery, CTAAssessment } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Infrastructure Services — Rescue, Compliance & DevOps',
  description:
    'Infrastructure rescue and stabilization, NIS2/SOC2/ISO 27001 compliance implementation, and ongoing DevOps partnership for startups. Assessment from €3,000.',
  openGraph: {
    title: 'Infrastructure Services | RealAd',
    description:
      'Rescue broken infrastructure, implement compliance, get an ongoing DevOps partner — without a full-time hire.',
    images: [{ url: '/og-services.png', width: 1200, height: 630 }],
  },
};

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Cloud Infrastructure Consulting',
  provider: { '@type': 'Organization', name: 'RealAd' },
  areaServed: ['US', 'GB', 'DE', 'NL', 'EU'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Infrastructure Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Infrastructure Assessment',
          description: '2-week infrastructure audit with written report and prioritized findings',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Compliance Acceleration',
          description: 'Technical implementation for NIS2, SOC2, ISO 27001, DORA, HIPAA',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Infrastructure Partnership',
          description: 'Ongoing part-time infrastructure architect on monthly retainer',
        },
      },
    ],
  },
};

const COMPLIANCE_FRAMEWORKS = [
  {
    name: 'SOC2 Type I',
    scope: 'Access controls, encryption, monitoring, incident response',
    timeline: '4–6 weeks',
  },
  {
    name: 'SOC2 Type II',
    scope: 'Ongoing evidence collection + audit support',
    timeline: '3–6 months',
  },
  {
    name: 'ISO 27001',
    scope: 'ISMS implementation, risk assessment, control mapping',
    timeline: '6–10 weeks',
  },
  {
    name: 'NIS2',
    scope: 'Network security, incident reporting, supply chain risk',
    timeline: '4–8 weeks',
  },
  {
    name: 'DORA',
    scope: 'ICT risk management, incident classification, testing',
    timeline: '6–10 weeks',
  },
  {
    name: 'HIPAA',
    scope: 'PHI protection, access controls, BAA compliance',
    timeline: '4–8 weeks',
  },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-slate-300">
      <span className="text-teal-500 shrink-0">→</span>
      <span>{children}</span>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />

      {/* ── Hero ── */}
      <section className="hero-grid py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Infrastructure services for companies that ship
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl">
            Whether you need emergency rescue, compliance readiness, or a long-term infrastructure partner — we deliver
            results without the overhead of a full-time hire.
          </p>
        </div>
      </section>

      {/* ── Service 1: Rescue ── */}
      <section id="rescue" className="py-20 lg:py-28 border-t border-slate-800 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Infrastructure Rescue &amp; Stabilization</h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Your previous DevOps engineer left. Or your infrastructure was built fast and never optimized. Deployments
            are unreliable, latency is unpredictable, and your engineers spend more time debugging infrastructure than
            building product.
          </p>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            We&apos;ve seen this pattern with half our clients. We know how to fix it.
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-white">What you get</h3>
              <ul className="mt-4 space-y-3">
                <Bullet>Structured infrastructure audit (topology, performance, security, cost)</Bullet>
                <Bullet>Written report with all findings — categorized by severity and effort</Bullet>
                <Bullet>Prioritized remediation roadmap — what to fix first, what can wait</Bullet>
                <Bullet>Hands-on stabilization — we don&apos;t just advise, we implement</Bullet>
                <Bullet>Knowledge transfer — your team understands every change we make</Bullet>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">How it works</h3>
              <div className="mt-4 space-y-4">
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-sm font-medium text-teal-500">Week 1–2</p>
                  <p className="text-slate-300">
                    Assessment — we map your current state, profile performance, identify security gaps and cost waste.
                  </p>
                </div>
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-sm font-medium text-teal-500">Week 2–4</p>
                  <p className="text-slate-300">
                    Stabilization — fix critical issues, reduce blast radius, improve deployment pipeline, set up
                    monitoring.
                  </p>
                </div>
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-sm font-medium text-teal-500">Month 2+</p>
                  <p className="text-slate-300">
                    Transition to maintenance retainer or handoff to your team with full documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-xl border border-slate-800 bg-slate-900/50 max-w-3xl">
            <p className="text-slate-200 italic">
              &ldquo;In a recent engagement, our infrastructure audit uncovered 80+ findings — including critical
              security gaps and performance bottlenecks. Within 8 weeks, the team had a clear remediation roadmap and
              measurable performance improvements across the board.&rdquo;
            </p>
          </div>

          <div className="mt-8 p-5 rounded-lg border border-teal-500/20 bg-teal-500/5 inline-block">
            <p className="text-white font-medium">Infrastructure Assessment: from €3,000</p>
            <p className="text-sm text-slate-400 mt-1">
              Includes written report with all findings, priority matrix, and remediation roadmap.
            </p>
          </div>

          <div className="mt-10">
            <CTAAssessment />
          </div>
        </div>
      </section>

      {/* ── Service 2: Compliance ── */}
      <section id="compliance" className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Compliance Acceleration</h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Your enterprise prospect requires SOC2. NIS2 is mandatory for 160,000+ EU organizations. DORA applies to
            every financial entity in the EU.
          </p>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Most compliance consultants hand you a spreadsheet of requirements. We implement the actual technical
            controls — infrastructure hardening, access management, monitoring, encryption, audit logging — so your
            architecture passes the audit.
          </p>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">What you get</h3>
            <ul className="mt-4 space-y-3">
              <Bullet>Gap assessment against target framework (NIS2, SOC2, ISO 27001, DORA, HIPAA)</Bullet>
              <Bullet>Technical control implementation — not just policies, actual infrastructure changes</Bullet>
              <Bullet>Evidence collection automation — audit logs, access reviews, vulnerability scanning</Bullet>
              <Bullet>Integration with compliance platforms (Vanta, Drata, Secureframe)</Bullet>
              <Bullet>Audit preparation and support — we&apos;re there when the auditor has questions</Bullet>
            </ul>
          </div>

          {/* Frameworks table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 pr-6 font-semibold text-white">Framework</th>
                  <th className="py-3 pr-6 font-semibold text-white">Scope</th>
                  <th className="py-3 font-semibold text-white">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {COMPLIANCE_FRAMEWORKS.map(f => (
                  <tr key={f.name} className="border-b border-slate-800">
                    <td className="py-3 pr-6 font-medium text-white whitespace-nowrap">{f.name}</td>
                    <td className="py-3 pr-6 text-slate-300">{f.scope}</td>
                    <td className="py-3 text-teal-500 whitespace-nowrap">{f.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 rounded-xl border border-slate-800 bg-slate-900/50 max-w-3xl">
            <p className="text-slate-300">
              <span className="text-white font-medium">Framework overlap insight:</span> NIS2 and SOC2 share 60–70% of
              technical controls. If you need both, implementing them together saves 30–40% of effort vs doing them
              sequentially.
            </p>
          </div>

          <div className="mt-8 p-5 rounded-lg border border-teal-500/20 bg-teal-500/5 inline-block">
            <p className="text-white font-medium">Compliance Gap Assessment: from €3,500</p>
            <p className="text-sm text-slate-400 mt-1">
              Includes gap analysis against your target framework, control mapping, and implementation roadmap.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/contact?service=compliance"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-slate-950 bg-teal-500 rounded-lg hover:bg-teal-400 transition-colors"
            >
              Book a Compliance Gap Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service 3: Partnership ── */}
      <section id="partnership" className="py-20 lg:py-28 border-t border-slate-800 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ongoing Infrastructure Partnership</h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            You don&apos;t need a full-time DevOps engineer. You need an experienced architect who knows your stack,
            reviews your architecture decisions, optimizes costs, responds to incidents, and keeps your infrastructure
            secure — on a predictable monthly retainer.
          </p>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            That&apos;s what a partnership with RealAd looks like.
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-white">What&apos;s included</h3>
              <ul className="mt-4 space-y-3">
                <Bullet>Architecture reviews — evaluate design decisions before they become technical debt</Bullet>
                <Bullet>Infrastructure maintenance — updates, patches, scaling, configuration management</Bullet>
                <Bullet>Cost optimization — identify waste, right-size resources, negotiate reserved capacity</Bullet>
                <Bullet>Security posture — vulnerability scanning, access reviews, incident response planning</Bullet>
                <Bullet>On-call consultation — async via Slack, with agreed escalation path for emergencies</Bullet>
                <Bullet>
                  Quarterly infrastructure reviews — written assessment of current state and recommendations
                </Bullet>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">How the engagement works</h3>
              <div className="mt-4 space-y-4">
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-sm font-medium text-teal-500">Communication</p>
                  <p className="text-slate-300">
                    Async-first (Slack). No daily standups. Status updates when there&apos;s something worth reporting.
                  </p>
                </div>
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-sm font-medium text-teal-500">Availability</p>
                  <p className="text-slate-300">
                    CET timezone. Dedicated hours, no context-switching during your time block.
                  </p>
                </div>
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-sm font-medium text-teal-500">Reporting</p>
                  <p className="text-slate-300">
                    Monthly summary of work done, issues resolved, and recommendations. Quarterly deep review.
                  </p>
                </div>
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-sm font-medium text-teal-500">Commitment</p>
                  <p className="text-slate-300">
                    Month-to-month after initial 3-month engagement. No long-term lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-xl border border-slate-800 bg-slate-900/50 max-w-3xl">
            <p className="text-slate-200 italic">
              &ldquo;One of our long-running partnerships: a real-time communications platform with strict latency
              requirements. Infrastructure runs on Kubernetes with multi-account AWS — maintained at minimal overhead
              while the engineering team focuses entirely on product.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Choose your starting point</h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 pr-4 font-semibold text-white w-1/4" />
                  <th className="py-3 pr-4 font-semibold text-white">Rescue &amp; Stabilization</th>
                  <th className="py-3 pr-4 font-semibold text-white">Compliance Acceleration</th>
                  <th className="py-3 font-semibold text-white">Infrastructure Partnership</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3 pr-4 font-medium text-white">You need this when</td>
                  <td className="py-3 pr-4">Infrastructure is broken, slow, or unreliable</td>
                  <td className="py-3 pr-4">Enterprise buyers require SOC2 / NIS2 deadline approaching</td>
                  <td className="py-3">You need senior DevOps without a full-time hire</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 pr-4 font-medium text-white">Timeline</td>
                  <td className="py-3 pr-4">2–4 weeks</td>
                  <td className="py-3 pr-4">4–10 weeks</td>
                  <td className="py-3">Ongoing</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 pr-4 font-medium text-white">Engagement</td>
                  <td className="py-3 pr-4">Project-based</td>
                  <td className="py-3 pr-4">Project-based</td>
                  <td className="py-3">Monthly retainer</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 pr-4 font-medium text-white">Starting point</td>
                  <td className="py-3 pr-4">Infrastructure assessment</td>
                  <td className="py-3 pr-4">Compliance gap assessment</td>
                  <td className="py-3">Discovery call</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 pr-4 font-medium text-white">Deliverable</td>
                  <td className="py-3 pr-4">Audit report + implemented fixes</td>
                  <td className="py-3 pr-4">Technical controls + audit readiness</td>
                  <td className="py-3">Architecture support + quarterly reviews</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Transitions to</td>
                  <td className="py-3 pr-4">Partnership retainer</td>
                  <td className="py-3 pr-4">Ongoing compliance maintenance</td>
                  <td className="py-3">Long-term relationship</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-slate-300">
            Every engagement starts with a conversation — not a contract. Book a 30-minute discovery call to discuss
            your situation.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTADiscovery />
    </main>
  );
}
