import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import HoloCard from "../components/ui/HoloCard";
import {
  SiReact, SiDotnet, SiJavascript, SiNodedotjs, SiMysql, SiMongodb,
  SiAmazons3, SiTailwindcss, SiShadcnui, SiExpress, SiDocker,
  SiGithubactions, SiPython, SiGit, SiGithub, SiPostman, SiSocketdotio, SiSwagger,
} from "react-icons/si";
import { TbBrandCSharp, TbFileTypeSql, TbServer } from "react-icons/tb";

const techIcons = {
  "React.js": SiReact, "Tailwind CSS": SiTailwindcss, "Shadcn UI": SiShadcnui,
  "Node.js": SiNodedotjs, "Express.js": SiExpress, "ASP.NET Core MVC": SiDotnet,
  "REST APIs": SiSwagger, "MongoDB": SiMongodb, "MySQL": SiMysql, "SQL Server": TbServer,
  "Docker": SiDocker, "GitHub Actions": SiGithubactions, "Microservices": TbServer,
  "AWS S3": SiAmazons3, "JavaScript": SiJavascript, "C#": TbBrandCSharp,
  "Python": SiPython, "SQL": TbFileTypeSql, "Git": SiGit, "GitHub": SiGithub,
  "Postman": SiPostman, "Socket.IO": SiSocketdotio,
};
const iconColors = {
  "React.js": "#61DAFB", "Tailwind CSS": "#06B6D4", "Shadcn UI": "#fff",
  "Node.js": "#339933", "Express.js": "#fff", "ASP.NET Core MVC": "#512BD4",
  "REST APIs": "#85EA2D", "MongoDB": "#47A248", "MySQL": "#4479A1",
  "SQL Server": "#CC2927", "Docker": "#2496ED", "GitHub Actions": "#2088FF",
  "Microservices": "#8b5cf6", "AWS S3": "#FF9900", "JavaScript": "#F7DF1E",
  "C#": "#239120", "Python": "#3776AB", "SQL": "#e38c00",
  "Git": "#F05032", "GitHub": "#fff", "Postman": "#FF6C37", "Socket.IO": "#fff",
};
const ACCENT_BY_CAT = {
  Frontend: "#61DAFB", Backend: "#8b5cf6", Database: "#47A248",
  DevOps: "#2496ED", Architecture: "#8b5cf6", Cloud: "#FF9900",
  Languages: "#F7DF1E", Tools: "#06b6d4",
};

const INITIAL_SHOW = 15; // skills visible before expand

const Skills = () => {
  const { skills } = portfolioData;
  const categories = [...new Set(skills.map((s) => s.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState(false);

  // Reset expand state when filter changes
  useEffect(() => { setExpanded(false); }, [activeCategory]);

  const filtered  = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);
  const displayed = expanded ? filtered : filtered.slice(0, INITIAL_SHOW);
  const hasMore   = filtered.length > INITIAL_SHOW;
  const hiddenCount = filtered.length - INITIAL_SHOW;

  return (
    <Section id="skills" title="Skills & Expertise" subtitle="Technologies and tools I use to bring ideas to life." centered>

      {/* Filter tabs */}
      <motion.div className="flex flex-wrap justify-center gap-2 mb-10"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        {["All", ...categories].map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <motion.button key={cat} onClick={() => setActiveCategory(cat)}
              className="font-mono text-xs px-4 py-2 rounded transition-all"
              style={{
                background: isActive ? "rgba(139,92,246,0.18)" : "rgba(255,255,255,0.04)",
                color: isActive ? "#a78bfa" : "#64748b",
                border: isActive ? "1px solid rgba(139,92,246,0.4)" : "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.95 }}>
              {isActive && <span style={{ opacity: 0.6 }}>{">"} </span>}{cat}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Skills grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <AnimatePresence mode="popLayout">
          {displayed.map((skill, index) => {
            const Icon      = techIcons[skill.name];
            const iconColor = iconColors[skill.name] || "#8b5cf6";
            const catAccent = ACCENT_BY_CAT[skill.category] || "#8b5cf6";
            return (
              <motion.div key={skill.name} layout
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.35, delay: index * 0.04, type: "spring", stiffness: 200 }}>
                <HoloCard accent={catAccent} delay={index * 0.2} className="h-full">
                  <div className="p-4 sm:p-5 flex flex-col items-center text-center h-full">
                    <div className="mb-3">
                      {Icon ? (
                        <Icon className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-lg"
                          style={{ color: iconColor, filter: `drop-shadow(0 4px 10px ${iconColor}55)` }} />
                      ) : (
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center font-bold text-xl"
                          style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)", color: "#fff" }}>
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white font-mono mb-2">{skill.name}</h4>
                    <span className="font-mono text-xs px-2 py-1 rounded-full mt-auto"
                      style={{ background: `${catAccent}15`, color: catAccent, border: `1px solid ${catAccent}25` }}>
                      {skill.category}
                    </span>
                  </div>
                </HoloCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Expand / Collapse button — only if there are more skills to show */}
      <AnimatePresence>
        {hasMore && (
          <motion.div layout className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}>
            <motion.button onClick={() => setExpanded(!expanded)}
              className="font-mono text-sm px-6 py-3 rounded flex items-center gap-2 mx-auto transition-all"
              style={{ background: "rgba(139,92,246,0.1)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(139,92,246,0.2)" }}
              whileTap={{ scale: 0.96 }}>
              <Terminal size={14} />
              {expanded
                ? "$ collapse --skills"
                : `$ show --all`}
              <motion.span animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronRight size={14} />
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Skills;
