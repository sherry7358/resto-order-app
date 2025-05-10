
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Layouts and Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import BookTable from "./pages/BookTable";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Navbar />
                    <Index />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/menu" 
                element={
                  <>
                    <Navbar />
                    <Menu />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/book-table" 
                element={
                  <>
                    <Navbar />
                    <BookTable />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/cart" 
                element={
                  <>
                    <Navbar />
                    <Cart />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/confirmation" 
                element={
                  <>
                    <Navbar />
                    <Confirmation />
                    <Footer />
                  </>
                } 
              />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
