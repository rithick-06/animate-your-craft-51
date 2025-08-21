import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarNav from '@/components/RithickPortfolio/SidebarNav';
import HeroSection from '@/components/RithickPortfolio/HeroSection';
import ProjectsSection from '@/components/RithickPortfolio/ProjectsSection';
import SkillsSection from '@/components/RithickPortfolio/SkillsSection';
import AchievementsSection from '@/components/RithickPortfolio/AchievementsSection';
import AboutSection from '@/components/RithickPortfolio/AboutSection';
import EducationSection from '@/components/RithickPortfolio/EducationSection';
import CertificatesSection from '@/components/RithickPortfolio/CertificatesSection';
import SoftSkillsSection from '@/components/RithickPortfolio/SoftSkillsSection';
import LanguagesSection from '@/components/RithickPortfolio/LanguagesSection';
import ContactSection from '@/components/RithickPortfolio/ContactSection';
import BackgroundBlobs from '@/components/RithickPortfolio/BackgroundBlobs';
import { useToast } from '@/hooks/use-toast';

const RithickPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setShowBackToTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'achievements', 'about', 'education', 'certificates', 'soft-skills', 'languages', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easter egg: Press 'G' to open GitHub
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'g' && !e.ctrlKey && !e.metaKey) {
        window.open('https://github.com/rithick-06', '_blank');
        toast({
          title: "Easter egg activated! 🥚",
          description: "Opening GitHub profile...",
        });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toast]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20 text-foreground overflow-x-hidden">
      {/* Background Blobs */}
      <BackgroundBlobs />
      
      {/* Sidebar Navigation */}
      <SidebarNav 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        isScrolled={isScrolled}
      />

      {/* Main Content */}
      <main className="ml-0 lg:ml-80 relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection onScrollToSection={scrollToSection} />
            <ProjectsSection />
            <SkillsSection />
            <AchievementsSection />
            <AboutSection />
            <EducationSection />
            <CertificatesSection />
            <SoftSkillsSection />
            <LanguagesSection />
            <ContactSection />
          </motion.div>
        </div>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary/20 backdrop-blur-lg border border-primary/30 rounded-full shadow-glow-primary hover:bg-primary/30 hover:scale-110 transition-all duration-300"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

      {/* Footer */}
      <footer className="ml-0 lg:ml-80 bg-card/50 backdrop-blur-lg border-t border-border/50 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Generative AI & ML Developer building intelligent, data-driven products
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://github.com/rithick-06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/rithick-m-k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:rithick.ad22@bitsathy.ac.in"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rithick M K. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RithickPortfolio;