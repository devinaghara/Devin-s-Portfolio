import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Scene = lazy(() => import("../components/three/Scene"));

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 3D Background */}
      <Suspense fallback={<div className="absolute inset-0 z-0 bg-background" />}>
        <Scene className="absolute inset-0 z-0" />
      </Suspense>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Terminal status badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded mb-8 font-mono text-xs"
            style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)", color: "#34d399" }}>
            <motion.span className="w-2 h-2 rounded-full" style={{ background: "#34d399" }}
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
            {personal.availability}
          </motion.div>

          {/* Terminal prompt prefix */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            className="flex items-center justify-center gap-2 mb-3">
            <Terminal size={14} style={{ color: "#8b5cf6" }} />
            <span className="font-mono text-sm" style={{ color: "#8b5cf6", opacity: 0.7 }}>
              <span style={{ opacity: 0.5 }}>$ </span>whoami
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <span className="text-text-primary">Hi, I'm </span>
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 60%, #f472b6 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}>
              {personal.name}
            </span>
          </motion.h1>

          {/* Title — mono */}
          <motion.p className="text-lg md:text-xl font-mono mb-3"
            style={{ color: "#64748b" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <span style={{ color: "#8b5cf6", opacity: 0.6 }}>{"// "}</span>{personal.title}
          </motion.p>

          {/* Tagline */}
          <motion.p className="text-base text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            {personal.tagline}
          </motion.p>

          {/* Location chip */}
          <motion.div className="flex items-center justify-center gap-2 text-text-muted mb-10 font-mono text-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <MapPin size={15} style={{ color: "#8b5cf6" }} />
            {personal.location}
          </motion.div>

          {/* CTA Buttons — terminal style */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>

            <motion.a href="#projects"
              className="flex items-center gap-2 font-mono text-sm px-7 py-3.5 rounded transition-all"
              style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.35)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(139,92,246,0.35)" }}
              whileTap={{ scale: 0.96 }}>
              <Terminal size={15} />
              $ view-projects
            </motion.a>

            <motion.a href={personal.resume} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm px-7 py-3.5 rounded transition-all"
              style={{ background: "rgba(6,182,212,0.1)", color: "#06b6d4", border: "1px solid rgba(6,182,212,0.3)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(6,182,212,0.25)" }}
              whileTap={{ scale: 0.96 }}>
              <Download size={15} />
              $ download-cv
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <motion.a href="#about"
          className="flex flex-col items-center gap-2 font-mono text-xs text-text-muted hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span style={{ color: "#8b5cf6", opacity: 0.6 }}>scroll</span>
          <ArrowDown size={18} style={{ color: "#8b5cf6" }} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
