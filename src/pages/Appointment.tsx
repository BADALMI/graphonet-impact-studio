import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const services = [
    "Brand Identity Design",
    "Print Solutions Consultation",
    "Retail Branding Strategy",
    "Pop-up Display Planning",
    "Marketing Campaign Planning",
    "Workshop Enrollment",
    "General Consultation"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Reset form
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setSelectedDate(undefined);
      setSelectedTime("");
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
        <Card className="max-w-md w-full mx-4 border-0 shadow-[var(--shadow-hover)] bg-gradient-to-br from-white to-gray-50/50">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Appointment Requested!</h2>
            <p className="text-body mb-6">
              Thank you for your appointment request. Our team will contact you within 24 hours to confirm your booking.
            </p>
            <p className="text-sm text-muted-foreground">
              You will receive a confirmation email shortly.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-custom text-center">
          <h1 className="text-hero text-foreground mb-6">Book an Appointment</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation with our marketing experts. Let's discuss your project 
            and explore how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8">
                  <h3 className="text-card-title mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-body">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-body">appointments@graphonet.in</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div className="text-body">
                        123 Marketing Street<br />
                        Business District<br />
                        Mumbai, MH 400001
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8">
                  <h3 className="text-card-title mb-6">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-body">Monday - Friday</span>
                      <span className="text-primary font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body">Saturday</span>
                      <span className="text-primary font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-[var(--shadow-hover)] bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8">
                  <h2 className="text-section-title mb-8">Schedule Your Consultation</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
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
                        <Label className="text-sm font-medium text-foreground">
                          Service Interest *
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-4 block">
                        Preferred Date *
                      </Label>
                      <div className="flex justify-center">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date() || date.getDay() === 0}
                          className="rounded-md border"
                        />
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <div>
                        <Label className="text-sm font-medium text-foreground mb-4 block">
                          Preferred Time *
                        </Label>
                        <div className="grid grid-cols-4 gap-3">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={selectedTime === time ? "default" : "outline"}
                              onClick={() => setSelectedTime(time)}
                              className={`${
                                selectedTime === time
                                  ? "bg-primary text-white"
                                  : "border-border text-muted-foreground hover:text-foreground"
                              } font-medium`}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone || !formData.service}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-6 text-lg hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Book Appointment
                    </Button>

                    {selectedDate && selectedTime && (
                      <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="w-5 h-5 text-primary" />
                          <span className="text-primary font-medium">
                            Appointment: {selectedDate.toLocaleDateString()} at {selectedTime}
                          </span>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;