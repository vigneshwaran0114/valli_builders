import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedProjects from '@/components/FeaturedProjects';
import Scene3D from '@/components/three/Scene3D';
import { motion } from 'framer-motion';
import { Users, Clock, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Clock, value: '25+', label: 'Years Experience' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '100%', label: 'On-Time Delivery' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-construction p-6"
              >
                <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <motion.div 
                  className="text-3xl font-bold text-gradient-construction mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* 3D Scene Section */}
      <section className="py-20 bg-gradient-concrete">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
              Engineering Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our commitment to precision engineering through interactive 3D visualization
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 rounded-xl overflow-hidden shadow-construction"
          >
            <Scene3D className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our expert team for a consultation and see how we can
              bring your construction vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-construction"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;