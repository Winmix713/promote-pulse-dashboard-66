
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, ShoppingBag, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change={20.1}
        isPositive={true}
        icon={<DollarSign className="h-4 w-4" />}
        color="blue"
      />
      <StatCard
        title="Subscriptions"
        value="2,350"
        change={10.5}
        isPositive={true}
        icon={<Users className="h-4 w-4" />}
        color="green"
      />
      <StatCard
        title="Sales"
        value="12,234"
        change={-5.2}
        isPositive={false}
        icon={<ShoppingBag className="h-4 w-4" />}
        color="orange"
      />
      <StatCard
        title="Active Now"
        value="573"
        change={8.4}
        isPositive={true}
        icon={<Activity className="h-4 w-4" />}
        color="purple"
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
  icon: React.ReactNode;
  color: "blue" | "green" | "orange" | "purple";
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
  color
}) => {
  const getBgColor = () => {
    switch (color) {
      case "blue": return "bg-blue-500/10 text-blue-500";
      case "green": return "bg-emerald-500/10 text-emerald-500";
      case "orange": return "bg-amber-500/10 text-amber-500";
      case "purple": return "bg-violet-500/10 text-violet-500";
      default: return "bg-blue-500/10 text-blue-500";
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <div className="flex items-center mt-1 text-xs">
              {isPositive ? (
                <div className="flex text-emerald-600">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {change}%
                </div>
              ) : (
                <div className="flex text-rose-600">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  {Math.abs(change)}%
                </div>
              )}
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </div>
          <div className={`rounded-full p-2 ${getBgColor()}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
