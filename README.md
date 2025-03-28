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
<!-- BLOG-POST-LIST:END -->

## 🧑‍💻 About RealAd

RealAd is a software development and technical partner company helping startups, scale-ups, and enterprises bring their ideas to life — with a focus on socially impactful and technically sound solutions.

Visit us at [realad.io](https://realad.io) to learn more about our services and how we can help you.

---

> 📝 This repository is part of our ongoing initiative to share real-world engineering patterns and promote open knowledge in the developer community.
