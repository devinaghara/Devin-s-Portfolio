import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "../../utils/cn";
import { portfolioData } from "../../data/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { navigation, personal } = portfolioData;

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    const sections = navigation.map((item) => item.href.replace("#", ""));
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) { setActiveSection(sections[i]); break; }
    }
  }, [navigation]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3"
          : "bg-transparent py-5"
      )}
      style={isScrolled ? {
        background: "rgba(8,8,18,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139,92,246,0.15)",
      } : {}}
    >
      <div className="container flex items-center justify-between">

        {/* Logo — terminal style */}
        <motion.a href="#home" className="flex items-center gap-2" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
          <Terminal size={16} style={{ color: "#8b5cf6" }} />
          <span className="font-mono font-bold text-lg" style={{
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            {personal.name.split(" ")[0]}
            <span style={{ color: "#8b5cf6", WebkitTextFillColor: "#8b5cf6" }}>_</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item, index) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a key={item.name} href={item.href}
                className={cn("font-mono text-sm relative transition-colors group", isActive ? "" : "hover:text-white")}
                style={{ color: isActive ? "#a78bfa" : "#64748b" }}
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                {isActive && <span className="font-mono text-xs mr-1" style={{ color: "#8b5cf6", opacity: 0.6 }}>{">"} </span>}
                {item.name}
                {isActive ? (
                  <motion.span layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[1px]"
                    style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.a href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded transition-all"
          style={{ background: "rgba(139,92,246,0.12)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 18px rgba(139,92,246,0.3)" }}
          whileTap={{ scale: 0.95 }}>
          <Terminal size={12} />
          ./contact.sh
        </motion.a>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-4 rounded-lg overflow-hidden"
            style={{ background: "rgba(8,8,18,0.96)", border: "1px solid rgba(139,92,246,0.2)", backdropFilter: "blur(20px)" }}>
            <div className="flex flex-col p-4 gap-3">
              {navigation.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a key={item.name} href={item.href}
                    className={cn("font-mono text-sm py-2 transition-colors relative", isActive ? "" : "hover:text-white")}
                    style={{ color: isActive ? "#a78bfa" : "#64748b" }}
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {isActive && <span style={{ color: "#8b5cf6" }}>{">"} </span>}
                    {item.name}
                  </a>
                );
              })}
              <a href="#contact" className="font-mono text-xs px-4 py-2 rounded mt-2 text-center transition-all"
                style={{ background: "rgba(139,92,246,0.12)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}
                onClick={() => setIsMobileMenuOpen(false)}>
                ./contact.sh
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
