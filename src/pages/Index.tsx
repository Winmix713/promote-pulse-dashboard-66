
import React, { useState } from "react";
import { Package, Users } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Sidebar from "@/components/promote/Sidebar";
import PopularProducts from "@/components/dashboard/PopularProducts";
import Header from "@/components/dashboard/Header";
import MetricCard from "@/components/dashboard/MetricCard";
import CustomersList from "@/components/dashboard/CustomersList";
import Comments from "@/components/dashboard/Comments";

const Index = () => {
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
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Dashboard content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left section - Overview */}
            <div className="lg:col-span-2 space-y-6">
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
                  <div className="pt-3 px-3 pb-4">
                    <div className="h-[316px] max-xl:h-[254px]">
                      <ChartContainer
                        config={{ 
                          Green: { color: "#00A656" },
                        }}
                        className="h-full"
                      >
                        <AreaChart data={chartData} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#00A656" stopOpacity={0.15} />
                              <stop offset="95%" stopColor="#00A656" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid vertical={false} strokeDasharray="5 7" stroke="var(--border)" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} 
                            tickMargin={8}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                            tickFormatter={(value) => value === 0 ? `$0` : `${value / 1000}k`}
                            tickMargin={8}
                          />
                          <Tooltip 
                            cursor={false}
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-card p-2 border shadow-sm rounded-md">
                                    <p className="text-sm font-medium">{`$${payload[0].value.toLocaleString()}`}</p>
                                    <p className="text-xs text-muted-foreground">{payload[0].payload.name}</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#00A656" 
                            strokeWidth={3}
                            fill="url(#colorGreen)" 
                          />
                        </AreaChart>
                      </ChartContainer>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-card border rounded-lg shadow-sm">
                <Comments />
              </div>
            </div>
            
            {/* Right section - Popular products */}
            <div className="lg:col-span-1">
              <PopularProducts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
