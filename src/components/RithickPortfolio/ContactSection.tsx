import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  Copy,
  Send,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rithick.ad22@bitsathy.ac.in",
    action: "mailto:rithick.ad22@bitsathy.ac.in",
    copyable: true
  },
  {
    icon: Phone,
    label: "Phone/WhatsApp",
    value: "+91 9585224455",
    action: "https://wa.me/919585224455",
    copyable: true
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tirupur, Tamil Nadu",
    action: null,
    copyable: false
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/rithick-06",
    color: "hover:text-purple-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rithick-m-k",
    color: "hover:text-blue-400"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard! 📋",
      description: `${label} copied successfully`,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a9f3fdb7-1dba-4aff-aebb-feb3500ecdee',
          ...formData
        }),
      });

      if (response.ok) {
        // Confetti effect
        const confetti = (await import('canvas-confetti')).default;
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        toast({
          title: "Thanks! I'll reply soon. 🚀",
          description: "Your message has been sent successfully!",
        });

        setFormData({ name: '', email: '', purpose: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
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
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Let's discuss opportunities, collaborations, or just have a chat about AI and technology.
          </p>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            Open to internships & projects
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Details */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  
                  return (
                    <motion.div
                      key={info.label}
                      className="flex items-center space-x-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                      <div className="flex space-x-2">
                        {info.copyable && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(info.value, info.label)}
                            className="hover:bg-primary/20"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        )}
                        {info.action && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => window.open(info.action, '_blank')}
                            className="hover:bg-primary/20"
                          >
                            {info.icon === Phone ? <MessageSquare className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-xl font-bold mb-6 text-primary">
                Connect With Me
              </h3>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-muted/50 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-primary/20 ${social.color}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Download Resume */}
              <Button
                className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Résumé
              </Button>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Purpose</label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-muted/50 border border-border/50 rounded-md focus:border-primary/50 focus:outline-none"
                  >
                    <option value="">Select purpose</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Interview">Interview</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-muted/50 border-border/50 focus:border-primary/50 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;