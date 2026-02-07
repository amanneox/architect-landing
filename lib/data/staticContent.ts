// Static content extracted for Server Component usage
// This avoids client-side store overhead for static data

export const staticContent = {
  brand: {
    name: "architect",
    tagline: "Visualize. Architect. Ship.",
    appUrl: "https://app.architect.design",
  },

  navItems: [
    { label: "roadmap", href: "/roadmap" },
    { label: "build log", href: "/build-log" },
    { label: "docs", href: "/docs" },
  ],

  hero: {
    label: "Software Architecture Platform",
    headline: "Blueprint your",
    headlineAccent: "system",
    description:
      "The visual design tool for software architects and engineering teams. Design system diagrams, map user flows, and generate production-ready code.",
    primaryCta: {
      label: "start architecting",
      href: "https://app.architect.design/sign-up",
    },
    secondaryCta: {
      label: "explore the roadmap",
      href: "/roadmap",
    },
  },

  logoBar: {
    label: "Trusted by engineering teams at",
    partners: [
      { name: "Stripe", iconName: "building-2" },
      { name: "Notion", iconName: "home" },
      { name: "Figma", iconName: "landmark" },
      { name: "Linear", iconName: "factory" },
      { name: "Vercel", iconName: "castle" },
      { name: "Supabase", iconName: "warehouse" },
      { name: "PlanetScale", iconName: "hotel" },
      { name: "Railway", iconName: "school" },
      { name: "Render", iconName: "store" },
    ],
  },

  roadmap: {
    label: "Platform Roadmap",
    headline: "Building the",
    headlineAccent: "stack",
    description:
      "See what's coming next and help shape the platform. From diagrams to deployable code, we're building the complete architecture toolkit.",
    illustration: "/images/illustrations/roadmap-hero.svg",
    illustrationAlt: "/images/illustrations/roadmap-stacked.svg",
    cta: {
      label: "view roadmap",
      href: "/roadmap",
    },
  },

  quote: {
    label: "Engineering Philosophy",
    text: '"Good software architecture is invisible until it matters. We build tools that help you see the structure, understand the flow, and ship with confidence."',
    author: {
      name: "The Architect Team",
      title: "Built by engineers, for engineers",
    },
  },

  features: {
    label: "Latest Updates",
    cards: [
      {
        id: "build-log",
        title: "what's new in Architect",
        description:
          "Code generation from diagrams, OpenAPI export, React component output, and TypeScript definitions",
        image: "/images/illustrations/feature-build-log.svg",
        link: {
          label: "build log",
          href: "/build-log",
          icon: "file-text",
        },
      },
      {
        id: "shaders",
        title: "system diagrams at scale",
        description:
          "How we built infinite canvas performance for complex microservices and system architecture",
        image: "/images/illustrations/feature-shaders.svg",
        link: {
          label: "read",
          href: "/blog/system-diagrams",
          icon: "shapes",
        },
      },
    ],
    miniFeatures: [
      { label: "Code Generation", description: "React, Vue, OpenAPI" },
      { label: "Git Sync", description: "Version your diagrams" },
      { label: "Real-time Collab", description: "Design with your team" },
      { label: "Version History", description: "Never lose work" },
    ],
  },

  footer: {
    description:
      "The visual platform for software architects and engineering teams. Design systems, generate code, ship faster.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/features" },
          { label: "Roadmap", href: "/roadmap" },
          { label: "Changelog", href: "/build-log" },
          { label: "Pricing", href: "/pricing" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Tutorials", href: "/tutorials" },
          { label: "API Reference", href: "/api" },
          { label: "Community", href: "/community" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    socials: [
      { label: "Twitter", href: "https://twitter.com", external: true },
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "Discord", href: "https://discord.gg", external: true },
      { label: "Email", href: "mailto:hello@architect.design", external: true },
    ],
    copyright: "© 2026 Architect. All rights reserved.",
  },
} as const;

// Type exports for Server Components
export type StaticContent = typeof staticContent;
