
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SubscriberProvider } from "./context/SubscriberContext";
import Header from "./components/Header";
import Index from "./pages/Index";
import Subscribers from "./pages/Subscribers";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const CursorFollower = () => {
  useEffect(() => {
    // Create cursor elements
    const cursorDot = document.createElement("div");
    cursorDot.className = "cursor-dot";
    
    const cursorOutline = document.createElement("div");
    cursorOutline.className = "cursor-outline";
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    // Update cursor position
    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Bug-like movement for cursor outline
      setTimeout(() => {
        // Add slight random movement to make it feel like a bug
        const randomX = Math.random() * 3 - 1.5;
        const randomY = Math.random() * 3 - 1.5;
        
        cursorOutline.style.left = `${posX + randomX}px`;
        cursorOutline.style.top = `${posY + randomY}px`;
        
        // Randomly rotate the "bug" as it moves
        const rotation = Math.random() * 90 - 45;
        cursorOutline.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      }, 50);
    };
    
    window.addEventListener("mousemove", moveCursor);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursorDot);
      document.body.removeChild(cursorOutline);
    };
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SubscriberProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#0e1419]">
            <CursorFollower />
            <Header />
            <main className="pt-6 pb-16">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/subscribers" element={<Subscribers />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <div className="scanline" aria-hidden="true"></div>
          </div>
        </BrowserRouter>
      </SubscriberProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
