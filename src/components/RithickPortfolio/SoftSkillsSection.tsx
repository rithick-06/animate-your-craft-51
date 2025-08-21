import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Lightbulb, 
  MessageCircle, 
  Users, 
  Clock, 
  Heart,
  Target,
  Brain,
  Zap
} from 'lucide-react';

const softSkills = [
  {
    id: 1,
    name: "Creativity",
    icon: Lightbulb,
    description: "Innovative problem-solving and out-of-the-box thinking",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 2,
    name: "Communication",
    icon: MessageCircle,
    description: "Clear technical communication and presentation skills",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 3,
    name: "Leadership",
    icon: Users,
    description: "Project leadership and team coordination abilities",
    color: "from-green-500/20 to-blue-500/20"
  },
  {
    id: 4,
    name: "Time Management",
    icon: Clock,
    description: "Efficient project planning and deadline management",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 5,
    name: "Honesty & Integrity",
    icon: Heart,
    description: "Ethical approach to work and transparent communication",
    color: "from-red-500/20 to-pink-500/20"
  }
];

const additionalSkills = [
  { name: "Critical Thinking", icon: Brain },
  { name: "Adaptability", icon: Zap },
  { name: "Problem Solving", icon: Target }
];

const SoftSkillsSection = () => {
  return (
    <section id="soft-skills" className="py-20">
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
            Soft Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The human skills that complement my technical expertise and drive successful collaborations.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5
                }}
                className="perspective-1000"
              >
                <Card className={`p-8 bg-gradient-to-br ${skill.color} border-border/50 hover:border-primary/50 transition-all duration-500 h-full group text-center`}>
                  <motion.div
                    className="p-4 bg-primary/20 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-primary/30 transition-colors flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Additional Strengths
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {additionalSkills.map((skill, index) => {
              const Icon = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  className="flex items-center space-x-3 bg-gradient-card p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills Impact */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Team Collaboration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Strong track record of working effectively in cross-functional teams, 
              leading technical discussions, and mentoring junior developers. 
              My communication skills help bridge the gap between technical complexity and business value.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Project Success
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My combination of technical skills and soft skills has consistently delivered 
              successful projects. I focus on understanding stakeholder needs, managing expectations, 
              and delivering solutions that create real business impact.
            </p>
          </Card>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 inline-block max-w-2xl">
            <div className="text-6xl text-primary/30 mb-4">"</div>
            <p className="text-lg italic text-muted-foreground mb-4">
              Technical skills get you in the door, but soft skills determine how far you'll go. 
              I believe in building technology that serves people, not the other way around.
            </p>
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto"></div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;