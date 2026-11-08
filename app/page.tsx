import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code } from "lucide-react";
import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/animations/motion-container";

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-slate-50 px-4 sm:px-6 lg:px-8">
      {/* Background Glowing Orbs using FadeIn */}
      <FadeIn
        delay={0.1}
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-indigo-600/15 blur-[140px] rounded-full" />
      </FadeIn>

      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Badge */}
        <FadeIn delay={0.15}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Weekly Project: Animated Hero Section</span>
          </div>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={0.25}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Crafting Digital <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Masterpieces in Motion.
            </span>
          </h1>
        </FadeIn>

        {/* Subheading */}
        <FadeIn delay={0.35}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-400 font-normal leading-relaxed">
            A high-performance, fully responsive hero section built with Next.js
            App Router, Tailwind CSS, and reusable modular animation wrappers.
          </p>
        </FadeIn>

        {/* CTA Buttons with Scale/Hover effect */}
        <FadeIn delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <ScaleIn delay={0.5} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2 text-base font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-transform hover:scale-105 active:scale-95"
              >
                <Link href="#explore">
                  Explore Work <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScaleIn>

            <ScaleIn delay={0.55} className="w-full sm:w-auto">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 text-base font-semibold border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-200 transition-transform hover:scale-105 active:scale-95"
              >
                <Link href="https://github.com" target="_blank">
                  <Code className="w-4 h-4" /> GitHub Repo
                </Link>
              </Button>
            </ScaleIn>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
