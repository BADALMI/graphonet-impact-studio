import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Products",
    path: "/products"
  }, {
    name: "Workshop",
    path: "/workshop"
  }, {
    name: "Appointment",
    path: "/appointment"
  }, {
    name: "DataCode",
    path: "/datacode"
  }, {
    name: "Careers",
    path: "/careers"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold text-foreground">GRAPHOnet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>
                {link.name}
              </Link>)}
            
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-3">
              {navLinks.map(link => <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-2 text-sm font-medium transition-colors ${isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.name}
                </Link>)}
              <div className="px-4 pt-2">
                <Button variant="default" className="w-full bg-primary hover:bg-primary-dark text-white">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;