import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";

const Education = () => {
    const { education } = portfolioData;

    return (
        <Section
            id="education"
            title="Education"
            subtitle="My academic journey and qualifications."
            centered
        >
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        className="group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                    >
                        <motion.div
                            className="h-full glass rounded-2xl p-6 border border-white/10 group-hover:border-secondary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/10"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Header with Icon */}
                            <div className="flex items-start gap-4 mb-5">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center shrink-0">
                                    <GraduationCap className="w-7 h-7 text-secondary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-text-primary leading-tight group-hover:text-secondary transition-colors duration-200">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-secondary/80 font-medium text-sm mt-1">
                                        {edu.institution}
                                    </p>
                                </div>
                            </div>

                            {/* Meta Info Row */}
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-text-muted">
                                    <Calendar size={12} />
                                    {edu.duration}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-text-muted">
                                    <MapPin size={12} />
                                    {edu.location}
                                </span>
                            </div>

                            {/* Description */}
                            {edu.description && (
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    {edu.description}
                                </p>
                            )}

                            {/* Grade Badge */}
                            {edu.grade && (
                                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20">
                                    <Award size={14} className="text-secondary" />
                                    <span className="text-sm font-semibold text-text-primary">
                                        {edu.grade}
                                    </span>
                                </div>
                            )}

                            {/* Highlights */}
                            {edu.highlights && edu.highlights.length > 0 && (
                                <ul className="mt-4 space-y-2">
                                    {edu.highlights.map((highlight, hIndex) => (
                                        <li
                                            key={hIndex}
                                            className="flex items-start gap-2 text-sm text-text-secondary"
                                        >
                                            <BookOpen size={12} className="text-secondary mt-1 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;

