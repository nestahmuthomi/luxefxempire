import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Smartphone, Phone, Mail, MapPin } from "lucide-react";
import tradingIcon from "@/assets/trading-icon.jpg";

const Footer = () => {
  const socialLinks = {
    telegram: "https://t.me/your_telegram_channel",
    instagram: "https://www.instagram.com/your_instagram",
    tiktok: "https://www.tiktok.com/@your_tiktok",
    whatsapp: "https://wa.me/your_whatsapp_number"
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={tradingIcon} alt="FX Academy" className="w-10 h-10 rounded-lg" />
              <span className="text-2xl font-bold gradient-text">FX Academy</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Master the markets with proven strategies and expert guidance. Transform your trading journey today.
            </p>
            <div className="flex items-center space-x-2">
              <Button 
                variant="telegram" 
                size="icon"
                onClick={() => window.open(socialLinks.telegram, '_blank')}
              >
                <MessageCircle size={16} />
              </Button>
              <Button 
                variant="instagram" 
                size="icon"
                onClick={() => window.open(socialLinks.instagram, '_blank')}
              >
                <Instagram size={16} />
              </Button>
              <Button 
                variant="tiktok" 
                size="icon"
                onClick={() => window.open(socialLinks.tiktok, '_blank')}
              >
                <Smartphone size={16} />
              </Button>
              <Button 
                variant="whatsapp" 
                size="icon"
                onClick={() => window.open(socialLinks.whatsapp, '_blank')}
              >
                <Phone size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#chart" className="text-muted-foreground hover:text-primary transition-colors">Live Chart</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Free Signals</span></li>
              <li><span className="text-muted-foreground">Premium Mentorship</span></li>
              <li><span className="text-muted-foreground">VIP Elite Program</span></li>
              <li><span className="text-muted-foreground">Live Trading Room</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">support@fxacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">Global Trading Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 FX Academy. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;