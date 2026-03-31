# Media Inventory — Assets Needed

All items below are referenced in the website content spec (`hq/company/website-content.md`)
but not yet produced. Placeholders or CSS patterns are used in their place.

## Required Before Launch

### Brand Assets
| Asset | Specs | Location | Status |
|-------|-------|----------|--------|
| `logo.svg` | Monochrome, works on dark bg | `/public/logo.svg` | MISSING |
| `favicon.ico` | 32x32 + 16x16 | `/app/favicon.ico` | Using default |

### Open Graph Images (1200x630px each)
| Asset | Description | Status |
|-------|-------------|--------|
| `og-home.png` | Dark bg, logo, tagline "Infrastructure Partner for Startups" | MISSING |
| `og-services.png` | Services page OG preview | MISSING |
| `og-case-studies.png` | Case studies OG preview | MISSING |
| `og-about.png` | About page OG preview | MISSING |
| `og-contact.png` | Contact page OG preview | MISSING |

## Nice to Have (Post-Launch)

### Hero Backgrounds (used as CSS gradient for now)
| Asset | Specs | Notes |
|-------|-------|-------|
| `hero-background.webp` | 1920x1080, <200KB | Abstract mesh/grid pattern, dark (#0f172a), teal accents. Currently replaced by CSS grid pattern. |

### Case Study Visuals (600x400px or 1200x600px)
| Asset | Description |
|-------|-------------|
| `cs-healthcare-hero` | Chaotic data flows → structured pipeline visualization |
| `cs-voip-hero` | Real-time data flow / low-latency routing visualization |
| `cs-retail-hero` | Traffic surge graph with auto-scaling nodes |

### Service Section Visuals (600x400px)
| Asset | Description |
|-------|-------------|
| `rescue-visual` | Tangled infrastructure → clean architecture diagram |
| `compliance-visual` | Shield/lock with NIS2, SOC2, ISO badges |
| `partnership-visual` | Continuous loop/cycle diagram |

### Tech Logos (monochrome, small)
| Asset | Notes |
|-------|-------|
| AWS, Kubernetes, Terraform, etc. | Currently rendered as text badges. Optional enhancement. |

## Recommendations

1. **OG images first** — these are visible in every social share and Slack unfurl
2. **Logo** — needed for nav (currently text "RealAd")  
3. **Favicon** — replace default Next.js favicon
4. **Hero visuals and case study images are optional** — CSS patterns and text-only design work well for a minimalist B2B site
