import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
    
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
              limit: 10
            },
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '3',
          },
          links: {
            color: '#8A2BE2',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
            triangles: {
              enable: false
            }
          },
          move: {
            bounce: false,
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
              bottom: 'bounce',
              left: 'bounce',
              right: 'bounce',
              top: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 300,
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0, max: 0 },
          },
        },
   
        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticlesBackground;