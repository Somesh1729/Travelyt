import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { destinations } from "@/lib/mockData";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Adventure", "Beach", "History", "Nature", "Romance", "Culture"];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || dest.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Explore the World</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search destinations, activities..." 
              className="pl-10 h-12 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-12 gap-2">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </Button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {tags.map(tag => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "secondary"}
              onClick={() => setSelectedTag(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between">
                  <span>{dest.name}</span>
                  <span className="text-primary">${dest.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm">{dest.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {dest.tags.map(tag => (
                    <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredDestinations.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No destinations found matching your criteria. Try a different search.
        </div>
      )}
    </div>
  );
}
