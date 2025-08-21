import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Defect Detection for Manufacturing",
    category: "CV",
    description: [
      "Hybrid pipeline with EfficientNet + YOLOv8 + UNet for detection & classification in real time",
      "Unified workflow enables shop-floor quality control with high accuracy"
    ],
    tech: ["PyTorch", "OpenCV", "ONNX", "CUDA"],
    github: "https://github.com/rithick-06",
    demo: "https://github.com/rithick-06",
    featured: true
  },
  {
    id: 2,
    title: "Comment Toxicity Detection",
    category: "NLP",
    description: [
      "Hybrid CNN–RNN–LSTM model; F1 = 87.59% on real-time toxic comment detection",
      "Flags hate speech, threats, and abusive language; better context on disguised toxicity"
    ],
    tech: ["TensorFlow/Keras", "NLTK", "spaCy", "scikit-learn"],
    github: "https://github.com/rithick-06",
    demo: "https://github.com/rithick-06",
    featured: true
  },
  {
    id: 3,
    title: "LLAMA Chatbot with RAG",
    category: "NLP",
    description: [
      "Flask RAG app with FAISS vector search + Hugging Face embeddings; Ollama LLM responses",
      "RetrievalQA on chunked documents for context-aware answers"
    ],
    tech: ["Flask", "FAISS", "Hugging Face", "Ollama"],
    github: "https://github.com/rithick-06",
    demo: "https://github.com/rithick-06",
    featured: true
  },
  {
    id: 4,
    title: "Car Dashboard (Qt)",
    category: "Apps",
    description: [
      "Real-time speed, fuel, and navigation; responsive Qt Widgets UI for multiple resolutions"
    ],
    tech: ["PyQt/Qt", "Python"],
    github: "https://github.com/rithick-06",
    demo: "https://github.com/rithick-06",
    featured: false
  }
];

const categories = ["All", "CV", "NLP", "Apps"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
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
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of intelligent systems I've built with AI/ML, computer vision, and full-stack technologies.
          </p>

          {/* GitHub Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => window.open('https://github.com/rithick-06', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => window.open('https://github.com/rithick-06', '_blank')}
            >
              <Eye className="w-4 h-4 mr-2" />
              Pinned Repos
            </Button>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "ghost"}
              className={`transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary/20 text-primary border border-primary/30 shadow-glow-primary'
                  : 'hover:bg-muted/50'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                z: 50
              }}
              className="perspective-1000"
            >
              <Card className="overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full group">
                <motion.div
                  className="card-3d h-full p-6"
                  whileHover={{
                    boxShadow: "0 20px 50px -12px hsl(var(--primary) / 0.25)"
                  }}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    {project.featured && (
                      <Badge className="bg-accent/20 text-accent border-accent/30">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6 space-y-2">
                    {project.description.map((desc, i) => (
                      <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                        • {desc}
                      </p>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/20 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="shadow-glow-primary hover:scale-105 transition-all flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:scale-105 transition-all flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.category === "CV" ? "Architecture" : 
                       project.category === "NLP" ? "Model Card" : "Demo"}
                    </Button>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;