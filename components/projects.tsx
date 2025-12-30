"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AgriChain",
    description: "Hyperledger Fabric food traceability system using Go and QR codes for Farm-to-Fork tracking.",
    tech: ["Go", "Hyperledger Fabric", "QR Codes"],
    tags: ["Blockchain", "IoT"],
    span: "md:col-span-2",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Autonomous Vehicle Ecosystem",
    description: "AI-driven predictive maintenance system for vehicles using Python and real-time telemetry.",
    tech: ["Python", "Machine Learning", "Telemetry"],
    tags: ["AI/ML", "IoT"],
    span: "md:col-span-2",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "u-Snapshots",
    description: "Reddit sentiment analysis tool using Flask, VADER NLP, and Chart.js visualization.",
    tech: ["Flask", "VADER NLP", "Chart.js"],
    tags: ["NLP", "Analytics"],
    span: "md:col-span-1",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "GitTogether",
    description: "Student collaboration platform for finding hackathon teammates.",
    tech: ["TypeScript", "React", "Next.js"],
    tags: ["Community", "Web3"],
    span: "md:col-span-1",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Hostel Management",
    description: "Full-stack operations platform with room allocation and issue tracking.",
    tech: ["Django REST", "Next.js", "PostgreSQL"],
    tags: ["Full-Stack", "Operations"],
    span: "md:col-span-2",
    github: "https://github.com",
  },
]

export function Projects() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-b from-background via-background to-background/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`mb-16 space-y-4 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of full-stack and AI systems I've built, showcasing expertise across blockchain, machine
            learning, and modern web technologies.
          </p>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${project.span} relative rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-700`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Glassmorphism card background */}
              <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.08] rounded-2xl" />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300" />

              {/* Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                </div>

                {/* Tech stack, tags, and GitHub link */}
                <div className="space-y-4 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 pt-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
