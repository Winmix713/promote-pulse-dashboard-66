
import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingBag, 
  FileText, 
  Calendar, 
  Settings, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
  collapsed?: boolean;
}

export const Sidebar = ({ collapsed = false }) => {
  return (
    <div className={`${collapsed ? 'w-[80px]' : 'w-[280px]'} border-r border-border h-screen sticky top-0 flex flex-col transition-all duration-300`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">C</span>
          </div>
          {!collapsed && <span className="font-bold text-lg">CORE 2.0</span>}
        </div>

        <nav className="py-2">
          <div className="mb-8">
            <p className={`text-xs font-medium text-muted-foreground uppercase px-3 mb-4 tracking-wider ${collapsed ? 'text-center' : ''}`}>
              {collapsed ? 'MENU' : 'MAIN MENU'}
            </p>
            <div className="space-y-1">
              <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active collapsed={collapsed} />
              <NavItem icon={<Package className="w-5 h-5" />} label="Products" collapsed={collapsed} />
              <NavItem icon={<Users className="w-5 h-5" />} label="Customers" collapsed={collapsed} />
              <NavItem icon={<ShoppingBag className="w-5 h-5" />} label="Shop" collapsed={collapsed} />
              <NavItem icon={<FileText className="w-5 h-5" />} label="Income" collapsed={collapsed} />
              <NavItem icon={<Calendar className="w-5 h-5" />} label="Promote" collapsed={collapsed} />
            </div>
          </div>
          
          <div className="mb-8">
            <p className={`text-xs font-medium text-muted-foreground uppercase px-3 mb-4 tracking-wider ${collapsed ? 'text-center' : ''}`}>
              {collapsed ? 'SETS' : 'SETTINGS'}
            </p>
            <div className="space-y-1">
              <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" collapsed={collapsed} />
              <NavItem icon={<HelpCircle className="w-5 h-5" />} label="Help & Support" collapsed={collapsed} />
            </div>
          </div>
        </nav>
      </div>
      
      {!collapsed && (
        <div className="mt-auto px-6 py-6">
          <div className="rounded-xl bg-gradient-to-br from-primary/50 to-primary p-4 text-primary-foreground">
            <h4 className="font-medium mb-2">Need help?</h4>
            <p className="text-xs opacity-80 mb-3">Check our documentation</p>
            <Button size="sm" variant="secondary" className="w-full font-medium">
              Documentation
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ icon, label, active = false, hasDropdown = false, collapsed = false }: NavItemProps) => {
  const buttonContent = (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={`justify-${collapsed ? 'center' : 'start'} w-full rounded-xl h-11 ${collapsed ? 'px-0' : 'px-4'} ${active ? "font-medium" : ""}`}
      asChild
    >
      <div className="flex items-center gap-3">
        <div className={active ? "text-primary" : "text-muted-foreground"}>
          {icon}
        </div>
        {!collapsed && (
          <>
            <span>{label}</span>
            {hasDropdown && <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground" />}
          </>
        )}
      </div>
    </Button>
  );

  return collapsed ? (
    <Tooltip>
      <TooltipTrigger asChild>
        {buttonContent}
      </TooltipTrigger>
      <TooltipContent side="right">
        {label}
      </TooltipContent>
    </Tooltip>
  ) : (
    buttonContent
  );
};
