
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  FileText, 
  Home, 
  BellRing, 
  Settings,
  Users,
  ShoppingBag,
  CreditCard,
  HelpCircle
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4">
      <nav className="space-y-6 pt-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2 px-2">OVERVIEW</p>
          <NavItem to="/dashboard/overview" icon={<Home className="w-4 h-4" />} label="Dashboard" />
          <NavItem to="/dashboard/analytics" icon={<BarChart3 className="w-4 h-4" />} label="Analytics" />
          <NavItem to="/dashboard/reports" icon={<FileText className="w-4 h-4" />} label="Reports" />
          <NavItem to="/dashboard/notifications" icon={<BellRing className="w-4 h-4" />} label="Notifications" />
        </div>
        
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2 px-2">MANAGEMENT</p>
          <NavItem to="/dashboard/customers" icon={<Users className="w-4 h-4" />} label="Customers" />
          <NavItem to="/dashboard/products" icon={<ShoppingBag className="w-4 h-4" />} label="Products" />
          <NavItem to="/dashboard/billing" icon={<CreditCard className="w-4 h-4" />} label="Billing" />
        </div>
      </nav>

      <div className="mt-auto border-t pt-4">
        <NavItem to="/dashboard/settings" icon={<Settings className="w-4 h-4" />} label="Settings" />
        <NavItem to="/dashboard/help" icon={<HelpCircle className="w-4 h-4" />} label="Help & Support" />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 text-sm rounded-md ${
          isActive
            ? "bg-muted text-primary font-medium"
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;
