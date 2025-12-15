import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Heart, ArrowRight, Loader2, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { jsPDF } from "jspdf";
import generatedBook from "@assets/generated_images/ai_creating_a_travel_book.png";

export default function HandbookGenerator() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    duration: 7,
    travelers: 2,
    budget: "moderate",
    interests: []
  });

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation time
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
    setStep(3); // Result step
  };

  const handleDownload = (format) => {
    const doc = new jsPDF();
    
    // Cover Page
    doc.setFillColor(0, 102, 102);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(40);
    doc.text(formData.destination, 105, 100, { align: 'center' });
    doc.setFontSize(20);
    doc.text("Personalized Travel Handbook", 105, 120, { align: 'center' });
    doc.setFontSize(14);
    doc.text(`Prepared for ${formData.travelers} Travelers • ${formData.duration} Days`, 105, 140, { align: 'center' });
    
    // Page 2: Itinerary
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(24);
    doc.text("Your AI Itinerary", 20, 30);
    
    doc.setFontSize(12);
    let y = 50;
    for (let i = 1; i <= formData.duration; i++) {
       doc.setFont(undefined, 'bold');
       doc.text(`Day ${i}: Exploration & Adventure`, 20, y);
       doc.setFont(undefined, 'normal');
       doc.text(`• Morning: Visit top landmarks in ${formData.destination}`, 25, y + 7);
       doc.text(`• Afternoon: Local culinary experience and hidden gems`, 25, y + 14);
       doc.text(`• Evening: Relax at recommended sunset spots`, 25, y + 21);
       y += 35;
       if (y > 250) {
         doc.addPage();
         y = 30;
       }
    }

    doc.save(`Velara_Handbook_${formData.destination}.pdf`);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">AI Handbook Generator</h1>
        <p className="text-muted-foreground text-lg">
          Create a comprehensive, personalized travel guide in seconds.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Visual Side */}
        <div className="hidden md:block sticky top-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src={generatedBook} 
              alt="AI Handbook" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold uppercase tracking-wider text-sm">AI Powered</span>
              </div>
              <h3 className="text-2xl font-bold">Your journey starts here.</h3>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div>
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Trip Details</CardTitle>
                <CardDescription>Tell us about your dream trip.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Where are you going?</Label>
                  <Input 
                    placeholder="e.g. Kyoto, Paris, Cape Town" 
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Duration (Days): {formData.duration}</Label>
                  <Slider 
                    value={[formData.duration]} 
                    onValueChange={(val) => setFormData({...formData, duration: val[0]})}
                    min={1} max={30} step={1}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Travelers</Label>
                    <Select 
                      value={formData.travelers.toString()} 
                      onValueChange={(val) => setFormData({...formData, travelers: parseInt(val)})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Solo</SelectItem>
                        <SelectItem value="2">Couple</SelectItem>
                        <SelectItem value="4">Group (4)</SelectItem>
                        <SelectItem value="10">Large Group</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget Style</Label>
                    <Select 
                      value={formData.budget}
                      onValueChange={(val) => setFormData({...formData, budget: val})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget Friendly</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2" 
                  onClick={() => setStep(2)}
                  disabled={!formData.destination}
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Confirm & Generate</CardTitle>
                <CardDescription>We're ready to build your handbook.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Destination:</span>
                     <span className="font-semibold">{formData.destination}</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Duration:</span>
                     <span className="font-semibold">{formData.duration} Days</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Travelers:</span>
                     <span className="font-semibold">{formData.travelers}</span>
                   </div>
                 </div>
                 
                 {isGenerating ? (
                   <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in">
                     <Loader2 className="w-12 h-12 text-primary animate-spin" />
                     <div>
                       <h3 className="font-semibold text-lg">Curating Experiences...</h3>
                       <p className="text-muted-foreground text-sm">Analyzing 50,000+ data points for {formData.destination}</p>
                     </div>
                   </div>
                 ) : (
                   <div className="text-center py-4">
                     <p className="text-muted-foreground">Ready to create magic?</p>
                   </div>
                 )}
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} disabled={isGenerating}>Back</Button>
                <Button 
                  className="flex-1 gap-2 bg-primary" 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate Handbook"}
                  {!isGenerating && <Sparkles className="w-4 h-4" />}
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Card className="border-green-500/20 bg-green-50/50 dark:bg-green-900/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <Sparkles className="w-5 h-5" /> Handbook Ready!
                  </CardTitle>
                  <CardDescription>
                    Your personalized guide for <strong>{formData.destination}</strong> is ready for download.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <Button className="w-full gap-2 h-12 text-lg" onClick={() => handleDownload('pdf')}>
                      <Download className="w-5 h-5" /> Download PDF Guide
                    </Button>
                    <Button variant="outline" className="w-full gap-2" disabled>
                      <FileText className="w-4 h-4" /> Export to Word (Pro)
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" onClick={() => { setStep(1); setFormData({...formData, destination: ""}); }}>
                    Create Another Guide
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
