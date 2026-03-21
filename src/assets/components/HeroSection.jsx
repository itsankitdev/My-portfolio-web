import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center relative"
             style={{ padding: '120px 2rem 2rem' }}> {/* navbar height ka padding */}

      {/* Tag */}
      <motion.p
        style={{
          color: '#a855f7',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 30,
          display: 'block',
          width: '100%',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        ✦ Interactive Experience
      </motion.p>

      {/* Heading */}
      <motion.h1
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          position: 'relative',
          zIndex: 10,
          marginBottom: '32px',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <span className="block text-6xl md:text-9xl text-white">FRONTEND</span>
        <span className="block text-6xl md:text-9xl outline-text">DESIGNER</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        style={{
          color: 'rgba(233,213,255,0.5)',
          fontFamily: 'DM Sans, sans-serif',
          lineHeight: 1.7,
          fontSize: '15px',
          maxWidth: '420px',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 30,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        Building the next generation of digital products with 3D interactions and high-performance code.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 30 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <a href="#projects"
           style={{
             padding: '12px 32px',
             borderRadius: '100px',
             fontSize: '12px',
             fontWeight: 600,
             textTransform: 'uppercase',
             letterSpacing: '0.1em',
             color: '#fff',
             background: 'linear-gradient(135deg, #a855f7, #e879f9)',
             fontFamily: 'DM Sans, sans-serif',
             textDecoration: 'none',
           }}>
          View Work
        </a>
        <a href="#contact"
           style={{
             padding: '12px 32px',
             borderRadius: '100px',
             fontSize: '12px',
             fontWeight: 600,
             textTransform: 'uppercase',
             letterSpacing: '0.1em',
             color: 'rgba(233,213,255,0.7)',
             border: '1px solid rgba(168,85,247,0.4)',
             fontFamily: 'DM Sans, sans-serif',
             textDecoration: 'none',
           }}>
          Contact Me
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(168,85,247,0.5)',
          fontSize: '20px',
          zIndex: 30,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
        ↓
      </motion.div>

    </section>
  );
}