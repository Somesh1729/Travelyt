import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [location] = useLocation();
  const isAuthPage = location === "/login" || location === "/signup";

  if (isAuthPage) {
    return (
      <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
        <main className="flex-1">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
