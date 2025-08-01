import { motion } from 'framer-motion';
import { 
  PenTool, Building2, Eye, Settings, CheckCircle, Users, 
  Shield, Clock, Award, TrendingUp, Cog, FileText,
  Calculator, Map, Zap, Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/three/Scene3D';

const Services = () => {
  const mainServices = [
    {
      icon: PenTool,
      title: 'Structural Design & Analysis',
      description: 'Comprehensive structural engineering solutions using advanced analysis software and proven methodologies.',
      features: [
        'CAD and 3D Modeling',
        'Load Analysis & Calculations',
        'Material Selection & Optimization',
        'Seismic & Wind Analysis',
        'Foundation Design',
        'Steel & Concrete Structures'
      ],
      process: [
        'Initial Assessment',
        'Structural Analysis',
        'Design Development',
        'Documentation',
        'Review & Approval'
      ]
    },
    {
      icon: Building2,
      title: 'Project Planning & Management',
      description: 'Strategic planning and comprehensive project management from conception to successful completion.',
      features: [
        'Project Scheduling',
        'Resource Allocation',
        'Budget Management',
        'Risk Assessment',
        'Quality Control',
        'Stakeholder Coordination'
      ],
      process: [
        'Feasibility Study',
        'Planning Phase',
        'Execution Strategy',
        'Monitoring',
        'Project Closure'
      ]
    },
    {
      icon: Eye,
      title: 'Construction Supervision',
      description: 'Professional on-site supervision ensuring quality, safety, and adherence to specifications.',
      features: [
        'Quality Assurance',
        'Safety Monitoring',
        'Progress Tracking',
        'Material Inspection',
        'Compliance Verification',
        'Issue Resolution'
      ],
      process: [
        'Site Setup',
        'Daily Inspections',
        'Progress Reports',
        'Quality Testing',
        'Final Handover'
      ]
    },
    {
      icon: Settings,
      title: 'MEP Engineering',
      description: 'Complete mechanical, electrical, and plumbing engineering services for optimal building performance.',
      features: [
        'HVAC System Design',
        'Electrical Distribution',
        'Plumbing & Drainage',
        'Fire Protection Systems',
        'Energy Management',
        'Building Automation'
      ],
      process: [
        'System Analysis',
        'Design Integration',
        'Load Calculations',
        'Equipment Selection',
        'Installation Oversight'
      ]
    }
  ];

  const additionalServices = [
    { icon: FileText, title: 'Permits & Compliance', description: 'Navigate regulatory requirements and obtain necessary permits.' },
    { icon: Users, title: 'Engineering Consultation', description: 'Expert advice for complex engineering challenges and solutions.' },
    { icon: Calculator, title: 'Cost Estimation', description: 'Accurate project cost estimation and budget planning services.' },
    { icon: Map, title: 'Site Surveying', description: 'Professional land surveying and topographical analysis services.' },
    { icon: Zap, title: 'Energy Efficiency', description: 'Sustainable design solutions for reduced environmental impact.' },
    { icon: Droplets, title: 'Water Management', description: 'Comprehensive water and wastewater management solutions.' }
  ];

  const benefits = [
    { icon: Shield, title: '100% Safety Compliance', description: 'Rigorous safety standards and protocols' },
    { icon: Clock, title: 'On-Time Delivery', description: 'Proven track record of meeting deadlines' },
    { icon: Award, title: 'Quality Assurance', description: 'Highest standards of engineering excellence' },
    { icon: TrendingUp, title: 'Cost Optimization', description: 'Value engineering for optimal project costs' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Comprehensive civil engineering services designed to bring your construction
            projects to life with precision, innovation, and unwavering commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
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
              Core Engineering Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our specialized teams deliver comprehensive solutions across all aspects of civil engineering
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-hero w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="btn-hero">
                    Learn More
                  </Button>
                </div>

                <div className={`card-construction ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Our Process</h4>
                  <div className="space-y-3">
                    {service.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center space-x-3">
                        <div className="bg-gradient-construction w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white">
                          {stepIndex + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services to ensure every aspect of your project is covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-construction text-center group"
              >
                <div className="bg-gradient-steel w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence drives everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-construction p-6 text-center"
              >
                <div className="bg-gradient-construction w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Visualization */}
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
              Experience Our Engineering
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive 3D visualization of our construction capabilities
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
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our expert team for a detailed consultation and custom solution for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-construction" size="lg">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;