import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MessageSquare, Users } from 'lucide-react';

const languages = [
  {
    id: 1,
    name: "English",
    proficiency: "Fluent",
    level: 95,
    description: "Technical communication, presentations, and documentation",
    icon: "🇺🇸",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    name: "Tamil",
    proficiency: "Fluent",
    level: 100,
    description: "Native language, cultural communication",
    icon: "🇮🇳",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 3,
    name: "Hindi",
    proficiency: "Basics",
    level: 60,
    description: "Conversational understanding and basic communication",
    icon: "🇮🇳",
    color: "from-green-500/20 to-blue-500/20"
  }
];

const communicationSkills = [
  {
    title: "Technical Writing",
    description: "Documentation, research papers, and technical blogs",
    icon: MessageSquare
  },
  {
    title: "Cross-Cultural Communication",
    description: "Working with diverse teams and international clients",
    icon: Globe
  },
  {
    title: "Public Speaking",
    description: "Conference presentations and technical talks",
    icon: Users
  }
];

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-20">
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
            Languages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multilingual communication abilities that enable effective collaboration across diverse teams and cultures.
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
            >
              <Card className={`p-8 bg-gradient-to-br ${language.color} border-border/50 hover:border-primary/50 transition-all duration-500 h-full group text-center`}>
                {/* Flag/Icon */}
                <div className="text-5xl mb-4">
                  {language.icon}
                </div>
                
                {/* Language Name */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {language.name}
                </h3>
                
                {/* Proficiency Badge */}
                <Badge 
                  className={`mb-4 ${
                    language.proficiency === 'Fluent' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }`}
                >
                  {language.proficiency}
                </Badge>
                
                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-medium">{language.level}%</span>
                  </div>
                  <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    />
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Communication Skills */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Communication Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communicationSkills.map((skill, index) => {
              const Icon = skill.icon;
              
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 text-center group">
                    <div className="p-3 bg-primary/20 rounded-lg w-12 h-12 mx-auto mb-4 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Language Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Languages Spoken</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Fluent Languages</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Tech English</div>
          </Card>
        </motion.div>

        {/* Global Perspective */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">🌍</div>
              <div className="text-left">
                <p className="text-lg font-semibold mb-1">Global Perspective</p>
                <p className="text-muted-foreground">
                  Ready to collaborate with international teams and diverse cultures
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;