import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Section = ({ children, id, className, title, subtitle, centered = false }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id={id} className={cn("section overflow-x-hidden relative", className)}>
      {/* Hex grid background per section */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='104'><polygon points='30,2 58,17 58,51 30,66 2,51 2,17' fill='none' stroke='rgba(139,92,246,0.055)' stroke-width='1'/></svg>`
          )}")`,
          backgroundSize: "60px 104px",
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {(title || subtitle) && (
            <div className={cn("mb-12", centered && "text-center mx-auto")}>
              {title && (
                <div className={cn("mb-3", centered && "flex flex-col items-center")}>
                  {/* Terminal prefix */}
                  <p className="font-mono text-xs mb-2" style={{ color: "#8b5cf6" }}>
                    <span style={{ opacity: 0.5 }}>$ </span>
                    {title.toLowerCase().replace(/\s+/g, "_")}.sh
                  </p>
                  <h2 className="section-title">
                    <span style={{
                      background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      {title}
                    </span>
                  </h2>
                </div>
              )}
              {subtitle && (
                <p className={cn("section-subtitle font-mono text-sm", centered && "mx-auto")} style={{ color: "#64748b" }}>
                  <span style={{ color: "#8b5cf6", opacity: 0.6 }}>{"// "}</span>
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
