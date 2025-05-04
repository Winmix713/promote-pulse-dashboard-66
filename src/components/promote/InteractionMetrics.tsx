
import { FileText, Link2, Mail, Video } from "lucide-react";
import React from "react";

interface InteractionRowProps {
  icon: React.ReactNode;
  label: string;
  count: string;
  percentage: number;
}

const InteractionRow: React.FC<InteractionRowProps> = ({
  icon,
  label,
  count,
  percentage,
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-3 text-gray-500">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>{label}</span>
            <span className="text-sm text-gray-500">({count})</span>
          </div>
          <span className="font-medium">{percentage}%</span>
        </div>
        <div className="mt-1 h-2 w-full rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gray-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const InteractionMetrics: React.FC = () => {
  return (
    <div className="space-y-4">
      <InteractionRow
        icon={<FileText size={16} />}
        label="Posts"
        count="1,235"
        percentage={65.3}
      />
      <InteractionRow
        icon={<Video size={16} />}
        label="Videos"
        count="80"
        percentage={55.2}
      />
      <InteractionRow
        icon={<Mail size={16} />}
        label="Newsletter"
        count="136"
        percentage={50.1}
      />
      <InteractionRow
        icon={<Link2 size={16} />}
        label="Social"
        count="566"
        percentage={40.2}
      />
    </div>
  );
};

export default InteractionMetrics;
