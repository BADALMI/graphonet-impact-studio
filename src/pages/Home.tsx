import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck as CheckCircle, Users, Target, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import servicesShowcase from "@/assets/services-showcase.jpg";

const Home = () => {
  const services = [
    {
      title: "Design & Branding",
      description: "Creative visual identity solutions that make your brand stand out",
      icon: Target,
    },
    {
      title: "Print Solutions",
      description: "High-quality printing services for all your marketing materials",
      icon: Zap,
    },
    {
      title: "Retail Branding",
      description: "Complete store branding solutions to enhance customer experience",
      icon: Users,
    },
    {
      title: "Display Systems",
      description: "Eye-catching pop-up displays and signage systems",
      icon: Award,
    },
  ];

  const whyChooseUs = [
    "15+ years of offline marketing expertise",
    "Creative team with proven track record",
    "End-to-end solution from design to execution",
    "Fast turnaround times without compromising quality",
    "Competitive pricing with premium results",
    "Dedicated project management and support",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Creative marketing solutions" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-hero bg-gradient-to-r from-foreground via-navy to-primary bg-clip-text text-transparent mb-8">
              Turning Ideas into 
              <span className="text-primary block mt-2">Impactful Offline Marketing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
              Your creative partner for design, branding, and offline marketing execution. 
              We bring your vision to life with innovative solutions that drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/services">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold hover-lift group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/appointment">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg font-semibold hover-lift"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Expertise</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              From concept to execution, we deliver comprehensive offline marketing solutions 
              that elevate your brand and connect with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift hover-glow border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title mb-4">{service.title}</h3>
                  <p className="text-body text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img 
              src={servicesShowcase} 
              alt="Our marketing solutions showcase" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-[var(--shadow-hover)] hover-lift"
            />
          </div>
        </div>
      </section>

      {/* Why Choose GRAPHOnet */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-section-title mb-8">Why Choose GRAPHOnet?</h2>
              <div className="space-y-6">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-body font-medium">{reason}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 font-semibold hover-lift"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-navy/10 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            Get in touch for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/appointment">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-10 py-6 text-lg font-semibold hover-lift"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link to="/workshop">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-10 py-6 text-lg font-semibold hover-lift"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;