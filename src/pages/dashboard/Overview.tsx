
import React from "react";
import { StatCards } from "@/components/dashboard/StatCards";
import { RevenueOverview } from "@/components/dashboard/RevenueOverview";
import { SalesDistributionChart } from "@/components/dashboard/SalesDistributionChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { TopCustomers } from "@/components/dashboard/TopCustomers";

const OverviewPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stat cards at the top */}
      <StatCards />
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <RevenueOverview />
        </div>
        
        {/* Sales Distribution */}
        <div className="lg:col-span-1">
          <SalesDistributionChart />
        </div>
        
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <ActivityList />
        </div>
        
        {/* Top Customers */}
        <div className="lg:col-span-1">
          <TopCustomers />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
