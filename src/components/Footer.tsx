import { Link } from "react-router-dom";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Structural Design", href: "/services" },
        { name: "Project Planning", href: "/services" },
        { name: "Site Supervision", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Projects", href: "/projects" },
        { name: "News & Updates", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Get Quote", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/19cJkfyikv/?mibextid=wwXIfr",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kannan-karthi-5a90b3187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/valli_builders/profilecard/?igsh=N3g5dGgxenl3MGJx",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-white/20 p-2 rounded-lg"
              >
                <Building2 className="h-6 w-6" />
              </motion.div>
              <span className="text-2xl font-bold">Valli Associates</span>
            </Link>

            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Leading civil engineering firm specializing in complex
              construction projects. We deliver innovative solutions with
              precision, safety, and excellence.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span>vallibuilders1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+91 9003487292</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>N/S Complex, Near Wakeman School, Palani - 624601</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 mb-4 md:mb-0">
            © 2025 Valli Associates. All rights reserved.
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                target="_blank"
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
