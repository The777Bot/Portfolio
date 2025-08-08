"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    fullScreen: { enable: false },
    background: {
      color: { value: "#000000" },
    },
    fpsLimit: 30, // reduce fps for mobile
    interactivity: {
      events: {
        onHover: {
          enable: !isMobile, // disable hover effects on mobile
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: "#ec4899" },
      links: {
        color: "#3b82f6",
        distance: isMobile ? 100 : 200,
        enable: true,
        opacity: 0.6,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        enable: true,
        speed: isMobile ? 0.8 : 2, // slower on mobile
        direction: "none" as const,
        outModes: { default: "bounce" },
      },
      number: {
        value: isMobile ? 30 : 100, // fewer particles on mobile
        density: {
          enable: true,
          area: 700,
        },
      },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: {
        value: isMobile ? { min: 1, max: 3 } : { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
