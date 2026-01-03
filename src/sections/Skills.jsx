import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";

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
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <motion.button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "All"
              ? "bg-primary text-white"
              : "glass text-text-secondary hover:text-primary"
          }`}
          onClick={() => setActiveCategory("All")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-primary text-white"
                : "glass text-text-secondary hover:text-primary"
            }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="glass rounded-xl p-5 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                {/* Skill Name */}
                <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>

                {/* Progress Bar */}
                <div className="relative h-2 bg-surface-elevated rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  />
                </div>

                {/* Level */}
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-text-muted">
                    {skill.category}
                  </span>
                  <span className="text-xs text-primary font-medium">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Skills;
