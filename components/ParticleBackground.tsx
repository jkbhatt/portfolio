"use client";

import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#a855f7",
          },

          links: {
            color: "#a855f7",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 50,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
    />
  );
}