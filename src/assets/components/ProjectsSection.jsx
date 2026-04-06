import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import foodDeliveryImg from '../images/food-delivery.png';
import quizAppImg from '../images/quiz-app.png';

const projects = [
  {
    title: "Food Delivery App",
    desc: "A full stack food delivery platform with cart, ordering system, and real-time updates.",
    image: foodDeliveryImg,
    color: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)",
    tag: "Full Stack",
    github: "https://github.com/itsankitdev/food-del",
    live: "https://food-del-orcin-ten.vercel.app/",
  },
  {
    title: "Quiz App",
    desc: "An interactive quiz application with multiple categories, scoring, and result tracking.",
    image: quizAppImg,
    color: "#c026d3", bg: "rgba(192,38,211,0.08)", border: "rgba(192,38,211,0.2)",
    tag: "Frontend",
    github: "https://github.com/itsankitdev/Quiz_app_project",
    live: "https://itsankitdev.github.io/Quiz_app_project/",
  },
];

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function ProjectCard({ p, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="rounded-3xl cursor-pointer relative overflow-hidden"
      style={{ background: hovered ? `${p.color}08` : "rgba(124,58,237,0.04)",
               border: `0.5px solid ${hovered ? p.border : "rgba(124,58,237,0.1)"}`,
               transition: "background 0.3s, border 0.3s" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}>

      {/* Image */}
      <div style={{ position: "relative", width: "100%", height: "200px",
                    overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
        <motion.img
          src={p.image} alt={p.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          style={{ position: "absolute", inset: 0,
                   background: `linear-gradient(135deg, ${p.color}25, rgba(250,248,255,0.4))` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              style={{ position: "absolute", top: "50%", left: "50%",
                       transform: "translate(-50%, -50%)",
                       display: "flex", gap: "10px", zIndex: 10 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}>
              <motion.a
                href={p.github} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ display: "flex", alignItems: "center", gap: "6px",
                         padding: "9px 18px", borderRadius: "100px", fontSize: "11px",
                         fontWeight: 600, fontFamily: "DM Sans, sans-serif",
                         textTransform: "uppercase", letterSpacing: "0.05em",
                         color: "#1a0533", backdropFilter: "blur(12px)",
                         background: "rgba(250,248,255,0.85)",
                         border: "0.5px solid rgba(124,58,237,0.2)",
                         textDecoration: "none" }}
                whileHover={{ background: p.color, color: "#fff", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <GithubIcon /> Github
              </motion.a>
              <motion.a
                href={p.live} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ display: "flex", alignItems: "center", gap: "6px",
                         padding: "9px 18px", borderRadius: "100px", fontSize: "11px",
                         fontWeight: 600, fontFamily: "DM Sans, sans-serif",
                         textTransform: "uppercase", letterSpacing: "0.05em",
                         color: "#fff",
                         background: `linear-gradient(135deg, ${p.color}, #c026d3)`,
                         border: "none", textDecoration: "none" }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${p.color}50` }}
                whileTap={{ scale: 0.95 }}>
                <ExternalIcon /> Live
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <span style={{ position: "absolute", top: "12px", left: "12px",
                       padding: "4px 12px", borderRadius: "100px", fontSize: "10px",
                       fontWeight: 600, fontFamily: "DM Sans, sans-serif",
                       textTransform: "uppercase", letterSpacing: "0.08em",
                       color: p.color, background: "rgba(250,248,255,0.85)",
                       border: `0.5px solid ${p.border}`,
                       backdropFilter: "blur(8px)" }}>
          {p.tag}
        </span>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "20px",
                     fontWeight: 800, marginBottom: "8px", color: "#1a0533" }}>
          {p.title}
        </h4>
        <p style={{ color: "rgba(26,5,51,0.5)", fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px", lineHeight: 1.7, marginBottom: "1.2rem" }}>
          {p.desc}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <motion.span
            style={{ color: p.color, fontFamily: "DM Sans, sans-serif",
                     fontSize: "11px", fontWeight: 700,
                     textTransform: "uppercase", letterSpacing: "0.1em" }}
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}>
            View Project →
          </motion.span>
          <div style={{ display: "flex", gap: "8px" }}>
            <motion.a href={p.github} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ width: 32, height: 32, borderRadius: "50%", display: "flex",
                       alignItems: "center", justifyContent: "center",
                       color: "rgba(26,5,51,0.4)",
                       background: "rgba(124,58,237,0.06)",
                       border: "0.5px solid rgba(124,58,237,0.15)",
                       textDecoration: "none" }}
              whileHover={{ color: p.color, background: `${p.color}15`,
                            borderColor: p.color, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <GithubIcon />
            </motion.a>
            <motion.a href={p.live} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ width: 32, height: 32, borderRadius: "50%", display: "flex",
                       alignItems: "center", justifyContent: "center",
                       color: "rgba(26,5,51,0.4)",
                       background: "rgba(124,58,237,0.06)",
                       border: "0.5px solid rgba(124,58,237,0.15)",
                       textDecoration: "none" }}
              whileHover={{ color: "#fff", background: p.color,
                            borderColor: p.color, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <ExternalIcon />
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
                 background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div className="mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
             style={{ color: "#7c3aed", fontFamily: "DM Sans, sans-serif" }}>
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "#1a0533" }}>
            My Projects
          </h2>
          <div className="h-px w-20 mt-4"
               style={{ background: "linear-gradient(90deg, #7c3aed, #c026d3)" }} />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}