import type { Metadata } from 'next';
import { CTADiscovery } from '@/components/cta';

export const metadata: Metadata = {
  title: 'About RealAd — Infrastructure Partner for Startups',
  description:
    'RealAd is a B2B infrastructure partner based in Europe. 11+ years of cloud architecture, DevOps, and compliance experience. We rescue, secure, and maintain.',
  openGraph: {
    title: 'About RealAd',
    description:
      'B2B infrastructure partner. 11+ years across AWS, Kubernetes, Terraform, and compliance frameworks. Based in Europe, serving globally.',
    images: [{ url: '/og-about.png', width: 1200, height: 630 }],
  },
};

const TECH = [
  { category: 'Cloud Platforms', items: ['AWS (10+ years)', 'DigitalOcean', 'Azure'] },
  { category: 'Container Orchestration', items: ['Kubernetes (EKS, DOKS)', 'ECS Fargate', 'Docker'] },
  { category: 'Infrastructure as Code', items: ['Terraform', 'Terragrunt', 'OpenTofu', 'Pulumi'] },
  { category: 'Observability', items: ['Prometheus', 'Grafana', 'Jaeger', 'Axiom', 'CloudWatch'] },
  { category: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'ArgoCD'] },
  { category: 'Languages', items: ['Go', 'TypeScript', 'Python', 'Java', 'HCL', 'Bash'] },
  { category: 'Compliance', items: ['SOC2', 'ISO 27001', 'NIS2', 'DORA', 'HIPAA'] },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero-grid py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white max-w-4xl leading-tight text-pretty">
            Built by an engineer, for engineering teams
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl">
            RealAd is an infrastructure consultancy that does the work — not a firm that tells you what work to do.
          </p>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="py-20 lg:py-28 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-pretty">Why RealAd exists</h2>
          <div className="mt-8 max-w-3xl space-y-4 text-lg text-slate-300">
            <p>
              RealAd was founded on a simple observation: startups don&apos;t need a full-time DevOps team — they need
              the right architect at the right time.
            </p>
            <p>
              Over 11+ years, our founder progressed from software development through enterprise cloud architecture to
              technical leadership — building and rescuing infrastructure across telecom, healthcare, fintech, VoIP, and
              retail.
            </p>
            <p>
              The pattern kept repeating: a company would build infrastructure fast, outgrow it, lose the person who
              built it, and need someone to come in, understand the system, and make it reliable. Half of our clients
              came to us exactly this way — after a predecessor&apos;s work failed or they left without documentation.
            </p>
            <p>
              RealAd exists to be that partner. Not a body shop. Not an agency. A technical partner who understands your
              infrastructure as well as the person who built it — often better.
            </p>
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-pretty">How we think about infrastructure</h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <div className="p-6 lg:p-8 rounded-xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-xl font-bold text-white">Assess before you build</h3>
              <p className="mt-3 text-slate-300">
                We never start by writing code. Every engagement begins with understanding what exists, what works, what
                doesn&apos;t, and why. The audit report pays for itself — even if you never hire us again.
              </p>
            </div>

            <div className="p-6 lg:p-8 rounded-xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-xl font-bold text-white">Infrastructure as code, always</h3>
              <p className="mt-3 text-slate-300">
                If it&apos;s not in Terraform, it doesn&apos;t exist. Every resource, every configuration, every network
                rule — version-controlled, reviewable, reproducible. No click-ops, no snowflake servers.
              </p>
            </div>

            <div className="p-6 lg:p-8 rounded-xl border border-slate-800 bg-slate-900/50">
              <h3 className="text-xl font-bold text-white">Security is infrastructure</h3>
              <p className="mt-3 text-slate-300">
                Compliance isn&apos;t a checklist you complete after launch. It&apos;s how you design from day one —
                encryption, access controls, audit logging, vulnerability scanning. We build it in, not bolt it on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className="py-20 lg:py-28 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-pretty">Technology</h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TECH.map(group => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{group.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm text-slate-300 border border-slate-700 rounded-md bg-slate-900/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="py-16 lg:py-20 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Where we work</h2>
          <div className="mt-4 max-w-2xl space-y-3 text-slate-300">
            <p>
              Based in Spain (CET timezone). Working remotely with clients across the US, UK, Germany, Netherlands,
              Nordics, and the rest of the EU.
            </p>
            <p>
              Communication: async-first via Slack. Dedicated time blocks for each client — no context-switching during
              your hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTADiscovery />
    </main>
  );
}
