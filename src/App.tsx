
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SubscriberProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-6 pb-16">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/subscribers" element={<Subscribers />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </SubscriberProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
