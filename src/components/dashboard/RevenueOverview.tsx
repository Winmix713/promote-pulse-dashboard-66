
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4000 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
  { name: "Jul", revenue: 7000 },
  { name: "Aug", revenue: 8000 },
  { name: "Sep", revenue: 7500 },
  { name: "Oct", revenue: 9000 },
  { name: "Nov", revenue: 8500 },
  { name: "Dec", revenue: 10000 },
];

export const RevenueOverview = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Revenue</p>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl font-bold">$45,231.89</CardTitle>
              <div className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-full">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                20.1%
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <select className="bg-muted/60 text-sm border border-border rounded-md px-2 py-1">
              <option value="year">Year</option>
              <option value="month">Month</option>
              <option value="week">Week</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="#888888" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              formatter={(value: any) => [`$${value}`, 'Revenue']}
              contentStyle={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--border)',
                background: 'var(--card)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#4f46e5" 
              strokeWidth={2} 
              dot={{
                r: 0,
                strokeWidth: 2,
                fill: "#4f46e5"
              }}
              activeDot={{
                r: 6,
                stroke: "#4f46e5",
                strokeWidth: 2,
                fill: "var(--background)"
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
