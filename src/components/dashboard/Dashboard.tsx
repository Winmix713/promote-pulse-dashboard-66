
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, FileText, Home, BellRing, Download, Settings } from "lucide-react";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import { useSettingsDialog } from "@/hooks/useSettingsDialog";
import { Button } from "@/components/ui/button";

const Dashboard: React.FC = () => {
  const { open: openSettings } = useSettingsDialog();
  
  return (
    <div className="space-y-6">
      {/* Dashboard Header - Welcome Message */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Welcome back, Admin</h2>
          <p className="text-muted-foreground">Here's what's happening with your store today.</p>
        </div>
        <div>
          <Button variant="outline" size="sm" className="flex items-center gap-2 px-3 py-1.5 text-sm">
            <span>May 4, 2025</span>
          </Button>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Reports</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
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

        <TabsContent value="overview" className="mt-0">
          <DashboardOverview />
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-0">
          <div className="flex h-[400px] items-center justify-center text-muted-foreground border rounded-lg">
            Analytics content will appear here
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-0">
          <div className="flex h-[400px] items-center justify-center text-muted-foreground border rounded-lg">
            Reports content will appear here
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-0">
          <div className="flex h-[400px] items-center justify-center text-muted-foreground border rounded-lg">
            Notifications content will appear here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
