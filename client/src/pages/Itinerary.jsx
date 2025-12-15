import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Calendar, Plus, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { destinations } from "@/lib/mockData";

export default function Itinerary() {
  const [myItinerary, setMyItinerary] = useState([]);

  const addToItinerary = (dest) => {
    const newItem = {
      ...dest,
      uid: `${dest.id}-${Date.now()}`, // unique ID for list
    };
    setMyItinerary([...myItinerary, newItem]);
  };

  const removeFromItinerary = (uid) => {
    setMyItinerary(myItinerary.filter(item => item.uid !== uid));
  };

  return (
    <div className="container mx-auto px-4 py-8 h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Trip Planner</h1>
          <p className="text-muted-foreground">Build your dream trip by adding destinations</p>
        </div>
        <Button size="lg" className="gap-2">
          <Calendar className="w-4 h-4" /> Save Itinerary
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 overflow-hidden">
        {/* Available Destinations (Source) */}
        <div className="lg:col-span-1 flex flex-col gap-4 overflow-y-auto pr-2 pb-20">
          <h2 className="font-semibold text-lg">Available Spots</h2>
          {destinations.map(dest => (
            <Card key={dest.id} className="cursor-pointer hover:border-primary transition-colors group">
              <CardContent className="p-4 flex gap-4 items-center">
                <img src={dest.image} alt={dest.name} className="w-16 h-16 rounded-md object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold text-sm">{dest.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{dest.description}</p>
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => addToItinerary(dest)}
                >
                  <Plus className="w-5 h-5 text-primary" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Itinerary (Target) */}
        <div className="lg:col-span-2 bg-muted/20 rounded-xl border p-6 flex flex-col">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
              {myItinerary.length}
            </span>
            Your Trip Timeline
          </h2>
          
          {myItinerary.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
              <Calendar className="w-12 h-12 mb-4 opacity-20" />
              <p>Your itinerary is empty.</p>
              <p className="text-sm">Click + on destinations to add them here.</p>
            </div>
          ) : (
            <div className="space-y-3 overflow-y-auto flex-1 pr-2">
              {myItinerary.map((item, index) => (
                <div key={item.uid} className="bg-card border rounded-lg p-4 flex items-center gap-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
                  <div className="text-muted-foreground font-mono text-sm w-6">
                    {index + 1}
                  </div>
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <div className="flex gap-2 mt-1">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => removeFromItinerary(item.uid)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-4 pt-4 border-t flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Estimated Total:</span>
            <span className="text-xl font-bold text-primary">
              ${myItinerary.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
