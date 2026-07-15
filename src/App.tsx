import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import Insurance from "./pages/Insurance";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import DashboardOverview from "./pages/admin/DashboardOverview";
import ClientManagement from "./pages/admin/ClientManagement";
import MarketingKpis from "./pages/admin/MarketingKpis";
import TeamOperations from "./pages/admin/TeamOperations";
import FinancialKpis from "./pages/admin/FinancialKpis";
import CrmModule from "./pages/admin/CrmModule";
import Reports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/seguro" element={<Insurance />} />
          
          {/* Admin Panel */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="clients" element={<ClientManagement />} />
            <Route path="marketing" element={<MarketingKpis />} />
            <Route path="team" element={<TeamOperations />} />
            <Route path="financials" element={<FinancialKpis />} />
            <Route path="crm" element={<CrmModule />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
