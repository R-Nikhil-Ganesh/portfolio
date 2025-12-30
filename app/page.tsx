"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { ConnectSection } from "@/components/connect-section"

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <About />
        <section id="projects">
          <Projects />
        </section>
        <TechStack />
        <section id="connect">
          <ConnectSection />
        </section>
      </div>
    </main>
  )
}
