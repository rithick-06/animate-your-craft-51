import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  url?: string;
  featured?: boolean;
}

const ArticlesSection = () => {
  const articles: Article[] = [
    {
      id: '1',
      title: 'Building Interactive 3D Experiences with Three.js and React',
      excerpt: 'A comprehensive guide to creating immersive 3D web experiences using Three.js with React. Learn about geometry, materials, lighting, and animations.',
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      tags: ['Three.js', 'React', '3D', 'WebGL'],
      url: '#',
      featured: true
    },
    {
      id: '2',
      title: 'Advanced Animation Techniques with Framer Motion',
      excerpt: 'Explore advanced animation patterns, gesture handling, and performance optimization techniques for creating smooth, engaging user interfaces.',
      publishedAt: '2024-01-08',
      readTime: '12 min read',
      tags: ['Framer Motion', 'Animation', 'React', 'UX'],
      url: '#',
      featured: true
    },
    {
      id: '3',
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Best practices for structuring large React applications with TypeScript, including type safety, code organization, and testing strategies.',
      publishedAt: '2023-12-20',
      readTime: '15 min read',
      tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
      url: '#'
    },
    {
      id: '4',
      title: 'Modern CSS Techniques for Dynamic Layouts',
      excerpt: 'Discover CSS Grid, Flexbox, and custom properties to create responsive, maintainable layouts that adapt to any screen size.',
      publishedAt: '2023-12-12',
      readTime: '10 min read',
      tags: ['CSS', 'Layout', 'Responsive Design', 'Grid'],
      url: '#'
    },
    {
      id: '5',
      title: 'Performance Optimization in Next.js Applications',
      excerpt: 'Learn about image optimization, code splitting, caching strategies, and Core Web Vitals to build lightning-fast Next.js applications.',
      publishedAt: '2023-11-28',
      readTime: '14 min read',
      tags: ['Next.js', 'Performance', 'Optimization', 'SEO'],
      url: '#'
    },
    {
      id: '6',
      title: 'Creating Beautiful Particle Systems for Web',
      excerpt: 'Step-by-step guide to implementing interactive particle systems using Canvas API and WebGL for stunning visual effects.',
      publishedAt: '2023-11-15',
      readTime: '11 min read',
      tags: ['Canvas', 'WebGL', 'Particles', 'Animation'],
      url: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: "easeOut"
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      <ParticleBackground variant="hero" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto">
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
            Featured Articles
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Sharing knowledge and insights about web development, design patterns, and modern technologies.
          </motion.p>
        </motion.div>

        {/* Featured Articles */}
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
            Latest Posts
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.filter(article => article.featured).map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full group">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-muted/50 hover:bg-primary/20 transition-colors text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto font-semibold hover:text-primary transition-colors group-hover:translate-x-2"
                      asChild
                    >
                      <a href={article.url} className="flex items-center gap-2">
                        Read More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Articles */}
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
            All Articles
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.publishedAt)}
                      <span className="mx-1">•</span>
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>

                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="text-xs bg-muted/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-muted/50">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="p-0 h-auto text-sm hover:text-primary transition-all group-hover:translate-x-1"
                      asChild
                    >
                      <a href={article.url} className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        Read
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;