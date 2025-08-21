import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Lightbulb, Target, Users, Newspaper } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Expertise",
    description: "Deep experience with LLMs, computer vision, and neural networks"
  },
  {
    icon: Code,
    title: "Full-Stack Integration",
    description: "Building end-to-end solutions from model training to deployment"
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description: "Focus on user experience and solving real-world problems"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Shipped multiple ML systems with measurable impact"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong communication and leadership in technical projects"
  },
  {
    icon: Newspaper,
    title: "Continuous Learning",
    description: "Staying updated with latest AI research and industry trends"
  }
];

const hobbies = [
  "Sports for teamwork & discipline",
  "Following current affairs",
  "Technology research",
  "Open source contributions"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building intelligent systems that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-gradient-card border-border/50">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="text-primary font-semibold">Highly motivated Generative AI & ML Developer</span> building 
                  intelligent, data-driven solutions with LLMs, diffusion models, and scalable full-stack integration.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I specialize in developing end-to-end AI systems that solve real-world problems. From computer vision 
                  models for manufacturing quality control to natural language processing systems for content moderation, 
                  I enjoy the complete journey from research to production deployment.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  My approach combines deep technical expertise with product thinking, ensuring that the solutions I build 
                  are not only technically sound but also provide genuine value to users and businesses.
                </p>
              </div>
            </Card>

            {/* Hobbies & Interests */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{hobby}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full group">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Fun Fact */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">🚀</div>
              <div className="text-left">
                <p className="text-lg font-semibold mb-1">Fun Fact</p>
                <p className="text-muted-foreground">
                  I believe the best AI solutions are those that feel invisible to users
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;