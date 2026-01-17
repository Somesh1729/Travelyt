import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Explore from "@/pages/Explore";
import Itinerary from "@/pages/Itinerary";
import Tools from "@/pages/Tools";
import Features from "@/pages/Features";
import DestinationDetails from "@/pages/DestinationDetails";
import HandbookGenerator from "@/pages/HandbookGenerator";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
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
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
