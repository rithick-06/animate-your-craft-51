import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Brain, BarChart } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Deep Learning",
    issuer: "NVIDIA",
    description: "Comprehensive training in neural networks, CNNs, RNNs, and advanced deep learning architectures.",
    icon: Brain,
    category: "AI/ML",
    color: "from-green-500/20 to-blue-500/20",
    skills: ["Neural Networks", "CNNs", "RNNs", "TensorFlow", "PyTorch"],
    verified: true
  },
  {
    id: 2,
    title: "Power BI Data Analyst",
    issuer: "Microsoft",
    description: "Advanced data visualization, DAX formulas, and business intelligence dashboard creation.",
    icon: BarChart,
    category: "Data Analysis",
    color: "from-blue-500/20 to-purple-500/20",
    skills: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
    verified: true
  }
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20">
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
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in AI/ML and data analysis.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  rotateY: 5,
                  scale: 1.02,
                  z: 50
                }}
                className="perspective-1000"
              >
                <Card className={`p-8 bg-gradient-to-br ${cert.color} border-border/50 hover:border-primary/50 transition-all duration-500 h-full group`}>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                        {cert.verified && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <Badge variant="secondary" className="bg-muted/50 mb-4">
                        {cert.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-primary">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="bg-muted/50 hover:bg-primary/20 transition-colors text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      // Placeholder for certificate verification
                      window.open('#', '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="flex justify-center mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Professional Certificates</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="flex justify-center mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">AI/ML</div>
            <div className="text-muted-foreground">Primary Focus</div>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-card border-border/50">
            <div className="flex justify-center mb-4">
              <BarChart className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Verified Credentials</div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">📚</div>
              <div className="text-left">
                <p className="text-lg font-semibold mb-1">Continuous Learning</p>
                <p className="text-muted-foreground">
                  Currently pursuing additional certifications in GenAI and MLOps
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;