import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and the companies I've worked with."
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line - always on left for mobile, center for desktop */}
        <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 md:transform md:-translate-x-1/2" />

        {/* Timeline Items */}
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary md:transform md:-translate-x-1/2 -translate-y-1 ring-4 ring-background z-10">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
            </div>

            {/* Content Card */}
            <div
              className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
            >
              <motion.div
                className="glass rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Company & Role */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {job.role}
                    </h3>
                    <p className="text-primary font-medium flex items-center gap-2 mt-1">
                      <Briefcase size={14} />
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {job.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm mb-4">
                  {job.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + hIndex * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
