import { useEffect, useRef } from 'react';

const LiveChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Clear any existing content
      chartRef.current.innerHTML = '';
      
      // Create TradingView widget script
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "FX:EURUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        backgroundColor: "rgba(19, 23, 34, 1)",
        gridColor: "rgba(42, 46, 57, 1)",
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: false,
        container_id: "tradingview_chart"
      });
      
      chartRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="chart" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Live Trading <span className="gradient-text">Chart</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor real-time market movements and analyze trading opportunities with our advanced charting tools.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-card rounded-xl p-6 shadow-2xl border border-border">
            <div 
              ref={chartRef}
              id="tradingview_chart"
              className="w-full h-[600px] rounded-lg overflow-hidden"
            >
              {/* Fallback content while loading */}
              <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading live chart...</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chart Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gradient-card rounded-lg p-4 text-center border border-border">
              <div className="text-2xl font-bold text-trading-success">EUR/USD</div>
              <div className="text-sm text-muted-foreground">Major Pair</div>
            </div>
            <div className="bg-gradient-card rounded-lg p-4 text-center border border-border">
              <div className="text-2xl font-bold text-trading-secondary">GBP/USD</div>
              <div className="text-sm text-muted-foreground">Cable</div>
            </div>
            <div className="bg-gradient-card rounded-lg p-4 text-center border border-border">
              <div className="text-2xl font-bold text-trading-warning">USD/JPY</div>
              <div className="text-sm text-muted-foreground">Yen Cross</div>
            </div>
            <div className="bg-gradient-card rounded-lg p-4 text-center border border-border">
              <div className="text-2xl font-bold text-trading-danger">AUD/USD</div>
              <div className="text-sm text-muted-foreground">Aussie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChart;