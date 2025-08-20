import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: '🛍️',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      technologies: ['Vue.js', 'Firebase', 'Socket.io', 'Vuex'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current conditions and forecasts using OpenWeatherMap API with beautiful data visualizations.',
      image: '🌤️',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: '4',
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with real-time data processing and interactive charts.',
      image: '📊',
      technologies: ['Next.js', 'D3.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: 'A modern portfolio website with 3D animations, particle effects, and smooth transitions built with Three.js and Framer Motion.',
      image: '🎨',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: '6',
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course creation, student progress tracking, and interactive learning modules.',
      image: '🎓',
      technologies: ['Angular', 'NestJS', 'MySQL', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      rotateY: 10,
      rotateX: 10,
      scale: 1.05,
      z: 50,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      <ParticleBackground variant="projects" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my recent work and personal projects. Each project represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-primary"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="perspective-1000"
              >
                <Card className="overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 transform-gpu">
                  <motion.div
                    className="card-3d h-full"
                    variants={cardHoverVariants}
                  >
                    {/* Project Image/Icon */}
                    <div className="h-48 bg-gradient-primary flex items-center justify-center text-6xl">
                      {project.image}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          Featured
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="bg-muted/50 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Button size="sm" className="shadow-glow-primary hover:scale-105 transition-all">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" className="hover:scale-105 transition-all">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8"
            variants={itemVariants}
          >
            All Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group perspective-1000"
              >
                <Card className="overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                  <motion.div
                    className="card-3d h-full"
                    variants={cardHoverVariants}
                  >
                    {/* Project Image/Icon */}
                    <div className="h-32 bg-gradient-secondary flex items-center justify-center text-4xl">
                      {project.image}
                    </div>
                    
                    <div className="p-4 flex flex-col h-full">
                      <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                      
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="text-xs bg-muted/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-muted/50">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button size="sm" variant="ghost" className="p-2 h-auto">
                            <Eye className="w-4 h-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="ghost" className="p-2 h-auto">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;