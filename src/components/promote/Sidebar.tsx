
import { Calendar, ChevronDown, FileText, Grid, Package, ShoppingBag, Users } from "lucide-react";
import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, hasDropdown = false }) => {
  return (
    <div
      className={`flex items-center space-x-2 rounded-md px-3 py-2 ${
        active
          ? "bg-gray-100 font-medium"
          : "text-gray-700 hover:bg-gray-50 cursor-pointer"
      }`}
    >
      <span className="text-gray-500">{icon}</span>
      <span>{label}</span>
      {hasDropdown && <ChevronDown size={16} className="ml-auto text-gray-400" />}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block w-64 border-r bg-white">
      <div className="p-4">
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">+</span>
        </div>
      </div>

      <nav className="px-3 py-2">
        <div className="space-y-1">
          <NavItem icon={<Grid size={18} />} label="Dashboard" />
          <NavItem icon={<Package size={18} />} label="Products" hasDropdown />
          <NavItem icon={<Users size={18} />} label="Customers" hasDropdown />
          <NavItem icon={<ShoppingBag size={18} />} label="Shop" />
          <NavItem icon={<FileText size={18} />} label="Income" hasDropdown />
          <NavItem icon={<Calendar size={18} />} label="Promote" active />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
