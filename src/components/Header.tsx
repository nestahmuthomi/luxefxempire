import { Button } from "@/components/ui/button";
import tradingIcon from "@/assets/trading-icon.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={tradingIcon} alt="FX Academy" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl font-bold gradient-text">FX Academy</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#chart" className="text-foreground hover:text-primary transition-colors">Live Chart</a>
        </nav>
        
        <Button 
          variant="telegram" 
          size="lg" 
          onClick={() => window.open('https://t.me/your_telegram_channel', '_blank')}
          className="hidden md:flex"
        >
          Join Telegram
        </Button>
      </div>
    </header>
  );
};

export default Header;