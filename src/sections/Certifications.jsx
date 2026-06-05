import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  BadgeCheck,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import HoloCard from "../components/ui/HoloCard";

const CERT_ACCENTS = ["#8b5cf6", "#06b6d4", "#f472b6", "#34d399"];
const INITIAL_SHOW = 3;

const Certifications = () => {
  const { certifications } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll
    ? certifications
    : certifications.slice(0, INITIAL_SHOW);

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications and credentials I've earned."
      centered
    >
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {displayed.map((cert, index) => {
            const accent = CERT_ACCENTS[index % 4];
            return (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <HoloCard
                  accent={accent}
                  delay={index * 0.7}
                  className="h-full"
                >
                  <div className="p-5 sm:p-6 h-full flex flex-col">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="flex items-center justify-center rounded-md flex-shrink-0"
                        style={{
                          width: 40,
                          height: 40,
                          background: `${accent}15`,
                          border: `1.5px solid ${accent}40`,
                        }}
                      >
                        <Award className="w-4 h-4" style={{ color: accent }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-mono text-xs mb-1"
                          style={{ color: accent, opacity: 0.7 }}
                        >
                          cert_{String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-sm font-bold text-white font-mono leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 mb-2">
                      <BadgeCheck
                        size={13}
                        style={{ color: accent, flexShrink: 0 }}
                      />
                      <span
                        className="font-mono text-xs font-semibold"
                        style={{ color: accent }}
                      >
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={11} className="text-text-muted" />
                      <span className="font-mono text-xs text-text-muted">
                        {cert.date}
                      </span>
                    </div>

                    {/* Skills */}
                    {cert.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-xs px-2 py-1 rounded"
                            style={{
                              background: `${accent}10`,
                              color: accent,
                              border: `1px solid ${accent}20`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Credential link */}
                    {cert.credentialUrl &&
                      cert.credentialUrl !== "#" &&
                      cert.credentialUrl !== "" && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-mono text-xs mt-auto transition-opacity hover:opacity-80"
                          style={{ color: accent }}
                        >
                          <ExternalLink size={11} /> $ view-credential
                        </a>
                      )}
                  </div>
                </HoloCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Show more / less button */}
      {certifications.length > INITIAL_SHOW && (
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="font-mono text-sm px-6 py-3 rounded flex items-center gap-2 mx-auto transition-all"
            style={{
              background: "rgba(139,92,246,0.1)",
              color: "#a78bfa",
              border: "1px solid rgba(139,92,246,0.3)",
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 20px rgba(139,92,246,0.2)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            <Terminal size={14} />
            {showAll ? "$ show --less" : `$ show --all`}
            <ChevronRight
              size={14}
              className={`transition-transform duration-300 ${showAll ? "rotate-90" : ""}`}
            />
          </motion.button>
        </motion.div>
      )}
    </Section>
  );
};

export default Certifications;
