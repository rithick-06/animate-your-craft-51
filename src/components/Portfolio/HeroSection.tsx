import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import ThreeDIcon from './ThreeDIcon';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.6,
        ease: "backOut" as any
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground variant="hero" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-background/80 z-10" />
      
      {/* 3D Floating Icons */}
      <div className="absolute top-20 left-20 z-20">
        <ThreeDIcon type="react" />
      </div>
      <div className="absolute top-40 right-32 z-20">
        <ThreeDIcon type="threejs" />
      </div>
      <div className="absolute bottom-40 left-32 z-20">
        <ThreeDIcon type="javascript" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm text-primary font-medium mb-6">
            Welcome to my Portfolio
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          <span className="block text-glow">Hello, I'm</span>
          <span className="block gradient-text animate-pulse-scale">
            John Doe
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Full Stack Developer & UI/UX Designer creating 
          <span className="text-primary font-semibold"> beautiful digital experiences</span> 
          with modern technologies
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Button
            size="lg"
            className="px-8 py-4 text-lg shadow-glow-primary hover:shadow-glow-secondary hover:scale-105 transition-all duration-300"
            onClick={() => onSectionChange('projects')}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            onClick={() => onSectionChange('contact')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Download, href: '#', label: 'Resume' }
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              className="p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "var(--glow-primary)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="p-2 rounded-full"
            onClick={() => onSectionChange('about')}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;