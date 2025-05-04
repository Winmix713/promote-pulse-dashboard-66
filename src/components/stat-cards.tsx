
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, ShoppingCart, CreditCard, ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  iconClass: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, iconClass }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-full ${iconClass}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="flex items-center text-xs text-muted-foreground mt-1">
            {change.isPositive ? (
              <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
            ) : (
              <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
            )}
            <span className={change.isPositive ? 'text-green-500' : 'text-red-500'}>
              {change.value.toFixed(1)}%
            </span>
            <span className="ml-1">from last month</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export const StatCards: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="New Customers"
        value="2,345"
        change={{ value: 12.5, isPositive: true }}
        icon={<Users className="h-4 w-4 text-white" />}
        iconClass="bg-blue-500 bg-opacity-80"
      />
      <StatCard
        title="Total Sales"
        value="$45,233"
        change={{ value: 8.2, isPositive: true }}
        icon={<ShoppingCart className="h-4 w-4 text-white" />}
        iconClass="bg-green-500 bg-opacity-80"
      />
      <StatCard
        title="Pending Orders"
        value="5,347"
        change={{ value: 3.1, isPositive: false }}
        icon={<ShoppingCart className="h-4 w-4 text-white" />}
        iconClass="bg-yellow-500 bg-opacity-80"
      />
      <StatCard
        title="Revenue"
        value="$125,430"
        change={{ value: 14.2, isPositive: true }}
        icon={<CreditCard className="h-4 w-4 text-white" />}
        iconClass="bg-purple-500 bg-opacity-80"
      />
    </div>
  );
};
