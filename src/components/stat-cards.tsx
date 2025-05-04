
import React from 'react';
import { Card, CardBody } from "@/components/ui/card";
import { DollarSign, Users, ShoppingBag, Activity, TrendingUp, TrendingDown } from "lucide-react";

export const StatCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change={20.1}
        isPositive={true}
        subtitle="from last month"
        icon={<DollarSign size={18} />}
        color="primary"
      />
      <StatCard
        title="New Customers"
        value="1,293"
        change={-36.8}
        isPositive={false}
        subtitle="from last month"
        icon={<Users size={18} />}
        color="success"
      />
      <StatCard
        title="Sales"
        value="12,234"
        change={10.3}
        isPositive={true}
        subtitle="from last month"
        icon={<ShoppingBag size={18} />}
        color="warning"
      />
      <StatCard
        title="Active Users"
        value="573"
        change={8.4}
        isPositive={true}
        subtitle="from last month"
        icon={<Activity size={18} />}
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

const StatCard = ({
  title,
  value,
  change,
  isPositive,
  subtitle,
  icon,
  color
}: StatCardProps) => {
  const getColorClass = () => {
    switch (color) {
      case "primary": return "bg-blue-50 text-blue-500";
      case "success": return "bg-green-50 text-green-500";
      case "warning": return "bg-yellow-50 text-yellow-500";
      case "danger": return "bg-red-50 text-red-500";
      default: return "bg-blue-50 text-blue-500";
    }
  };

  return (
    <Card className="border-none shadow-sm">
      <CardBody>
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
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
          <div className="text-xs text-gray-400">{subtitle}</div>
        </div>
      </CardBody>
    </Card>
  );
};
