import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Target, Medal } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "India Skill 2024 – Bronze",
    category: "Fabric Design & Development",
    icon: Medal,
    color: "from-yellow-500/20 to-orange-500/20",
    year: "2024"
  },
  {
    id: 2,
    title: "IITDM National Conference – Finalist",
    category: "Osteoporosis detection using Deep Learning",
    icon: Trophy,
    color: "from-blue-500/20 to-purple-500/20",
    year: "2024"
  },
  {
    id: 3,
    title: "SRM TECHSPECTRUM – Finalist",
    category: "Comment Toxicity Detection",
    icon: Star,
    color: "from-green-500/20 to-blue-500/20",
    year: "2024"
  },
  {
    id: 4,
    title: "ASET International Conference – Finalist",
    category: "Green IT best practices",
    icon: Award,
    color: "from-purple-500/20 to-pink-500/20",
    year: "2024"
  },
  {
    id: 5,
    title: "Caterpillar Tech Challenge 2025 – Finalist",
    category: "Defect Detection using CV",
    icon: Target,
    color: "from-primary/20 to-accent/20",
    year: "2025"
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20">
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
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for my work in AI/ML, computer vision, and innovative technology solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-primary opacity-30" />

          {/* Achievement Cards */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.id}
                  className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />

                  {/* Achievement Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ 
                        rotateY: isEven ? 5 : -5,
                        scale: 1.02,
                        z: 50
                      }}
                      className="perspective-1000"
                    >
                      <Card className={`p-6 bg-gradient-to-br ${achievement.color} border-border/50 hover:border-primary/50 transition-all duration-500 group`}>
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                {achievement.title}
                              </h3>
                              <Badge variant="outline" className="border-primary/30 text-primary mt-2 sm:mt-0">
                                {achievement.year}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {achievement.category}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Major Achievements</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Conference Finals</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">National Medal</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;