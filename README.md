# Animated Hero Section

Weekly project: a high-performance, fully responsive, accessible hero built with Next.js App Router, Tailwind CSS, shadcn/ui, and Motion.

**Live demo:** [https://week-1-animated-hero-section.vercel.app](https://week-1-animated-hero-section.vercel.app)

---

## Features

- **Responsive layout:** Checked from 375px phones up to large desktops.
- **Staggered reveal:** Badge, heading, subheading, and CTAs animate in via `variants` + `staggerChildren` (no manual per-item delays).
- **Gestures:** CTA scale uses Motion `whileHover` / `whileTap`, not CSS `hover:scale`.
- **Reduced motion:** `useReducedMotion()` skips travel/scale when the user prefers less motion.
- **Server/Client split:** `app/page.tsx` stays a Server Component; animation lives in small `"use client"` wrappers.

---

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **UI:** [shadcn/ui](https://ui.shadcn.com/) `Button`
- **Animation:** [Motion](https://motion.dev/) (`motion/react`)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Variants snippet

Parent owns `initial` / `animate`. Children only declare `variants` — they inherit the `"hidden"` → `"show"` trigger. `staggerChildren` spaces each child by `0.15s`.

```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.div variants={container} initial="hidden" animate="show">
  <motion.div variants={item}>{/* badge */}</motion.div>
  <motion.div variants={item}>{/* heading */}</motion.div>
  <motion.div variants={item}>{/* subheading */}</motion.div>
  <motion.div variants={item}>{/* CTAs */}</motion.div>
</motion.div>
```

If a child also sets `transition={{ delay: 1 }}`, that delay is **added** to the stagger offset (`1 + index * 0.15`). The sequence does not stop; that item just starts later.

---

## Project structure

```text
animated-hero-section/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx                     # Server Component (hero)
├── components/
│   ├── animations/
│   │   ├── stagger.tsx              # StaggerContainer + StaggerItem
│   │   └── motion-container.tsx     # FadeIn, ScaleIn, HoverTap
│   └── ui/
│       └── button.tsx
├── package.json
└── README.md
```

---

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
