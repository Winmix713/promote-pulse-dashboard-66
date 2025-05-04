
import React, { useState } from "react";
import { Calendar, ChevronDown, FileText, Grid, Home, Package, ShoppingBag, Users, Menu, X } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, hasDropdown = false }) => {
  return (
    <div
      className={`flex items-center space-x-3 rounded-md px-3 py-2.5 transition-colors ${
        active
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground cursor-pointer"
      }`}
    >
      <span className={active ? "text-primary" : "text-muted-foreground"}>{icon}</span>
      <span>{label}</span>
      {hasDropdown && <ChevronDown size={16} className="ml-auto text-muted-foreground" />}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <button 
        className="md:hidden fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg"
        onClick={toggleMobileSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Mobile sidebar backdrop */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileSidebar}
        ></div>
      )}

      {/* Sidebar content - desktop always visible, mobile conditional */}
      <div 
        className={`
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
          fixed md:sticky top-0 left-0 h-screen z-50 md:z-0
          w-64 border-r bg-card transition-transform duration-300 ease-in-out
        `}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-md">
            <span className="font-bold">C2</span>
          </div>
          <button 
            className="md:hidden text-muted-foreground"
            onClick={toggleMobileSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <div className="py-4">
          <div className="px-3 mb-2 text-xs font-medium text-muted-foreground">MENU</div>
          <nav className="px-2 py-2">
            <div className="space-y-1">
              <NavItem icon={<Home size={18} />} label="Home" />
              <NavItem icon={<Grid size={18} />} label="Dashboard" active />
              <NavItem icon={<Package size={18} />} label="Products" hasDropdown />
              <NavItem icon={<Users size={18} />} label="Customers" hasDropdown />
              <NavItem icon={<ShoppingBag size={18} />} label="Shop" />
              <NavItem icon={<FileText size={18} />} label="Income" hasDropdown />
              <NavItem icon={<Calendar size={18} />} label="Promote" />
            </div>
          </nav>

          <div className="mt-6 px-3 mb-2 text-xs font-medium text-muted-foreground">ANALYTICS</div>
          <nav className="px-2 py-2">
            <div className="space-y-1">
              <NavItem icon={<Grid size={18} />} label="Reports" />
              <NavItem icon={<Users size={18} />} label="Traffic" />
              <NavItem icon={<FileText size={18} />} label="Conversions" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
