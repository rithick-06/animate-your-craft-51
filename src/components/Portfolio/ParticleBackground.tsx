import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles";
import type { Container, Engine } from "tsparticles";

interface ParticleBackgroundProps {
  variant?: 'hero' | 'projects' | 'skills' | 'contact';
}

const ParticleBackground = ({ variant = 'hero' }: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  const getParticleConfig = () => {
    const baseConfig = {
      fpsLimit: 120,
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
          value: ["#3B82F6", "#8B5CF6", "#06B6D4"],
        },
        links: {
          color: "#3B82F6",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
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
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
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
            move: {
              ...baseConfig.particles.move,
              speed: 2,
            },
          },
        };
      
      case 'projects':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: {
              value: ["#8B5CF6", "#EC4899"],
            },
            links: {
              ...baseConfig.particles.links,
              color: "#8B5CF6",
            },
            number: {
              ...baseConfig.particles.number,
              value: 60,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 1,
            },
          },
        };
      
      case 'skills':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: {
              value: ["#06B6D4", "#10B981"],
            },
            links: {
              ...baseConfig.particles.links,
              color: "#06B6D4",
              enable: false,
            },
            number: {
              ...baseConfig.particles.number,
              value: 40,
            },
            shape: {
              type: ["circle", "triangle"],
            },
            move: {
              ...baseConfig.particles.move,
              speed: 3,
              direction: "top",
            },
          },
        };
      
      case 'contact':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: {
              value: ["#F59E0B", "#EF4444"],
            },
            links: {
              ...baseConfig.particles.links,
              color: "#F59E0B",
              opacity: 0.2,
            },
            number: {
              ...baseConfig.particles.number,
              value: 50,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 0.8,
            },
          },
        };
      
      default:
        return baseConfig;
    }
  };

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id={`particles-${variant}`}
        init={particlesInit}
        loaded={particlesLoaded}
        options={getParticleConfig()}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;