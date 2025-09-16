import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Shield, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Proven Strategies",
      description: "Learn time-tested trading strategies that consistently deliver results in any market condition."
    },
    {
      icon: Users,
      title: "1-on-1 Mentorship",
      description: "Get personalized guidance from experienced traders who've mastered the markets."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Master the art of protecting your capital with advanced risk management techniques."
    },
    {
      icon: Award,
      title: "Live Market Analysis",
      description: "Join daily live sessions and watch professionals analyze real-time market movements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-card/20 backdrop-blur-sm rounded-full px-6 py-2 border border-primary/20 mb-6">
              <span className="text-accent font-medium">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">FX Academy</span> Trading Academy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Elite forex mentorship transforming beginners into professional traders through disciplined strategies and market mastery.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Trading?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our elite community of successful traders and start your journey to financial freedom today.
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.open('https://t.me/your_telegram_channel', '_blank')}
                className="mx-auto"
              >
                Join Our Academy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;