import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

// Portfolio Category Pages
import Weddings from "./pages/portfolio/Weddings";
import Portraits from "./pages/portfolio/Portraits";
import Events from "./pages/portfolio/Events";
import Commercial from "./pages/portfolio/Commercial";
import Product from "./pages/portfolio/Product";
import Fashion from "./pages/portfolio/Fashion";
import Travel from "./pages/portfolio/Travel";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <Toaster />
        <Sonner />
        <CustomCursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/weddings" element={<Weddings />} />
            <Route path="/portfolio/portraits" element={<Portraits />} />
            <Route path="/portfolio/events" element={<Events />} />
            <Route path="/portfolio/commercial" element={<Commercial />} />
            <Route path="/portfolio/product" element={<Product />} />
            <Route path="/portfolio/fashion" element={<Fashion />} />
            <Route path="/portfolio/travel" element={<Travel />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
