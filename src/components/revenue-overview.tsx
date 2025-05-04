
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
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
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#4f46e5" 
              strokeWidth={2} 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
