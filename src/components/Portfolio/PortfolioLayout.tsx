import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  FileText, 
  BookOpen,
  Terminal
} from 'lucide-react';

interface PortfolioLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const PortfolioLayout = ({ children, currentSection, onSectionChange }: PortfolioLayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'articles', label: 'Articles', icon: BookOpen },
    { id: 'coding', label: 'Coding', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Auto-hide nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageTransition = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    }
  };

  const navVariants = {
    hidden: { 
      x: -300,
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as any,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      {/* Navigation Toggle */}
      <motion.button
        className="fixed top-6 left-6 z-50 p-3 bg-card/80 backdrop-blur-lg rounded-lg border border-border/50 shadow-elegant"
        onClick={() => setIsNavOpen(!isNavOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="w-6 h-6 flex flex-col justify-center items-center"
          animate={isNavOpen ? "open" : "closed"}
        >
          <motion.span
            className="block w-5 h-0.5 bg-primary mb-1"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 }
            }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-primary mb-1"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-primary"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 }
            }}
          />
        </motion.div>
      </motion.button>

      {/* Side Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavOpen(false)}
            />
            <motion.nav
              className="fixed left-0 top-0 h-full w-80 bg-card/95 backdrop-blur-lg border-r border-border/50 z-50 p-8"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="mt-20">
                <h2 className="text-2xl font-bold gradient-text mb-8">Portfolio</h2>
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          variant={currentSection === item.id ? "default" : "ghost"}
                          className={`w-full justify-start gap-3 p-4 h-auto ${
                            currentSection === item.id
                              ? 'shadow-glow-primary'
                              : 'hover:shadow-glow-primary/50'
                          }`}
                          onClick={() => {
                            onSectionChange(item.id);
                            setIsNavOpen(false);
                          }}
                        >
                          <Icon className="w-5 h-5" />
                          {item.label}
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait" key={currentSection}>
          <motion.div
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === item.id
                ? 'bg-primary border-primary shadow-glow-primary'
                : 'bg-transparent border-border/50 hover:border-primary/50'
            }`}
            onClick={() => onSectionChange(item.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioLayout;