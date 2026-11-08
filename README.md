# 🚀 Animated Hero Section

A high-performance, fully responsive, and accessible Hero Section built with Next.js App Router, Tailwind CSS, shadcn/ui, and Framer Motion. 

This project was built as a weekly milestone to master modern frontend animation orchestration, component modularity, and accessibility standards.

---

## ✨ Features

- **Responsive Design:** Optimized for all screen sizes ranging from mobile devices (375px) to large desktop monitors.
- **Staggered Text & Element Reveal:** Smooth entry animations for badges, headings, subheadings, and CTAs using custom reusable motion containers[cite: 1].
- **Interactive Gestures:** Fluid button hover and tap scaling effects (`whileHover`, `whileTap`) for rich user feedback[cite: 1].
- **Accessibility (`prefers-reduced-motion`):** Automatically respects user system preferences to reduce or disable animations for users prone to motion sensitivity[cite: 1].
- **Server/Client Architecture:** Clean separation where the root page acts as a Server Component while animations are isolated inside modular client-side wrapper components.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (`motion/react`)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
animated-hero-section/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx              # Pure Server Component (Main Hero View)
├── components/
│   ├── animations/
│   │   └── motion-container.tsx # Client-side reusable FadeIn & ScaleIn wrappers
│   └── ui/
│       └── button.tsx        # shadcn/ui button component
├── package.json
└── README.md