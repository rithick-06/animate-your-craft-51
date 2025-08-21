import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  variant?: 'hero' | 'about' | 'projects' | 'skills' | 'contact';
}

const ParticleBackground = ({ variant = 'hero' }: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: any) => {
    // Particles loaded callback
  }, []);

  const getParticleConfig = () => {
    const baseConfig = {
      fpsLimit: 60,
      fullScreen: false,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#8B5CF6",
        },
        links: {
          color: "#8B5CF6",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as any,
          enable: true,
          outModes: {
            default: "bounce" as any,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle" as any,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };

    // Customize based on variant
    switch (variant) {
      case 'hero':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 100,
            },
            color: {
              value: "#3B82F6",
            },
            links: {
              ...baseConfig.particles.links,
              color: "#3B82F6",
            },
          },
        };
      case 'about':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 60,
            },
            color: {
              value: "#10B981",
            },
            links: {
              ...baseConfig.particles.links,
              color: "#10B981",
            },
          },
        };
      case 'projects':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 70,
            },
            color: {
              value: "#F59E0B",
            },
            links: {
              ...baseConfig.particles.links,
              color: "#F59E0B",
            },
          },
        };
      case 'skills':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 90,
            },
            color: {
              value: "#EF4444",
            },
            links: {
              ...baseConfig.particles.links,
              color: "#EF4444",
            },
          },
        };
      case 'contact':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 50,
            },
            color: {
              value: "#8B5CF6",
            },
            links: {
              ...baseConfig.particles.links,
              color: "#8B5CF6",
            },
          },
        };
      default:
        return baseConfig;
    }
  };

  return (
    <Particles
      id={`particles-${variant}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={getParticleConfig() as any}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticleBackground;