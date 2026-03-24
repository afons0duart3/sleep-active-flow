import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ComoFunciona from "./pages/ComoFunciona.tsx";
import Produto from "./pages/Produto.tsx";
import AppPage from "./pages/AppPage.tsx";
import Ciencia from "./pages/Ciencia.tsx";
import ParaQuem from "./pages/ParaQuem.tsx";
import FAQ from "./pages/FAQ.tsx";
import Blog from "./pages/Blog.tsx";
import Contacto from "./pages/Contacto.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/ciencia" element={<Ciencia />} />
          <Route path="/para-quem" element={<ParaQuem />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
