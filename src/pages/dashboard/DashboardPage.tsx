
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, FileText, Home, BellRing, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSettingsDialog } from "@/hooks/useSettingsDialog";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

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
        {/* Dashboard Header - Welcome Message */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Welcome back, Admin</h2>
            <p className="text-muted-foreground">Here's what's happening with your store today.</p>
          </div>
          <div>
            <Button variant="outline" size="sm" className="flex items-center gap-2 px-3 py-1.5 text-sm">
              <span>May 4, 2025</span>
            </Button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <TabsList className="bg-muted/50">
              <TabsTrigger 
                value="overview" 
                className="flex items-center gap-2"
                onClick={() => handleTabChange('overview')}
                data-state={currentTab === 'overview' ? 'active' : 'inactive'}
              >
                <Home className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="flex items-center gap-2"
                onClick={() => handleTabChange('analytics')}
                data-state={currentTab === 'analytics' ? 'active' : 'inactive'}
              >
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="flex items-center gap-2"
                onClick={() => handleTabChange('reports')}
                data-state={currentTab === 'reports' ? 'active' : 'inactive'}
              >
                <FileText className="h-4 w-4" />
                <span>Reports</span>
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="flex items-center gap-2"
                onClick={() => handleTabChange('notifications')}
                data-state={currentTab === 'notifications' ? 'active' : 'inactive'}
              >
                <BellRing className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-sm flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-sm flex items-center gap-2"
                onClick={openSettings}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
            </div>
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
