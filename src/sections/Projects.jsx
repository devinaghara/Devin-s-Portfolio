import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Terminal } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import HoloCard, { LBrackets, ScanBeam, Scanlines } from "../components/ui/HoloCard";

const PROJ_ACCENTS = ["#8b5cf6", "#06b6d4", "#f472b6", "#34d399"];

const Projects = () => {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <Section id="projects" title="What I've built" tag="Projects" subtitle="A selection of my recent work and personal projects." centered>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {displayed.map((project, index) => {
            const accent = PROJ_ACCENTS[index % 4];
            return (
              <motion.div key={project.id} layout
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}>

                {/* Manual holo card with image header */}
                <motion.div className="group relative overflow-hidden rounded-lg flex flex-col h-full"
                  style={{ background: "rgba(8,8,18,0.92)", border: `1px solid ${accent}30` }}
                  whileHover={{ boxShadow: `0 0 0 1px ${accent}55, 0 8px 48px ${accent}20`, transition: { duration: 0.3 } }}>

                  <LBrackets color={accent} size={12} />
                  <ScanBeam accent={accent} delay={index * 1.2} />

                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-surface-elevated flex-shrink-0">
                    <img src={project.image} alt={project.title} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center absolute inset-0" style={{ display: "none" }}>
                      <span className="text-4xl opacity-40">🚀</span>
                    </div>

                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-md font-semibold"
                            style={{ background: accent, color: "#000" }}
                            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            <ExternalLink size={12} /> Live
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-md font-semibold"
                            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
                            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            <Github size={12} /> GitHub
                          </motion.a>
                        )}
                        {!project.liveUrl && !project.githubUrl && (
                          <span className="font-mono text-xs px-4 py-2 rounded-md" style={{ background: "rgba(255,255,255,0.08)", color: "#64748b", border: "1px solid rgba(255,255,255,0.1)" }}>
                            🔒 Private / Internal
                          </span>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="font-mono text-xs" style={{ color: accent }}>
                        <span style={{ opacity: 0.5 }}>// </span>project_{String(index + 1).padStart(2, "0")}
                      </p>
                      <div className="flex items-center gap-1.5">
                        {project.company && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.35)" }}>
                            {project.company}
                          </span>
                        )}
                        {project.featured && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", border: "1px solid rgba(52,211,153,0.35)" }}>
                            ★ featured
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white font-mono mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="font-mono text-xs px-2 py-1 rounded"
                          style={{ background: "rgba(255,255,255,0.05)", color: "#64748b", border: "1px solid rgba(255,255,255,0.07)" }}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-xs px-2 py-1 rounded"
                          style={{ background: "rgba(255,255,255,0.05)", color: "#64748b", border: "1px solid rgba(255,255,255,0.07)" }}>
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {projects.length > 3 && (
        <motion.div className="text-center mt-10" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.button onClick={() => setShowAll(!showAll)}
            className="font-mono text-sm px-6 py-3 rounded flex items-center gap-2 mx-auto transition-all"
            style={{ background: "rgba(139,92,246,0.1)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(139,92,246,0.2)" }} whileTap={{ scale: 0.96 }}>
            <Terminal size={14} />
            {showAll ? "$ show --less" : "$ show --all-projects"}
            <ChevronRight size={14} className={`transition-transform ${showAll ? "rotate-90" : ""}`} />
          </motion.button>
        </motion.div>
      )}
    </Section>
  );
};

export default Projects;
