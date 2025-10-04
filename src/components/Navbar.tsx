import { useState, useEffect } from "react";
import { Menu, X, Home, Calendar, Image, Heart, Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Beranda", icon: Home },
    { id: "details", label: "Detail Acara", icon: Calendar },
    { id: "gallery", label: "Galeri", icon: Image },
    { id: "prayers", label: "Doa", icon: Heart },
    { id: "rsvp", label: "RSVP", icon: Send },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Title */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-bold gradient-hero bg-clip-text text-transparent"
          >
            Undangan Khitanan
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="transition-smooth hover:bg-primary/10 hover:text-primary"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            ))}
            <Link to="/auth">
              <Button
                variant="ghost"
                className="transition-smooth hover:bg-primary/10 hover:text-primary"
              >
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-smooth"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-smooth text-left"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <Link to="/auth" className="block">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-smooth text-left"
                >
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-medium">Admin</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
