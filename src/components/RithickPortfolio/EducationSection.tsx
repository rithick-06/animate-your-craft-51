import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, School, Award } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "B.Tech – AI & Data Science",
    institution: "Bannari Amman Institute of Technology",
    grade: "CGPA 8.13",
    period: "2022 - 2026",
    icon: GraduationCap,
    color: "from-primary/20 to-secondary/20",
    status: "Current"
  },
  {
    id: 2,
    degree: "Grade 12",
    institution: "Sri Chaitanya Techno School",
    grade: "76%",
    period: "2020 - 2022",
    icon: School,
    color: "from-accent/20 to-primary/20",
    status: "Completed"
  },
  {
    id: 3,
    degree: "Grade 10",
    institution: "KMC Public School (CBSE)",
    grade: "86%",
    period: "2018 - 2020",
    icon: Award,
    color: "from-secondary/20 to-accent/20",
    status: "Completed"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
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
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in artificial intelligence, data science, and foundational studies.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className={`p-8 bg-gradient-to-r ${edu.color} border-border/50 hover:border-primary/50 transition-all duration-500 group`}>
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    {/* Icon */}
                    <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                          <Badge 
                            variant={edu.status === 'Current' ? 'default' : 'outline'}
                            className={edu.status === 'Current' ? 'bg-primary/20 text-primary border-primary/30' : 'border-primary/30 text-primary'}
                          >
                            {edu.status}
                          </Badge>
                          <Badge variant="secondary" className="bg-muted/50">
                            {edu.period}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm font-medium text-primary">
                            Grade: {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Education Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">8.13</div>
            <div className="text-muted-foreground">Current CGPA</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">AI & DS</div>
            <div className="text-muted-foreground">Specialization</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">2026</div>
            <div className="text-muted-foreground">Expected Graduation</div>
          </Card>
        </motion.div>

        {/* Academic Focus */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-xl font-bold mb-4 text-primary text-center">
              Academic Focus Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Machine Learning",
                "Deep Learning", 
                "Computer Vision",
                "Natural Language Processing",
                "Data Science",
                "Artificial Intelligence",
                "Statistical Analysis",
                "Neural Networks"
              ].map((area, index) => (
                <motion.div
                  key={area}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 w-full py-2"
                  >
                    {area}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;