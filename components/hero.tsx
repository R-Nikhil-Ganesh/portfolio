"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useTypewriter } from "@/hooks/use-typewriter"
import Image from "next/image"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  const typedText = useTypewriter(["Blockchain", "NLP", "AI/ML", "Full-Stack Development"], 50, 30, 2000)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div
        className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Main headline */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
                Building scalable systems with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Code & AI
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty min-h-[3em]">
              Computer Science Student passionate about{" "}
              <span className="text-cyan-400 font-semibold">
                {typedText}
                <span className="inline-block w-1 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
              </span>
            </p>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile picture on the side */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-cyan-400/30 backdrop-blur-md bg-gradient-to-br from-blue-400/20 to-cyan-300/20 shadow-lg shadow-cyan-500/20 p-1">
              <Image
                src="/professional-developer-avatar.jpg"
                alt="Profile Picture"
                width={224}
                height={224}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
