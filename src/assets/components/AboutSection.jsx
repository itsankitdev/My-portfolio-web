import { motion } from "framer-motion";

const skills = [
  { name: 'JavaScript', color: '#a855f7' },
  { name: 'React', color: '#e879f9' },
  { name: 'Tailwind CSS', color: '#a855f7' },
  { name: 'Figma', color: '#e879f9' },
  { name: 'Python', color: '#a855f7' },
  { name: 'Node.js', color: '#e879f9' },
  { name: 'C Language', color: '#a855f7' },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass p-10 md:p-16 rounded-[2.5rem]">

          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: '#a855f7', fontFamily: 'DM Sans, sans-serif' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}>
            About Me
          </motion.p>

          <motion.h3
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Fresher dev with a{' '}
            <span className="accent-text">passion</span>{' '}
            for great UI.
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12"
               style={{ color: 'rgba(233,213,255,0.5)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Hi, I'm <strong style={{ color: '#fff' }}>Ankit Kumar</strong> — a frontend
              developer who loves building clean, interactive, and visually stunning web
              experiences. I'm currently in my early career and growing fast every day.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              I enjoy turning complex problems into simple, beautiful designs. When I'm
              not coding, I'm exploring new technologies, working on personal projects,
              and sharpening my skills in React and UI/UX.
            </motion.p>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-5"
               style={{ color: '#a855f7', fontFamily: 'DM Sans, sans-serif' }}>
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  style={{
                    padding: '8px 18px', borderRadius: '100px',
                    fontSize: '12px', fontWeight: 600,
                    fontFamily: 'DM Sans, sans-serif',
                    color: skill.color,
                    background: `${skill.color}15`,
                    border: `0.5px solid ${skill.color}40`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                  whileHover={{ scale: 1.08, background: `${skill.color}25` }}>
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