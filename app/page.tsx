import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code } from "lucide-react";
import Link from "next/link";
import { FadeIn, HoverTap } from "@/components/animations/motion-container";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger";

export default function Page() {
  return (
    // min-h-svh: mobile address bar ke saath bhi sahi height
    // py-16 sm:py-24: content ko upar/neeche saans lene ki jagah
    <main className="relative min-h-svh flex items-center justify-center overflow-hidden bg-slate-950 text-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Background Glowing Orbs using FadeIn */}
      <FadeIn
        delay={0.1}
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        {/* Mobile par chhota orb aur kam blur (performance) */}
        <div className="w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] bg-indigo-600/15 blur-[90px] sm:blur-[140px] rounded-full" />
      </FadeIn>

      <StaggerContainer className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Badge */}
        <StaggerItem>
          <div className="inline-flex max-w-full items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs sm:text-sm font-medium text-center shadow-inner">
            <Sparkles className="w-4 h-4 shrink-0 text-indigo-400" />
            <span>Weekly Project: Animated Hero Section</span>
          </div>
        </StaggerItem>

        {/* Main Heading */}
        <StaggerItem>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
            Crafting Digital <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Masterpieces in Motion.
            </span>
          </h1>
        </StaggerItem>

        {/* Subheading */}
        <StaggerItem>
          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-400 font-normal leading-relaxed text-pretty">
            A high-performance, fully responsive hero section built with Next.js
            App Router, Tailwind CSS, and reusable modular animation wrappers.
          </p>
        </StaggerItem>

        {/* CTA Buttons with Scale/Hover effect */}
        <StaggerItem>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <HoverTap className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 gap-2 text-base font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
              >
                <Link href="#explore">
                  Explore Work <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </HoverTap>

            <HoverTap className="w-full sm:w-auto">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 gap-2 text-base font-semibold border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-200"
              >
                <Link
                  href="https://github.com/asusrogg73sw/week-1-animated-hero-section"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="w-4 h-4" /> GitHub Repo
                </Link>
              </Button>
            </HoverTap>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </main>
  );
}