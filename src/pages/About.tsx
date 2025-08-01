import { motion } from 'framer-motion';
import { 
  Users, Target, Award, TrendingUp, Calendar, MapPin, 
  CheckCircle, Shield, Clock, Star, Building2, Lightbulb 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/three/Scene3D';

const About = () => {
  const milestones = [
    { year: '1999', title: 'Company Founded', description: 'Started as a small engineering consultancy with 5 team members.' },
    { year: '2005', title: 'First Major Project', description: 'Completed our first major infrastructure project - City Bridge.' },
    { year: '2010', title: 'Team Expansion', description: 'Grew to 50+ engineers and opened second office location.' },
    { year: '2015', title: 'Innovation Award', description: 'Received National Engineering Excellence Award for sustainable design.' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented cutting-edge 3D modeling and project management systems.' },
    { year: '2024', title: 'Industry Leadership', description: '500+ completed projects and recognized as regional industry leader.' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Executive Officer',
      experience: '20+ years',
      specialty: 'Structural Engineering',
      description: 'Leading structural engineer with expertise in high-rise construction and seismic design.'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Technology Officer',
      experience: '18+ years',
      specialty: 'Project Management',
      description: 'Expert in large-scale project coordination with a track record of on-time delivery.'
    },
    {
      name: 'Dr. James Wilson',
      position: 'Lead Design Engineer',
      experience: '15+ years',
      specialty: 'MEP Systems',
      description: 'Specialist in mechanical, electrical, and plumbing systems for complex buildings.'
    },
    {
      name: 'Anna Thompson',
      position: 'Quality Assurance Director',
      experience: '12+ years',
      specialty: 'Safety & Compliance',
      description: 'Ensures all projects meet the highest safety standards and regulatory compliance.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our top priority in every project, ensuring zero-incident work environments.',
      stat: '100% Safety Record'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from design to completion.',
      stat: '98% Client Satisfaction'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies to deliver cutting-edge solutions.',
      stat: '50+ Patents Filed'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients, stakeholders, and communities for successful outcomes.',
      stat: '500+ Partnerships'
    }
  ];

  const stats = [
    { icon: Building2, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '150+', label: 'Team Members' },
    { icon: Award, value: '25+', label: 'Industry Awards' },
    { icon: Calendar, value: '25+', label: 'Years Experience' }
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
            About CivilWorks Pro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            For over 25 years, we've been building the future through innovative civil engineering 
            solutions, delivering exceptional results for complex construction projects worldwide.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-concrete">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card-construction">
                <div className="bg-gradient-hero w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative, sustainable, and safe civil engineering solutions that 
                  transform communities and exceed client expectations while maintaining the 
                  highest standards of professional excellence.
                </p>
              </div>

              <div className="card-construction">
                <div className="bg-gradient-construction w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading civil engineering firm recognized globally for innovation, 
                  sustainability, and excellence in complex construction projects that shape 
                  the future of infrastructure development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 rounded-xl overflow-hidden shadow-construction"
            >
              <Scene3D className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
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
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client satisfaction
            </p>
          </motion.div>

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
                <div className="bg-gradient-steel w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient-construction mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-hero rounded-full hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:text-right' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="glass-construction p-6">
                      <div className="text-2xl font-bold text-gradient-construction mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className={`hidden lg:flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-construction w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in civil engineering and project management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-construction"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-hero w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 text-foreground">
                      {member.name}
                    </h3>
                    <div className="text-primary font-medium mb-2">
                      {member.position}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{member.experience}</span>
                      <span>•</span>
                      <span>{member.specialty}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-construction"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-construction w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {value.description}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      {value.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Join Our Success Story
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to be part of our next engineering milestone? Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-construction" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Join Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;