
import React from "react";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import PopularProducts from "@/components/dashboard/PopularProducts";
import Comments from "@/components/dashboard/Comments";

const DashboardOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left section - Overview and Activity Timeline */}
      <div className="lg:col-span-2 space-y-6">
        <DashboardSummary />
        
        <div className="bg-card border rounded-lg shadow-sm">
          <div className="p-5 border-b">
            <h2 className="font-medium text-lg">Product Stats</h2>
          </div>
          <div className="p-5">
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold">$256k</h3>
              <div className="ml-2 badge-up inline-flex items-center gap-1 px-2 py-1 rounded-lg">
                <span className="text-sm">+14.2%</span>
              </div>
            </div>
            <div className="h-[250px] mt-6">
              {/* Bar chart placeholder */}
              <div className="h-full w-full bg-muted/20 rounded-md flex items-center justify-center">
                Bar chart will appear here
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border rounded-lg shadow-sm">
          <ActivityTimeline />
        </div>

        <div className="bg-card border rounded-lg shadow-sm">
          <Comments />
        </div>
      </div>
      
      {/* Right section - Popular products */}
      <div className="lg:col-span-1 space-y-6">
        <PopularProducts />
        
        <div className="bg-card border rounded-lg shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-lg">Opinion</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-3 rounded-lg bg-purple-100/50 dark:bg-purple-900/20">
              <div className="size-10 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center mb-2">
                <span className="text-lg">😀</span>
              </div>
              <span className="text-xs text-muted-foreground">Great</span>
              <span className="text-sm font-medium">24%</span>
            </div>
            
            <div className="flex flex-col items-center p-3 rounded-lg bg-amber-100/50 dark:bg-amber-900/20">
              <div className="size-10 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center mb-2">
                <span className="text-lg">🙂</span>
              </div>
              <span className="text-xs text-muted-foreground">Good</span>
              <span className="text-sm font-medium">36%</span>
            </div>
            
            <div className="flex flex-col items-center p-3 rounded-lg bg-green-100/50 dark:bg-green-900/20">
              <div className="size-10 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center mb-2">
                <span className="text-lg">😐</span>
              </div>
              <span className="text-xs text-muted-foreground">Neutral</span>
              <span className="text-sm font-medium">18%</span>
            </div>
            
            <div className="flex flex-col items-center p-3 rounded-lg bg-blue-100/50 dark:bg-blue-900/20">
              <div className="size-10 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center mb-2">
                <span className="text-lg">😔</span>
              </div>
              <span className="text-xs text-muted-foreground">Bad</span>
              <span className="text-sm font-medium">22%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
