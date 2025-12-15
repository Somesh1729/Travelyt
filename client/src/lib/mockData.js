import generatedKyoto from "@assets/generated_images/kyoto_streets_at_night_with_lanterns.png";
import generatedSantorini from "@assets/generated_images/santorini_caldera_view_with_blue_domes.png";
import generatedMachuPicchu from "@assets/generated_images/machu_picchu_misty_mountain_view.png";
import generatedIceland from "@assets/generated_images/northern_lights_over_icelandic_waterfall.png";

export const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    country: "Greece",
    description: "Iconic white-washed buildings with blue domes overlooking the crystal clear Aegean Sea. Perfect for romance and relaxation.",
    fullDescription: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    price: 1200,
    rating: 4.8,
    image: generatedSantorini,
    tags: ["Romance", "Beach", "History"],
    dailyCost: 150,
    currency: "Euro (€)",
    history: "Santorini's history is dominated by the massive Minoan eruption around 1600 BC, one of the largest volcanic events in recorded history. This event may have inspired the legend of Atlantis.",
    coordinates: [36.3932, 25.4615],
    attractions: [
      { name: "Oia Sunset Point", type: "Viewpoint" },
      { name: "Red Beach", type: "Beach" },
      { name: "Ancient Thera", type: "Ruins" }
    ]
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    country: "Japan",
    description: "Ancient temples, traditional tea houses, and sublime zen gardens. A journey into the heart of Japanese culture.",
    fullDescription: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as the kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    price: 1500,
    rating: 4.9,
    image: generatedKyoto,
    tags: ["Culture", "History", "Nature"],
    dailyCost: 180,
    currency: "Japanese Yen (¥)",
    history: "Kyoto served as Japan's capital and the emperor's residence from 794 until 1868. It was one of the few Japanese cities that escaped destruction during WWII, preserving its prewar cultural heritage.",
    coordinates: [35.0116, 135.7681],
    attractions: [
      { name: "Fushimi Inari Shrine", type: "Shrine" },
      { name: "Kinkaku-ji", type: "Temple" },
      { name: "Arashiyama Bamboo Grove", type: "Nature" }
    ]
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    country: "Peru",
    description: "The Lost City of the Incas, high in the Andes mountains. A bucket-list adventure for hikers and history buffs.",
    fullDescription: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.",
    price: 1800,
    rating: 4.9,
    image: generatedMachuPicchu,
    tags: ["Adventure", "Hiking", "History"],
    dailyCost: 120,
    currency: "Peruvian Sol (PEN)",
    history: "Built around 1450, Machu Picchu was abandoned a century later at the time of the Spanish Conquest. It remained unknown to the outside world until 1911, when it was brought to international attention by historian Hiram Bingham.",
    coordinates: [-13.1631, -72.5450],
    attractions: [
      { name: "Sun Gate", type: "Viewpoint" },
      { name: "Temple of the Sun", type: "Ruins" },
      { name: "Huayna Picchu", type: "Mountain" }
    ]
  },
  {
    id: 4,
    name: "Banff, Canada",
    country: "Canada",
    description: "Turquoise lakes, snow-capped peaks, and abundant wildlife in the heart of the Canadian Rockies.",
    fullDescription: "Banff is a resort town in the province of Alberta, located within Banff National Park. The peaks of Mt. Rundle and Mt. Cascade, part of the Rocky Mountains, dominate its skyline. On Banff Avenue, the main thoroughfare, boutiques and restaurants mix with château-style hotels and souvenir shops.",
    price: 1100,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1533052061298-63916960d70b?auto=format&fit=crop&q=80&w=800",
    tags: ["Nature", "Hiking", "Skiing"],
    dailyCost: 160,
    currency: "Canadian Dollar (CAD)",
    history: "Banff was established in the 1880s after the transcontinental railway was built through the Bow Valley. In 1885, Canada established a federal reserve of 26 sq km around the Cave and Basin Hot Springs, beginning Canada's national park system.",
    coordinates: [51.1784, -115.5708],
    attractions: [
      { name: "Lake Louise", type: "Lake" },
      { name: "Moraine Lake", type: "Lake" },
      { name: "Banff Gondola", type: "Activity" }
    ]
  },
  {
    id: 5,
    name: "Maui, Hawaii",
    country: "USA",
    description: "Tropical paradise with golden beaches, lush rainforests, and the famous Road to Hana.",
    fullDescription: "Maui is an island in the Central Pacific, part of the Hawaiian archipelago. Sprawling Haleakala National Park encompasses the island’s highest peak, volcanic Haleakala, as well as the pools and waterfalls of Ohe’o Gulch, accessed via the scenic, winding Hana Highway.",
    price: 2000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542259679450-1a3978f60383?auto=format&fit=crop&q=80&w=800",
    tags: ["Beach", "Relaxation", "Nature"],
    dailyCost: 250,
    currency: "US Dollar ($)",
    history: "Polynesians from Tahiti and the Marquesas were the original settlers of Maui. The island saw the rise of King Kamehameha I, who united the Hawaiian islands. It later became a center for the whaling industry and sugar plantations.",
    coordinates: [20.7984, -156.3319],
    attractions: [
      { name: "Road to Hana", type: "Scenic Drive" },
      { name: "Haleakala Crater", type: "Volcano" },
      { name: "Kaanapali Beach", type: "Beach" }
    ]
  },
  {
    id: 6,
    name: "Reykjavik, Iceland",
    country: "Iceland",
    description: "Gateway to the land of fire and ice. Northern lights, geysers, and stunning waterfalls await.",
    fullDescription: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills.",
    price: 1600,
    rating: 4.6,
    image: generatedIceland,
    tags: ["Adventure", "Nature", "Cold"],
    dailyCost: 200,
    currency: "Icelandic Króna (ISK)",
    history: "According to the Landnámabók (Book of Settlement), Reykjavik was founded by Ingólfr Arnarson in AD 874. It remained a small village until the 18th century when it began to urbanize as a trading town.",
    coordinates: [64.1265, -21.8174],
    attractions: [
      { name: "Blue Lagoon", type: "Spa" },
      { name: "Golden Circle", type: "Route" },
      { name: "Hallgrimskirkja", type: "Church" }
    ]
  },
  {
    id: 7,
    name: "Paris, France",
    country: "France",
    description: "The City of Light. Experience world-class art, fashion, gastronomy, and culture.",
    fullDescription: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    price: 1400,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    tags: ["Culture", "Romance", "Food"],
    dailyCost: 220,
    currency: "Euro (€)",
    history: "Paris was founded around the end of the 3rd century BC by the Gauls. By the 12th century, it was the largest city in the western world, a prosperous trading center, and the home of the University of Paris.",
    coordinates: [48.8566, 2.3522],
    attractions: [
      { name: "Eiffel Tower", type: "Landmark" },
      { name: "Louvre Museum", type: "Museum" },
      { name: "Notre-Dame", type: "Cathedral" }
    ]
  },
  {
    id: 8,
    name: "New York City, USA",
    country: "USA",
    description: "The city that never sleeps. Iconic landmarks, Broadway shows, and diverse neighborhoods.",
    fullDescription: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.",
    price: 1800,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?auto=format&fit=crop&q=80&w=800",
    tags: ["Urban", "Culture", "Food"],
    dailyCost: 300,
    currency: "US Dollar ($)",
    history: "New York City traces its origins to a trading post founded by colonists from the Dutch Republic in 1624 on Lower Manhattan; the post was named New Amsterdam in 1626.",
    coordinates: [40.7128, -74.0060],
    attractions: [
      { name: "Statue of Liberty", type: "Landmark" },
      { name: "Central Park", type: "Park" },
      { name: "Times Square", type: "Plaza" }
    ]
  },
  {
    id: 9,
    name: "Cape Town, South Africa",
    country: "South Africa",
    description: "Stunning coastal views, Table Mountain, and vibrant culture at the tip of Africa.",
    fullDescription: "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island.",
    price: 1300,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800",
    tags: ["Nature", "Beach", "Adventure"],
    dailyCost: 130,
    currency: "South African Rand (ZAR)",
    history: "Cape Town was founded by the Dutch East India Company in 1652 as a supply station for Dutch ships sailing to East Africa, India, and the Far East. It was the first permanent European settlement in South Africa.",
    coordinates: [-33.9249, 18.4241],
    attractions: [
      { name: "Table Mountain", type: "Mountain" },
      { name: "Robben Island", type: "History" },
      { name: "Kirstenbosch Gardens", type: "Garden" }
    ]
  },
];

export const popularItineraries = [
  {
    id: 1,
    title: "European Summer Dream",
    duration: "10 Days",
    stops: ["Paris", "Rome", "Barcelona"],
    price: 2500,
    image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Asian Cultural Immersion",
    duration: "14 Days",
    stops: ["Tokyo", "Seoul", "Bangkok"],
    price: 3000,
    image: generatedKyoto,
  },
  {
    id: 3,
    title: "Nordic Adventure",
    duration: "8 Days",
    stops: ["Reykjavik", "Oslo", "Stockholm"],
    price: 2200,
    image: generatedIceland,
  },
  {
    id: 4,
    title: "South American Odyssey",
    duration: "12 Days",
    stops: ["Lima", "Cusco", "Machu Picchu"],
    price: 1900,
    image: generatedMachuPicchu,
  },
];
