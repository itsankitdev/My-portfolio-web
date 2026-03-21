import { motion } from "framer-motion";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
      <motion.div
        className="glass p-12 md:p-20 rounded-[3rem] max-w-4xl w-full text-center"
        style={{ border: '0.5px solid rgba(168,85,247,0.25)' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>

        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          style={{ color: '#a855f7', fontFamily: 'DM Sans, sans-serif' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false }} transition={{ delay: 0.2 }}>
          Get In Touch
        </motion.p>

        <motion.h2
          className="font-bold mb-4 leading-none"
          style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ delay: 0.3, duration: 0.6 }}>
          Let's <span className="accent-text">build.</span>
        </motion.h2>

        <motion.p
          className="mb-3 text-sm md:text-base"
          style={{ color: 'rgba(233,213,255,0.45)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false }} transition={{ delay: 0.4 }}>
          I'm open to frontend opportunities, collaborations, and freelance projects.
        </motion.p>

        {/* Email display */}
        <motion.p
          className="mb-10 text-sm font-semibold"
          style={{ color: '#a855f7', fontFamily: 'DM Sans, sans-serif' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false }} transition={{ delay: 0.45 }}>
          ankitk098565@gmail.com
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ delay: 0.5 }}>

          <motion.a
            href="mailto:ankitk098565@gmail.com"
            style={{ padding: '14px 36px', borderRadius: '100px', fontWeight: 600,
                     fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em',
                     color: '#fff', background: 'linear-gradient(135deg, #a855f7, #e879f9)',
                     fontFamily: 'DM Sans, sans-serif', textDecoration: 'none',
                     display: 'inline-block' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}
            whileTap={{ scale: 0.97 }}>
            Send an Email
          </motion.a>

        </motion.div>

        {/* Divider */}
        <div style={{ height: '0.5px', background: 'rgba(168,85,247,0.15)', marginBottom: '32px' }} />

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false }} transition={{ delay: 0.6 }}>

          <motion.a
            href="https://github.com/itsankitdev"
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px',
                     padding: '10px 24px', borderRadius: '100px',
                     fontSize: '12px', fontWeight: 600,
                     fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase',
                     letterSpacing: '0.08em', color: 'rgba(233,213,255,0.7)',
                     background: 'rgba(255,255,255,0.05)',
                     border: '0.5px solid rgba(168,85,247,0.25)', textDecoration: 'none' }}
            whileHover={{ scale: 1.05, color: '#fff',
                          background: 'rgba(168,85,247,0.15)',
                          borderColor: '#a855f7' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}>
            <GithubIcon /> GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ankit-kumar-a640623ab"
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px',
                     padding: '10px 24px', borderRadius: '100px',
                     fontSize: '12px', fontWeight: 600,
                     fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase',
                     letterSpacing: '0.08em', color: 'rgba(233,213,255,0.7)',
                     background: 'rgba(255,255,255,0.05)',
                     border: '0.5px solid rgba(168,85,247,0.25)', textDecoration: 'none' }}
            whileHover={{ scale: 1.05, color: '#fff',
                          background: 'rgba(168,85,247,0.15)',
                          borderColor: '#a855f7' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}>
            <LinkedInIcon /> LinkedIn
          </motion.a>

        </motion.div>

      </motion.div>
    </section>
  );
}