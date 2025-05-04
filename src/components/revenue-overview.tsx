
import React from 'react';
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ChevronDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', revenue: 7.2 },
  { month: 'Feb', revenue: 5.3 },
  { month: 'Mar', revenue: 6.8 },
  { month: 'Apr', revenue: 8.9 },
  { month: 'May', revenue: 7.6 },
  { month: 'Jun', revenue: 10.2 },
  { month: 'Jul', revenue: 6.5 },
  { month: 'Aug', revenue: 7.8 },
  { month: 'Sep', revenue: 9.1 },
  { month: 'Oct', revenue: 8.3 },
  { month: 'Nov', revenue: 9.7 },
  { month: 'Dec', revenue: 12.4 },
];

// Create a modified dataset where June has a special property
const dataWithHighlight = data.map((item, index) => ({
  ...item,
  isHighlighted: index === 5 // June is at index 5
}));

export const RevenueOverview = () => {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="flex justify-between items-center px-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold">$256k</h3>
            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 flex gap-1 items-center">
              <TrendingUp className="w-3 h-3" />
              4.3%
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">Product sales</p>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          className="gap-2"
        >
          This Year
          <ChevronDown className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardBody className="px-6 py-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dataWithHighlight}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f4" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#a1a1aa' }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#a1a1aa' }}
              tickFormatter={(value) => `$${value}m`}
            />
            <Tooltip
              formatter={(value) => [`$${value}m`, 'Revenue']}
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                padding: '8px 12px'
              }}
            />
            {/* Regular bars for all months */}
            <Bar 
              dataKey="revenue" 
              fill="#E0E0E0" 
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
            {/* Highlighted bar for June only */}
            <Bar 
              dataKey={(data) => data.isHighlighted ? data.revenue : 0}
              fill="#00a656" 
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};
