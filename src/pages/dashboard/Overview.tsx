
import React from "react";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import { StatCards } from "@/components/dashboard/StatCards";
import { RevenueOverview } from "@/components/dashboard/RevenueOverview";
import { SalesDistributionChart } from "@/components/dashboard/SalesDistributionChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {/* We'll implement this later */}
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      {item}
                    </div>
                    <div>
                      <p className="text-sm font-medium">New order placed #{item}0234</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Top Customers */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Top Customers</CardTitle>
            </CardHeader>
            <CardContent>
              {/* We'll implement this later */}
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div>
                        <p className="text-sm font-medium">Customer {item}</p>
                        <p className="text-xs text-muted-foreground">{item}00+ orders</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium">${item * 1000}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
