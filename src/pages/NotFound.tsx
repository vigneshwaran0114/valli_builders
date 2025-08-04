import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Structured data for 404 page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - Valli Builders",
    "description": "The page you're looking for doesn't exist. Return to Valli Builders homepage for professional civil engineering services in Palani, Tamil Nadu.",
    "url": "https://vallibuilders.com/404"
  };

  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Valli Builders homepage for professional civil engineering services in Palani, Tamil Nadu."
        keywords="404, page not found, Valli Builders, civil engineering, construction services"
        canonical="/404"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-concrete">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl font-bold text-gradient-hero mb-4">404</div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track to finding the perfect construction solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/">
                <Button className="btn-hero">
                  <Home className="h-4 w-4 mr-2" />
                  Return to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Search className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 text-left">
              <h3 className="font-semibold mb-3 text-foreground">Popular Pages:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <Link to="/services" className="text-primary hover:underline flex items-center">
                  <ArrowLeft className="h-3 w-3 mr-1 rotate-180" />
                  Our Services
                </Link>
                <Link to="/projects" className="text-primary hover:underline flex items-center">
                  <ArrowLeft className="h-3 w-3 mr-1 rotate-180" />
                  Our Projects
                </Link>
                <Link to="/about" className="text-primary hover:underline flex items-center">
                  <ArrowLeft className="h-3 w-3 mr-1 rotate-180" />
                  About Us
                </Link>
                <Link to="/contact" className="text-primary hover:underline flex items-center">
                  <ArrowLeft className="h-3 w-3 mr-1 rotate-180" />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
