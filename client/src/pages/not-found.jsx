import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-background text-center px-4">
      <div className="bg-destructive/10 p-4 rounded-full mb-6">
        <AlertCircle className="w-16 h-16 text-destructive" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-foreground">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The destination you're looking for seems to have moved or doesn't exist. Let's get you back on track.
      </p>
      <Link href="/">
        <Button size="lg" className="gap-2">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
