"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  const skills = {
    Languages: ["Python", "Go", "TypeScript", "JavaScript", "SQL"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
    Backend: ["Django", "Node.js", "Flask", "REST APIs"],
    Tools: ["Docker", "Hyperledger Fabric", "Git", "PostgreSQL"],
    Specializations: ["Full-Stack Development", "NLP", "Blockchain", "AI/ML"],
  }

  const experiences = [
    {
      title: "EEC - ML Research Intern",
      description: "Focused on building deliverable ML based projects.",
      year: "Present",
    },
    {
      title: "Gingr - Web Intern",
      description: "Built end-to-end solutions using modern tech stacks and best practices",
      year: "2025 September - 2025 November",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate computer science student bridging the gap between innovative ideas and scalable implementations
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left: Bio & Experiences */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Computer Science student passionate about leveraging technology to solve real-world problems. With
                expertise spanning full-stack development, blockchain systems, and natural language processing, I'm
                driven by the challenge of building scalable, efficient systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey combines academic rigor with practical experience in enterprise-level projects. I thrive in
                collaborative environments and am committed to clean code, architectural excellence, and continuous
                learning.
              </p>
            </div>

            {/* Experiences */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Journey</h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-lg p-5 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                    </div>
                    <span className="text-xs font-mono text-primary whitespace-nowrap ml-4">{exp.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-border/50">
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
