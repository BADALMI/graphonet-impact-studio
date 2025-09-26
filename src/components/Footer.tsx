import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-white rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">GRAPHOnet</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Turning ideas into impactful offline marketing solutions. 
              Your creative partner for design and brand execution.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-sm text-gray-300 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/workshop" className="text-sm text-gray-300 hover:text-primary transition-colors">Workshop</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Design & Branding</li>
              <li className="text-sm text-gray-300">Print Solutions</li>
              <li className="text-sm text-gray-300">Retail Branding</li>
              <li className="text-sm text-gray-300">Pop-up Displays</li>
              <li className="text-sm text-gray-300">Store Signage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  123 Marketing Street<br />
                  Business District<br />
                  Mumbai, MH 400001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">hello@graphonet.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 GRAPHOnet.in. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;