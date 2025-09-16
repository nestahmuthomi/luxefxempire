import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";

const Services = () => {
  const plans = [
    {
      name: "Free Signals",
      price: "Free",
      icon: Zap,
      description: "Get started with our complimentary trading signals and market insights.",
      features: [
        "Daily forex & crypto signals",
        "Entry/exit points & analysis",
        "Risk management guidance",
        "Basic market education",
        "Community access"
      ],
      cta: "Get Free Signals",
      popular: false
    },
    {
      name: "Premium Mentorship",
      price: "$299",
      period: "/month",
      icon: Star,
      description: "Comprehensive trading education with personal mentorship and advanced strategies.",
      features: [
        "Everything in Free plan",
        "1-on-1 mentorship sessions",
        "Advanced trading strategies",
        "Live trading room access",
        "Personal trading plan",
        "24/7 support",
        "Weekly performance reviews"
      ],
      cta: "Start Premium",
      popular: true
    },
    {
      name: "VIP Elite",
      price: "$599",
      period: "/month",
      icon: Crown,
      description: "Ultimate trading mastery program with exclusive access to professional tools and strategies.",
      features: [
        "Everything in Premium plan",
        "Direct WhatsApp access",
        "Proprietary trading tools",
        "Real-time trade alerts",
        "Portfolio management",
        "Advanced risk algorithms",
        "Exclusive VIP events",
        "Lifetime access to resources"
      ],
      cta: "Go VIP",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-card/20 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20 mb-6">
              <span className="text-accent font-medium">Our Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elevate Your <span className="gradient-text">Trading Game</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional trading solutions tailored for all experience levels
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-primary shadow-xl ring-2 ring-primary/20' 
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-primary/20' : 'bg-card/50'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-trading-success mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://t.me/your_telegram_channel', '_blank')}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Not sure which plan is right for you? Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="telegram" 
                size="lg"
                onClick={() => window.open('https://t.me/your_telegram_channel', '_blank')}
              >
                Chat on Telegram
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open('https://wa.me/your_whatsapp_number', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;