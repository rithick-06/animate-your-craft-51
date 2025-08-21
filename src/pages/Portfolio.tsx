import { useState } from 'react';
import PortfolioLayout from '@/components/Portfolio/PortfolioLayout';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import SkillsSection from '@/components/Portfolio/SkillsSection';
import ArticlesSection from '@/components/Portfolio/ArticlesSection';
import CodingProfilesSection from '@/components/Portfolio/CodingProfilesSection';
import ContactSection from '@/components/Portfolio/ContactSection';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':
        return <HeroSection onSectionChange={setCurrentSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'articles':
        return <ArticlesSection />;
      case 'coding':
        return <CodingProfilesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <PortfolioLayout 
      currentSection={currentSection} 
      onSectionChange={setCurrentSection}
    >
      {renderSection()}
    </PortfolioLayout>
  );
};

export default Portfolio;