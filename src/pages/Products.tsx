import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";

// Import product images
import rollupBanner from "@/assets/products/rollup-banner.jpg";
import retailWindow from "@/assets/products/retail-window.jpg";
import customStickers from "@/assets/products/custom-stickers.jpg";
import storeBranding from "@/assets/products/store-branding.jpg";
import sandwichFrame from "@/assets/products/sandwich-frame.jpg";
import signatureBoard from "@/assets/products/signature-board.jpg";
import metalLetters from "@/assets/products/metal-letters.jpg";
import popupStand from "@/assets/products/popup-stand.jpg";
import posDisplay from "@/assets/products/pos-display.jpg";
import productLabels from "@/assets/products/product-labels.jpg";
import cafeBranding from "@/assets/products/cafe-branding.jpg";
import menuFrame from "@/assets/products/menu-frame.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "popup", name: "Pop-up Display" },
    { id: "retail", name: "Retail Pictures" },
    { id: "stickers", name: "Stickers" },
    { id: "branding", name: "Store Branding" },
    { id: "frame", name: "Sandwich Frame" },
    { id: "signature", name: "SAP Signature" },
    { id: "metal", name: "Metal Letter" },
  ];

  // Product data with proper images
  const products = [
    {
      id: 1,
      title: "Roll-up Banner Display",
      category: "popup",
      image: rollupBanner,
      description: "Professional roll-up banner for exhibitions and events"
    },
    {
      id: 2,
      title: "Retail Window Graphics",
      category: "retail",
      image: retailWindow,
      description: "Eye-catching window displays for retail stores"
    },
    {
      id: 3,
      title: "Custom Brand Stickers",
      category: "stickers",
      image: customStickers,
      description: "High-quality vinyl stickers with custom designs"
    },
    {
      id: 4,
      title: "Store Interior Branding",
      category: "branding",
      image: storeBranding,
      description: "Complete store interior branding solutions"
    },
    {
      id: 5,
      title: "A-Frame Sandwich Board",
      category: "frame",
      image: sandwichFrame,
      description: "Portable sidewalk signs for promotions"
    },
    {
      id: 6,
      title: "Corporate Signature Board",
      category: "signature",
      image: signatureBoard,
      description: "Professional signature boards for offices"
    },
    {
      id: 7,
      title: "3D Metal Letters",
      category: "metal",
      image: metalLetters,
      description: "Premium metal letter signage"
    },
    {
      id: 8,
      title: "Exhibition Pop-up Stand",
      category: "popup",
      image: popupStand,
      description: "Curved pop-up display for trade shows"
    },
    {
      id: 9,
      title: "Retail Point of Sale",
      category: "retail",
      image: posDisplay,
      description: "Interactive retail display systems"
    },
    {
      id: 10,
      title: "Product Label Stickers",
      category: "stickers",
      image: productLabels,
      description: "Durable product labeling solutions"
    },
    {
      id: 11,
      title: "Café Interior Graphics",
      category: "branding",
      image: cafeBranding,
      description: "Complete café branding and graphics"
    },
    {
      id: 12,
      title: "Menu Display Frame",
      category: "frame",
      image: menuFrame,
      description: "Elegant menu display solutions"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container-custom text-center">
          <h1 className="text-hero text-foreground mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of offline marketing products, 
            from eye-catching displays to professional signage solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "border-border text-muted-foreground hover:text-foreground"
                } font-medium`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="gallery-grid">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="gallery-item border-0 shadow-[var(--shadow-card)] group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        onClick={() => openLightbox(product.image)}
                        className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                      >
                        <ZoomIn className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-white">
                        {categories.find(cat => cat.id === product.category)?.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-card-title mb-2">{product.title}</h3>
                    <p className="text-body text-sm">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={lightboxImage}
              alt="Product preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We create custom solutions 
            tailored to your specific needs and brand requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-10 py-6 text-lg font-semibold hover-lift"
            >
              Request Custom Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-lg font-semibold hover-lift"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;