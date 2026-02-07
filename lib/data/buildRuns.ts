export interface BuildStep {
  id: string;
  name: string;
  status: "success" | "failure" | "pending" | "running" | "skipped";
  duration: string;
  logs: string[];
}

export interface BuildRun {
  id: string;
  commit: {
    message: string;
    sha: string;
    author: string;
    avatar: string;
  };
  branch: string;
  status: "success" | "failure" | "pending" | "running";
  duration: string;
  startedAt: string;
  steps: BuildStep[];
}

export const buildRuns: BuildRun[] = [
  {
    id: "build-001",
    commit: {
      message: "feat: add code generation for React components",
      sha: "a1b2c3d",
      author: "sarah-chen",
      avatar: "SC",
    },
    branch: "main",
    status: "success",
    duration: "4m 32s",
    startedAt: "2 hours ago",
    steps: [
      {
        id: "step-1",
        name: "Set up job",
        status: "success",
        duration: "2s",
        logs: [
          "Current runner version: '2.311.0'",
          "Operating System: Ubuntu 22.04.3 LTS",
          "Runner Image Provisioner",
          "GITHUB_TOKEN Permissions",
        ],
      },
      {
        id: "step-2",
        name: "Checkout code",
        status: "success",
        duration: "4s",
        logs: [
          "Syncing repository: architect/design-platform",
          "Getting Git version info",
          "Temporarily overriding HOME='/home/runner/work/_temp/...'",
          "Checking out the ref",
          "/usr/bin/git log -1 --format='%H'",
          "'a1b2c3de4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9'",
        ],
      },
      {
        id: "step-3",
        name: "Setup Node.js",
        status: "success",
        duration: "8s",
        logs: [
          "Found in cache @ /opt/hostedtoolcache/node/20.10.0/x64",
          "Environment details:",
          "  node: v20.10.0",
          "  npm: 10.2.3",
          "  yarn: 1.22.21",
        ],
      },
      {
        id: "step-4",
        name: "Install dependencies",
        status: "success",
        duration: "1m 23s",
        logs: [
          "npm ci",
          "added 1847 packages in 1m 23s",
          "231 packages are looking for funding",
          "run `npm fund` for details",
        ],
      },
      {
        id: "step-5",
        name: "Run tests",
        status: "success",
        duration: "2m 12s",
        logs: [
          "> architect@0.1.0 test",
          "> jest --ci --coverage",
          "",
          "PASS src/components/Canvas/Canvas.test.tsx",
          "PASS src/lib/codegen/react.test.ts",
          "PASS src/lib/diagram/system.test.ts",
          "  ✓ should generate React component from diagram (45ms)",
          "  ✓ should handle nested components (23ms)",
          "  ✓ should generate TypeScript types (18ms)",
          "",
          "Test Suites: 47 passed, 47 total",
          "Tests:       312 passed, 312 total",
          "Snapshots:   12 passed, 12 total",
          "Time:        2m 12s",
        ],
      },
      {
        id: "step-6",
        name: "Build application",
        status: "success",
        duration: "43s",
        logs: [
          "> architect@0.1.0 build",
          "> next build",
          "",
          "info  - Loaded env from .env.production",
          "info  - Creating an optimized production build...",
          "info  - Compiled successfully",
          "info  - Linting and checking validity of types...",
          "info  - Collecting page data...",
          "info  - Generating static pages (0/15)",
          "info  - Generating static pages (7/15)",
          "info  - Generating static pages (15/15)",
          "info  - Finalizing page optimization...",
          "",
          "Route (pages)                              Size     First Load JS",
          "┌ ○ /                                      85.2 kB         156 kB",
          "├ ○ /roadmap                               12.4 kB         142 kB",
          "├ ○ /build-log                             8.9 kB          138 kB",
          "└ ○ /404                                   3.1 kB          132 kB",
          "",
          "○  (Static)  automatically rendered as static HTML",
        ],
      },
      {
        id: "step-7",
        name: "Deploy to production",
        status: "success",
        duration: "1m 2s",
        logs: [
          "Deploying to Vercel...",
          "Vercel CLI 33.0.0",
          "🔍  Inspect: https://vercel.com/architect/design-platform/...",
          "✅  Production: https://architect.design",
          "",
          "Build completed successfully! 🚀",
        ],
      },
    ],
  },
  {
    id: "build-002",
    commit: {
      message: "fix: resolve SVG rendering issue in Safari",
      sha: "e5f6g7h",
      author: "alex-martinez",
      avatar: "AM",
    },
    branch: "hotfix/svg-safari",
    status: "success",
    duration: "3m 45s",
    startedAt: "5 hours ago",
    steps: [
      {
        id: "step-1",
        name: "Set up job",
        status: "success",
        duration: "2s",
        logs: ["Current runner version: '2.311.0'"],
      },
      {
        id: "step-2",
        name: "Checkout code",
        status: "success",
        duration: "3s",
        logs: ["Checking out hotfix branch..."],
      },
      {
        id: "step-3",
        name: "Install dependencies",
        status: "success",
        duration: "1m 15s",
        logs: ["npm ci completed"],
      },
      {
        id: "step-4",
        name: "Run tests",
        status: "success",
        duration: "1m 48s",
        logs: ["All tests passing"],
      },
      {
        id: "step-5",
        name: "Build application",
        status: "success",
        duration: "38s",
        logs: ["Build successful"],
      },
      {
        id: "step-6",
        name: "Deploy to production",
        status: "success",
        duration: "59s",
        logs: ["Deployed!"],
      },
    ],
  },
  {
    id: "build-003",
    commit: {
      message: "feat: implement real-time collaboration cursor",
      sha: "i8j9k0l",
      author: "jordan-park",
      avatar: "JP",
    },
    branch: "feature/live-cursors",
    status: "failure",
    duration: "2m 18s",
    startedAt: "1 day ago",
    steps: [
      {
        id: "step-1",
        name: "Set up job",
        status: "success",
        duration: "2s",
        logs: ["Current runner version: '2.311.0'"],
      },
      {
        id: "step-2",
        name: "Checkout code",
        status: "success",
        duration: "4s",
        logs: ["Checked out"],
      },
      {
        id: "step-3",
        name: "Install dependencies",
        status: "success",
        duration: "1m 12s",
        logs: ["Dependencies installed"],
      },
      {
        id: "step-4",
        name: "Run tests",
        status: "failure",
        duration: "58s",
        logs: [
          "FAIL src/components/Collab/Cursor.test.tsx",
          "  ● should sync cursor position between users",
          "",
          "    expect(received).toBe(expected)",
          "",
          "    Expected: { x: 100, y: 200 }",
          "    Received: { x: 0, y: 0 }",
          "",
          "      45 |     await waitFor(() => {",
          "      46 |       expect(cursor.position).toBe({ x: 100, y: 200 });",
          "    > 47 |     });",
          "",
          "Test Suites: 1 failed, 46 passed, 47 total",
          "Tests:       1 failed, 311 passed, 312 total",
        ],
      },
      {
        id: "step-5",
        name: "Build application",
        status: "skipped",
        duration: "—",
        logs: ["Skipped due to test failure"],
      },
      {
        id: "step-6",
        name: "Deploy to production",
        status: "skipped",
        duration: "—",
        logs: ["Skipped"],
      },
    ],
  },
  {
    id: "build-004",
    commit: {
      message: "chore: update dependencies and security patches",
      sha: "m2n3o4p",
      author: "taylor-wong",
      avatar: "TW",
    },
    branch: "main",
    status: "success",
    duration: "4m 12s",
    startedAt: "2 days ago",
    steps: [],
  },
  {
    id: "build-005",
    commit: {
      message: "docs: update API documentation for code generation",
      sha: "q6r7s8t",
      author: "morgan-lee",
      avatar: "ML",
    },
    branch: "docs/api-codegen",
    status: "success",
    duration: "2m 5s",
    startedAt: "3 days ago",
    steps: [],
  },
];
