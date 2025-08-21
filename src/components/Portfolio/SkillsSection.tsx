import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Palette, 
  Smartphone, 
  Server, 
  Cloud,
  GitBranch,
  Layers
} from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import ThreeDIcon from './ThreeDIcon';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      color: 'text-blue-400',
      skills: [
        { name: 'React/Next.js', level: 95, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'Tailwind CSS', level: 92, category: 'frontend' },
        { name: 'Three.js', level: 85, category: 'frontend' },
        { name: 'Framer Motion', level: 88, category: 'frontend' },
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'text-green-400',
      skills: [
        { name: 'Node.js', level: 90, category: 'backend' },
        { name: 'Python', level: 85, category: 'backend' },
        { name: 'GraphQL', level: 80, category: 'backend' },
        { name: 'REST APIs', level: 92, category: 'backend' },
        { name: 'Microservices', level: 78, category: 'backend' },
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      color: 'text-purple-400',
      skills: [
        { name: 'PostgreSQL', level: 88, category: 'database' },
        { name: 'MongoDB', level: 85, category: 'database' },
        { name: 'Redis', level: 80, category: 'database' },
        { name: 'Prisma', level: 87, category: 'database' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      color: 'text-orange-400',
      skills: [
        { name: 'AWS', level: 82, category: 'devops' },
        { name: 'Docker', level: 85, category: 'devops' },
        { name: 'Kubernetes', level: 75, category: 'devops' },
        { name: 'CI/CD', level: 88, category: 'devops' },
      ]
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
        ease: "easeOut" as any
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as any,
        delay: 0.5
      }
    })
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      <ParticleBackground variant="skills" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/90 z-10" />

      {/* Floating 3D Icons */}
      <div className="absolute top-32 right-20 z-15">
        <ThreeDIcon type="javascript" />
      </div>
      <div className="absolute bottom-32 left-20 z-15">
        <ThreeDIcon type="react" />
      </div>

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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A comprehensive overview of my technical skills and proficiency levels across different technologies and frameworks.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-primary/20 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        duration: 0.6 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full shadow-glow-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut" as any,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8"
            variants={itemVariants}
          >
            Other Technologies & Tools
          </motion.h3>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {[
              'Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 
              'Webpack', 'Vite', 'Jest', 'Cypress', 'Storybook',
              'Linux', 'Nginx', 'GraphQL', 'Socket.io', 'WebRTC'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-card border border-border/50 rounded-lg hover:border-primary/50 hover:shadow-glow-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;