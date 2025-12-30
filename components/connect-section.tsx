"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ConnectSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation()

  const contacts = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: "GitHub",
      color: "hover:text-white hover:border-white",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "LinkedIn",
      color: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: "✉️",
      color: "hover:text-cyan-400 hover:border-cyan-400",
    },
    {
      name: "Phone",
      href: "tel:+1234567890",
      icon: "📞",
      color: "hover:text-purple-400 hover:border-purple-400",
    },
  ]

  return (
    <section className="relative py-20 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Interested in collaborating or discussing my work? Feel free to reach out through any of the channels
              below.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
              gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {contacts.map((contact, index) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 p-6 rounded-lg backdrop-blur-sm bg-white/[0.02] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.05] hover:shadow-lg ${contact.color}`}
                style={{
                  transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="text-4xl">{contact.icon}</div>
                <span className="font-medium text-foreground">{contact.name}</span>
                <span className="text-xs text-muted-foreground group-hover:text-current transition-colors">
                  {contact.name === "Email" && "your.email@example.com"}
                  {contact.name === "Phone" && "+1 (234) 567-890"}
                  {contact.name === "GitHub" && "github.com/yourprofile"}
                  {contact.name === "LinkedIn" && "linkedin.com/in/yourprofile"}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <p className="text-sm text-muted-foreground">
              © 2025 Full Stack & AI Engineer. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
