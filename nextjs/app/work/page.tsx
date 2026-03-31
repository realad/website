import type { Metadata } from 'next';
import { CTADiscovery } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Case Studies — Infrastructure Rescue & Cloud Architecture',
  description:
    'Real results from infrastructure rescue, compliance implementation, and cloud architecture projects across regulated, real-time, and high-traffic systems.',
  openGraph: {
    title: 'Case Studies | RealAd',
    description:
      '90+ audit findings resolved. 35%latency improvement. 130K concurrent users. Real infrastructure results.',
    images: [{ url: '/og-case-studies.png', width: 1200, height: 630 }],
  },
};

function ResultItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-slate-300">
      <span className="text-teal-500 shrink-0">✓</span>
      <span>{children}</span>
    </li>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm text-slate-300">{value}</dd>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero-grid py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Infrastructure problems we&apos;ve solved
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl">
            Every project is different. The pattern is the same: assess, stabilize, optimize. Here&apos;s what that
            looks like in practice.
          </p>
        </div>
      </section>

      {/* ── Case Study 1: Regulated B2B ── */}
      <section id="cs-regulated" className="py-20 lg:py-28 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
            {/* Sidebar */}
            <aside className="space-y-4 lg:border-r lg:border-slate-800 lg:pr-8">
              <MetaItem label="Industry" value="Regulated B2B SaaS" />
              <MetaItem label="Region" value="Europe" />
              <MetaItem label="Stack" value="AWS, Terraform, CI/CD" />
              <MetaItem label="Timeline" value="Ongoing (started with rescue engagement)" />
              <MetaItem label="Entry point" value="Infrastructure audit after team transition" />
            </aside>

            {/* Content */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                90+ Findings Resolved — B2B Platform Rescued in 8 Weeks
              </h2>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">The situation</h3>
                <p className="mt-3 text-slate-300">
                  A fast-growing company in a regulated industry had outpaced its infrastructure. The original DevOps
                  setup was functional but unaudited — no IaC, inconsistent environments, no compliance documentation,
                  and mounting performance complaints from enterprise clients.
                </p>
                <p className="mt-3 text-slate-300">
                  The founding team needed someone who could assess the full picture, prioritize what mattered, and fix
                  it — fast.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">What we did</h3>
                <div className="mt-4 space-y-4">
                  <div className="pl-4 border-l border-slate-700">
                    <p className="text-sm font-medium text-teal-500">Week 1–2: Comprehensive infrastructure audit</p>
                    <p className="text-slate-300 mt-1">
                      Mapped all AWS resources, networking topology, deployment pipeline. Profiled application
                      performance (API latency, database queries, compute sizing). Assessed security posture against
                      compliance requirements. Delivered written report: 90+ total findings, prioritized by severity.
                    </p>
                  </div>
                  <div className="pl-4 border-l border-slate-700">
                    <p className="text-sm font-medium text-teal-500">Week 3–8: Stabilization and remediation</p>
                    <p className="text-slate-300 mt-1">
                      Re-architected deployment across multiple availability zones. Implemented full IaC with Terraform
                      — compute, databases, networking, CDN. Integrated policy-as-code scanning into CI/CD pipeline. Set
                      up compliance management platform for ongoing security posture tracking.
                    </p>
                  </div>
                  <div className="pl-4 border-l border-slate-700">
                    <p className="text-sm font-medium text-teal-500">Ongoing: Architecture oversight</p>
                    <p className="text-slate-300 mt-1">
                      Remediation roadmap execution with the engineering team. Architecture reviews for new features.
                      Compliance posture monitoring.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">Results</h3>
                <ul className="mt-4 space-y-3">
                  <ResultItem>90+ findings catalogued → remediation roadmap with clear priorities</ResultItem>
                  <ResultItem>35% reduction in API response times after compute and query optimization</ResultItem>
                  <ResultItem>Full infrastructure-as-code — reproducible, auditable, version-controlled</ResultItem>
                  <ResultItem>Compliance controls implemented and verified</ResultItem>
                  <ResultItem>
                    Team went from &ldquo;firefighting infra&rdquo; to &ldquo;shipping features&rdquo;
                  </ResultItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study 2: Real-Time ── */}
      <section id="cs-realtime" className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
            <aside className="space-y-4 lg:border-r lg:border-slate-800 lg:pr-8">
              <MetaItem label="Industry" value="Enterprise Communications" />
              <MetaItem label="Region" value="North America" />
              <MetaItem label="Stack" value="AWS (EKS, multi-account), IaC (multiple tools)" />
              <MetaItem label="Timeline" value="12+ months" />
              <MetaItem label="Entry point" value="Rescue after infrastructure instability" />
            </aside>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Sub-100ms Latency, Zero Downtime — Real-Time Platform Rescued and Running
              </h2>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">The situation</h3>
                <p className="mt-3 text-slate-300">
                  A real-time B2B platform with strict latency requirements was struggling with infrastructure
                  reliability. Latency-sensitive workloads have zero tolerance for delays — even 50ms is noticeable to
                  end users. The existing infrastructure was built quickly and needed an experienced architect to make
                  it production-grade.
                </p>
                <p className="mt-3 text-slate-300">
                  The challenge: stateful, latency-sensitive workloads on Kubernetes, with multi-account AWS and a mix
                  of IaC tools.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">What we did</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Designed Kubernetes (EKS) architecture for platform services
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Moved latency-critical workloads to dedicated EC2 with session affinity
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Unified infrastructure-as-code across multiple tools and environments
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Built graceful session draining for zero-downtime deployments of stateful workloads
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Established full observability: metrics, dashboards, distributed tracing, log aggregation
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Managed multi-account AWS environment with consistent IaC patterns
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Protocol optimization and security hardening
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">Results</h3>
                <ul className="mt-4 space-y-3">
                  <ResultItem>Sub-100ms latency SLA maintained consistently</ResultItem>
                  <ResultItem>Zero-downtime deployments for stateful workloads</ResultItem>
                  <ResultItem>Multi-account AWS managed with unified IaC</ResultItem>
                  <ResultItem>Full observability stack — from infrastructure to application traces</ResultItem>
                  <ResultItem>Transitioned to low-overhead maintenance retainer</ResultItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study 3: Events ── */}
      <section id="cs-events" className="py-20 lg:py-28 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
            <aside className="space-y-4 lg:border-r lg:border-slate-800 lg:pr-8">
              <MetaItem label="Industry" value="Events / Entertainment" />
              <MetaItem label="Region" value="Global" />
              <MetaItem label="Stack" value="AWS (EKS, CloudFront), Kubernetes, Redis, Java" />
              <MetaItem label="Timeline" value="12 months" />
              <MetaItem label="Entry point" value="Migration from monolith to microservices" />
            </aside>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                From Monolith to 130K Concurrent Users — Zero Downtime During Live Events
              </h2>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">The situation</h3>
                <p className="mt-3 text-slate-300">
                  A multi-tenant events platform needed to handle massive traffic spikes during live campaigns. The
                  existing monolithic architecture couldn&apos;t scale, and any downtime during a live event meant
                  direct revenue loss and brand damage for the platform&apos;s enterprise clients.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">What we did</h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Migrated monolithic platform to microservices on AWS EKS with live production traffic
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Designed pre-provisioned capacity model for known peak events
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Built real-time data processing infrastructure for high-throughput event streams
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Implemented canary deployments with gradual traffic shifting — zero-downtime updates during live
                    campaigns
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    Spot instances for analytics workloads (cost optimization)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-500 shrink-0">→</span>
                    CloudFront CDN for global content delivery
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white">Results</h3>
                <ul className="mt-4 space-y-3">
                  <ResultItem>130K+ concurrent users handled during peak live events</ResultItem>
                  <ResultItem>Zero downtime during live high-traffic campaigns</ResultItem>
                  <ResultItem>Successful migration from monolith to microservices under production load</ResultItem>
                  <ResultItem>Cost-optimized with spot instances for non-critical workloads</ResultItem>
                  <ResultItem>Canary deployment pipeline — safe releases even during active campaigns</ResultItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-300">
            Every engagement starts the same way: we listen to your situation, assess whether we can help, and propose a
            concrete next step. No commitment until you&apos;ve seen our work.
          </p>
        </div>
      </section>

      <CTADiscovery />
    </main>
  );
}
