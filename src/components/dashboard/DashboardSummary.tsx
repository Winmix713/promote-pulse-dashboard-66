
import React, { useState } from "react";
import { Package, Users, ShoppingBag, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import BalanceChart from "@/components/dashboard/BalanceChart";
import CustomersList from "@/components/dashboard/CustomersList";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  icon,
  isActive = false,
  onClick 
}) => {
  const isPositive = change > 0;
  
  return (
    <button 
      className={`flex-1 px-6 py-6 rounded-xl cursor-pointer transition-all ${
        isActive 
          ? "bg-white dark:bg-sidebar-accent shadow-sm" 
          : "hover:bg-background/80"
      }`}
      onClick={onClick}
    >
      <div className={`flex items-center gap-3 mb-2 text-base font-medium ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`}>
        <span className={`${isActive ? "text-foreground" : "text-muted-foreground"} bg-muted/50 p-1.5 rounded-md`}>
          {icon}
        </span>
        <div>{title}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold">{value}</div>
        <div>
          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${
            isPositive 
              ? "badge-up" 
              : "badge-down"
          }`}>
            {isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span className="text-sm">{Math.abs(change)}%</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">vs last month</div>
        </div>
      </div>
    </button>
  );
};

const DashboardSummary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customers' | 'balance'>('balance');
  
  // Sample data for the chart
  const chartData = [
    { name: "Apr", value: 0 },
    { name: "May", value: 32000 },
    { name: "Jun", value: 2000 },
    { name: "Jul", value: 20000 },
    { name: "Aug", value: 60000 },
    { name: "Sep", value: 15000 },
  ];

  return (
    <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
      <h2 className="text-lg font-medium p-5 border-b">Overview</h2>
      
      <div className="p-1.5 bg-muted/50">
        <div className="flex rounded-lg bg-muted/70">
          {/* Customers Tab */}
          <MetricCard 
            icon={<Users className="h-5 w-5" />}
            title="Customers"
            value="1,293"
            change={-36.8}
            isActive={activeTab === 'customers'}
            onClick={() => setActiveTab('customers')}
          />
          
          {/* Balance Tab */}
          <MetricCard
            icon={<Package className="h-5 w-5" />}
            title="Balance"
            value="$256k"
            change={36.8}
            isActive={activeTab === 'balance'}
            onClick={() => setActiveTab('balance')}
          />
          
          {/* Additional metrics */}
          <MetricCard
            icon={<ShoppingBag className="h-5 w-5" />}
            title="Sales"
            value="12,234"
            change={10.3}
            isActive={false}
            onClick={() => {}}
          />
          
          <MetricCard
            icon={<TrendingUp className="h-5 w-5" />}
            title="Active Users"
            value="573"
            change={8.4}
            isActive={false}
            onClick={() => {}}
          />
        </div>
      </div>
      
      {activeTab === 'customers' ? (
        <CustomersList />
      ) : (
        <BalanceChart chartData={chartData} />
      )}
    </div>
  );
};

export default DashboardSummary;
