import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const ROICalculator = () => {
  const [currentBookings, setCurrentBookings] = useState([30]);
  const [avgServicePrice, setAvgServicePrice] = useState(150);
  const [missedCalls, setMissedCalls] = useState([20]);
  const [responseTime, setResponseTime] = useState([4]);

  // Calculations
  const currentRevenue = currentBookings[0] * avgServicePrice;
  const missedRevenue = (currentBookings[0] * missedCalls[0] / 100) * avgServicePrice;
  const improvedBookings = Math.round(currentBookings[0] * 1.5); // 50% increase
  const capturedMissed = Math.round(missedRevenue * 0.8); // Capture 80% of missed calls
  const newRevenue = (improvedBookings * avgServicePrice) + capturedMissed;
  const monthlyIncrease = newRevenue - currentRevenue;
  const yearlyIncrease = monthlyIncrease * 12;
  const roiPercent = Math.round((monthlyIncrease / 497) * 100); // Based on Professional plan
  const timeToBreakeven = Math.round(497 / monthlyIncrease * 30); // Days

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">ROI Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how much revenue Detool.AI can generate for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Input Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calculator className="h-6 w-6 text-primary mr-3" />
                Your Business Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Label className="text-base font-medium">Monthly Bookings: {currentBookings[0]}</Label>
                <Slider
                  value={currentBookings}
                  onValueChange={setCurrentBookings}
                  max={200}
                  min={5}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5</span>
                  <span>200+</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="servicePrice" className="text-base font-medium">Average Service Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="servicePrice"
                    type="number"
                    value={avgServicePrice}
                    onChange={(e) => setAvgServicePrice(Number(e.target.value))}
                    className="pl-10"
                    min="50"
                    max="1000"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">Missed Call Rate: {missedCalls[0]}%</Label>
                <Slider
                  value={missedCalls}
                  onValueChange={setMissedCalls}
                  max={50}
                  min={5}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">Response Time: {responseTime[0]} hours</Label>
                <Slider
                  value={responseTime}
                  onValueChange={setResponseTime}
                  max={24}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1hr</span>
                  <span>24hrs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-primary/10 border-primary/20 shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-primary">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Your Projected Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">${currentRevenue.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Current Monthly Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">${newRevenue.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">With Detool.AI</div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-accent">+${monthlyIncrease.toLocaleString()}</div>
                    <div className="text-lg text-foreground">Additional Monthly Revenue</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-primary">{roiPercent}%</div>
                      <div className="text-xs text-muted-foreground">Monthly ROI</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-accent">{timeToBreakeven} days</div>
                      <div className="text-xs text-muted-foreground">To Breakeven</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-secondary">${yearlyIncrease.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Yearly Increase</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  How We Achieve These Results:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Never miss a customer inquiry (24/7 availability)</li>
                  <li>• Instant responses increase booking conversion by 40%</li>
                  <li>• Smart upselling increases average order value</li>
                  <li>• Automated follow-ups capture more repeat business</li>
                  <li>• Professional responses improve customer satisfaction</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
                <BookCallLink className="inline-flex items-center justify-center bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow text-white font-semibold rounded-md">
                  Get These Results for Your Business
                </BookCallLink>
              <p className="text-sm text-muted-foreground mt-3">
                Free consultation • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;