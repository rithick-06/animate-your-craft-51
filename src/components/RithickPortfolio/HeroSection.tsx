import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

const typewriterTexts = [
  "Generative AI & ML Developer",
  "Computer Vision Enthusiast",
  "Full-Stack Explorer"
];

const techChips = ["LLMs", "RAG", "YOLOv8", "PyTorch", "TensorFlow", "FAISS", "Qt", "Flask"];

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [profileImage, setProfileImage] = useState('');

  // Fetch GitHub avatar
  useEffect(() => {
    const fetchGitHubAvatar = async () => {
      try {
        const response = await fetch('https://api.github.com/users/rithick-06');
        const data = await response.json();
        setProfileImage(data.avatar_url || '');
      } catch (error) {
        console.error('Failed to fetch GitHub avatar:', error);
        setProfileImage(''); // Fallback to placeholder
      }
    };

    fetchGitHubAvatar();
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-primary">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Rithick M K"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  R
                </div>
              )}
            </div>
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-primary opacity-50 blur-sm"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello, I'm{' '}
          <span className="gradient-text">Rithick M K</span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          className="h-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
            {displayText}
            <motion.span
              className="inline-block w-0.5 h-8 bg-primary ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </h2>
        </motion.div>

        {/* One-liner */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          "I build intelligent, data-driven products with LLMs, diffusion models, and real-time vision systems."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105 magnet-effect"
            onClick={() => onScrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            onClick={() => onScrollToSection('contact')}
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Tech Chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {techChips.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(tech);
              }}
            >
              <Badge 
                variant="secondary" 
                className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 px-3 py-1"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => onScrollToSection('projects')}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;