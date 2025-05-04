
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Info } from "lucide-react";

// Sample data for the pie chart
const salesData = [
  { name: "Electronics", value: 35, color: "#4338ca" },
  { name: "Clothing", value: 25, color: "#0891b2" },
  { name: "Home", value: 20, color: "#059669" },
  { name: "Beauty", value: 15, color: "#d97706" },
  { name: "Other", value: 5, color: "#9333ea" }
];

const total = salesData.reduce((sum, item) => sum + item.value, 0);

export const SalesDistributionChart: React.FC = () => {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-medium">Sales Distribution</CardTitle>
          <p className="text-sm text-muted-foreground">By product category</p>
        </div>
        <Info className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      
      <CardContent className="pt-0 px-2 pb-2 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
              labelLine={false}
            >
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value} (${((value / total) * 100).toFixed(1)}%)`, 'Sales']}
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                padding: '8px 12px'
              }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
