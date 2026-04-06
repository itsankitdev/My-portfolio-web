import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scrollY = 0;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(1);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x7c3aed, 2.5);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xc026d3, 1.5);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const geometry = new THREE.IcosahedronGeometry(1.5, 20);
    const material = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.6,
      roughness: 0.2,
      transparent: true,
      opacity: 0.55,   // ✅ aur transparent — text ke peeche blend hoga
    });
    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    const originalPositions = new Float32Array(
      geometry.attributes.position.array
    );

    let animId;
    let lastTime = 0;

    const animate = (timestamp) => {
      animId = requestAnimationFrame(animate);
      if (timestamp - lastTime < 25) return;
      lastTime = timestamp;

      const time = timestamp * 0.001;
      const positions = blob.geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];
        const wave =
          Math.sin(x * 1.5 + time) * 0.15 +
          Math.sin(y * 2.0 + time * 1.2) * 0.15 +
          Math.sin(z * 1.0 + time * 0.8) * 0.15;
        const scalar = 1 + wave * 0.3;
        positions[i] = x * scalar;
        positions[i + 1] = y * scalar;
        positions[i + 2] = z * scalar;
      }
      blob.geometry.attributes.position.needsUpdate = true;
      blob.rotation.y += 0.003;
      blob.rotation.x += 0.001;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      blob.position.x = targetX * 0.5;

      // ✅ Blob sirf hero section mein move kare — scroll pe fade out
      const maxScroll = window.innerHeight;
      const scrollRatio = Math.min(scrollY / maxScroll, 1);
      blob.position.y = targetY * 0.5 - scrollY * 0.002;
      material.opacity = 0.55 * (1 - scrollRatio * 0.85); // ✅ scroll pe fade

      camera.position.y = -(scrollY * 0.001);
      renderer.render(scene, camera);
    };
    animate(0);

    const handleScroll = () => { scrollY = window.scrollY; };
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,          // ✅ 0 rakho
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}