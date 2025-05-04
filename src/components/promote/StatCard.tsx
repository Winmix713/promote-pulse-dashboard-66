
import { ArrowDown, ArrowUp, CircleHelp } from "lucide-react";
import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
  period: string;
  newCustomers: number;
  reached: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  change,
  isPositive,
  period,
  newCustomers,
  reached,
}) => {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-md bg-gray-100 p-2">{icon}</div>
        <CircleHelp size={18} className="text-gray-300" />
      </div>
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold">{value}</span>
          <div
            className={`flex items-center space-x-1 text-xs ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
            <span>{change}%</span>
          </div>
          <span className="text-xs text-gray-500">{period}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div>
          <div className="text-gray-500">New customers</div>
          <div className="flex items-center space-x-1 text-green-500">
            <ArrowUp size={12} />
            <span>{newCustomers}%</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-gray-500">Product reached</div>
          <div>{reached}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
