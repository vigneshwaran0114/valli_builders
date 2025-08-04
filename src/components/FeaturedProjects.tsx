import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Building,
  Home,
  Factory,
} from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Institution",
      category: "Infrastructure",
      location: "Palani",
      year: "2023",
      image: "/placeholder.svg",
      description:
        "Educational institution featuring durable construction, efficient space planning, and compliance with academic infrastructure standards.",
      icon: Building,
      tags: [
        "Institutional Design",
        "Public Infrastructure",
        "Space Optimization",
      ],
    },
    {
      id: 2,
      title: "Residential Complex",
      category: "Residential",
      location: "Dindigul",
      year: "2023",
      image: "/placeholder.svg",
      description:
        "Modern 300-unit residential complex with eco-friendly design and smart building technologies.",
      icon: Home,
      tags: ["Residential Design", "Green Building", "Smart Systems"],
    },
    {
      id: 3,
      title: "Industrial Manufacturing Hub",
      category: "Industrial",
      location: "Kallimandhayam, Palani",
      year: "2023",
      image: "/placeholder.svg",
      description:
        "Large-scale manufacturing facility with advanced structural systems and automated construction.",
      icon: Factory,
      tags: ["Industrial Design", "Steel Structures", "Automation"],
    },
  ];

  return (
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
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of our recent construction achievements that demonstrate
            our expertise in delivering complex civil engineering projects on
            time and within budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-construction group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-steel rounded-lg mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/60 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Project Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
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
            <Link to="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
