import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

const Workshop = () => {
  const workshops = [
    {
      id: 1,
      title: "Brand Identity Design Fundamentals",
      description: "Learn the essentials of creating memorable brand identities that resonate with your target audience.",
      duration: "2 Days",
      participants: "Max 15",
      level: "Beginner",
      date: "March 15-16, 2024",
      time: "10:00 AM - 5:00 PM",
      price: "₹8,500",
      topics: [
        "Brand strategy & positioning",
        "Logo design principles",
        "Color psychology in branding",
        "Typography selection",
        "Brand guideline creation"
      ]
    },
    {
      id: 2,
      title: "Offline Marketing Strategy Mastery",
      description: "Master the art of creating impactful offline marketing campaigns that drive real business results.",
      duration: "3 Days",
      participants: "Max 12",
      level: "Intermediate",
      date: "March 22-24, 2024",
      time: "9:00 AM - 6:00 PM",
      price: "₹12,000",
      topics: [
        "Market research & analysis",
        "Campaign planning & execution",
        "Print media optimization",
        "Event marketing strategies",
        "ROI measurement techniques"
      ]
    },
    {
      id: 3,
      title: "Retail Branding & Visual Merchandising",
      description: "Transform retail spaces into powerful brand experiences that attract customers and boost sales.",
      duration: "2 Days",
      participants: "Max 10",
      level: "Intermediate",
      date: "April 5-6, 2024",
      time: "10:00 AM - 5:00 PM",
      price: "₹10,500",
      topics: [
        "Store layout optimization",
        "Visual merchandising principles",
        "Customer journey mapping",
        "In-store branding elements",
        "Point-of-sale optimization"
      ]
    }
  ];

  const benefits = [
    "Hands-on practical exercises",
    "Industry expert instructors",
    "Small batch sizes for personalized attention",
    "Certificate of completion",
    "Networking opportunities",
    "Post-workshop support & resources"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      company: "RetailMax",
      comment: "The branding workshop completely transformed how I approach our marketing strategy. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      company: "Fresh Foods",
      comment: "Practical insights that I could immediately apply to my business. Great ROI on the workshop investment.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-custom text-center">
          <h1 className="text-hero text-foreground mb-6">Marketing & Design Workshops</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Enhance your marketing skills with our expert-led workshops. Learn from industry 
            professionals and gain practical knowledge you can apply immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold hover-lift"
            >
              View All Workshops
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg font-semibold hover-lift"
            >
              Contact for Custom Training
            </Button>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="hover-lift hover-glow border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {workshop.level}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{workshop.price}</div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                  </div>
                  
                  <h3 className="text-card-title mb-4">{workshop.title}</h3>
                  <p className="text-body text-sm mb-6 flex-grow">{workshop.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{workshop.participants} participants</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {workshop.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                      {workshop.topics.length > 3 && (
                        <li className="text-sm text-primary font-medium">
                          +{workshop.topics.length - 3} more topics
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium group mt-auto"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-section-title mb-8">Why Choose Our Workshops?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-body font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-body text-sm mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6">Workshop Location</h2>
            <p className="text-body text-lg max-w-3xl mx-auto">
              Our workshops are conducted at our modern training facility equipped 
              with the latest tools and technology for an optimal learning experience.
            </p>
          </div>

          <Card className="border-0 shadow-[var(--shadow-hover)] bg-gradient-to-br from-white to-gray-50/50 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-card-title mb-4">GRAPHOnet Training Center</h3>
              <p className="text-body mb-6">
                123 Marketing Street, Business District<br />
                Mumbai, Maharashtra 400001<br />
                India
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Easily accessible by public transport with dedicated parking available
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Upskill?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their marketing 
            and design skills with our expert-led workshops.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-10 py-6 text-lg font-semibold hover-lift"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-10 py-6 text-lg font-semibold hover-lift"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshop;