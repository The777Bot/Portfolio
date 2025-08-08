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
    const options: ISourceOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#ec4899",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 5,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none" as const,
      outModes: "bounce", // ✅ Simple and clean
    },
  },
};

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
