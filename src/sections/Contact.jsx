import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle, Terminal } from "lucide-react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { Section } from "../components/layout";
import { portfolioData } from "../data/portfolio";
import HoloCard from "../components/ui/HoloCard";

const Contact = () => {
  const { personal, social } = portfolioData;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formState.name, email: formState.email, message: formState.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const socialMap = {
    github:   { Icon: SiGithub,   color: "#ffffff", label: "GitHub" },
    linkedin: { Icon: SiLinkedin, color: "#0A66C2", label: "LinkedIn" },
    leetcode: { Icon: SiLeetcode, color: "#FFA116", label: "LeetCode" },
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind? Let's work together to bring your ideas to life." centered>
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Info Panel */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <HoloCard accent="#8b5cf6" delay={0.5} className="h-full">
            <div className="p-6 sm:p-8 h-full flex flex-col">
              <p className="font-mono text-xs mb-5" style={{ color: "#8b5cf6" }}>
                <span style={{ opacity: 0.5 }}>$ </span>./connect.sh
              </p>

              <h3 className="text-xl font-bold text-white font-mono mb-3">Let's Connect</h3>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, or just having a chat about technology and design.
              </p>

              {/* Contact rows */}
              <div className="space-y-3 mb-6">
                <motion.a href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-3 rounded group transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  whileHover={{ x: 4, borderColor: "rgba(139,92,246,0.35)", background: "rgba(139,92,246,0.06)" }}>
                  <div className="p-2 rounded" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)" }}>
                    <Mail size={16} style={{ color: "#8b5cf6" }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted mb-0.5">// email</p>
                    <p className="font-mono text-sm text-white">{personal.email}</p>
                  </div>
                </motion.a>

                <motion.div className="flex items-center gap-4 p-3 rounded"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  whileHover={{ x: 4, borderColor: "rgba(6,182,212,0.35)", background: "rgba(6,182,212,0.06)" }}>
                  <div className="p-2 rounded" style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.25)" }}>
                    <MapPin size={16} style={{ color: "#06b6d4" }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted mb-0.5">// location</p>
                    <p className="font-mono text-sm text-white">{personal.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Social links */}
              <div className="mt-auto">
                <p className="font-mono text-xs text-text-muted mb-3">
                  <span style={{ opacity: 0.5 }}>// </span>find_me_on[]
                </p>
                <div className="flex gap-3">
                  {Object.entries(social).filter(([, url]) => url && !url.startsWith("/")).map(([platform, url]) => {
                    const entry = socialMap[platform];
                    if (!entry) return null;
                    const { Icon, color, label } = entry;
                    return (
                      <motion.a key={platform} href={url} target="_blank" rel="noopener noreferrer" title={label} aria-label={label}
                        className="relative p-3 rounded group transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                        whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.95 }}>
                        <Icon size={20} style={{ color }} />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-surface-elevated border border-border text-text-secondary px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
                          {label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </HoloCard>
        </motion.div>

        {/* Form Panel */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <HoloCard accent="#06b6d4" delay={1} className="h-full">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 h-full flex flex-col">
              <p className="font-mono text-xs mb-5" style={{ color: "#06b6d4" }}>
                <span style={{ opacity: 0.5 }}>$ </span>send-message --form
              </p>

              <div className="space-y-5 flex-1">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs text-text-muted mb-2">
                    <span style={{ color: "#06b6d4", opacity: 0.7 }}>{">"} </span>your_name
                  </label>
                  <input type="text" id="contact-name" name="name" value={formState.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded font-mono text-sm text-white placeholder:text-text-muted focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    placeholder="John Doe"
                    onFocus={(e) => e.target.style.borderColor = "rgba(6,182,212,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs text-text-muted mb-2">
                    <span style={{ color: "#06b6d4", opacity: 0.7 }}>{">"} </span>email_address
                  </label>
                  <input type="email" id="contact-email" name="email" value={formState.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded font-mono text-sm text-white placeholder:text-text-muted focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    placeholder="john@example.com"
                    onFocus={(e) => e.target.style.borderColor = "rgba(6,182,212,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs text-text-muted mb-2">
                    <span style={{ color: "#06b6d4", opacity: 0.7 }}>{">"} </span>your_message
                  </label>
                  <textarea id="contact-message" name="message" value={formState.message} onChange={handleChange} required rows={5}
                    className="w-full px-4 py-3 rounded font-mono text-sm text-white placeholder:text-text-muted focus:outline-none transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    placeholder="Tell me about your project..."
                    onFocus={(e) => e.target.style.borderColor = "rgba(6,182,212,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button type="submit" disabled={status === "loading" || status === "success"}
                className="w-full mt-5 py-3 rounded font-mono text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                style={{ background: "rgba(6,182,212,0.15)", color: "#06b6d4", border: "1px solid rgba(6,182,212,0.35)" }}
                whileHover={status === "idle" ? { scale: 1.02, boxShadow: "0 0 24px rgba(6,182,212,0.25)" } : {}}
                whileTap={{ scale: 0.98 }}>
                {status === "loading" ? <><Loader2 size={15} className="animate-spin" /> transmitting...</>
                  : status === "success" ? <><CheckCircle size={15} /> message sent!</>
                  : <><Send size={15} /> $ send --message</>}
              </motion.button>

              {status === "error" && (
                <p className="font-mono text-xs text-red-400 mt-3 text-center">// error: transmission failed. try again.</p>
              )}
            </form>
          </HoloCard>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
