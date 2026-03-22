import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scrollY = 0;
    let mouseX = 0, mouseY = 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // ✅ Purple theme lights
    const pointLight1 = new THREE.PointLight(0xa855f7, 2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xe879f9, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const geometry = new THREE.IcosahedronGeometry(1.5, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      metalness: 0.9,
      roughness: 0.1,
    });
    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    const originalPositions = new Float32Array(geometry.attributes.position.array);

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      const positions = blob.geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions[i];
        const y = originalPositions[i + 1];
        const z = originalPositions[i + 2];
        const wave =
          Math.sin(x * 1.5 + time) * 0.2 +
          Math.sin(y * 2.0 + time * 1.2) * 0.2 +
          Math.sin(z * 1.0 + time * 0.8) * 0.2;
        const scalar = 1 + wave * (0.3 + scrollY * 0.0005);
        positions[i] = x * scalar;
        positions[i + 1] = y * scalar;
        positions[i + 2] = z * scalar;
      }
      blob.geometry.attributes.position.needsUpdate = true;
      blob.rotation.y += 0.005;
      blob.rotation.x += 0.002;
      blob.position.x = mouseX * 0.5;
      blob.position.y = mouseY * 0.5 - scrollY * 0.002;
      camera.position.y = -(scrollY * 0.001);
      renderer.render(scene, camera);
    };
    animate();

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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
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
        zIndex: -1,        // ✅ -1 rakho, 0 nahi
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}