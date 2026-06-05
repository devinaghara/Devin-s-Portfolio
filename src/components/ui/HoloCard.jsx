import React from "react";
import { motion } from "framer-motion";

/* ── Sci-fi corner L-brackets ─────────────────── */
export const LBrackets = ({ color = "#8b5cf6", size = 12 }) => {
  const corners = [
    { top: 0, left: 0,   borderTop: `2px solid ${color}`, borderLeft:  `2px solid ${color}` },
    { top: 0, right: 0,  borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` },
    { bottom: 0, left: 0,  borderBottom: `2px solid ${color}`, borderLeft:  `2px solid ${color}` },
    { bottom: 0, right: 0, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` },
  ];
  return (
    <>
      {corners.map((style, i) => (
        <span key={i} style={{ position: "absolute", width: size, height: size, zIndex: 20, ...style }} />
      ))}
    </>
  );
};

/* ── CRT scanlines overlay ─────────────────────── */
export const Scanlines = ({ hovered }) => (
  <div
    className="absolute inset-0 pointer-events-none z-10"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.13) 2px, rgba(0,0,0,0.13) 4px)",
      opacity: hovered ? 0.2 : 0.45,
      transition: "opacity 0.4s",
    }}
  />
);

/* ── Mouse-reactive holographic iridescence ────── */
export const HoloSheen = ({ hovered, mouse }) => (
  <div
    className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
    style={{
      opacity: hovered ? 1 : 0,
      background: `radial-gradient(ellipse at ${mouse.x * 100}% ${mouse.y * 100}%,
        rgba(139,92,246,0.09),
        rgba(6,182,212,0.06) 30%,
        rgba(244,114,182,0.05) 55%,
        transparent 75%)`,
      mixBlendMode: "screen",
    }}
  />
);

/* ── Animated horizontal scan beam ─────────────── */
export const ScanBeam = ({ accent = "#8b5cf6", delay = 0 }) => (
  <motion.div
    className="absolute left-0 right-0 pointer-events-none z-20"
    style={{
      height: 1.5,
      background: `linear-gradient(90deg, transparent 0%, ${accent}55 35%, ${accent}90 50%, ${accent}55 65%, transparent 100%)`,
    }}
    animate={{ top: ["-2px", "105%"] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay }}
  />
);

/* ── Full holographic card wrapper ──────────────── */
const HoloCard = ({ children, accent = "#8b5cf6", delay = 0, className = "", style = {} }) => {
  const [hovered, setHovered] = React.useState(false);
  const [mouse, setMouse]     = React.useState({ x: 0.5, y: 0.5 });

  const onMM = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ background: "rgba(8,8,18,0.92)", border: `1px solid ${accent}30`, ...style }}
      onMouseMove={onMM}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ boxShadow: `0 0 0 1px ${accent}55, 0 8px 48px ${accent}20`, transition: { duration: 0.3 } }}
    >
      <LBrackets color={accent} />
      <Scanlines hovered={hovered} />
      <HoloSheen hovered={hovered} mouse={mouse} />
      <ScanBeam accent={accent} delay={delay} />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default HoloCard;
