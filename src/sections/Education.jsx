import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import HoloCard from "../components/ui/HoloCard";

const EDU_ACCENTS = ["#06b6d4", "#8b5cf6"];

const Education = () => {
  const { education } = portfolioData;

  return (
    <Section id="education" title="Academic Background" tag="Education" subtitle="My academic journey and qualifications." centered>
      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {education.map((edu, index) => {
          const accent = EDU_ACCENTS[index % 2];
          return (
            <motion.div key={edu.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.15 }}>
              <HoloCard accent={accent} delay={index * 0.8} className="h-full">
                <div className="p-6 sm:p-7 h-full flex flex-col">

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex items-center justify-center rounded-md flex-shrink-0"
                      style={{ width: 44, height: 44, background: `${accent}15`, border: `1.5px solid ${accent}40` }}>
                      <GraduationCap className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-xs mb-1" style={{ color: accent }}>
                        <span style={{ opacity: 0.5 }}>// </span>degree
                      </p>
                      <h3 className="text-base font-bold text-white font-mono leading-snug">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  {/* Institution */}
                  <p className="font-mono text-sm font-semibold mb-4" style={{ color: accent }}>
                    <span style={{ opacity: 0.4 }}>// </span>{edu.institution}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded"
                      style={{ background: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <Calendar size={11} /> {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded"
                      style={{ background: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <MapPin size={11} /> {edu.location}
                    </span>
                  </div>

                  {edu.description && (
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{edu.description}</p>
                  )}

                  {edu.grade && (
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="flex items-center gap-2 px-3 py-2 rounded font-mono text-sm font-semibold"
                        style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}25` }}>
                        <Award size={14} /> {edu.grade}
                      </div>
                    </div>
                  )}
                </div>
              </HoloCard>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Education;
