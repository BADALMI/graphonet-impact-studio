import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Printer, 
  Store, 
  Monitor, 
  Award, 
  Zap,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Complete brand identity solutions including logo design, brand guidelines, and visual identity systems.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Color Palettes", "Typography Systems"],
      price: "Starting from ₹25,000"
    },
    {
      icon: Printer,
      title: "Print Solutions",
      description: "High-quality printing services for all marketing materials with premium finishes and quick turnaround.",
      features: ["Business Cards", "Brochures", "Catalogs", "Posters", "Premium Finishes"],
      price: "Starting from ₹500"
    },
    {
      icon: Store,
      title: "Retail Branding",
      description: "Complete store branding solutions to create engaging customer experiences and boost sales.",
      features: ["Store Layout", "Interior Graphics", "Product Displays", "Customer Journey", "Brand Integration"],
      price: "Starting from ₹50,000"
    },
    {
      icon: Monitor,
      title: "Pop-up Displays",
      description: "Eye-catching portable display systems perfect for events, exhibitions, and promotional campaigns.",
      features: ["Roll-up Banners", "Pop-up Stands", "Exhibition Displays", "Portable Systems", "Custom Sizes"],
      price: "Starting from ₹2,500"
    },
    {
      icon: Award,
      title: "Signage Solutions",
      description: "Professional signage systems including metal letters, acrylic signs, and digital displays.",
      features: ["Metal Letters", "Acrylic Signs", "Digital Displays", "Wayfinding", "Installation"],
      price: "Starting from ₹5,000"
    },
    {
      icon: Zap,
      title: "Marketing Collaterals",
      description: "Complete range of marketing materials including stickers, flyers, and promotional items.",
      features: ["Custom Stickers", "Flyers", "Promotional Items", "Packaging", "Branded Materials"],
      price: "Starting from ₹200"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We understand your brand, goals, and requirements through detailed consultation."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive marketing strategy tailored to your specific needs."
    },
    {
      step: "03",
      title: "Design",
      description: "Create compelling designs that align with your brand and resonate with your audience."
    },
    {
      step: "04",
      title: "Production",
      description: "Execute with precision using premium materials and quality production processes."
    },
    {
      step: "05",
      title: "Delivery",
      description: "Deliver on time with installation support and ongoing maintenance when needed."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-custom text-center">
          <h1 className="text-hero text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Comprehensive offline marketing solutions designed to elevate your brand 
            and connect with your audience through impactful design and execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/workshop">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold hover-lift"
              >
                Book a Workshop
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg font-semibold hover-lift"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift hover-glow border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-card-title mb-4 text-center">{service.title}</h3>
                  <p className="text-body text-sm mb-6 text-center flex-grow">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-6 mt-auto">
                    <div className="text-lg font-semibold text-primary mb-4 text-center">{service.price}</div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-white font-medium group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Process</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered 
              on time, on budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-card-title mb-3">{item.title}</h3>
                <p className="text-body text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a customized solution 
            that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-10 py-6 text-lg font-semibold hover-lift"
            >
              Get Free Consultation
            </Button>
            <Link to="/products">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-10 py-6 text-lg font-semibold hover-lift"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;