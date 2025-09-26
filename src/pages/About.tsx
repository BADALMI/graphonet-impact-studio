import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to transforming ideas into impactful offline marketing solutions that drive real business results."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Our team constantly pushes creative boundaries to deliver fresh, innovative approaches to traditional marketing."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in building lasting relationships with our clients, working as true partners in their success."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every project receives our full attention to detail, ensuring exceptional quality from concept to completion."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-hero text-foreground mb-6">About GRAPHOnet</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a passion for creative excellence, GRAPHOnet has been transforming 
              brands through innovative offline marketing solutions for over 15 years.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={teamImage} 
                alt="GRAPHOnet team working together" 
                className="w-full rounded-2xl shadow-[var(--shadow-hover)] hover-lift"
              />
            </div>
            
            <div>
              <h2 className="text-section-title mb-6">Our Story</h2>
              <div className="space-y-6 text-body">
                <p>
                  GRAPHOnet was born from a simple belief: great design and strategic thinking 
                  can transform businesses. What started as a small design studio has evolved 
                  into a comprehensive offline marketing agency.
                </p>
                <p>
                  Today, we serve clients across industries, from startups to established brands, 
                  helping them create meaningful connections with their customers through 
                  thoughtfully crafted marketing materials and experiences.
                </p>
                <p>
                  Our approach combines creative vision with practical execution, ensuring 
                  every project not only looks exceptional but also delivers measurable results 
                  for our clients' businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Our Mission & Values</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              We're driven by core values that guide every project, partnership, and creative decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift hover-glow border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-card-title mb-3">{value.title}</h3>
                      <p className="text-body text-sm">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Meet Our Team</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              Our diverse team of creative professionals brings together expertise in design, 
              marketing, and brand strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Cards - Using placeholder content */}
            {[
              { name: "Rajesh Sharma", role: "Creative Director", description: "15+ years leading creative strategy and brand development" },
              { name: "Priya Patel", role: "Design Manager", description: "Expert in visual design and brand identity systems" },
              { name: "Amit Kumar", role: "Production Head", description: "Ensures flawless execution from concept to delivery" }
            ].map((member, index) => (
              <Card key={index} className="hover-lift hover-glow border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-navy/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-card-title mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-body text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life. Get in touch to discuss your project 
            and discover how we can help your brand make a lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 px-10 py-6 text-lg font-semibold hover-lift"
              >
                View Our Services
              </Button>
            </Link>
            <Link to="/careers">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-lg font-semibold hover-lift"
              >
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;