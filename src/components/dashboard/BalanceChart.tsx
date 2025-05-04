
import React from "react";
import { ChartContainer } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface BalanceChartProps {
  chartData: Array<{
    name: string;
    value: number;
  }>;
}

const BalanceChart: React.FC<BalanceChartProps> = ({ chartData }) => {
  return (
    <div className="pt-3 px-3 pb-4">
      {/* Chart Legend */}
      <div className="flex items-center justify-end mb-4 gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00A656]"></div>
          <span className="text-sm text-muted-foreground">This Month</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <span className="text-sm text-muted-foreground">Last Month</span>
        </div>
      </div>

      <div className="h-[316px] max-xl:h-[254px]">
        <ChartContainer
          config={{ 
            Green: { color: "#00A656" },
            Gray: { color: "#d4d4d8" },
          }}
          className="h-full"
        >
          <AreaChart data={chartData} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00A656" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#00A656" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorGray" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d4d4d8" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#d4d4d8" stopOpacity={0} />
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
            {/* Dummy second area for the legend demonstration */}
            <Area 
              type="monotone" 
              dataKey="lastMonth" 
              stroke="#d4d4d8" 
              strokeWidth={2}
              fill="url(#colorGray)" 
              style={{ opacity: 0.7 }}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
