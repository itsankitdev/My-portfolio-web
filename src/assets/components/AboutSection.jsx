import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", color: "#7c3aed" },
  { name: "React", color: "#c026d3" },
  { name: "Tailwind CSS", color: "#7c3aed" },
  { name: "Figma", color: "#c026d3" },
  { name: "Python", color: "#7c3aed" },
  { name: "Node.js", color: "#c026d3" },
  { name: "C Language", color: "#7c3aed" },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass p-10 md:p-16 rounded-[2.5rem]">

          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: "#7c3aed", fontFamily: "DM Sans, sans-serif" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            About Me
          </motion.p>

          <motion.h3
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "Syne, sans-serif", color: "#1a0533" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Fresher dev with a{" "}
            <span className="accent-text">passion</span>{" "}
            for great UI.
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12"
               style={{ color: "rgba(26,5,51,0.55)", fontFamily: "DM Sans, sans-serif",
                        lineHeight: 1.7 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              Hi, I'm <strong style={{ color: "#1a0533" }}>Ankit Kumar</strong> — a frontend
              developer who loves building clean, interactive, and visually stunning web
              experiences. I'm currently in my early career and growing fast every day.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              I enjoy turning complex problems into simple, beautiful designs. When I'm
              not coding, I'm exploring new technologies, working on personal projects,
              and sharpening my skills in React and UI/UX.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-5"
               style={{ color: "#7c3aed", fontFamily: "DM Sans, sans-serif" }}>
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  style={{ padding: "8px 18px", borderRadius: "100px",
                           fontSize: "12px", fontWeight: 600,
                           fontFamily: "DM Sans, sans-serif",
                           color: skill.color,
                           background: `${skill.color}12`,
                           border: `0.5px solid ${skill.color}35` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                  whileHover={{ scale: 1.08, background: `${skill.color}20` }}>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}