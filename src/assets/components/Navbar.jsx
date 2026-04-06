import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full px-8 md:px-12 py-5 flex justify-between items-center z-50"
        style={{
          position: "fixed", // ✅ explicitly add karo
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100, // ✅ z-index badha diya
          background: "rgba(250,248,255,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "0.5px solid rgba(91,33,182,0.12)",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <motion.div
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: "-0.04em",
            color: "#1a0533",
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          Itsankitdev<span style={{ color: "#c026d3" }}>.</span>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10">
          {["About", "Projects", "Contact"].map((link, i) => (
            <motion.div
              key={link}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4 + i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.a
                href={`#${link.toLowerCase()}`}
                className="relative block text-sm font-semibold uppercase tracking-widest cursor-pointer"
                style={{ fontFamily: "DM Sans, sans-serif" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.span
                  className="block"
                  variants={{
                    rest: { color: "rgba(26,5,51,0.45)" },
                    hover: { color: "#7c3aed" },
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {link}
                </motion.span>
                <motion.span
                  className="absolute left-0 block"
                  style={{
                    bottom: -4,
                    height: 1,
                    background: "linear-gradient(90deg, #7c3aed, #c026d3)",
                  }}
                  variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Desktop Button */}
        <motion.div
          className="hidden md:block"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=ankitk098565@gmail.com"
            target="_blank"
            className="relative overflow-hidden text-sm font-semibold uppercase tracking-widest px-7 py-3 rounded-full"
            style={{
              border: "1px solid #7c3aed",
              fontFamily: "DM Sans, sans-serif",
              display: "inline-block",
              textDecoration: "none",
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #c026d3)",
              }}
              variants={{
                rest: { scaleX: 0, originX: 0 },
                hover: { scaleX: 1, originX: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="relative z-10"
              variants={{
                rest: { color: "#7c3aed" },
                hover: { color: "#fff" },
              }}
              transition={{ duration: 0.15 }}
            >
              Let's Talk
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Hamburger */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl relative z-[60]"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "0.5px solid rgba(124,58,237,0.2)",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ background: "rgba(124,58,237,0.15)", scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.span
            style={{
              display: "block",
              height: "1.5px",
              borderRadius: 2,
              transformOrigin: "center",
              width: "18px",
              marginBottom: "4px",
            }}
            animate={
              menuOpen
                ? { rotate: 45, y: 5.5, background: "#c026d3" }
                : { rotate: 0, y: 0, background: "#7c3aed" }
            }
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            style={{
              display: "block",
              height: "1.5px",
              borderRadius: 2,
              background: "#7c3aed",
              width: "18px",
              marginBottom: "4px",
            }}
            animate={
              menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.2 }}
          />
          <motion.span
            style={{
              display: "block",
              height: "1.5px",
              borderRadius: 2,
              transformOrigin: "center",
              width: "18px",
            }}
            animate={
              menuOpen
                ? { rotate: -45, y: -5.5, background: "#c026d3" }
                : { rotate: 0, y: 0, background: "#7c3aed" }
            }
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              style={{
                background: "rgba(250,248,255,0.7)",
                backdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col"
              style={{
                background: "rgba(250,248,255,0.97)",
                backdropFilter: "blur(30px)",
                borderLeft: "0.5px solid rgba(124,58,237,0.15)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  pointerEvents: "none",
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="flex flex-col justify-center flex-1 px-8 gap-1">
                {["About", "Projects", "Contact"].map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="relative block py-5 overflow-hidden"
                    style={{
                      borderBottom: "0.5px solid rgba(124,58,237,0.1)",
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "26px",
                      letterSpacing: "-0.02em",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 40, opacity: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover="hover"
                  >
                    <motion.span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "16px",
                        color: "#c026d3",
                      }}
                      variants={{ hover: { opacity: 1, x: 0 } }}
                      initial={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                    <motion.span
                      className="block"
                      initial={{ color: "rgba(26,5,51,0.4)", x: 0 }}
                      variants={{ hover: { color: "#7c3aed", x: 22 } }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {link}
                    </motion.span>
                    <motion.span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "0.5px",
                        background: "linear-gradient(90deg, #7c3aed, #c026d3)",
                      }}
                      initial={{ width: "0%" }}
                      variants={{ hover: { width: "100%" } }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.a>
                ))}
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&to=ankitk098565@gmail.com"
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                  className="mt-8 py-4 rounded-full text-center text-sm font-semibold uppercase tracking-widest text-white"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #c026d3)",
                    fontFamily: "DM Sans, sans-serif",
                    textDecoration: "none",
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 25px rgba(124,58,237,0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Talk
                </motion.a>
              </div>
              <motion.div
                className="px-8 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p
                  style={{
                    color: "rgba(26,5,51,0.2)",
                    fontSize: "11px",
                    fontFamily: "DM Sans, sans-serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  © 2026 Ankit Kumar
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
