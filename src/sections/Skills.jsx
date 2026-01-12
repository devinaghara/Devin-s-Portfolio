import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import {
  SiReact,
  SiDotnet,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiAmazonwebservices,
  SiFigma,
  SiThreedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
// Technology icons mapping using actual technology icons
const techIcons = {
  "React": SiReact,
  "ASP.Net MVC": SiDotnet,
  "JavaScript": SiJavascript,
  "C#": TbBrandCSharp,
  "Node.js": SiNodedotjs,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "AWS": SiAmazonwebservices,
  "Figma": SiFigma,
  "Three.js": SiThreedotjs,
  "Tailwind CSS": SiTailwindcss,
};

// Icon colors for each technology
const iconColors = {
  "React": "#61DAFB",
  "ASP.Net MVC": "#512BD4",
  "JavaScript": "#F7DF1E",
  "C#": "#239120",
  "Node.js": "#339933",
  "MySQL": "#4479A1",
  "MongoDB": "#47A248",
  "AWS": "#FF9900",
  "Figma": "#F24E1E",
  "Three.js": "#000000",
  "Tailwind CSS": "#0da6ecff",
};

// Category colors for visual distinction
const categoryColors = {
  "Frontend": "from-cyan-500 to-blue-500",
  "Backend": "from-green-500 to-emerald-500",
  "Languages": "from-yellow-500 to-orange-500",
  "Database": "from-purple-500 to-pink-500",
  "Cloud": "from-sky-500 to-indigo-500",
  "Design": "from-rose-500 to-red-500",
};

const Skills = () => {
  const { skills } = portfolioData;
  const categories = [...new Set(skills.map((s) => s.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I use to bring ideas to life."
      centered
    >
      {/* Category Filter - Pill Style */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
        <motion.button
          className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all overflow-hidden ${activeCategory === "All"
            ? "text-white shadow-lg shadow-primary/30"
            : "glass text-text-secondary hover:text-primary"
            }`}
          onClick={() => setActiveCategory("All")}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeCategory === "All" && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">All</span>
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all overflow-hidden ${activeCategory === category
              ? "text-white shadow-lg shadow-primary/30"
              : "glass text-text-secondary hover:text-primary"
              }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </div>

      {/* Skills Grid - Unique Floating Card Design */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                type: "spring",
                stiffness: 200
              }}
              className="group perspective"
            >
              <motion.div
                className="relative h-full"
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Card Container */}
                <div className="relative glass rounded-2xl p-5 sm:p-6 h-full border border-white/10 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                  
                  {/* Tech Icon */}
                  <motion.div
                    className="mb-4 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {(() => {
                      const IconComponent = techIcons[skill.name];
                      const iconColor = iconColors[skill.name] || "#8b5cf6";
                      return IconComponent ? (
                        <IconComponent
                          className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-200"
                          style={{ color: iconColor }}
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                          {skill.name.charAt(0)}
                        </div>
                      );
                    })()}
                  </motion.div>

                  {/* Skill Name */}
                  <h4 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {skill.name}
                  </h4>

                  {/* Category Badge */}
                  <div className="mt-3">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-text-secondary">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </Section>
  );
};

export default Skills;
