import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Award, Users, Coffee, Star } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const AboutSection = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Star, label: 'Happy Clients', value: '30+' }
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
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      <ParticleBackground variant="hero" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80 z-10" />

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
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Passionate developer with a love for creating beautiful, functional, and user-centered digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              Hello! I'm John, a full-stack developer based in San Francisco. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="px-8 py-4 shadow-glow-primary hover:shadow-glow-secondary hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image Placeholder with Animation */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="w-full aspect-square bg-gradient-primary rounded-2xl shadow-elegant"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-4 bg-card rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-6xl">👨‍💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {stats.map(({ icon: Icon, label, value }, index) => (
            <motion.div key={label} variants={itemVariants}>
              <Card className="p-6 text-center card-3d bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-primary mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {value}
                </motion.h3>
                <p className="text-sm text-muted-foreground">{label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;