import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Smartphone, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const socialLinks = {
    telegram: "https://t.me/your_telegram_channel",
    instagram: "https://www.instagram.com/your_instagram",
    tiktok: "https://www.tiktok.com/@your_tiktok",
    whatsapp: "https://wa.me/your_whatsapp_number"
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-card/20 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20">
            <span className="text-accent font-medium">Best Trading Academy in Town</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Master the Charts
            <br />
            <span className="gradient-text">with FX Academy</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional forex trading mentorship and education. Master the markets with proven strategies and expert guidance.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Join Program
            </Button>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="telegram" 
                size="lg"
                onClick={() => window.open(socialLinks.telegram, '_blank')}
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Telegram
              </Button>
              
              <Button 
                variant="instagram" 
                size="lg"
                onClick={() => window.open(socialLinks.instagram, '_blank')}
                className="flex items-center gap-2"
              >
                <Instagram size={20} />
                Instagram
              </Button>
            </div>
          </div>
          
          {/* Additional Social Links */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button 
              variant="tiktok" 
              size="lg"
              onClick={() => window.open(socialLinks.tiktok, '_blank')}
              className="flex items-center gap-2"
            >
              <Smartphone size={20} />
              TikTok
            </Button>
            
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={() => window.open(socialLinks.whatsapp, '_blank')}
              className="flex items-center gap-2"
            >
              <Phone size={20} />
              WhatsApp
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">6+</div>
              <div className="text-muted-foreground">Years Trading</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">1000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;