import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronDown, ChevronLeft, ChevronRight, Terminal, Cpu } from "lucide-react";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import { LBrackets, ScanBeam, HoloSheen, Scanlines } from "../components/ui/HoloCard";

/* ── Typing text ─── */
const TypingText = ({ text, trigger }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) { setCount(0); return; }
    let i = 0;
    const id = setInterval(() => { i++; setCount(i); if (i >= text.length) clearInterval(id); }, 36);
    return () => clearInterval(id);
  }, [trigger, text]);
  const done = count >= text.length;
  return (
    <span>
      {text.slice(0, count)}
      {!done && trigger && (
        <motion.span className="inline-block w-[2px] h-[0.85em] align-middle ml-[2px] rounded-sm"
          style={{ background: "currentColor" }}
          animate={{ opacity: [1, 0] }} transition={{ duration: 0.45, repeat: Infinity }} />
      )}
    </span>
  );
};

const ACCENTS  = ["#8b5cf6", "#06b6d4", "#f472b6", "#34d399"];
const VERSIONS = ["v4.0 · Current", "v3.0", "v2.0", "v1.0"];

/* ── Single card ─── */
const ExperienceCard = ({ job, index, total, isActive }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [mouse, setMouse]       = useState({ x: 0.5, y: 0.5 });

  const accent  = ACCENTS[index % 4];
  const version = VERSIONS[index] ?? `v${total - index}.0`;

  const onMM = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg h-full cursor-default"
      style={{ background: "rgba(8,8,18,0.92)", border: `1px solid ${isActive ? accent + "70" : accent + "30"}` }}
      animate={{ opacity: isActive ? 1 : 0.55, scale: isActive ? 1 : 0.96 }}
      transition={{ duration: 0.4 }}
      onMouseMove={onMM}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ boxShadow: `0 0 0 1px ${accent}55, 0 8px 48px ${accent}20` }}
    >
      <LBrackets color={accent} />
      <Scanlines hovered={hovered} />
      <HoloSheen hovered={hovered} mouse={mouse} />
      <ScanBeam accent={accent} delay={index * 1.4} />

      <div className="relative p-5 sm:p-6 z-10 flex flex-col h-full">
        {/* Version + status */}
        <div className="flex items-center gap-2 mb-3 font-mono text-xs">
          <span style={{ background: `${accent}14`, color: accent, border: `1px solid ${accent}28`, padding: "2px 8px", borderRadius: 3, letterSpacing: "0.05em" }}>
            {version}
          </span>
          {index === 0 && (
            <span className="flex items-center gap-1.5 px-2 py-[2px] rounded font-mono text-xs"
              style={{ background: "rgba(52,211,153,0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)" }}>
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34d399" }}
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.1, repeat: Infinity }} />
              ACTIVE
            </span>
          )}
        </div>

        {/* Company row */}
        <div className="flex items-center gap-2 mb-3">
          <motion.div className="flex items-center justify-center rounded flex-shrink-0"
            style={{ width: 28, height: 28, border: `1.5px solid ${accent}`, background: `${accent}10` }}
            animate={{ boxShadow: [`0 0 4px ${accent}50`, `0 0 14px ${accent}aa`, `0 0 4px ${accent}50`] }}
            transition={{ duration: 2.2, repeat: Infinity }}>
            <Cpu size={14} strokeWidth={1.4} color={accent} />
          </motion.div>
          <p className="font-mono text-sm font-semibold" style={{ color: accent }}>
            <span style={{ opacity: 0.45 }}>// </span>{job.company}
          </p>
        </div>

        {/* Typed title */}
        <h3 className="text-lg sm:text-xl font-bold mb-4 font-mono text-white leading-snug">
          <TypingText text={job.role} trigger={isActive} />
        </h3>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[{ icon: <Calendar size={10} />, label: job.duration }, { icon: <MapPin size={10} />, label: job.location }].map((m, mi) => (
            <span key={mi} className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded"
              style={{ background: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.07)" }}>
              {m.icon} {m.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{job.description}</p>

        {/* Expand toggle */}
        <motion.button onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 font-mono text-xs mt-auto" style={{ color: accent }}
          whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
          <Terminal size={11} />
          {expanded ? "$ collapse" : "$ ./highlights.sh"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={11} />
          </motion.span>
        </motion.button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden mt-3 space-y-2">
              {job.highlights.map((h, hi) => (
                <motion.li key={hi} className="flex items-start gap-2 text-xs text-text-secondary font-mono"
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: hi * 0.07 }}>
                  <span style={{ color: accent, flexShrink: 0, fontWeight: 700 }}>{">"}</span>{h}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ── Main section with horizontal scroll + arrows ─── */
const Experience = () => {
  const { experience } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToCard = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        const cardLeft  = cards[index].offsetLeft;
        const cWidth    = scrollRef.current.offsetWidth;
        const cardWidth = cards[index].offsetWidth;
        scrollRef.current.scrollTo({ left: cardLeft - cWidth / 2 + cardWidth / 2, behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => { if (activeIndex > 0) scrollToCard(activeIndex - 1); };
  const handleNext = () => { if (activeIndex < experience.length - 1) scrollToCard(activeIndex + 1); };

  return (
    <Section id="experience" title="Where I've Worked" tag="Experience" subtitle="My professional journey — each role a chapter in my growth story." centered>

      {/* ── Navigation bar ── */}
      <div className="flex items-center justify-between max-w-3xl mx-auto mb-5 px-1">

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {experience.map((_, i) => (
            <button key={i} onClick={() => scrollToCard(i)} aria-label={`Go to card ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === activeIndex ? 20 : 8,
                height: 8,
                background: i === activeIndex
                  ? `linear-gradient(90deg, ${ACCENTS[i % 4]}, ${ACCENTS[(i + 1) % 4]})`
                  : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>

        {/* Chapter label + arrows */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-text-muted hidden sm:block">
            <span style={{ color: ACCENTS[activeIndex % 4], opacity: 0.7 }}>{VERSIONS[activeIndex] ?? `v${experience.length - activeIndex}.0`}</span>
            <span className="mx-1.5" style={{ opacity: 0.3 }}>·</span>
            {activeIndex + 1}/{experience.length}
          </span>
          <motion.button onClick={handlePrev} disabled={activeIndex === 0}
            className="p-2 rounded font-mono transition-all disabled:opacity-25"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}
            whileHover={{ scale: 1.08, borderColor: "rgba(139,92,246,0.45)", color: "#a78bfa" }}
            whileTap={{ scale: 0.92 }} aria-label="Previous">
            <ChevronLeft size={16} />
          </motion.button>
          <motion.button onClick={handleNext} disabled={activeIndex === experience.length - 1}
            className="p-2 rounded font-mono transition-all disabled:opacity-25"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8" }}
            whileHover={{ scale: 1.08, borderColor: "rgba(139,92,246,0.45)", color: "#a78bfa" }}
            whileTap={{ scale: 0.92 }} aria-label="Next">
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* ── Horizontal scroll track ── */}
      <div className="relative max-w-3xl mx-auto">
        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(8,8,18,0.8), transparent)" }} />
        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(8,8,18,0.8), transparent)" }} />

        <div ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {experience.map((job, i) => (
            <div key={job.id}
              className="flex-shrink-0 snap-center cursor-pointer"
              style={{ width: "min(80vw, 420px)" }}
              onClick={() => scrollToCard(i)}>
              <ExperienceCard job={job} index={i} total={experience.length} isActive={i === activeIndex} />
            </div>
          ))}
        </div>
      </div>

      {/* End marker */}
      <motion.div className="flex flex-col items-center mt-8 gap-2"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <div className="w-px h-5" style={{ background: "linear-gradient(to bottom, #8b5cf6, transparent)" }} />
        <span className="font-mono text-xs px-4 py-1.5 rounded tracking-wider"
          style={{ background: "rgba(139,92,246,0.08)", color: "#8b5cf6", border: "1px solid rgba(139,92,246,0.22)" }}>
          {"// more chapters loading..."}
        </span>
      </motion.div>
    </Section>
  );
};

export default Experience;
