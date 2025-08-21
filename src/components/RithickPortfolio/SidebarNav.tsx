import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  FolderOpen, 
  Code, 
  Trophy, 
  User, 
  GraduationCap, 
  Award, 
  Heart,
  Languages,
  Mail,
  Github,
  Linkedin,
  Download
} from 'lucide-react';

interface SidebarNavProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  isScrolled: boolean;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'about', label: 'About', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'soft-skills', label: 'Soft Skills', icon: Heart },
  { id: 'languages', label: 'Languages', icon: Languages },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const SidebarNav = ({ activeSection, onSectionClick, isScrolled }: SidebarNavProps) => {
  const handleDownloadResume = () => {
    // Placeholder for resume download
    window.open('#', '_blank');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-card/80 backdrop-blur-lg rounded-lg border border-border/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-full w-80 bg-card/80 backdrop-blur-xl border-r border-border/30 z-40 transition-all duration-300 ${
          isScrolled ? 'shadow-elegant' : ''
        } hidden lg:block`}
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold gradient-text">Rithick</h1>
          </motion.div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 p-3 h-auto transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/20 text-primary border border-primary/30 shadow-glow-primary' 
                        : 'hover:bg-muted/50 hover:translate-x-1'
                    }`}
                    onClick={() => onSectionClick(item.id)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Button>
                </motion.div>
              );
            })}
          </nav>

          {/* Social Links */}
          <motion.div
            className="space-y-4 pt-6 border-t border-border/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/rithick-06"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rithick-m-k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rithick.ad22@bitsathy.ac.in"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Download Resume Button */}
            <Button
              onClick={handleDownloadResume}
              className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Résumé
            </Button>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
};

export default SidebarNav;