import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Home, Factory, Calendar, MapPin, Users, DollarSign, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Infrastructure', 'Residential', 'Commercial', 'Industrial'];

  const projects = [
    {
      id: 1,
      title: 'Metro Bridge Construction',
      category: 'Infrastructure',
      location: 'Downtown Metro Line',
      year: '2024',
      duration: '18 months',
      budget: '$15M',
      team: '45 Engineers',
      description: 'A 2.5km elevated metro bridge featuring state-of-the-art engineering and sustainable construction practices.',
      icon: Construction,
      image: 'infrastructure',
      status: 'Completed',
      features: ['Prestressed Concrete', 'Seismic Design', 'Environmental Compliance']
    },
    {
      id: 2,
      title: 'Residential Complex Valley View',
      category: 'Residential',
      location: 'Green Valley District',
      year: '2023',
      duration: '12 months',
      budget: '$8M',
      team: '28 Engineers',
      description: 'Modern 300-unit residential complex with eco-friendly design and smart building technologies.',
      icon: Home,
      image: 'residential',
      status: 'Completed',
      features: ['Green Building Certified', 'Smart Home Systems', 'Energy Efficient']
    },
    {
      id: 3,
      title: 'Corporate Headquarters',
      category: 'Commercial',
      location: 'Business District',
      year: '2023',
      duration: '24 months',
      budget: '$25M',
      team: '60 Engineers',
      description: '40-story corporate headquarters with advanced structural systems and sustainable design.',
      icon: Building,
      image: 'commercial',
      status: 'In Progress',
      features: ['LEED Platinum', 'Steel Frame', 'Advanced MEP Systems']
    },
    {
      id: 4,
      title: 'Manufacturing Hub',
      category: 'Industrial',
      location: 'Tech Industrial Park',
      year: '2023',
      duration: '15 months',
      budget: '$12M',
      team: '35 Engineers',
      description: 'Large-scale manufacturing facility with advanced structural systems and automated construction.',
      icon: Factory,
      image: 'industrial',
      status: 'Completed',
      features: ['Heavy Load Design', 'Automated Systems', 'Safety Standards']
    },
    {
      id: 5,
      title: 'Highway Overpass',
      category: 'Infrastructure',
      location: 'Highway 101 Corridor',
      year: '2022',
      duration: '20 months',
      budget: '$18M',
      team: '52 Engineers',
      description: 'Multi-span highway overpass with innovative design solutions and traffic management.',
      icon: Construction,
      image: 'infrastructure',
      status: 'Completed',
      features: ['Traffic Engineering', 'Environmental Impact', 'Public Safety']
    },
    {
      id: 6,
      title: 'Shopping Center Plaza',
      category: 'Commercial',
      location: 'Retail District',
      year: '2022',
      duration: '16 months',
      budget: '$10M',
      team: '32 Engineers',
      description: 'Modern shopping center with mixed-use spaces and innovative architectural design.',
      icon: Building,
      image: 'commercial',
      status: 'Completed',
      features: ['Mixed Use Design', 'Parking Solutions', 'Retail Optimization']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getImageGradient = (type: string) => {
    const gradients = {
      infrastructure: 'from-blue-500 to-cyan-500',
      residential: 'from-green-500 to-emerald-500',
      commercial: 'from-purple-500 to-violet-500',
      industrial: 'from-orange-500 to-red-500'
    };
    return gradients[type as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };

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
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Explore our portfolio of successful construction projects that showcase our expertise
            in delivering complex civil engineering solutions across various sectors.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-hero text-primary-foreground shadow-construction'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-concrete">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-construction overflow-hidden"
                >
                  {/* Project Image */}
                  <div className={`relative h-64 bg-gradient-to-br ${getImageGradient(project.image)} rounded-lg mb-6 overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <project.icon className="h-20 w-20 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-100' 
                          : 'bg-yellow-500/20 text-yellow-100'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{project.year}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{project.team}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{project.budget}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button className="w-full btn-hero">
                      View Project Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;