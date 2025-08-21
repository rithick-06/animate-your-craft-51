import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Grid, Cloud, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", level: 85 },
      { name: "Python", level: 95 },
      { name: "Java", level: 80 }
    ]
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow/Keras", level: 88 },
      { name: "Hugging Face Transformers", level: 85 }
    ]
  },
  {
    title: "Libraries",
    skills: [
      { name: "NLTK", level: 85 },
      { name: "spaCy", level: 82 },
      { name: "scikit-learn", level: 88 },
      { name: "OpenCV", level: 90 },
      { name: "FAISS", level: 80 },
      { name: "Ollama LLM", level: 75 }
    ]
  },
  {
    title: "Dev & Deployment",
    skills: [
      { name: "CUDA", level: 80 },
      { name: "Gradio", level: 85 },
      { name: "Flask", level: 88 },
      { name: "Qt Framework (PyQt)", level: 85 },
      { name: "ONNX", level: 78 }
    ]
  },
  {
    title: "Computer Vision Models",
    skills: [
      { name: "YOLOv8", level: 90 },
      { name: "EfficientNet", level: 85 },
      { name: "UNet", level: 82 },
      { name: "ResUNet", level: 80 }
    ]
  },
  {
    title: "Data & Analysis",
    skills: [
      { name: "Jupyter Notebook", level: 95 },
      { name: "Power BI", level: 85 },
      { name: "Excel", level: 88 }
    ]
  }
];

const allSkills = skillCategories.flatMap(cat => cat.skills.map(skill => skill.name));

const SkillsSection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'cloud'>('grid');
  const { toast } = useToast();

  const copySkillToClipboard = (skill: string) => {
    navigator.clipboard.writeText(skill);
    toast({
      title: "Copied to clipboard! 📋",
      description: `"${skill}" copied successfully`,
    });
  };

  return (
    <section id="skills" className="py-20">
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
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Technologies and frameworks I use to build intelligent systems and data-driven solutions.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-primary/20 text-primary border border-primary/30' : ''}
            >
              <Grid className="w-4 h-4 mr-2" />
              Grid View
            </Button>
            <Button
              variant={viewMode === 'cloud' ? 'default' : 'ghost'}
              onClick={() => setViewMode('cloud')}
              className={viewMode === 'cloud' ? 'bg-primary/20 text-primary border border-primary/30' : ''}
            >
              <Cloud className="w-4 h-4 mr-2" />
              Tag Cloud
            </Button>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-6 text-primary">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2 cursor-pointer group"
                        onClick={() => copySkillToClipboard(skill.name)}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tag Cloud View */}
        {viewMode === 'cloud' && (
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                onClick={() => copySkillToClipboard(skill)}
                className="cursor-pointer"
              >
                <Badge
                  variant="secondary"
                  className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 px-3 py-2 text-sm group"
                  style={{
                    fontSize: `${0.8 + Math.random() * 0.4}rem`,
                  }}
                >
                  {skill}
                  <Copy className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;