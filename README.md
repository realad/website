# RealAd Website & Infrastructure Monorepo

This is the official open-source monorepo for the **RealAd Software Development and Technical Partner Company** website.

## 📦 Structure

This monorepo is managed with [`pnpm`](https://pnpm.io) workspaces and contains two main packages:

- `nextjs/` – The corporate website built with **Next.js**
- `pulumi/` – Infrastructure as code using **Pulumi** and **AWS**

## 🎯 Purpose

This repository serves as a **real-world development case study** demonstrating:

- Modern **infrastructure-as-code (IaC)** using Pulumi
- Best practices for building and deploying a **Next.js corporate site**
- Integration with **AWS Amplify** for CI/CD
- Clean and maintainable **monorepo** setup using `pnpm`

It also acts as a companion resource for Medium articles published by the RealAd team, detailing the architecture, process, and lessons learned.

## 🛠️ Getting Started

Copy and configure Pulumi stack files:

```bash
cd pulumi
cp Pulumi.yaml.example Pulumi.yaml
cp Pulumi.prod.yaml.example Pulumi.prod.yaml
cd ..
```

Edit them with your values or configure via:

```bash
cd pulumi
pulumi login s3://your-state-bucket
pulumi config set aws:region us-east-1
pulumi config set pulumi:domain yourdomain.com
cd ..
```

Install dependencies:

```bash
pnpm install
```

Preview Pulumi infrastructure:

```bash
pnpm pulumi:preview
```

Develop the website locally:

```bash
pnpm nextjs:dev
```

## 📚 Related Articles

We’ll be publishing a series of posts on Medium covering:

<!-- BLOG-POST-LIST:START -->
- [Mastering AWS Lambda Functions: Best Practices with TypeScript &lpar;2025&rpar;](https://kochuraa.medium.com/mastering-aws-lambda-functions-best-practices-with-typescript-2025-ee9e82327019?source=rss-1366808c6d1a------2)
- [Choosing the Right Programming Language for Your Service](https://kochuraa.medium.com/choosing-the-right-programming-language-for-your-service-94d366185c8b?source=rss-1366808c6d1a------2)
- [How a One-Hour Intro Call Saved a Client $17,000: When AI-Generated Code Meets Human Expertise](https://kochuraa.medium.com/how-a-one-hour-intro-call-saved-a-client-17-000-when-ai-generated-code-meets-human-expertise-62313b535833?source=rss-1366808c6d1a------2)
- [Regions, Availability Zones, and Edge Networks: Building Resilient Applications on AWS](https://kochuraa.medium.com/regions-availability-zones-and-edge-networks-building-resilient-applications-on-aws-234cbcb3af1c?source=rss-1366808c6d1a------2)
- [The 50-Line Infrastructure Blueprint: Deploy Next.js Applications on AWS Amplify with Pulumi](https://kochuraa.medium.com/the-50-line-infrastructure-blueprint-deploy-next-js-applications-on-aws-amplify-with-pulumi-8eb1f5495804?source=rss-1366808c6d1a------2)
<!-- BLOG-POST-LIST:END -->

## 🧑‍💻 About RealAd

RealAd is a software development and technical partner company helping startups, scale-ups, and enterprises bring their ideas to life — with a focus on socially impactful and technically sound solutions.

Visit us at [realad.io](https://realad.io) to learn more about our services and how we can help you.

---

> 📝 This repository is part of our ongoing initiative to share real-world engineering patterns and promote open knowledge in the developer community.
