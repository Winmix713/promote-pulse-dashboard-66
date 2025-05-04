import React from "react";
import { StatCards } from "@/components/dashboard/StatCards";
import { RevenueOverview } from "@/components/dashboard/RevenueOverview";
import { SalesDistributionChart } from "@/components/dashboard/SalesDistributionChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* We've moved the StatCards to the OverviewPage component */}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main charts */}
        <div className="lg:col-span-2 space-y-6">
          <RevenueOverview />
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-3 pb-3 border-b last:border-0">
                    <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                      {item}
                    </div>
                    <div>
                      <p className="text-sm font-medium">Transaction #{item}24355 was successful</p>
                      <p className="text-xs text-muted-foreground">{item} hour ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <SalesDistributionChart />
          
          <Card>
            <CardHeader>
              <CardTitle>Popular Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between gap-4 pb-3 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-md bg-muted"></div>
                      <div>
                        <p className="text-sm font-medium">Product {item}</p>
                        <p className="text-xs text-muted-foreground">${item * 49.99}</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      {item * 12} sales
                    </div>
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

export default DashboardOverview;
