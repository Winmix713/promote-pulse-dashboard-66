
import React, { useState } from "react";
import { Package, Users } from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import CustomersList from "@/components/dashboard/CustomersList";
import BalanceChart from "@/components/dashboard/BalanceChart";

const Overview: React.FC = () => {
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

export default Overview;
