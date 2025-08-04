import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Calendar,
  MapPin,
  CheckCircle,
  Shield,
  Clock,
  Star,
  Building2,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Scene3D from "@/components/three/Scene3D";
import SEO from "@/components/SEO";

const About = () => {
  // Structured data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Valli Builders",
    "description": "Learn about Valli Builders - a leading civil engineering firm in Palani, Tamil Nadu with 7+ years of experience and 27+ completed projects.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Valli Builders",
      "foundingDate": "2019",
      "description": "Leading civil engineering firm specializing in construction, structural design, project management, and site supervision.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "N/S Complex, Near Wakeman School",
        "addressLocality": "Palani",
        "postalCode": "624601",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    }
  };

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Started as a small engineering consultancy with 3 team members.",
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Completed our first major infrastructure project - Palani",
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 5 engineers and 30+ Labours.",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description:
        "Received Engineering Excellence Award for sustainable design.",
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Implemented DGPS and project management systems.",
    },
    {
      year: "2025",
      title: "Industry Leadership",
      description:
        "27+ completed projects and recognized as regional industry leader.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      experience: "20+ years",
      specialty: "Structural Engineering",
      description:
        "Leading structural engineer with expertise in high-rise construction and seismic design.",
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      experience: "18+ years",
      specialty: "Project Management",
      description:
        "Expert in large-scale project coordination with a track record of on-time delivery.",
    },
    {
      name: "Dr. James Wilson",
      position: "Lead Design Engineer",
      experience: "15+ years",
      specialty: "MEP Systems",
      description:
        "Specialist in mechanical, electrical, and plumbing systems for complex buildings.",
    },
    {
      name: "Anna Thompson",
      position: "Quality Assurance Director",
      experience: "12+ years",
      specialty: "Safety & Compliance",
      description:
        "Ensures all projects meet the highest safety standards and regulatory compliance.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Safety is our top priority in every project, ensuring zero-incident work environments.",
      stat: "100% Safety Record",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our work, from design to completion.",
      stat: "98% Client Satisfaction",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing new technologies and methodologies to deliver cutting-edge solutions.",
      stat: "25+ Patents Filed",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working closely with clients, stakeholders, and communities for successful outcomes.",
      stat: "3+ Partnerships",
    },
  ];

  const stats = [
    { icon: Building2, value: "27+", label: "Projects Completed" },
    { icon: Users, value: "25+", label: "Team Members" },
    { icon: Award, value: "4+", label: "Industry Awards" },
    { icon: Calendar, value: "7+", label: "Years Experience" },
  ];

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Valli Builders - a leading civil engineering firm in Palani, Tamil Nadu with 7+ years of experience and 27+ completed projects. Our team of experts delivers excellence in construction and engineering."
        keywords="about Valli Builders, civil engineering company Palani, construction company Tamil Nadu, engineering team, company history, construction experience"
        canonical="/about"
        structuredData={structuredData}
      />
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
            About Valli Associates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            We are not just a young team—we are a team of energetic, technically
            proficient young civil engineers. I, Er. V. Kannan, BE, AMIE, CE,
            Registered Engineer, lead M/s Valli Construction & Digital Surveyor
            (DGPS Expert), where integrity, discipline, and punctuality are the
            unshakable values that define our work. We stand firm by the
            philosophy that ‘We may not live forever, but our work will speak
            for us.’ With no external help, we have mastered end-to-end project
            delivery—including planning, surveying, contour details, elevation
            design, top view modeling, quality control, and measurement
            verification.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Our uniqueness lies in the special attention we provide to NRI
            clients and rural people. We serve as a trustworthy, honest
            construction partner for hardworking NRIs living abroad. Similarly,
            we are dedicated to providing uncompromised, top-quality service to
            rural clients who are often unaware of being deceived. Everyone is
            important, but these clients are our heartfelt responsibility.
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
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative, sustainable, and safe civil engineering
                  solutions that transform communities and exceed client
                  expectations while maintaining the highest standards of
                  professional excellence.
                </p>
              </div>

              <div className="card-construction">
                <div className="bg-gradient-construction w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading civil engineering firm recognized globally
                  for innovation, sustainability, and excellence in complex
                  construction projects that shape the future of infrastructure
                  development.
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

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Special Focus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90 mb-5"
          >
            NRI Clients: For NRIs who leave behind their families and work hard
            abroad, we aim to be a reliable and trustworthy partner back home.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Rural Communities: For the innocent rural people who often don’t
            even realize when they're being cheated, we commit to delivering
            them first-class service. Everyone matters—but they are our special
            responsibility.
          </motion.p>
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
              Numbers that speak to our commitment to excellence and client
              satisfaction
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
              Key milestones that have shaped our growth and success over the
              years
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
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
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
                  <div
                    className={`hidden lg:flex justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
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
              The principles that guide every decision we make and every project
              we undertake
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
              Ready to be part of our next engineering milestone? Let's build
              something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-construction" size="lg">
                Start Your Project
              </Button>
              {/* <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Join Our Team
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
