
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Users, ShoppingBag, Activity, TrendingUp, TrendingDown } from "lucide-react";

export const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change={20.1}
        isPositive={true}
        subtitle="from last month"
        icon={<DollarSign className="h-5 w-5" />}
        color="primary"
      />
      <StatCard
        title="New Customers"
        value="1,293"
        change={-36.8}
        isPositive={false}
        subtitle="from last month"
        icon={<Users className="h-5 w-5" />}
        color="success"
      />
      <StatCard
        title="Sales"
        value="12,234"
        change={10.3}
        isPositive={true}
        subtitle="from last month"
        icon={<ShoppingBag className="h-5 w-5" />}
        color="warning"
      />
      <StatCard
        title="Active Users"
        value="573"
        change={8.4}
        isPositive={true}
        subtitle="from last month"
        icon={<Activity className="h-5 w-5" />}
        color="danger"
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
  subtitle: string;
  icon: React.ReactNode;
  color: "primary" | "success" | "warning" | "danger";
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  subtitle,
  icon,
  color
}) => {
  const getColorClass = () => {
    switch (color) {
      case "primary": return "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400";
      case "success": return "bg-green-50 text-green-500 dark:bg-green-900/20 dark:text-green-400";
      case "warning": return "bg-amber-50 text-amber-500 dark:bg-amber-900/20 dark:text-amber-400";
      case "danger": return "bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400";
      default: return "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400";
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className={`rounded-full p-2.5 ${getColorClass()}`}>
            {icon}
          </div>
        </div>
        
        <div className="text-2xl font-bold mb-2">{value}</div>
        
        <div className="flex items-center gap-1.5">
          <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            <span>{Math.abs(change)}%</span>
          </div>
          <div className="text-xs text-muted-foreground">{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  );
};
