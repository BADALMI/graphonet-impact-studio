import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  Heart,
  Zap,
  Award,
  Coffee,
  ArrowRight,
  Upload
} from "lucide-react";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Zap,
      title: "Creative Freedom",
      description: "Freedom to explore your creativity and implement innovative ideas"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with talented professionals in a collaborative environment"
    },
    {
      icon: Award,
      title: "Growth Opportunities",
      description: "Clear career progression paths and skill development programs"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours and a culture that values personal time"
    },
    {
      icon: Briefcase,
      title: "Competitive Package",
      description: "Attractive salary and performance-based incentives"
    }
  ];

  const openPositions = [
    {
      title: "Senior Graphic Designer",
      department: "Design",
      type: "Full-time",
      location: "Mumbai, India",
      experience: "3-5 years",
      description: "Lead creative projects and mentor junior designers while working on diverse client campaigns.",
      requirements: [
        "Bachelor's degree in Graphic Design or related field",
        "3+ years of experience in graphic design",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio showcasing diverse design work",
        "Excellent communication and collaboration skills"
      ]
    },
    {
      title: "Marketing Campaign Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Mumbai, India",
      experience: "2-4 years",
      description: "Plan and execute integrated marketing campaigns for our diverse client portfolio.",
      requirements: [
        "Bachelor's degree in Marketing or Business",
        "2+ years of marketing campaign experience",
        "Experience with offline marketing channels",
        "Strong analytical and project management skills",
        "Creative problem-solving abilities"
      ]
    },
    {
      title: "Production Coordinator",
      department: "Operations",
      type: "Full-time",
      location: "Mumbai, India",
      experience: "1-3 years",
      description: "Coordinate production workflows and ensure quality delivery of all marketing materials.",
      requirements: [
        "Bachelor's degree preferred",
        "1+ years in production or project coordination",
        "Strong organizational and communication skills",
        "Experience with print production processes",
        "Detail-oriented with excellent time management"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-custom text-center">
          <h1 className="text-hero text-foreground mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Be part of a creative team that's passionate about transforming ideas into 
            impactful marketing solutions. Grow your career in a dynamic, supportive environment.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Why Work at GRAPHOnet?</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              We believe in nurturing talent and creating an environment where creativity thrives. 
              Here's what makes GRAPHOnet a great place to build your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift hover-glow border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title mb-4">{benefit.title}</h3>
                  <p className="text-body text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Open Positions</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              Explore current opportunities to join our growing team. Don't see the perfect role? 
              We're always interested in talented individuals.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-card-title">{position.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                            {position.department}
                          </span>
                          <span className="px-3 py-1 bg-navy/10 text-navy text-sm rounded-full font-medium">
                            {position.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span>{position.experience}</span>
                        </div>
                      </div>

                      <p className="text-body mb-6">{position.description}</p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <Button 
                        className="w-full bg-primary hover:bg-primary-dark text-white font-medium group mb-4"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section-title mb-6">Submit Your Application</h2>
              <p className="text-body text-lg">
                Interested in joining our team? Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            <Card className="border-0 shadow-[var(--shadow-hover)] bg-gradient-to-br from-white to-gray-50/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="position" className="text-sm font-medium text-foreground">
                        Position Applied For *
                      </Label>
                      <Input
                        id="position"
                        name="position"
                        type="text"
                        required
                        value={formData.position}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter position title"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="experience" className="text-sm font-medium text-foreground">
                        Years of Experience
                      </Label>
                      <Input
                        id="experience"
                        name="experience"
                        type="text"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="e.g., 3 years"
                      />
                    </div>
                    <div>
                      <Label htmlFor="portfolio" className="text-sm font-medium text-foreground">
                        Portfolio/Website
                      </Label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Cover Letter / Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Tell us why you'd be a great fit for our team..."
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-foreground">
                      Resume/CV (Upload placeholder)
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop your resume
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-6 text-lg hover-lift"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions About Careers?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to our HR team to learn more 
            about opportunities, culture, and what it's like to work at GRAPHOnet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-10 py-6 text-lg font-semibold hover-lift"
            >
              Contact HR Team
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-10 py-6 text-lg font-semibold hover-lift"
            >
              Learn About Culture
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;