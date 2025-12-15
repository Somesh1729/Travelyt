import { motion } from "framer-motion";
import { 
  BookOpen, Globe, Shield, Smartphone, Users, Zap, 
  Map as MapIcon, Download, Sparkles, Check, Crown, Star 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import generatedGlobe from "@assets/generated_images/futuristic_digital_globe_with_connection_lines.png";
import generatedBook from "@assets/generated_images/ai_creating_a_travel_book.png";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "AI-Powered Intelligence",
      description: "Our advanced algorithms analyze millions of data points to craft the perfect itinerary just for you."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Global Coverage (150+ Countries)",
      description: "From the bustling streets of Tokyo to the remote fjords of Norway, we've got the world covered."
    },
    {
      icon: <MapIcon className="w-8 h-8 text-green-500" />,
      title: "Interactive Maps",
      description: "Navigate like a local with our detailed, offline-capable interactive maps integrated into your handbook."
    },
    {
      icon: <Download className="w-8 h-8 text-purple-500" />,
      title: "Multiple Export Options",
      description: "Download your guide as a PDF, sync it to your calendar, or access it via our dedicated mobile app."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Emergency Preparedness",
      description: "Instant access to local emergency numbers, embassy contacts, and medical facilities wherever you are."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Real-Time Generation",
      description: "Changes in plans? No problem. Regenerate your entire handbook in seconds to adapt to new circumstances."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: "Mobile Optimized",
      description: "Your handbook looks beautiful on any device. Swipe, tap, and explore with a native-app like experience."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Group Friendly",
      description: "Collaborate with friends and family. Share plans, split costs, and vote on activities together."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Share Your Dreams",
      description: "Tell our AI about your destination, dates, budget, and interests."
    },
    {
      number: "02",
      title: "AI Magic Happens",
      description: "We instantly generate a comprehensive, personalized travel handbook."
    },
    {
      number: "03",
      title: "Download & Explore",
      description: "Save your guide offline and embark on your journey with confidence."
    }
  ];

  const pricing = [
    {
      name: "Explorer",
      price: "$0",
      description: "Perfect for weekend getaways",
      features: [
        "Basic Itinerary Generation",
        "3 Destinations per Trip",
        "Online Access Only",
        "Community Support"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Voyager",
      price: "$12",
      period: "/month",
      description: "For the frequent flyer",
      features: [
        "Unlimited AI Re-generations",
        "PDF & Calendar Export",
        "Offline Maps Access",
        "150+ Countries Coverage",
        "Priority Email Support"
      ],
      cta: "Go Voyager",
      popular: true
    },
    {
      name: "Globetrotter Elite",
      price: "$29",
      period: "/month",
      description: "The ultimate travel companion",
      features: [
        "Everything in Voyager",
        "24/7 Concierge Support",
        "Emergency Assistance Integration",
        "Exclusive Local Deals",
        "Multi-Group Collaboration"
      ],
      cta: "Join Elite",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-60">
           <img 
            src={generatedGlobe} 
            alt="Global Network" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center space-y-6">
          <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm uppercase tracking-widest mb-4 bg-primary/10 backdrop-blur-md">
            The Future of Travel
          </Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Intelligent Travel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Handbooks</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            "The world is a book, and those who do not travel read only one page."
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Why Velara?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just plan trips; we engineer experiences. Our AI handbook generator is the most advanced tool in the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
                <CardHeader>
                  <div className="mb-4 bg-background p-3 rounded-xl w-fit shadow-sm border">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Your Personal Guide <br/>In 3 Simple Steps</h2>
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="text-6xl font-display font-bold text-gray-200 dark:text-gray-800">
                      {step.number}
                    </span>
                    <div className="space-y-2 pt-2">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/generate-handbook">
                <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                  Generate My Handbook Now
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl rounded-full" />
              <img 
                src={generatedBook} 
                alt="AI Handbook Generation" 
                className="relative rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Stats */}
      <section className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">150+</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-wide">Countries Supported</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">50k+</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-wide">Handbooks Generated</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">4.9/5</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-wide">User Satisfaction</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">24/7</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-wide">AI Availability</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Choose Your Journey</h2>
          <p className="text-muted-foreground text-lg">Unlock the full power of Velara with our flexible plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, idx) => (
            <Card key={idx} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} 
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <BookOpen className="w-12 h-12 mx-auto opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            "To travel is to take a journey into yourself."
          </h2>
          <p className="text-xl opacity-80">- Danny Kaye</p>
          <div className="pt-8">
            <Button variant="secondary" size="lg" className="rounded-full px-10 py-6 text-lg font-bold">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
