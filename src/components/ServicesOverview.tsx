import { motion } from 'framer-motion';
import { Building2, PenTool, Settings, Eye, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Structural Design',
      description: 'Comprehensive structural engineering and design solutions for all types of construction projects.',
      features: ['CAD Drawings', 'Load Analysis', 'Material Selection']
    },
    {
      icon: Building2,
      title: 'Project Planning',
      description: 'Strategic planning and project management from conception to completion.',
      features: ['Timeline Management', 'Resource Planning', 'Risk Assessment']
    },
    {
      icon: Eye,
      title: 'Site Supervision',
      description: 'On-site supervision and quality control to ensure projects meet all specifications.',
      features: ['Quality Control', 'Safety Monitoring', 'Progress Tracking']
    },
    {
      icon: Settings,
      title: 'Digital Survey (DGPS)',
      description: 'High-precision land surveying using Differential GPS for accurate mapping and data collection.',
      features: ['Boundary Survey', 'Topographic Mapping', 'Contour Generation']
    },
    {
      icon: Users,
      title: 'Consultation',
      description: 'Expert consultation services for complex engineering challenges and solutions.',
      features: ['Technical Advice', 'Feasibility Studies', 'Problem Solving']
    }
  ];

  return (
    <section className="py-20 bg-gradient-concrete">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive civil engineering services designed to bring your construction
            projects to life with precision, safety, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-construction group"
            >
              <div className="bg-gradient-hero w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="btn-hero" size="lg" asChild>
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;