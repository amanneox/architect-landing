import { StateCreator } from "zustand";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Partner {
  name: string;
  iconName: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface ContentSlice {
  // Brand
  brand: {
    name: string;
    tagline: string;
    appUrl: string;
  };

  // Navigation
  navItems: NavItem[];

  // Hero content
  hero: {
    label: string;
    headline: string;
    headlineAccent: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };

  // Logo bar
  logoBar: {
    label: string;
    partners: Partner[];
  };

  // Roadmap section
  roadmap: {
    label: string;
    headline: string;
    headlineAccent: string;
    description: string;
    illustration: string;
    cta: {
      label: string;
      href: string;
    };
  };

  // Quote section
  quote: {
    label: string;
    text: string;
    author: {
      name: string;
      title: string;
    };
  };

  // Features section
  features: {
    label: string;
    cards: {
      id: string;
      title: string;
      description: string;
      image: string;
      link: {
        label: string;
        href: string;
        icon: string;
      };
    }[];
    miniFeatures: {
      label: string;
      description: string;
    }[];
  };

  // Roadmap page
  roadmapPage: {
    label: string;
    headline: string;
    headlineAccent: string;
    description: string;
    phases: {
      id: string;
      name: string;
      date: string;
      status: "completed" | "in-progress" | "planned";
      description: string;
      illustration: string;
      features: {
        id: string;
        title: string;
        description?: string;
      }[];
    }[];
    cta: { label: string; href: string };
  };

  // Footer
  footer: {
    description: string;
    columns: FooterColumn[];
    socials: NavItem[];
    copyright: string;
  };
}

export const createContentSlice: StateCreator<ContentSlice> = () => ({
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

  roadmapPage: {
    label: "Product Roadmap",
    headline: "Designing the",
    headlineAccent: "future",
    description:
      "See how we're building the ultimate tool for software architects and designers. From system diagrams to user flows, we're crafting the blueprint for better software.",
    phases: [
      {
        id: "diagram",
        name: "System Diagrams",
        date: "Q4 2025",
        status: "completed",
        description:
          "The core canvas for visualizing software architecture. We've built the foundation for creating system diagrams, flowcharts, and technical documentation with precision.",
        illustration: "/images/illustrations/roadmap-foundation.svg",
        features: [
          { id: "canvas", title: "Infinite Canvas", description: "Pan and zoom with 60fps performance" },
          { id: "shapes", title: "Smart Shapes", description: "Auto-resizing containers and connectors" },
          { id: "snapping", title: "Flow Alignment", description: "Intelligent node snapping and routing" },
          { id: "symbols", title: "Symbol Library", description: "AWS, Azure, GCP, and standard icons" },
        ],
      },
      {
        id: "logic",
        name: "Logic & Flows",
        date: "Q1 2026",
        status: "in-progress",
        description:
          "Mapping the logic that powers applications. We're adding user flows, state machines, decision trees, and the tools to visualize complex business logic.",
        illustration: "/images/illustrations/roadmap-structure.svg",
        features: [
          { id: "userflows", title: "User Flows", description: "End-to-end journey mapping" },
          { id: "state", title: "State Machines", description: "Visual state transitions and events" },
          { id: "sequence", title: "Sequence Diagrams", description: "API and service interactions" },
          { id: "erd", title: "Database Schema", description: "Entity relationships and models" },
        ],
      },
      {
        id: "prototype",
        name: "Interactive Prototypes",
        date: "Q2 2026",
        status: "planned",
        description:
          "Bring designs to life with interactive prototypes. Connect screens, add transitions, and simulate the full user experience before writing code.",
        illustration: "/images/illustrations/roadmap-facade.svg",
        features: [
          { id: "wireframes", title: "Wireframing", description: "Low to high fidelity screens" },
          { id: "links", title: "Interactive Links", description: "Clickable hotspots and transitions" },
          { id: "data", title: "Data Binding", description: "Real data in prototypes" },
          { id: "preview", title: "Live Preview", description: "Test on device instantly" },
        ],
      },
      {
        id: "generate",
        name: "Code Generation",
        date: "Q3 2026",
        status: "planned",
        description:
          "Turn designs into production-ready code. Generate React components, API specs, database schemas, and documentation directly from your diagrams.",
        illustration: "/images/illustrations/roadmap-generate.svg",
        features: [
          { id: "react", title: "React Export", description: "Components with Tailwind CSS" },
          { id: "api", title: "API Specs", description: "OpenAPI from sequence diagrams" },
          { id: "sql", title: "SQL Generation", description: "Schemas from ER diagrams" },
          { id: "docs", title: "Documentation", description: "Auto-generated technical docs" },
        ],
      },
    ],
    cta: {
      label: "Share your ideas",
      href: "mailto:feedback@architect.design",
    },
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
});
