import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Download, Eye, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { destinations } from "@/lib/mockData";
import { Link } from "wouter";
import { jsPDF } from "jspdf";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const tags = ["All", "Adventure", "Beach", "History", "Nature", "Romance", "Culture"];
  
  // Extract unique countries
  const countries = ["All", ...new Set(destinations.map(d => d.country))];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || dest.tags.includes(selectedTag);
    const matchesCountry = selectedCountry === "All" || dest.country === selectedCountry;
    return matchesSearch && matchesTag && matchesCountry;
  });

  const handleQuickDownload = (e, dest) => {
    e.preventDefault();
    e.stopPropagation();
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(dest.name, 20, 20);
    doc.setFontSize(12);
    doc.text(`Country: ${dest.country}`, 20, 30);
    doc.text(doc.splitTextToSize(dest.description, 170), 20, 45);
    doc.save(`${dest.name}_Snapshot.pdf`);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Explore the World</h1>
        
        {/* Search and Filter Bar */}
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
          <div className="flex gap-2">
             <select 
               className="h-12 px-4 rounded-md border bg-background"
               value={selectedCountry}
               onChange={(e) => setSelectedCountry(e.target.value)}
             >
               {countries.map(c => <option key={c} value={c}>{c === "All" ? "All Countries" : c}</option>)}
             </select>
             <Button variant="outline" className="h-12 gap-2">
               <SlidersHorizontal className="w-4 h-4" /> Filters
             </Button>
          </div>
        </div>
        
        {/* Tags */}
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

      {/* Grid */}
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
                <div className="absolute bottom-2 left-2">
                   <Badge variant="secondary" className="backdrop-blur-md bg-black/50 text-white border-none flex gap-1">
                     <Globe className="w-3 h-3" /> {dest.country}
                   </Badge>
                </div>
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
              <CardFooter className="border-t pt-4 grid grid-cols-2 gap-3">
                <Link href={`/destination/${dest.id}`}>
                  <Button variant="outline" className="w-full gap-2">
                    <Eye className="w-4 h-4" /> Preview
                  </Button>
                </Link>
                <Button className="w-full gap-2" onClick={(e) => handleQuickDownload(e, dest)}>
                  <Download className="w-4 h-4" /> Download
                </Button>
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
