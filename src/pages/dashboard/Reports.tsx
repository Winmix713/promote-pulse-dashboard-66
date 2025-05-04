
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RevenueOverview } from "@/components/dashboard/RevenueOverview";
import { SalesDistributionChart } from "@/components/dashboard/SalesDistributionChart";

const ReportsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Revenue Overview Chart */}
      <div className="lg:col-span-2">
        <RevenueOverview />
      </div>
      
      {/* Sales Distribution Chart */}
      <div className="lg:col-span-1">
        <SalesDistributionChart />
      </div>
      
      {/* Additional stats */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
            Sales performance chart will appear here
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Product Analytics</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
            Product analytics chart will appear here
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportsPage;
