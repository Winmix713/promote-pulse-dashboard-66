
import React from "react";
import { ArrowDown, ArrowUp, LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
  isActive?: boolean;
  onClick?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  icon, 
  title, 
  value, 
  change, 
  isActive = false, 
  onClick 
}) => {
  const isPositive = change > 0;
  
  return (
    <div 
      className={`flex-1 px-6 py-6 rounded-xl cursor-pointer transition-all ${
        isActive 
          ? "bg-white dark:bg-sidebar-accent shadow-md" 
          : "hover:bg-background/80"
      }`}
      onClick={onClick}
    >
      <div className={`flex items-center gap-3 mb-2 text-base font-medium ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`}>
        <span className={isActive ? "text-foreground" : "text-muted-foreground"}>{icon}</span>
        <div>{title}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold">{value}</div>
        <div>
          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${
            isPositive 
              ? "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400" 
              : "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          }`}>
            {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span className="text-sm">{Math.abs(change)}%</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">vs last month</div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
