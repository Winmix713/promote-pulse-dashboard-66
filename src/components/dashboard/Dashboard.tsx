
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, FileText, Home, BellRing, Download, Settings } from "lucide-react";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import { useSettingsDialog } from "@/hooks/useSettingsDialog";
import { Button } from "@/components/ui/button";

// This component is kept for backward compatibility
// Most functionality has been moved to pages/dashboard/DashboardPage.tsx
const Dashboard: React.FC = () => {
  const { open: openSettings } = useSettingsDialog();
  const navigate = useNavigate();
  
  // Redirect to the new dashboard route structure
  React.useEffect(() => {
    navigate("/dashboard/overview");
  }, [navigate]);
  
  return null;
};

export default Dashboard;
