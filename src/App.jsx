import ThreeBackground from "./assets/components/ThreeBackground";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import AboutSection from "./assets/components/AboutSection";
import ProjectsSection from "./assets/components/ProjectsSection";
import ContactSection from "./assets/components/ContactSection";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <ThreeBackground />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* ✅ Footer — properly visible */}
        <footer style={{
          position: "relative", zIndex: 2,
          background: "rgba(91,33,182,0.06)",
          borderTop: "1px solid rgba(91,33,182,0.12)",
          padding: "28px 48px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <p style={{
            color: "rgba(10,0,21,0.5)",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 500,
          }}>
            © 2024 Ankit Kumar. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            {[
              { label: "GitHub", href: "https://github.com/itsankitdev" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ankit-kumar-a640623ab" },
              { label: "Email", href: "mailto:ankitk098565@gmail.com" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(10,0,21,0.45)",
                  textDecoration: "none",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
                whileHover={{ color: "#5b21b6" }}
                transition={{ duration: 0.2 }}>
                {link.label}
              </motion.a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;