
import React from "react";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import PopularProducts from "@/components/dashboard/PopularProducts";

const DashboardOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left section - Overview and Activity Timeline */}
      <div className="lg:col-span-2 space-y-6">
        <DashboardSummary />
        
        <div className="bg-card border rounded-lg shadow-sm">
          <ActivityTimeline />
        </div>
      </div>
      
      {/* Right section - Popular products */}
      <div className="lg:col-span-1">
        <PopularProducts />
      </div>
    </div>
  );
};

export default DashboardOverview;
