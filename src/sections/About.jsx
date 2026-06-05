import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import HoloCard, { LBrackets, Scanlines, ScanBeam } from "../components/ui/HoloCard";

const stats = [
  { icon: Code2, value: "1+",  label: "Years Experience", accent: "#8b5cf6" },
  { icon: Rocket, value: "5+", label: "Projects Completed", accent: "#06b6d4" },
];

const About = () => {
  const { personal } = portfolioData;

  return (
    <Section id="about" title="About Me" subtitle="Get to know me better — my journey, passion, and what drives me." centered>
      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

        {/* Avatar Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow blobs */}
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid rgba(139,92,246,0.3)" }}>
            {/* Corner brackets */}
            <LBrackets color="#8b5cf6" size={16} />
            {/* Scan beam */}
            <ScanBeam accent="#8b5cf6" delay={0.5} />
            {/* Top label */}
            <div className="absolute top-3 left-4 z-20 font-mono text-xs" style={{ color: "#8b5cf6" }}>
              <span style={{ opacity: 0.5 }}>// </span>profile.jpg
            </div>

            <div className="aspect-square overflow-hidden bg-surface">
              <img src={personal.avatar} alt={personal.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 items-center justify-center" style={{ display: "none" }}>
                <span className="text-8xl font-bold" style={{ background: "linear-gradient(135deg,#8b5cf6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {personal.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>

          {/* Stat chips below avatar */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {stats.map((s) => (
              <HoloCard key={s.label} accent={s.accent} delay={0.8}>
                <div className="p-4 flex flex-col items-center text-center">
                  <s.icon className="w-5 h-5 mb-2" style={{ color: s.accent }} />
                  <p className="text-2xl font-bold font-mono" style={{ color: s.accent }}>{s.value}</p>
                  <p className="text-xs text-text-muted font-mono mt-0.5">{s.label}</p>
                </div>
              </HoloCard>
            ))}
          </div>
        </motion.div>

        {/* Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HoloCard accent="#8b5cf6" delay={1}>
            <div className="p-6 sm:p-8">
              {/* Terminal label */}
              <p className="font-mono text-xs mb-4" style={{ color: "#8b5cf6" }}>
                <span style={{ opacity: 0.5 }}>$ </span>whoami
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-mono">
                Crafting Digital Experiences
              </h3>

              <p className="text-text-secondary mb-4 leading-relaxed text-sm">{personal.bio}</p>

              <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                From building AI-powered healthcare apps to developing full-stack e-commerce platforms, I thrive on turning complex problems into elegant solutions. Currently working with the Unified Communications team at Motorola Solutions, driven by curiosity and clean code.
              </p>

              {/* Focus areas */}
              <div className="mt-4">
                <p className="font-mono text-xs mb-3" style={{ color: "#06b6d4" }}>
                  <span style={{ opacity: 0.5 }}>// </span>focus_areas[]
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Backend Engineering", "Microservices", "CI/CD Automation", "Scalable Systems"].map((tag) => (
                    <span key={tag} className="font-mono text-xs px-3 py-1.5 rounded"
                      style={{ background: "rgba(139,92,246,0.1)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.2)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </HoloCard>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
