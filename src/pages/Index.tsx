import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Smartphone, Phone, Mail, MapPin, TrendingUp, Users, Award, Clock, BarChart3, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import luxeLogo from "@/assets/luxe-logo.jpg";
import luxeHeroBg from "@/assets/luxe-hero-bg.jpg";
import { useEffect } from "react";

const Index = () => {
  const socialLinks = {
    telegram: "https://t.me/luxefxempire",
    instagram: "https://www.instagram.com/stories/luxefx.empire/3722110436226126162?utm_source=ig_story_item_share&igsh=eDloNTBkY3Q4OHR5",
    instagramProfile: "https://www.instagram.com/luxefx.empire",
    tiktok: "https://www.tiktok.com/@luxefx.empire",
    whatsapp: "https://wa.me/254747882442",
    hfm: "https://hfm.com/?refid=30453842"
  };

  useEffect(() => {
    const widget = document.createElement('script');
    widget.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    widget.async = true;
    widget.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "FX:EURUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_chart"
    });

    const chartContainer = document.getElementById('tradingview_chart');
    if (chartContainer) {
      chartContainer.appendChild(widget);
    }

    return () => {
      if (chartContainer) {
        chartContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={luxeLogo} alt="LUXE FX EMPIRE" className="w-12 h-12 rounded-lg shadow-lg" />
            <span className="text-2xl font-bold gradient-text">LUXE FX EMPIRE</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#chart" className="text-foreground hover:text-primary transition-colors font-medium">Live Chart</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>
          
          <Button 
            variant="telegram" 
            size="lg" 
            onClick={() => window.open(socialLinks.telegram, '_blank')}
            className="hidden md:flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Telegram
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${luxeHeroBg})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 px-6 py-2 text-base font-medium">
              Best Physical/Online Classes In Town
            </Badge>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Master the Charts
              <br />
              <span className="gradient-text">with LUXE FX EMPIRE</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional forex trading mentorship and education. Master the markets with proven strategies and expert guidance from industry professionals.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Button 
                variant="telegram" 
                size="xl"
                onClick={() => window.open(socialLinks.telegram, '_blank')}
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <MessageCircle size={24} className="mr-2" />
                Telegram
              </Button>
              
              <Button 
                variant="instagram" 
                size="xl"
                onClick={() => window.open(socialLinks.instagramProfile, '_blank')}
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <Instagram size={24} className="mr-2" />
                Follow on Instagram
              </Button>
              
              <Button 
                variant="default" 
                size="xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-black hover:bg-gray-200"
              >
                Join Now
              </Button>
            </div>

            {/* Additional Social Links */}
            <div className="flex items-center justify-center gap-4 mt-8">
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

              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(socialLinks.hfm, '_blank')}
                className="flex items-center gap-2 bg-orange-600 text-white border-orange-600 hover:bg-orange-700"
              >
                📲 HFM
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">8+</div>
                <div className="text-gray-300 font-medium">Years Trading</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">2000+</div>
                <div className="text-gray-300 font-medium">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">98%</div>
                <div className="text-gray-300 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">LUXE FX EMPIRE?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are a premier forex education platform with years of proven success in transforming trading careers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Proven Strategies",
                  description: "Time-tested trading strategies with consistent results"
                },
                {
                  icon: Users,
                  title: "Expert Mentorship",
                  description: "Learn from professional traders with years of experience"
                },
                {
                  icon: Award,
                  title: "High Success Rate",
                  description: "98% of our students achieve profitable trading within 6 months"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description: "Round-the-clock support and market analysis"
                },
                {
                  icon: BarChart3,
                  title: "Live Trading Room",
                  description: "Real-time trading sessions and market insights"
                },
                {
                  icon: Shield,
                  title: "Risk Management",
                  description: "Advanced risk management techniques and strategies"
                }
              ].map((feature, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your <span className="gradient-text">Trading Path</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From beginner to advanced, we have the perfect program to accelerate your trading journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Free Signals",
                  price: "Free",
                  features: [
                    "Daily forex signals",
                    "Basic market analysis",
                    "Community access",
                    "Educational resources"
                  ],
                  popular: false,
                  buttonText: "Get Started"
                },
                {
                  title: "Premium Mentorship",
                  price: "$199/month",
                  features: [
                    "Personal trading mentor",
                    "Advanced signals",
                    "Weekly 1-on-1 sessions",
                    "Custom trading plan",
                    "Risk management training"
                  ],
                  popular: true,
                  buttonText: "Start Learning"
                },
                {
                  title: "VIP Elite Program",
                  price: "$499/month",
                  features: [
                    "Everything in Premium",
                    "Live trading room access",
                    "Advanced strategies",
                    "Direct WhatsApp support",
                    "Exclusive market insights",
                    "Profit sharing opportunities"
                  ],
                  popular: false,
                  buttonText: "Join Elite"
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-primary border-primary/50' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                    <div className="text-3xl font-bold gradient-text">{plan.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => window.open(socialLinks.whatsapp, '_blank')}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Chart Section */}
      <section id="chart" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Live Market Data</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Live Trading Chart</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-time forex market data and advanced charting tools for professional analysis.
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div id="tradingview_chart" className="w-full h-[600px] rounded-lg overflow-hidden bg-black/20">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Loading live chart...</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { pair: "EUR/USD", price: "1.0925", change: "+0.23%" },
                { pair: "GBP/USD", price: "1.2654", change: "-0.18%" },
                { pair: "USD/JPY", price: "149.82", change: "+0.41%" },
                { pair: "AUD/USD", price: "0.6587", change: "+0.15%" }
              ].map((item, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground">{item.pair}</div>
                    <div className="text-lg font-bold">{item.price}</div>
                    <div className={`text-sm ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={luxeLogo} alt="LUXE FX EMPIRE" className="w-12 h-12 rounded-lg shadow-lg" />
                <span className="text-2xl font-bold gradient-text">LUXE FX EMPIRE</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transform your trading journey with professional mentorship and proven strategies. Join the elite traders community today.
              </p>
              <div className="flex items-center space-x-3">
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
                  onClick={() => window.open(socialLinks.instagramProfile, '_blank')}
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
                  <span className="text-muted-foreground">info@luxefxempire.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary" />
                  <span className="text-muted-foreground">+254 747 882 442</span>
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
              © 2025 LUXE FX EMPIRE. All rights reserved.
            </p>
             <p className="text-muted-foreground text-sm">
              © CREATED BY NM8 TECH
               
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
