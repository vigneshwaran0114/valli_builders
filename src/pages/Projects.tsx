import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Home,
  Factory,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Construction,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Structured data for Projects page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Valli Builders Projects Portfolio",
    "description": "Portfolio of completed construction projects including residential, commercial, industrial, and infrastructure projects in Palani, Tamil Nadu.",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Institutional Project",
          "description": "Educational institution featuring durable construction and efficient space planning."
        }
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Residential Villas",
          "description": "Modern residential complex with eco-friendly design and smart building technologies."
        }
      }
    ]
  };

  const filters = [
    "All",
    "Infrastructure",
    "Residential",
    "Commercial",
    "Industrial",
  ];

  const projects = [
    {
      id: 1,
      title: "Instutional",
      category: "Infrastructure",
      location: "Palani",
      year: "2023",
      duration: "10 months",
      budget: "1.2Cr",
      team: "5 Engineers",
      description:
        "Educational institution featuring durable construction, efficient space planning, and compliance with academic infrastructure standards.",
      icon: Construction,
      image: "infrastructure",
      status: "Completed",
      features: [
        "Institutional Design",
        "Public Infrastructure",
        "Space Optimization",
      ],
    },
    {
      id: 2,
      title: "Residential Villas",
      category: "Residential",
      location: "Palani Surroundings",
      year: "2023",
      duration: "8 months",
      budget: "60L - 1.5Cr",
      team: "5 Engineers",
      description:
        "Modern 300-unit residential complex with eco-friendly design and smart building technologies.",
      icon: Home,
      image: "residential",
      status: "Completed",
      features: [
        "Green Building Certified",
        "Smart Home Systems",
        "Energy Efficient",
      ],
    },
    {
      id: 3,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "Kolumam",
      year: "2023",
      duration: "16 months",
      budget: "3Cr",
      team: "5 Engineers",
      description:
        "3-story corporate headquarters with advanced structural systems and sustainable design.",
      icon: Building,
      image: "commercial",
      status: "In Progress",
      features: ["Hilly View", "Steel Frame", "Advanced Automation Systems"],
    },
    {
      id: 4,
      title: "Manufacturing Hub",
      category: "Industrial",
      location: "Ottanchathiram",
      year: "2022",
      duration: "8 months",
      budget: "80L",
      team: "2 Engineers",
      description:
        "Large-scale manufacturing facility with advanced structural systems and automated construction.",
      icon: Factory,
      image: "industrial",
      status: "Completed",
      features: ["Heavy Load Design", "Automated Systems", "Safety Standards"],
    },
    {
      id: 6,
      title: "Shopping Center (Ramraj)",
      category: "Commercial",
      location: "Palani",
      year: "2022",
      duration: "12 months",
      budget: "90L - 1Cr",
      team: "3 Engineers",
      description:
        "Modern shopping center with mixed-use spaces and innovative architectural design.",
      icon: Building,
      image: "commercial",
      status: "In Progress",
      features: [
        "Mixed Use Design",
        "Parking Solutions",
        "Retail Optimization",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getImageGradient = (type: string) => {
    const gradients = {
      infrastructure: "from-blue-500 to-cyan-500",
      residential: "from-green-500 to-emerald-500",
      commercial: "from-purple-500 to-violet-500",
      industrial: "from-orange-500 to-red-500",
    };
    return (
      gradients[type as keyof typeof gradients] || "from-gray-500 to-gray-600"
    );
  };

  return (
    <>
      <SEO 
        title="Our Projects"
        description="Explore our portfolio of construction projects in Palani, Tamil Nadu. Residential villas, commercial buildings, industrial facilities, and infrastructure projects. 27+ projects completed successfully."
        keywords="construction projects, residential projects, commercial projects, industrial projects, infrastructure projects, Palani construction, Tamil Nadu projects"
        canonical="/projects"
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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Explore our portfolio of successful construction projects that
            showcase our expertise in delivering complex civil engineering
            solutions across various sectors.
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
                    ? "bg-gradient-hero text-primary-foreground shadow-construction"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
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
                  <div
                    className={`relative h-64 bg-gradient-to-br ${getImageGradient(
                      project.image
                    )} rounded-lg mb-6 overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <project.icon className="h-20 w-20 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-100"
                            : "bg-yellow-500/20 text-yellow-100"
                        }`}
                      >
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
                        <span className="text-muted-foreground">
                          {project.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          {project.team}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">
                          {project.budget}
                        </span>
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
    </>
  );
};

export default Projects;
