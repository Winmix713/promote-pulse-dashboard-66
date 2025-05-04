
import React, { useState } from "react";
import Header from "@/components/dashboard/Header";
import SettingsDialog from "@/components/dashboard/SettingsDialog";
import { useSettingsDialog } from "@/hooks/useSettingsDialog";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/dashboard/Sidebar"; 

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen, onOpenChange } = useSettingsDialog();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };
  
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-20 flex flex-col bg-background border-r transition-all duration-300 lg:left-0 md:w-72",
          isSidebarCollapsed ? "-left-full" : "left-0 w-72"
        )}
      >
        <div className="py-4 px-6 border-b h-14 flex items-center">
          <span className="font-bold text-xl">ACME Inc</span>
        </div>
        <Sidebar />
      </div>

      {/* Main content */}
      <div 
        className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          isSidebarCollapsed ? "lg:ml-0" : "lg:ml-72"
        )}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />

        {/* Dashboard content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
      
      {/* Settings Dialog */}
      <SettingsDialog open={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default DashboardLayout;
