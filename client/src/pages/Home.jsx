import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { destinations, popularItineraries } from "@/lib/mockData";
import heroImage from "@assets/generated_images/cinematic_travel_hero_shot_of_mountains_and_lake.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Majestic mountains and lake" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Discover Your <br />
            <span className="text-secondary">Next Adventure</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Personalized itineraries, hidden gems, and unforgettable experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/explore">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                Start Exploring <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Trending Destinations</h2>
          <p className="text-muted-foreground">Places that are capturing hearts right now</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group cursor-pointer border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {dest.rating}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-start">
                    <span>{dest.name}</span>
                    <span className="text-lg text-primary font-bold">${dest.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-2">{dest.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex gap-2 flex-wrap">
                    {dest.tags.map(tag => (
                      <span key={tag} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Itineraries */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Curated Itineraries</h2>
              <p className="text-muted-foreground">Expertly planned trips for every traveler</p>
            </div>
            <Link href="/itinerary">
              <Button variant="link" className="text-primary">View All Itineraries &rarr;</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularItineraries.map((itinerary, index) => (
              <motion.div
                key={itinerary.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl overflow-hidden shadow-sm border flex flex-col md:flex-row h-full md:h-64"
              >
                <div className="w-full md:w-1/2 relative">
                  <img 
                    src={itinerary.image} 
                    alt={itinerary.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center gap-4 w-full md:w-1/2">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{itinerary.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {itinerary.stops.length} Stops • {itinerary.duration}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {itinerary.stops.map(stop => (
                      <span key={stop} className="text-xs border px-2 py-1 rounded-md">{stop}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-lg text-secondary">From ${itinerary.price}</span>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
