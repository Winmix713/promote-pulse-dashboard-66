
import React from "react";
import Sidebar from "@/components/promote/Sidebar";
import Header from "@/components/dashboard/Header";
import SettingsDialog from "@/components/dashboard/SettingsDialog";
import { useSettingsDialog } from "@/hooks/useSettingsDialog";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen, onOpenChange } = useSettingsDialog();
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Dashboard content */}
        <main className={`flex-1 p-4 md:p-6 ${isMobile ? 'mt-2' : ''}`}>
          {children}
        </main>
      </div>
      
      {/* Settings Dialog */}
      <SettingsDialog open={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default DashboardLayout;
