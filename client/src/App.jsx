import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Explore from "@/pages/Explore";
import Itinerary from "@/pages/Itinerary";
import Tools from "@/pages/Tools";
import Features from "@/pages/Features";
import DestinationDetails from "@/pages/DestinationDetails";
import HandbookGenerator from "@/pages/HandbookGenerator";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/destination/:id" component={DestinationDetails} />
        <Route path="/itinerary" component={Itinerary} />
        <Route path="/tools" component={Tools} />
        <Route path="/features" component={Features} />
        <Route path="/generate-handbook" component={HandbookGenerator} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
