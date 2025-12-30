"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "Go", icon: "🐹" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "⚛️" },
  { name: "Django", icon: "🎸" },
  { name: "Hyperledger", icon: "⛓️" },
  { name: "Docker", icon: "🐳" },
]

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="relative py-20 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Tech Stack
        </h2>

        {/* Auto-scrolling marquee */}
        <div
          className={`relative h-24 flex items-center overflow-hidden rounded-xl backdrop-blur-sm bg-white/[0.02] border border-white/[0.08] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="flex gap-12 whitespace-nowrap py-8 px-6"
            style={{
              animation: "marquee 18s linear infinite",
            }}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="font-medium text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
