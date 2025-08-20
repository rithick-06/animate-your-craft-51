import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Trophy, Star } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const CodingProfilesSection = () => {
  const profiles = [
    {
      id: '1',
      platform: 'LeetCode',
      username: 'johndoe',
      rating: '2150',
      solved: '450+',
      icon: '💻',
      url: '#'
    },
    {
      id: '2',
      platform: 'HackerRank',
      username: 'john_doe',
      rating: '5 Star',
      solved: '200+',
      icon: '🏆',
      url: '#'
    },
    {
      id: '3',
      platform: 'CodeForces',
      username: 'johndoe123',
      rating: '1850',
      solved: '300+',
      icon: '⭐',
      url: '#'
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      <ParticleBackground variant="skills" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/90 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Coding Profiles
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My competitive programming journey and achievements across various platforms.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="p-6 text-center bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                <div className="text-4xl mb-4">{profile.icon}</div>
                <h3 className="text-xl font-bold mb-2">{profile.platform}</h3>
                <p className="text-muted-foreground mb-4">@{profile.username}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Rating:</span>
                    <span className="text-primary font-semibold">{profile.rating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Problems:</span>
                    <span className="text-primary font-semibold">{profile.solved}</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={profile.url}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Profile
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;