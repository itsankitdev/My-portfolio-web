import ThreeBackground from "./assets/components/ThreeBackground";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import AboutSection from "./assets/components/AboutSection";
import ProjectsSection from "./assets/components/ProjectsSection";
import ContactSection from "./assets/components/ContactSection";
import { motion } from "framer-motion";
function App() {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <ThreeBackground />
      <div style={{ position: "relative", zIndex: 1, isolation: "isolate" }}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <footer
          className="px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: "0.5px solid rgba(168,85,247,0.15)",
            color: "rgba(233,213,255,0.25)",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <p>© 2024 Ankit Kumar. All rights reserved.</p>
          <div className="flex gap-8">
            {[
              { label: "GitHub", href: "https://github.com/itsankitdev" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ankit-kumar-a640623ab",
              },
              { label: "Email", href: "mailto:ankitk098565@gmail.com" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                style={{
                  color: "rgba(233,213,255,0.25)",
                  textDecoration: "none",
                }}
                whileHover={{ color: "#a855f7" }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
