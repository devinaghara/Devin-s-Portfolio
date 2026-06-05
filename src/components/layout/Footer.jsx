import React from "react";
import { motion } from "framer-motion";
import { Heart, Terminal } from "lucide-react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { portfolioData } from "../../data/portfolio";

const socialIcons = {
  github:   { Icon: SiGithub,   color: "#ffffff" },
  linkedin: { Icon: SiLinkedin, color: "#0A66C2" },
  leetcode: { Icon: SiLeetcode, color: "#FFA116" },
};

const Footer = () => {
  const { social, personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="py-10" style={{ borderTop: "1px solid rgba(139,92,246,0.15)" }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <a href="#home" className="flex items-center gap-2">
              <Terminal size={14} style={{ color: "#8b5cf6" }} />
              <span className="font-mono font-bold text-base" style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {personal.name.split(" ")[0]}_
              </span>
            </a>
            <p className="font-mono text-xs text-text-muted flex items-center gap-1.5">
              <span style={{ color: "#8b5cf6", opacity: 0.5 }}>{"// "}</span>
              © {year} made with <Heart size={11} style={{ color: "#f472b6", fill: "#f472b6" }} /> by {personal.name}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {Object.entries(social).map(([platform, url]) => {
              const entry = socialIcons[platform];
              if (!entry || !url) return null;
              const { Icon, color } = entry;
              return (
                <motion.a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded transition-all" aria-label={platform}
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  whileHover={{ scale: 1.1, y: -2, borderColor: "rgba(139,92,246,0.4)", boxShadow: "0 0 14px rgba(139,92,246,0.2)" }}
                  whileTap={{ scale: 0.95 }}>
                  <Icon size={18} style={{ color }} />
                </motion.a>
              );
            })}
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 font-mono text-xs text-text-muted">
            {["about", "projects", "contact"].map((link) => (
              <a key={link} href={`#${link}`} className="hover:text-primary transition-colors">
                <span style={{ opacity: 0.5 }}>{"> "}</span>{link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 text-center font-mono text-xs text-text-muted"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <span style={{ color: "#8b5cf6", opacity: 0.5 }}>{"// "}</span>
          built with React · Vite · Framer Motion · Three.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;
