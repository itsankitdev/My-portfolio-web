import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "100px 2rem 60px",
        position: "relative",
        overflow: "hidden",
      }}>

      {/* Tag */}
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0}
        style={{
          color: "#5b21b6", fontFamily: "DM Sans, sans-serif",
          fontSize: "11px", fontWeight: 700,
          letterSpacing: "0.28em", textTransform: "uppercase",
          marginBottom: "20px", position: "relative", zIndex: 5,
        }}>
        ✦ Welcome to my Portfolio
      </motion.p>

      {/* "I'm a" — static line */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0.1}
        style={{ position: "relative", zIndex: 5, marginBottom: "8px" }}>
        <span style={{
          fontFamily: "Syne, sans-serif", fontWeight: 800,
          fontSize: "clamp(32px, 4vw, 60px)",   // ✅ chhota
          color: "#0a0015", letterSpacing: "-0.03em",
          lineHeight: 1, display: "block",
        }}>
          I'm a
        </span>
      </motion.div>

      {/* ✅ Typing animation — fixed size + cursor inside */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0.2}
        style={{
          position: "relative", zIndex: 5,
          marginBottom: "24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70px",
        }}>

        <TypeAnimation
          sequence={[
            "Frontend Developer", 2000,
            "React Developer",    2000,
            // "UI/UX Enthusiast",   2000,
            "Web Designer",       2000,
            "JavaScript Dev",     2000,
            // "Problem Solver",     2000,
          ]}
          wrapper="span"
          speed={55}
          deletingSpeed={70}
          repeat={Infinity}
          cursor={false}         // ✅ library ka cursor off — apna use karenge
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 58px)",  // ✅ bahut chhota kiya
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #5b21b6, #86198f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline",
          }}
        />

        {/* ✅ Cursor — text ke bilkul saath */}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",          // ✅ 1em — font ke saath perfectly scale
            background: "#5b21b6",
            borderRadius: "2px",
            marginLeft: "4px",
            flexShrink: 0,
            verticalAlign: "middle",
          }}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0.3}
        style={{
          color: "rgba(10,0,21,0.5)", fontFamily: "DM Sans, sans-serif",
          lineHeight: 1.7, fontSize: "15px", maxWidth: "420px",
          marginBottom: "36px", position: "relative", zIndex: 5,
        }}>
        Crafting beautiful, interactive web experiences with clean code
        and creative design.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} custom={0.4}
        style={{
          display: "flex", gap: "14px", flexWrap: "wrap",
          justifyContent: "center", position: "relative",
          zIndex: 5,
          marginTop: "60px",    // ✅ yahan se neeche jayenge buttons
          marginBottom: "0px",
        }}>
        <motion.a
          href="#projects"
          style={{
            padding: "12px 30px", borderRadius: "100px",
            fontSize: "12px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em",
            color: "#fff",
            background: "linear-gradient(135deg, #5b21b6, #86198f)",
            fontFamily: "DM Sans, sans-serif",
            textDecoration: "none", display: "inline-block",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(91,33,182,0.35)" }}
          whileTap={{ scale: 0.97 }}>
          View Work
        </motion.a>
        <motion.a
          href="#contact"
          style={{
            padding: "12px 30px", borderRadius: "100px",
            fontSize: "12px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em",
            color: "#5b21b6", border: "1.5px solid rgba(91,33,182,0.35)",
            fontFamily: "DM Sans, sans-serif",
            textDecoration: "none", display: "inline-block",
            background: "transparent",
          }}
          whileHover={{ scale: 1.05, borderColor: "#5b21b6",
                        background: "rgba(91,33,182,0.06)" }}
          whileTap={{ scale: 0.97 }}>
          Contact Me
        </motion.a>
      </motion.div>

      {/* Scroll arrow */}
      <motion.div
        style={{
          position: "absolute", bottom: "28px", left: "50%",
          transform: "translateX(-50%)", zIndex: 5,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "2px",
        }}
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
        <span style={{
          display: "block", width: "1.5px", height: "20px",
          background: "rgba(91,33,182,0.3)", borderRadius: "2px",
        }} />
        <span style={{
          display: "block", width: "8px", height: "8px",
          borderRight: "1.5px solid rgba(91,33,182,0.4)",
          borderBottom: "1.5px solid rgba(91,33,182,0.4)",
          transform: "rotate(45deg)", marginTop: "-5px",
        }} />
      </motion.div>

    </section>
  );
}