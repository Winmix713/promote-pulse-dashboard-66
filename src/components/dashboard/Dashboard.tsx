
import React from "react";
import Overview from "@/components/dashboard/Overview";
import Comments from "@/components/dashboard/Comments";
import PopularProducts from "@/components/dashboard/PopularProducts";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left section - Overview */}
      <div className="lg:col-span-2 space-y-6">
        <Overview />
        
        <div className="bg-card border rounded-lg shadow-sm">
          <Comments />
        </div>
      </div>
      
      {/* Right section - Popular products */}
      <div className="lg:col-span-1">
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
