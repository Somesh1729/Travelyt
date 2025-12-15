import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Sun, Cloud, Umbrella, CheckCircle2, Crown, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Tools() {
  const [budget, setBudget] = useState(2000);
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(7);

  const calculateDailyBudget = () => {
    return (budget / (travelers * days)).toFixed(0);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Travel Tools Suite</h1>
        <p className="text-muted-foreground text-lg">
          Plan smarter with our collection of travel utilities. 
          <span className="inline-block ml-2 text-primary font-semibold">Pro features unlocked.</span>
        </p>
      </div>

      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="calculator">Budget Calculator</TabsTrigger>
          <TabsTrigger value="packing">Packing List</TabsTrigger>
          <TabsTrigger value="visa">Visa Checker</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Trip Budget Estimator
                </CardTitle>
                <CardDescription>Estimate your spending power per day.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Total Budget ($)</Label>
                  <div className="flex items-center gap-4">
                    <Slider 
                      value={[budget]} 
                      onValueChange={(val) => setBudget(val[0])} 
                      max={10000} 
                      step={100} 
                      className="flex-1"
                    />
                    <Input 
                      value={budget} 
                      onChange={(e) => setBudget(Number(e.target.value))} 
                      className="w-24"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Number of Travelers</Label>
                  <div className="flex items-center gap-4">
                    <Slider 
                      value={[travelers]} 
                      onValueChange={(val) => setTravelers(val[0])} 
                      max={10} 
                      step={1} 
                      className="flex-1"
                    />
                    <span className="w-24 text-center font-bold border rounded-md py-2">{travelers}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Trip Duration (Days)</Label>
                  <div className="flex items-center gap-4">
                    <Slider 
                      value={[days]} 
                      onValueChange={(val) => setDays(val[0])} 
                      max={30} 
                      step={1} 
                      className="flex-1"
                    />
                    <span className="w-24 text-center font-bold border rounded-md py-2">{days}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground border-none">
                <CardContent className="p-8 text-center space-y-4">
                  <p className="text-lg opacity-90">Your Estimated Daily Budget Per Person</p>
                  <div className="text-6xl font-bold font-display flex items-center justify-center">
                    <DollarSign className="w-8 h-8 mt-2 opacity-75" />
                    {calculateDailyBudget()}
                  </div>
                  <p className="text-sm opacity-75">
                    Based on {travelers} travelers for {days} days with a total budget of ${budget}
                  </p>
                </CardContent>
              </Card>

              {/* PRO Feature */}
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-600 text-white border-0 gap-1">
                    <Crown className="w-3 h-3" /> PRO
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800 dark:text-amber-400">AI Savings Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-amber-900/80 dark:text-amber-200/80">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> 
                    Book flights 3 weeks in advance to save ~15%.
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> 
                    Consider traveling in shoulder season (May/Sept).
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> 
                    Use local transit instead of taxis in city centers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="packing">
          <Card>
            <CardHeader>
              <CardTitle>Smart Packing List Generator</CardTitle>
              <CardDescription>Get a customized list based on your destination's weather.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <Button variant="outline" className="h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/5">
                   <Sun className="w-8 h-8 text-orange-500" />
                   <span>Tropical / Beach</span>
                 </Button>
                 <Button variant="outline" className="h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/5">
                   <Cloud className="w-8 h-8 text-gray-500" />
                   <span>Urban / City</span>
                 </Button>
                 <Button variant="outline" className="h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/5">
                   <Umbrella className="w-8 h-8 text-blue-500" />
                   <span>Rainy / Cold</span>
                 </Button>
               </div>
               
               <div className="bg-muted p-4 rounded-lg mt-4">
                 <p className="text-center text-muted-foreground flex items-center justify-center gap-2">
                   <Lock className="w-4 h-4" /> Select a destination in "Itinerary" to unlock auto-generation.
                 </p>
               </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visa">
          <Card>
            <CardHeader>
              <CardTitle>Visa Requirements Checker</CardTitle>
              <CardDescription>Check if you need a visa for your next trip.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 max-w-md">
                <div className="grid gap-2">
                  <Label>I am a citizen of</Label>
                  <Input placeholder="e.g. United States" />
                </div>
                <div className="grid gap-2">
                  <Label>Traveling to</Label>
                  <Input placeholder="e.g. Japan" />
                </div>
                <Button>Check Requirements</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
