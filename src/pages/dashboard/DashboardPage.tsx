
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, FileText, Home, BellRing, Download, Settings, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSettingsDialog } from "@/hooks/useSettingsDialog";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";

const DashboardPage: React.FC = () => {
  const { open: openSettings } = useSettingsDialog();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract the current tab from the URL path
  const currentTab = location.pathname.split('/').pop() || 'overview';
  
  // Handle tab change
  const handleTabChange = (value: string) => {
    navigate(`/dashboard/${value}`);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Dashboard Header - Welcome Message and Search */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your store today.</p>
          </div>
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <div className="relative flex-1 lg:flex-initial lg:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search anything..."
                className="pl-9 h-9 w-full lg:w-[14rem]"
              />
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div>
          <div className="flex items-center justify-between mb-6 border-b">
            {/* Fix: Wrap TabsList in Tabs component */}
            <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="bg-transparent border-b-0 h-auto p-0">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none py-3 px-4 h-auto"
                >
                  <Home className="h-4 w-4 mr-2" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none py-3 px-4 h-auto"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  <span>Analytics</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="reports" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none py-3 px-4 h-auto"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Reports</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none py-3 px-4 h-auto"
                >
                  <BellRing className="h-4 w-4 mr-2" />
                  <span>Notifications</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Outlet for nested routes */}
          <div className="mt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
